import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import './App.css'
import ROOT from "./pages/root/root.jsx"
import Discover from "./pages/discover/index/index";
import Toplist from "./pages/discover/toplist/toplist";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route title='1231' path="/home" component={Discover} />
          <Route path="/" component={ROOT} />
        </Switch>
        <Switch>
          <Redirect path="/" to="/discover" exact></Redirect>
          <Route exact path="/discover" component={Discover} />
        </Switch>
        <Switch>
        <Route path="/discover/toplist" component={Toplist} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
