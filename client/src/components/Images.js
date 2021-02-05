import IMAGE_PER_PAGE from '../utils/globalVar'
import './styles/Images.css';
import Masonry from 'react-masonry-css'

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

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        768: 2,
        500: 1
    }
    
    return (
        <div className='Images my-5'> 
            <div className="image-gallery">
                { props.loading ? <p>Loading...</p> : <> 
                    <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                        {selectedImages.map(image =>(
                            <div key={image._id} className="img-item">
                                <a className='img' href={`/images/${image._id}`}><img  alt='img' src={`/images/${image.imageName}`}/></a>
                                <div className="options">
                                    <i onClick={saveToLocalStorage} dataid={image.imageName} className="fas fa-heart like-btn"></i>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </>}
            </div>
        </div>
    )
}
