import { useDispatch, useSelector } from "react-redux";
import { dialogAction } from "../../../../../../store/dialog/slice";
import DocumentDialog from "../../../../../../components/DocumentDialog";


export default function DocumentEditDialog() {
  const dispatch = useDispatch()
  const {open, data, documentSchema} = useSelector(state => {
    return {
      data: state.dialog.documentEditData, 
      open: state.dialog.editDocumentIsOpen,
      documentSchema: state.table.currentTableInfo.columns,
    }
  })

  return (
    <DocumentDialog
      data={data}
      documentSchema={documentSchema}
      open={open}
      title='Edit'
      onClose={() => dispatch(dialogAction.closeEditDocumentDialog())}
      onSave={() => {}}
      onDelete={() => {}}
    />
  ) 
}