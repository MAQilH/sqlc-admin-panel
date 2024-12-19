
export default {
  setTablesName(state, action) {
    state.tablesName = action.payload || ''
  },
  setTableDocuments(state, action) {
    state.tableDocuments = action.payload || []
  },
  setCurrentTableInfo(state, action) {
    state.currentTableInfo = action.payload || {}
  }
}