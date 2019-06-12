import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import { BrowserRouter, Route, Switch } from 'inferno-router';

import appStore from 'store';

import Home from 'pages/Home';
import One from 'pages/One';
import Two from 'pages/Two';
import TopBar from 'components/TopBar';
import Layout from 'components/Layout';

const InfernoBase = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <Layout>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

const app = document.createElement('div');
document.body.appendChild(app);

render(<InfernoBase />, app);
