import { SERVER_URL } from "../config";

export async function getTableNames() {
  const result = await fetch(`${SERVER_URL}/tableNames`);
  const data = await result.json()
  console.log(data)
  return data
}

export async function getTableDocuments(tableName, pageNumber, documentPerPage) {
  const params = {
    table_name: tableName,
    page_number: pageNumber,
    document_per_page: documentPerPage
  }

  const queryString = new URLSearchParams(params).toString()

  const result = await fetch(`${SERVER_URL}/tableDocuments?${queryString}`)
  const resultData = await result.json()

  console.log(resultData)
  return resultData
}

export async function getTableInfo(tableName) {
  console.log(tableName)
  const queryString = new URLSearchParams({table_name: tableName}).toString()

  const result = await fetch(`${SERVER_URL}/tableInfo?${queryString}`)

  if(!result.ok) {
    throw Error(
      result.message
    )
  }
  
  const resultData = await result.json()
  
  const tableInfo = {
    tableName: resultData['table_name'],
    tableSize: resultData['table_size'],
    columns: resultData['columns']
  }
  

  console.log('table information: ', tableInfo)
  return tableInfo
}