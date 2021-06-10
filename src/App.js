import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          {/* 2 ways of defining routes */}
          <Route path='/welcome' component={Welcome} />
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId' component={ProductDetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
