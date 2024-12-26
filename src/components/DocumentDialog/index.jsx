import { Box, Dialog, Slide } from "@mui/material";
import React from "react";
import DialogHeader from "./components/DialogHeader";
import DocumentFieldList from "./components/DocumentFieldList";
import { Form } from "react-router";
import { getTextFieldTypeWithColumnType } from "../../utils/postgresDatabase";
import dayjs from "dayjs";
import { validateDate } from "@mui/x-date-pickers";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DocumentDialog({
  open,
  data,
  documentSchema,
  title,
  onClose,
  onSave,
  onDelete
}) {
  const normaliseFieldValue = (data) => {
    const result = {}
    Object.entries(documentSchema).map(([key, schema]) => {
      const inputType = getTextFieldTypeWithColumnType(schema['data_type'])
      const value = data[key]
      if(inputType === 'date' || inputType === 'datetime-local'){
        console.log(typeof value)
        result[key] = dayjs(value).format("YYYY-MM-DDTHH:mm:ssZ")
      } else if(inputType === 'checkbox') {
        result[key] = String(value === 'on')
      } else {
        result[key] = value
      }
    })
    return result
  }

  const cleanNullData = (data) => {
    const result = {}
    Object.entries(data).forEach(([key, value]) => {
      if(value || value === 0) result[key] = value
    })
    return result
  }

  const normalize = (data) => {
    data = normaliseFieldValue(data)
    data = cleanNullData(data)
    return data
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    data = normalize(data)
    onSave(data)
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={onClose}
    > 
      <Form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: '40vw',
            minWidth: '300px',
            maxWidth: '600px'
          }}
        >
          <DialogHeader 
            onClose={onClose}
            onSave={onSave}
            onDelete={onDelete}
            title={title}
          />
          {data && <DocumentFieldList data={data} documentSchema={documentSchema} />}
        </Box>
      </Form>
    </Dialog>
  )
}