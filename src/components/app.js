import { withBookstoreService } from './hoc';
import { Route } from 'react-router-dom';
import {Cart, Details, Home} from './pages';

const App = ({ bookstoreService }) => {
  return (
    <div>
      <Route path="/"
             exact
             component={Home}/>
      <Route path="/books/:id" component={Details}/>
      <Route path="/cart" component={Cart}/>
    </div>);
}

export default withBookstoreService()(App);
