import { TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { getTableDocuments } from "../../../../../../../services/requests";
import { useDispatch, useSelector } from "react-redux";
import { tableAction } from "../../../../../../../store/table/slice";

export default function DocumentPagination() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { tableName } = useParams()
  const tableSize = useSelector(state => state.table.currentTableInfo.tableSize) || 0
  
  const [page, setPage] = useState(0)
  const [documentPerPage, setDocumentPerPage] = useState(10)
  
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setPage(parseInt(params.get('page_number') || 0))
    setDocumentPerPage(parseInt(params.get('document_per_page') || 10))
  }, [location.search])

  useEffect(() => {
    (async () => {
      dispatch(
        tableAction.setTableDocuments(
          await getTableDocuments(tableName, page, documentPerPage)
        )
      )
    })()
  }, [page, documentPerPage, dispatch, tableName])

  const updateQuery = (pageNumber, documentPerPage) => {
    const params = new URLSearchParams(location.search)
    if(pageNumber != undefined) params.set('page_number', pageNumber)
    if(documentPerPage != undefined) documentPerPage && params.set('document_per_page', documentPerPage)
    navigate(`?${params.toString()}`)
  }

  const handleChangePage = (event, newPage) => {
    updateQuery(newPage, undefined)
  }

  const handleChangeDocumentPerPage = (event) => {
    updateQuery(0, parseInt(event.target.value, 10))
  }

  return (
    <TablePagination
      component="div"
      count={tableSize}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={documentPerPage}
      onRowsPerPageChange={handleChangeDocumentPerPage}
      sx={{
        color: 'white',
        '& .MuiSvgIcon-root': {
          color: 'white'
        }
      }}
    />
  )
}