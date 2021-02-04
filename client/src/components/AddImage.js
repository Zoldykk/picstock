import React, { useState } from 'react'
import Nav from './Nav'


export default function AddImage() {
    const [file, setFile] = useState('')
    const [category, setCategory] = useState('')
    const [errors, setErrors] = useState(false)

    const handleSubmit = e =>{
        if(file === '' || category === ''){
            e.preventDefault()
            setErrors(true)
        }
    }

    return (
        <div>
            <Nav />

            <div className="container my-4">
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit} action="http://localhost:3000/api/images" method='POST' className='col-12 d-flex flex-column' encType="multipart/form-data">
                        { errors && 
                            <div className="d-flex justify-content-center">
                                <div className="alert alert-primary col-md-6 col-sm-6" role="alert">
                                    Please fill in all fields
                                </div> 
                            </div>
                        }
                        <div className='form-group d-flex justify-content-center flex-column align-items-center'>
                            <div className="d-flex col-md-6 col-sm-6 p-0"><label className=''>Select an Image File</label></div>
                            <input type="file" value={file} onChange={(e) => setFile(e.target.value)} className="form-control col-md-6 col-sm-6" id="customFile" name='imageName'/>
                        </div>
                        <div className="form-group  d-flex justify-content-center flex-column align-items-center">
                            <div className='d-flex col-md-6 col-sm-6 p-0'><label className="my-2">Category</label></div>
                            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control col-md-6 col-sm-6"   placeholder="e.g.  Flower, Wallpapers, Happy, Love ..." name='category'/>
                        </div>
                        <div className="form-group  d-flex justify-content-center flex-column align-items-center">
                            <button type='submit' className='btn btn-success col-md-6 col-sm-6 font-weight-bold'>Post</button>
                        </div>
                    </form>
                </div> 
            </div>

        </div>
    )
}
