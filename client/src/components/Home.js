import Nav from '../components/Nav'
import Images from '../components/Images'
import Search from './Search'
import useFetch from "../hooks/useFetch"


export default function Home() {

    const {data: images, setData: setImages, isLoading, setIsLoading,  error, setError} = useFetch('/api/images')
    const fetchSearchquery = (data) =>{
        if(data === ''){
            setImages(images)
            setIsLoading(false)
        }else{
            fetch(`/api/images/search?query=${data}`)
            .then(response =>{
                return response.json();
            }).then(results =>{
                if(results === 'no records found with this query'){
                    setError(true)
                    setImages([])
                }else{
                    setError(false)
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
                    {isLoading ? <h1 className='text-center mt-3'>Loading ... </h1> : <Images error={error} images={images} setImages={setImages} loading={isLoading}/>}
                </div>
            </div>
        </div>
    )
}
