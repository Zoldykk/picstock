import React from 'react'

export default function Pagination(props) {
    const pages = [...Array(props.totalPages).keys()].map(page => page + 1)
    
    return (
        <div>
            <div>
                {props.loading ? <p></p> : <>
                    <ul className="pagination pagination-lg">
                        {pages.map(page =>(
                            <li className="page-item cursor-pointer" key={page}>
                                <a className="page-link" onClick={() => props.handlePaginationClick(page)}>{page}</a>
                            </li> 
                        ))}   
                    </ul>
                </>} 
            </div>
        </div>
    )
}
