import React, { Fragment } from 'react'
import usePagination from './usePagination'

export const Pagination = ({data}) => {
  // pagination example
  let pagination = usePagination(data, 2)
  const {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage
  } = pagination;
  let pages = Array.from(Array(Math.ceil(data.length / maxPage)), (x, index) => index+1)
  // 

  return (
    <Fragment>
      <h4>Page {currentPage} of {maxPage} results</h4>
      <div>{currentData().map(item => 
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      )}</div>
      <li onClick={() => prev()}>Prev</li>
      {pages.map(page => <li key={page} onClick={() => jump(page)}>{page}</li>)}
      <li onClick={() => next()}>Next</li>
    </Fragment>
  )
}