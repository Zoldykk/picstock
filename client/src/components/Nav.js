import {Link} from 'react-router-dom'

export default function Nav(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <div className="container">
                    <div className="row">
                        <Link className="navbar-brand m-2" to="/">PicStock</Link>                      
                    </div>
                    
                    <div className="row">
                        <Link to='/addimage'><button className="btn btn-secondary my-2 my-sm-0"><i className="fas fa-upload"></i></button></Link>  
                        <Link to='/favorites'><button className="btn btn-secondary m-2 my-2 my-sm-0"><i className="fas fa-heart"></i></button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
