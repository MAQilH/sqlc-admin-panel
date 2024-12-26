import { useDispatch, useSelector } from "react-redux"
import { dialogAction } from "../../../../../store/dialog/slice";
import DocumentDialog from "../../../../../components/DocumentDialog";
import { createNewDocumentRequest } from "../../../../../services/requests";
import { useSnackbar } from "notistack";

export default function NewDocumentDialog() {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const {open, documentSchema, tableName} = useSelector(state => {
    return {
      open: state.dialog.newDocumentIsOpen,
      documentSchema: state.table.currentTableInfo.columns,
      tableName: state.table.currentTableInfo.tableName
    }
  })

  const handleSave = async (documentData) => {
    try{
      const result = await createNewDocumentRequest(tableName, documentData)
      enqueueSnackbar(result.message, { variant: 'success' })
      dispatch(dialogAction.closeNewDocumentDialog())
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' }) 
    }
  }

  return (
    <DocumentDialog 
      data={{}}
      documentSchema={documentSchema}
      open={open}
      title='New'
      onClose={() => dispatch(dialogAction.closeNewDocumentDialog())}
      onSave={handleSave}
    />
  )
}