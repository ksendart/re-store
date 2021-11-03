import Spinner from './spinner/spinner';
import { withBookstoreService } from './hoc';

const App = ({ bookstoreService }) => {
  return <Spinner />;
}

export default withBookstoreService()(App);
