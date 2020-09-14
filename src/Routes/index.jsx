import React from 'react'; 
import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
} from 'react-router-dom';
import { Home, About, Users } from '../pages';
import routes from './router.config';

const router = (
    <Router>
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/other/about">About</Link>
                </li>
                <li>
                    <Link to="/other/users">Users</Link>
                </li>
            </ul>
            </nav>
            <Switch>
                {/* <Route path="/about" component={About}></Route>
                <Route path="/users" component={Users}></Route>
                <Route exact path="/" component={Home}></Route> */}
                {
                    routes.map((route, key) => (
                        <Route
                            key={key}
                            exact={route.exact}
                            path={route.path}
                            component={(props) => (
                                <route.component {...props} routes={route.routes} />
                            )}
                        ></Route>
                    ))
                }

            </Switch>
        </div>
    </Router>
);

export default router;