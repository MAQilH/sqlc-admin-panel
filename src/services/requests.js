import { SERVER_URL } from "../config";
import { getAuthToken } from "./token";

async function sendRequest(url, data, method="POST") {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }  
  }
  if (method !== 'GET' && data) {
    options.body = JSON.stringify(data)
  }

  const token = getAuthToken()
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`
  }

  const result = await fetch(`${SERVER_URL}${url}`, options)

  console.log(`result of calling ${url}:`, result)

  if (result.status === 401) {
    window.location.href = '/auth/login';
    throw new Error("Your token was expired!")
  }

  if(!result.ok) {
    const errorText = await result.text();
    throw new Error(errorText || 'An error occurred while processing the request.');
  }

  const resultData = await result.json()
  return resultData
}

export async function loginRequest(username, password) {
  return sendRequest('/login', {
    'username': username,
    'password': password
  })
} 

export async function getTableNamesRequest() {
  return await sendRequest('/tableNames', {}, 'GET');
}

export async function getTableDocumentsRequest(tableName, pageNumber, documentPerPage) {
  const params = {
    table_name: tableName,
    page_number: pageNumber,
    document_per_page: documentPerPage
  }

  const queryString = new URLSearchParams(params).toString()

  return await sendRequest(`/tableDocuments?${queryString}`, {}, 'GET')
}

export async function getTableInfoRequest(tableName) {
  const queryString = new URLSearchParams({table_name: tableName}).toString()
  
  const resultData = await sendRequest(`/tableInfo?${queryString}`, {}, 'GET')

  const tableInfo = {
    tableName: resultData['table_name'],
    tableSize: resultData['table_size'],
    columns: resultData['columns']
  }
  return tableInfo
}

export async function createNewDocumentRequest(tableName, documentData) {
  return sendRequest('/createDocument', { 
    'table_name': tableName,
    'document_data': documentData
  })
}

export async function editDocumentRequest(tableName, prevDocument, updatedDocument) {  
  return sendRequest('/editDocument', {
    'table_name': tableName,
    'prev_document': prevDocument,
    'updated_document': updatedDocument
  })
}


export async function deleteDocumentRequest(tableName, documentData) {
  return sendRequest('/deleteDocument', {
    'table_name': tableName,
    'document_data': documentData
  }, 'DELETE')
}

export async function dropTableRequest(tableName) {
  return sendRequest('/dropTable', {
    'table_name': tableName
  }, 'DELETE')
} 

export async function registerRequest(
  username, 
  password,
  telegramID,
  email
) {
  return sendRequest('/register', {
    'username': username,
    'password': password,
    'telegram_id': telegramID,
    'email': email 
  })
}

export async function verifyTokenRequest(token) {
  return sendRequest('/verifyToken', {
    'token': token
  })
}