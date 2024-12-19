import { useDispatch, useSelector } from "react-redux"
import { dialogAction } from "../../../../../../store/dialog/slice";
import DocumentDialog from "../../../../../../components/DocumentDialog";

export default function NewDocumentDialog() {
  const dispatch = useDispatch()
  const {open, documentSchema} = useSelector(state => {
    return {
      open: state.dialog.newDocumentIsOpen,
      documentSchema: state.table.currentTableInfo.columns,
    }
  })

  return (
    <DocumentDialog 
      data={{}}
      documentSchema={documentSchema}
      open={open}
      title='New'
      onClose={() => dispatch(dialogAction.closeNewDocumentDialog())}
      onSave={() => {}}
    />
  )
}