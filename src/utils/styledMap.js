export const styledMap = (...args) => (props) => {
  const mapOfStyles = args[args.length - 1];
  if (args[0] && typeof args[0] === 'string') {
    const val = props[args[0]];

    return mapOfStyles[val]
      ? mapOfStyles[val]
      : new Error('Wrong property name is provided');
  }

  return new Error('Property name is required');
};
