import get from 'lodash.get';

export const styledMap = (propertyName, stylesSet) => (props) => {
  if (propertyName && typeof propertyName === 'string') {
    const value = get(props, propertyName);
    return get(stylesSet, value);
  }
  throw new Error('Wrong arguments');
};
