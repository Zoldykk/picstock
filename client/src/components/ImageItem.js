import Nav from './Nav'
import  { useState, useEffect } from 'react'
import './styles/imageItem.css';

export default function ImageItem(props) {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true)
        fetch(`/api/images/${props.match.params.id}`)
        .then(response =>{ return response.json() })
        .then(data => {
            setLoading(false)
            setImage(data)
        })
    },[])

    const saveToLocalStorage = (e) =>{
        let imageId = [];
        imageId = imageId.concat(JSON.parse(localStorage.getItem('id')) || []);
        imageId.push(e.target.getAttribute("dataid"))
        localStorage.setItem('id', JSON.stringify(imageId))
        e.target.classList.add('active')
        
    }

    return (
        <div>
            <Nav />
            <div className="container my-4">
                <div className="image-container">
                    { loading ? <p>Loading...</p> : <> 
                        <div className="image-preview col-12">
                            <div className="image-options mb-2 d-flex justify-content-between align-items-center">
                                <p>Category: {image.category}</p>   
                                <div className="row">
                                    <a href={image.imageName}   download target="_blank" rel="noreferrer"><button className='btn btn-success'><i class="fas fa-download"></i> Free Download</button></a>
                                    <i onClick={saveToLocalStorage}  dataid={image.imageName} className="fas fa-heart btn btn-secondary fav-btn"></i>                              
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <img alt='' src={`/images/${image.imageName}`}/>
                            </div>
                        </div>    
                    </>}
                </div>
            </div>
        </div>
    )
}
