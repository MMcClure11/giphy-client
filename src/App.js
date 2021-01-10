import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GiphListContainer from './containers/GiphListContainer'
import UserFavorites from './components/UserFavorites'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/users/:id' component={ UserFavorites } />
          <Route exact path='/' component={ GiphListContainer }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;