import IMAGE_PER_PAGE from '../utils/globalVar'
import './styles/Images.css';


export default function Images(props) {
    const startIndex = ( props.page -1 ) * IMAGE_PER_PAGE;
    const selectedImages = props.images.slice(startIndex, startIndex + IMAGE_PER_PAGE)


    const saveToLocalStorage = (e) =>{
        let imageId = [];
        imageId = imageId.concat(JSON.parse(localStorage.getItem('id')) || []);
        imageId.push(e.target.getAttribute("dataid"))
        localStorage.setItem('id', JSON.stringify(imageId))
        e.target.classList.add('active')
    }
    
    return (
        <div className='Images my-5'>
            { props.searchErorr && 
                    <div className="empty-message">
                        <h1>No images found with this query</h1> 
                    </div>  
            }
            <div className="image-gallery">
                    { props.loading ? <p>Loading...</p> : <> 
                        {selectedImages.map(image =>(
                            <div key={image._id} className="img-item">
                                <a className='img' href={`/images/${image._id}`}><img  alt='img' src={`/images/${image.imageName}`}/></a>
                                <div className="options">
                                    <i onClick={saveToLocalStorage} dataid={image.imageName} className="fas fa-heart like-btn"></i>
                                </div>
                            </div>
                        ))}
                    </>}    
            </div>  
        </div>
    )
}
