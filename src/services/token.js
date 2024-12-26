const AUTH_TOKEN_KEY = 'JWT'

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(newToken) {
  localStorage.setItem(AUTH_TOKEN_KEY, newToken)
}

export function removeAuthToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY)
}