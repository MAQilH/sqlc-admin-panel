export default {
  setTablesName(state, action) {
    state.tablesName = action.payload || ''
  },
  setTableDocuments(state, action) {
    state.tableDocuments = action.payload || []
  },
  setCurrentTableInfo(state, action) {
    state.currentTableInfo = action.payload || {}
  },
  removeDocument(state, action) {
    const removedDocuement = action.payload
    state.tableDocuments = state.tableDocuments.filter(document => {
      return document !== removedDocuement
    })
  }
}