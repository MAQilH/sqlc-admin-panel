import { useDispatch, useSelector } from "react-redux";
import { dialogAction } from "../../../../../store/dialog/slice";
import DocumentDialog from "../../../../../components/DocumentDialog";
import { deleteDocumentRequest, editDocumentRequest } from "../../../../../services/requests";
import { useSnackbar } from "notistack";
import { tableAction } from "../../../../../store/table/slice";

export default function EditDocumentDialog() {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const {open, data, documentSchema, tableName} = useSelector(state => {
    return {
      data: state.dialog.documentEditData, 
      open: state.dialog.editDocumentIsOpen,
      documentSchema: state.table.currentTableInfo.columns,
      tableName: state.table.currentTableInfo.tableName
    }
  })

  const cleanNullData = (data) => {
    const result = {}
    Object.entries(data).forEach(([key, value]) => {
      if(value || value === 0) result[key] = value
    })
    return result
  }

  const normalizeData = data => {
    data = cleanNullData(data)
    const stringifiedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, String(value)])
    )
    return stringifiedData
  }

  const handleSave = async (updatedData) => {
    try{
      const result = await editDocumentRequest(tableName, normalizeData(data), updatedData)
      enqueueSnackbar(result.message, { variant: 'success' })
      dispatch(dialogAction.closeEditDocumentDialog())
      
    } catch (error) {
      console.error(error)
      enqueueSnackbar(error.message, { variant: 'error' }) 
    }
  }

  const hanelDelete = async () => {
    try {
      const result = await deleteDocumentRequest(tableName, normalizeData(data))
      enqueueSnackbar(result.message, { variant: 'success' })

      console.log(data)
      dispatch(tableAction.removeDocument(data))
      dispatch(dialogAction.closeEditDocumentDialog())
    } catch(error) {
      console.error(error)
      enqueueSnackbar(error.message, {variant: 'error' })
    }
  }

  return (
    <DocumentDialog
      data={data}
      documentSchema={documentSchema}
      open={open}
      title='Edit'
      onClose={() => dispatch(dialogAction.closeEditDocumentDialog())}
      onSave={handleSave}
      onDelete={hanelDelete}
    />
  ) 
}