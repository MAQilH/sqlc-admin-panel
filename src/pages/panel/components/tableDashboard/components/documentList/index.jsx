import { Grid2 } from "@mui/material";
import DocumentItem from "../documentItem";
import { useSelector } from "react-redux";


export default function DocumentList() {
  const documents = useSelector(store => store.table.tableDocuments)

  return (
    <Grid2
      sx={{
        width: '100%',
        height: '100%',
        p: '5px',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'start',
        overflowY: 'scroll'
      }}
      container
      spacing={1}
      alignItems="flex-start"
    >
      {
        documents.map((document, index) => {
          return (
            <Grid2
              size={{
                'xs': 12,
                'sm': 6,
                'md': 4,
                'lg': 3,
                'xl': 2
              }}
              key={index}
            >
              <DocumentItem data={document}/>
            </Grid2>
          )
        })
      }
    </Grid2>
  )
}