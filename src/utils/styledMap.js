export const styledMap = (propertyName, stylesSet) => (props) => {
  if (propertyName && typeof propertyName === 'string') {
    const value = props[propertyName];
    return stylesSet[value];
  }
  throw new Error('Wrong arguments');
};
