import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Products from './components/Products';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        {/* 2 ways of defining routes */}
        <Route path='/welcome' component={Welcome} />
        <Route path='/products'>
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
