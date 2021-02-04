import React, { useState } from 'react'

export default function Search(props) {
    const [searchValue, setSearchValue] = useState('')

    const getSearchValue = (e) =>{
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.getSearchvalue(searchValue)
    }
    return (
            <div className="Search">
                <form onSubmit={handleSubmit} className="col-12 d-flex justify-content-center mt-4" >
                    <div className="md-form col-12" >
                        <div className="input-group justify-content-center">
                            <input onChange={getSearchValue} type="text" className="form-control col-12 col-md-5 min-width-460-md" placeholder="Search for free photos ..." />
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
