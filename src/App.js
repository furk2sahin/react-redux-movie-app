import logo from './logo.svg';
import './App.css';

import MoviesPage from './components/pages/MoviesPage';

import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to="movies">Movies</Link>
        </p>
        <Route path='/movies' component={MoviesPage}></Route>
      </header>
    </div>
  );
}

export default App;
