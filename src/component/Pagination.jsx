import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const Pagination = ({data}) => {
  const [pageCount, setPageCount]=useState(0)

 const getPage =  (page) => {
   
    return async()=> {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=${page}`);
        console.log(data)
        
    }
  

 
};

 useEffect(()=>{
  setPageCount(100)
 },[])



  const handlePageClick=(data)=>{
   getPage(data.selected +1)
  }
  return (
    <>
    
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="previous"
      renderOnZeroPageCount={null}
      containerClassName='pagination justify-content-center align-items-center py-3'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      
    />
  </>
  )
}

export default Pagination