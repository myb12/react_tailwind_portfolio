import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import Project from "./Components/Project";
import SinglePost from "./Components/SinglePost";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route component={ Home} path ="/" exact/>
        <Route component={ About} path ="/about"/>
        <Route component={ Posts} path ="/posts"/>
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Project} path="/project" />
        
      </Switch>
    </Router>
  );
}

export default App;
