import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Beranda from './pages';
import Pertanyaan from './pages/pertanyaan';
import SigninPage from './pages/login';
import FormTanya from './pages/formTanya';
import Jawaban from './pages/jawaban';
import Profile from './pages/profile';
import Jawab from './pages/jawab';
import home from './pages/homeAdmin';
import registerUser from './components/RegisterUser';
import suggestion from './pages/kritik'
import Faq1 from './pages/faq1';
import Faq2 from './pages/faq2';
import Faq3 from './pages/faq3';
import Faq4 from './pages/faq4';
import Faq5 from './pages/faq5';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Beranda} exact />
        <Route path='/pertanyaan' component={Pertanyaan} exact={true}/>
        <Route path='/login' component={SigninPage}/>
        <Route path='/buatpertanyaan' component={FormTanya}/>
        <Route path='/jawaban/:id' component={Jawaban}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/jawab/:id' component={Jawab}/>
        <Route path='/home' component={home}/>
        <Route path='/registerUser' component={registerUser}/>
        <Route path='/suggestion' component={suggestion}/>
        <Route path='/faq1' component={Faq1}/>
        <Route path='/faq2' component={Faq2}/>
        <Route path='/faq3' component={Faq3}/>
        <Route path='/faq4' component={Faq4}/>
        <Route path='/faq5' component={Faq5}/>
      </Switch>
    </Router>
  );
}

export default App;
