import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ROOT from "../pages/root/root.jsx"
import DiscoverBar from "../pages/discover/discover";
import Discover from "../pages/discover/index/index";
import Toplist from "../pages/discover/toplist/toplist";
import PlayList from "../pages/discover/playlist/index";

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
                    <Route path="/playlist" component={DiscoverBar} />
                </Switch>
                <Switch>
                    <Route exact path="/" component={Discover} />
                    <Route exact path="/discover" component={Discover} />
                    <Route path="/playlist" component={PlayList} />
                    <Route path="/discover/toplist" component={Toplist} />
                    <Route path="/discover/playlist" component={PlayList} />
                </Switch>
            </div>
        </Router>
    );
}
export default ROUTER;
