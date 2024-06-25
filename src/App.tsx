import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import { Link, Route, Routes } from 'react-router-dom';
import AboutMe from './containers/AboutMe/AboutMe';
import Portfolio from './containers/Portfolio/Portfolio';
import Desk from './containers/Desk/Desk';

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="game" element={<Desk />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h1 className={'mt-5 text-danger'}>Not found!</h1>
                <Link to="/" className={'btn btn-danger'}>
                  Go back!
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
