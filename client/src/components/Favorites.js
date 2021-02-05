import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import './styles/Favorites.css';


export default function Favorites() {
    const [isEmpty, setIsEmpty] = useState(false);
    const [favImages, setFavImages] = useState([]);
    let results = [];


    useEffect(() =>{
        if(localStorage.getItem('id') === '[]'){
            setIsEmpty(true)
        } else{
            const storedImages = JSON.parse(localStorage.getItem('id'))
            storedImages.map(id =>{
                return results.push(id)
            }) 
            setFavImages(results) 
        }
    }, [])  


    const removeItem = e =>{
        let storedImages = JSON.parse(localStorage.getItem("id"));
        const itemToRemove = e.target.getAttribute('data-id');
        storedImages.splice(itemToRemove, 1)
        localStorage.setItem('id', JSON.stringify(storedImages));
        setFavImages(storedImages)
    }
    

    return (
        <div>
            <Nav />
            { isEmpty && 
                <div className="empty-message">
                    <button className=""><i className="fas fa-heart"></i></button>
                    <h1>Like your favorite images for later use.</h1> 
                </div>  
            }
    
            <div className="image-gallery container my-5">
                {favImages.map((image, index) =>(
                    <div key={image} className="img-wrapper">
                        <button data-id={index} onClick={removeItem}  className="remove-btn btn btn-secondary"><i data-id={index} dataid={image.imageName} className="far fa-times"></i></button>
                        <a target="_blank" rel="noreferrer" href={`/images/${image}`}><img alt='' className='img' src={`/images/${image}`} alt=""/></a>
                    </div>  
                ))}
            </div>
        </div>
    )
}
