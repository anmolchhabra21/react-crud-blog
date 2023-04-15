// import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
// import NameList from './namelist';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{ title }</h1> */}
         <Switch>   {/* takes care that only one component is rendered at one time  */}
          <Route exact path="/">  {/* after the root of our website and the navbar is always gonna show as it is not inseide the switch  
                              Also react will see / as the component of /create so it will assume this to be rendered when hittind /create*/}

            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
// const title = 'welcome to the new blog';
  // const likes = 40;
  // const person = {
  //   name: 'toushi', age : 30
  // };
  // const link = "http://www.googler.com";
  
  {/* <p>Liked { likes } times</p>
        {/* converts all this to a string by react */}

        {/* <p>{person}</p>     booleans and objects are not allowed to be present dynamically with this method */}

        {/* <p>10</p> */}
        {/* <p>{"Hello ninjas "}</p> */}
        {/* <p>{[1,2,3,4,5,5]}</p>  */}

        {/* use curly braces for entering dynamic content */}

        {/* <a href={link}>Google Site</a> 
        dynamic link for the link href
        */}

        {/* <p>{Math.random()*10}</p> */}
