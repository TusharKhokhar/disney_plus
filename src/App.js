import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Router from './router/router';

function App() {
  const { pathname } = useLocation()
  return (
    <>
      {pathname !== '/' ? <Header /> : null}
      <Router />
    </>
  );
}

export default App;
