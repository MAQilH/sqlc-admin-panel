import  { Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { Form } from "react-router";

export default function DocumentFieldList({data, documentSchema}) {
  console.log('data', data)
  return (
    <Stack
      sx={{
        with: '100%',
        p: 2,
        maxHeight: '60vh',
        overflowY: 'scroll'
      }}
      spacing={2}
    >
      {
        Object.entries(documentSchema).map(([columnName, columnSchema]) => {
          return (
            <TextField
              key={columnName}
              name={columnName} 
              id={columnName}
              label={columnName.charAt(0).toUpperCase() + columnName.slice(1)} 
              variant='outlined' 
              type='text' 
              size='small'
              defaultValue={data[columnName]}
              sx={{
                mt: 1,
                width: '100%'
              }}
              required={columnSchema['is_nullable'] === 'NO'}
            />
          )
        })
      }
    </Stack>
  )
}