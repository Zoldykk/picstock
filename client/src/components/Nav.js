

export default function Nav(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <div className="container">
                    <div className="row">
                        <a className="navbar-brand m-2" href="/">PicStock</a>                      
                    </div>
                    
                    <div className="row">
                        <a href='/addimage'><button className="btn btn-secondary my-2 my-sm-0"><i className="fas fa-upload"></i></button></a>  
                        <a href='/favorites'><button className="btn btn-secondary m-2 my-2 my-sm-0"><i className="fas fa-heart"></i></button></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
