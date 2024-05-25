
import './App.css'
import './styles/tic-tac-toe.css'
import './styles/game.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home'
import Header from './components/home/Header';

function App() {
  return <>
    <Header />
    <div className="content">
      <Home />
    </div>
  </>
}

export default App
