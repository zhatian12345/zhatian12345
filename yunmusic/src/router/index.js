import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ROOT from "../pages/root/root.jsx"
import DiscoverBar from "../pages/discover/discover";
import Discover from "../pages/discover/index/index";
import Toplist from "../pages/discover/toplist/toplist";

function ROUTER() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={ROOT} />
                </Switch>
                <Switch>
                    <Route exact path="/" component={DiscoverBar} />
                    <Route path="/discover" component={DiscoverBar} />
                </Switch>
                <Switch>
                    <Route exact path="/" component={Discover} />
                    <Route exact path="/discover" component={Discover} />
                    <Route path="/discover/toplist" component={Toplist} />
                </Switch>
            </div>
        </Router>
    );
}
export default ROUTER;