import React, { useState } from 'react'

export default function Search(props) {
    const [searchValue, setSearchValue] = useState('')

    const getSearchValue = (e) =>{
        setSearchValue(e.target.value)
        props.getSearchvalue(searchValue)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.getSearchvalue(searchValue)
    }

    const clearSearch = () => {
        setSearchValue('')
        props.getSearchvalue('')
    }
    return (
            <div className="Search">
                <form onSubmit={handleSubmit} className="col-12 d-flex justify-content-center mt-4" >
                    <div className="md-form col-12" >
                        <div className="input-group justify-content-center">
                            <input value={searchValue} onChange={getSearchValue} type="text" className="form-control col-12 col-md-5 min-width-460-md" placeholder="Search for free photos ..." />
                            <button type="button" onClick={clearSearch} className="btn bg-transparent" style={{marginLeft:'-40px', zIndex: '100'}}>
                                <i className="fa fa-times"></i>
                            </button>
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="submit">
                                <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
    )
}
