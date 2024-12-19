import { Box, Dialog, Slide } from "@mui/material";
import React from "react";
import DialogHeader from "./components/DialogHeader";
import DocumentFieldList from "./components/DocumentFieldList";
import { Form } from "react-router";

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
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={onClose}
    > 
      <Form>
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