import { configureStore } from "@reduxjs/toolkit"
import dialogSlice from "./dialog/slice"
import tableSlice from "./table/slice"

const store = configureStore({
  reducer: {
    dialog: dialogSlice.reducer,
    table: tableSlice.reducer
  }
})

export default store

