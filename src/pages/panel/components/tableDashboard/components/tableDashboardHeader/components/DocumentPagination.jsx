import { TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchTableDocuments } from "../../../../../../../store/table/action";

export default function DocumentPagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch()
  const { tableName } = useParams()
  const tableSize = useSelector(state => state.table.currentTableInfo.tableSize) || 0
  
  const [page, setPage] = useState(-1)
  const [documentPerPage, setDocumentPerPage] = useState(-1)
  const [refreshId, setRefreshId] = useState(-1)
  
  useEffect(() => {
    setPage(parseInt(searchParams.get('page_number') || 0))
    setDocumentPerPage(parseInt(searchParams.get('document_per_page') || 10))
    setRefreshId(parseInt(searchParams.get('refresh_id') || 0))
  }, [searchParams])

  useEffect(() => {
    if(page === -1 || documentPerPage === -1) return
    dispatch(
      fetchTableDocuments(tableName, page, documentPerPage)
    )
  }, [page, documentPerPage, dispatch, tableName, refreshId])

  const updateQuery = (pageNumber, documentPerPage) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    if(pageNumber != undefined) newSearchParams.set('page_number', pageNumber)
    if(documentPerPage != undefined) newSearchParams.set('document_per_page', documentPerPage)
    setSearchParams(newSearchParams)
    // const newSearchParams = new URLSearchParams()
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