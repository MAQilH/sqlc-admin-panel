import { createSlice } from "@reduxjs/toolkit";

import tableReducer from './reducer'

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    tablesName: [],
    tableDocuments: [],
    currentTableInfo: {}
  },
  reducers: tableReducer
})


export const tableAction = tableSlice.actions
export default tableSlice