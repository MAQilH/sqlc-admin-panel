export function normFieldName(fieldName) {
  if (!fieldName) return '';

  let result = fieldName.replace(/[_-]/g, ' ');

  result = result.replace(/([a-z])([A-Z])/g, '$1 $2');

  result = result.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');

  result = result.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  return result;
}