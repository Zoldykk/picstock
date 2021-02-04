import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Images from '../components/Images'
import Pagination from './Pagination'
import Search from './Search'
import IMAGE_PER_PAGE from '../utils/globalVar'

export default function Home() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchError, setSearchError] = useState(false);

    useEffect(() =>{
        setLoading(true)
        fetch('/api/images')
        .then(response =>{ return response.json() })
        .then(data => {
            setLoading(false)
            setImages(data)
            setTotalPages(Math.ceil(data.length / IMAGE_PER_PAGE))
        })
    },[])

    const handlePaginationClick = (page) =>{
        setPage(page)
    }

    const fetchSearchquery = (data) =>{
        if(data === ''){
            setSearchError(true)
            setImages([])
            setPage(0)
            setLoading(false)
        }else{
            fetch(`/api/images/search?query=${data}`)
            .then(response =>{
                return response.json();
            }).then(results =>{
                if(results === 'no records found with this query'){
                    setSearchError(true)
                    setImages([])
                }else{
                    setSearchError(false)
                    setImages(results)
                }
            })
        }
    }

    return (
        <div>
            <div className="App">
                <Nav />
                <div className="container">
                    <Search getSearchvalue={fetchSearchquery}/>
                    <Images searchErorr={searchError} page={page} images={images} loading={loading}/>
                    <Pagination handlePaginationClick={handlePaginationClick} totalPages={totalPages} loading={loading}/>
                </div>
            </div>
        </div>
    )
}
