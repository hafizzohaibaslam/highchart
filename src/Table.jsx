import React, { useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import ReactPaginate from 'react-paginate';
import PaginationComponent from './components/PaginationComponent';

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we use page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 4 }, // Set page size to 10
      },
      usePagination
  );

  // Render the UI for your table
  return (
    <>
      <div className="table-header">
        <h1>Premiership Shirt Sponsor</h1>
        <h2>Current Season</h2>
      </div>
      <table {...getTableProps()} className="your-table-class">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => gotoPage(selected)}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      /> */}
      <PaginationComponent pageCount={pageCount} pageIndex={pageIndex} gotoPage={gotoPage} />
    </>
  );
}


export default Table