import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './router/PrivateRoute';
import Home from './pages/Home';
import Tickets from './pages/Tickets'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/tickets" component={Tickets} />
        <PrivateRoute path="/*" component={() => <div style={{ padding: 30 }}><h2> Page Not Found </h2></div>} />
      </Switch>
    </Router>
  );
}

export default App;