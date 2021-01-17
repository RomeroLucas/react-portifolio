import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header/'
import Main from './components/main'
import MainHome from './pages/home'
import SobreMim from './pages/sobre'
import Trabalhos from './pages/trabalhos'
import Contatos from './pages/contato'



function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Main>
            <Switch>
                <Route path="/sobre-mim" component={SobreMim} />
                <Route path="/trabalhos" component={Trabalhos} />
                <Route path="/contatos" component={Contatos} />
                <Route path="/" component={MainHome} />
            </Switch>
          </Main>
      </Router>
    </div>
  );
}

export default App;
