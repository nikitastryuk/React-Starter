import { act, renderHook } from '@testing-library/react-hooks';

import { useAsync } from 'hooks/useAsync';

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

const defaultState = {
  data: null,
  error: null,
  isLoading: false,
  run: expect.any(Function),
  setData: expect.any(Function),
};

describe('useAsync', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  it('should call run with a promise which resolves', async () => {
    const { promise, resolve } = deferred();
    const { result } = renderHook(() => useAsync());
    expect(result.current).toEqual(defaultState);
    let p;
    act(() => {
      p = result.current.run(promise);
    });
    expect(result.current).toEqual({ ...defaultState, isLoading: true });
    // To ensure it's exactly the same thing (not a copy)
    const resolvedValue = Symbol('Resolved value');
    await act(async () => {
      resolve(resolvedValue);
      await p;
    });
    expect(result.current).toEqual({
      ...defaultState,
      data: resolvedValue,
    });
  });

  it('should call run with a promise which rejects', async () => {
    const { promise, reject } = deferred();
    const { result } = renderHook(() => useAsync());
    expect(result.current).toEqual(defaultState);
    let p;
    act(() => {
      p = result.current.run(promise);
    });
    expect(result.current).toEqual({ ...defaultState, isLoading: true });
    const rejectedValue = Symbol('Rejected value');
    await act(async () => {
      reject(rejectedValue);
      await p.catch(() => {
        /* ignore erorr */
      });
    });
    expect(result.current).toEqual({ ...defaultState, error: rejectedValue });
  });

  it('should specify an initial state', () => {
    const mockedData = Symbol('Resolved value');
    const customInitialState = { isLoading: true, data: mockedData };
    const { result } = renderHook(() => useAsync(customInitialState));
    expect(result.current).toEqual({
      ...defaultState,
      ...customInitialState,
    });
  });

  it('should set the data', () => {
    const mockData = Symbol('Resolved value');
    const { result } = renderHook(() => useAsync());
    act(() => {
      result.current.setData(mockData);
    });
    expect(result.current).toEqual({
      ...defaultState,
      data: mockData,
    });
  });

  it('should not update the state if the component is unmounted while pending', async () => {
    const { promise, resolve } = deferred();
    const { result, unmount } = renderHook(() => useAsync());
    let p;
    act(() => {
      p = result.current.run(promise);
    });
    unmount();
    await act(async () => {
      resolve();
      await p;
    });
    // To ensure there was no console.error with "Can't perform React state update on unmounted component"
    expect(console.error).not.toHaveBeenCalled();
  });

  it('should throw an early error if data passed into the "run" is not a promise', async () => {
    const { result } = renderHook(() => useAsync());
    await expect(() => result.current.run()).rejects.toMatchInlineSnapshot(
      `[Error: The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?]`,
    );
  });
});
