import Home from './pages/HomePage'
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './GlobalStyled';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Home/>
    </Router>
  );
}

export default App;
