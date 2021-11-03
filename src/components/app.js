import { Route, Switch } from 'react-router-dom';
import { Cart, Details, Home } from './pages';
import { Header } from './shared';

const App = () => {
  return (
    <main role="main" className="container">
      <Header numItems={2}/>
      <Switch>
        <Route path="/"
               exact
               component={Home}/>
        <Route path="/books/:id" component={Details}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </main>);
}

export default App;
