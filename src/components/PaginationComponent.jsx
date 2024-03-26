import ReactPaginate from 'react-paginate';
// ... other imports

function PaginationComponent({ pageCount, pageIndex, gotoPage }) {
  const itemsPerPage = 4; // Define how many items there are per page
  const totalItems = pageCount * itemsPerPage; // Calculate the total number of items

  // Helper function to render the range (e.g., "1-4 of 10")
  const renderItemRange = () => {
    const firstItemIndex = pageIndex * itemsPerPage + 1;
    const lastItemIndex = Math.min((pageIndex + 1) * itemsPerPage, totalItems);
    return `${firstItemIndex}-${lastItemIndex} of ${totalItems}`;
  };

  return (
    <div className="pagination-container">
      <span className="page-range">{renderItemRange()}</span>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        marginPagesDisplayed={0}
        pageRangeDisplayed={0}
        onPageChange={({ selected }) => gotoPage(selected)}
        containerClassName={'pagination'}
        previousClassName={'prev-button'}
        nextClassName={'next-button'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default PaginationComponent;
