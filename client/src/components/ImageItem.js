import Nav from './Nav'
import './styles/imageItem.css';
import useFetch from "../hooks/useFetch"

export default function ImageItem(props) {
    const {data, isLoading} = useFetch(`/api/images/${props.match.params.id}`)

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
                    { isLoading ? <p>Loading...</p> : <> 
                        <div className="image-preview col-12">
                            <div className="image-options mb-2 d-flex justify-content-between align-items-center">
                                <p>Category: {data.category}</p>   
                                <div className="row">
                                    <a href={data.imageName}   download target="_blank" rel="noreferrer"><button className='btn btn-success'><i className="fas fa-download"></i> Free Download</button></a>
                                    <i onClick={saveToLocalStorage}  dataid={data.imageName} className="fas fa-heart btn btn-secondary fav-btn"></i>                              
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <img alt='' src={`/images/${data.imageName}`}/>
                            </div>
                        </div>    
                    </>}
                </div>
            </div>
        </div>
    )
}
