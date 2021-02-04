import Home from './components/Home'
import imageItem from './components/ImageItem'
import addImage from './components/AddImage'
import Favorites from './components/Favorites'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Home}/>
        <Route path='/images/:id' component={imageItem}/>
        <Route path='/addimage' component={addImage}/>
        <Route path='/favorites' component={Favorites}/>
      </div>
    </Router>
  );
}

export default App;
