/**
 * 
 * @param {string} type type of the table column
 */
export function getTextFieldTypeWithColumnType(type) {
  switch (type.toLowerCase()) {
    case 'character varying':
    case 'varchar':
    case 'text':
      return 'text';
    case 'integer':
    case 'int':
    case 'bigint':
    case 'smallint':
      return 'number';
    case 'boolean':
      return 'checkbox';
    case 'date':
      return 'date';
    case 'timestamp':
    case 'timestamp without time zone':
    case 'timestamp with time zone':
      return 'datetime-local';
    default:
      return 'text';
  }
}