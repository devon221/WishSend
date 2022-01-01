import {BrowserRouter as Router , Redirect, Route ,Switch} from 'react-router-dom';
import MainNav from './shared/nav/mainNav'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Guide from './shared/pages/Guide'
import fmAnnday from './shared/pages/form-A-day';
import FmBday from './shared/pages/form-bday';
function App() {
  return (
    <div className="App">
      <Router>
      <MainNav/>
      <Switch>
             <Route path="/" exact component={Guide} />
            
             <Route path="/bdays" exact component={FmBday}/>
      </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
