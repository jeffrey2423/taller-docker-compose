import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Index from '../pages/Index';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';

function App() {
  return (
      <BrowserRouter>
      <Layout>
      < Switch >
        <Route exact path="/" component={Index} />
        <Route exact path="/Admin" component={Admin} />
        <Route component={NotFound} />
      </Switch >
      </Layout>
    </BrowserRouter >
  );
}

export default App;
