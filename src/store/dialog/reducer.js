export default {
  openEditDocumentDialog(state) {
    state.editDocumentIsOpen = true
  },
  closeEditDocumentDialog(state) {
    state.editDocumentIsOpen = false
  },
  setDocumentEditData(state, action) {
    state.documentEditData = action.payload
  },
  openNewDocumentDialog(state) {
    state.newDocumentIsOpen = true
  },
  closeNewDocumentDialog(state) {
    state.newDocumentIsOpen = false
  }
}