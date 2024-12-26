import  { Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
import { getTextFieldTypeWithColumnType } from "../../../utils/postgresDatabase";
import { DateTimePicker, LocalizationProvider, renderTimeViewClock } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";
import { normFieldName } from "../../../utils/stringNormalizer";

export default function DocumentFieldList({data, documentSchema}) {
  console.log('data', data)

  const renderInputFieldWithType = (type, columnName, columnSchema) => {
    switch (type) {
      case 'text':
      case 'number':
        return (
          <TextField
            key={columnName}
            name={columnName} 
            id={columnName}
            label={normFieldName(columnName)} 
            variant='outlined' 
            size='small'
            type={getTextFieldTypeWithColumnType(columnSchema['data_type'])}
            defaultValue={data[columnName]}
            sx={{
              mt: 1,
              width: '100%'
            }}
            required={columnSchema['is_nullable'] === 'NO'}
          />
        )
      case 'checkbox':
        return (
          <FormControlLabel 
            control={<Checkbox name={columnName} defaultChecked={data[columnName] == true || data[columnName] === 'true'} />} 
            label={normFieldName(columnName)}
            key={columnName} 
            sx={{
              mt: 1,
              width: '100%'
            }}
          />
        )
        case 'date':
        case 'datetime-local':
          return (
            <LocalizationProvider 
              dateAdapter={AdapterDayjs} 
              key={columnName}
            >
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                  label={normFieldName(columnName)}
                  name={columnName}
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                  defaultValue={dayjs(data[columnName])}
                />
              </DemoContainer>
            </LocalizationProvider>
          )
    }
  }

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
          return renderInputFieldWithType(
            getTextFieldTypeWithColumnType(columnSchema['data_type']),
            columnName,
            columnSchema
          )
        })
      }
    </Stack>
  )
}