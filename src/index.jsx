import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import { BrowserRouter, Route, Switch, Link } from 'inferno-router';

import appStore from 'store';

import Home from 'pages/Home';
import One from 'pages/One';
import Two from 'pages/Two';
import Counter from 'components/Counter';

const InfernoBase = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <Counter />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

const app = document.createElement('div');
document.body.appendChild(app);

render(<InfernoBase />, app);
