import { createSlice } from "@reduxjs/toolkit";

import dialogReducers from './reducer'

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    editDocumentIsOpen: false,
    documentEditData: {},
    newDocumentIsOpen: false
  },
  reducers: dialogReducers
})


export const dialogAction = dialogSlice.actions
export default dialogSlice