import { Route } from 'react-router-dom';
import Products from './components/Products';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      {/* 2 ways of defining routes */}
      <Route path='/welcome' component={Welcome} />
      <Route path='/products'>
        <Products />
      </Route>
    </div>
  );
}

export default App;
