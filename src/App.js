import {BrowserRouter as Router , Redirect, Route ,Switch} from 'react-router-dom';
import MainNav from './shared/nav/mainNav'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Guide from './shared/pages/Guide'
import fmAnnday from './shared/pages/form-A-day';
import fmBday from './shared/pages/form-bday';
function App() {
  return (
    <div className="App">
      <Router>
      <MainNav/>
      <Switch>
             <Route path="/" exact component={Guide} />
             <Route path="/ann-day" exact component={fmAnnday}/>
             <Route path="/b-day" exact component={fmBday}/>
      </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
