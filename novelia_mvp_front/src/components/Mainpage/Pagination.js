import React, {useState} from "react";
import Paging from "react-js-pagination";
import './Pagination.css';

const Pagination = () => {

  const [page, setPage] = useState([]);


  return(
    <Paging
      activePage = {page}
      itemsCountPerPage={8}
      totalItemsCount={100}
      pageRangeDisplayed={10}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={setPage}
    />
  );

};

export default Pagination;