import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import RedFooter from './components/red_footer';


const LandingPage = React.lazy(() => import('./pages/landing'))
const AboutPage = React.lazy(() => import('./pages/about'))
const TakeActionPage = React.lazy(() => import('./pages/take_action'))
const EventsPage = React.lazy(() => import('./pages/events'))
const BreakingPage = React.lazy(() => import('./pages/breaking'))
const DonatePage = React.lazy(() => import('./pages/donatePage'))
const TakeActionRegisterForm = React.lazy(() => import('./pages/takeactionRegisterForm'))
const MyManifestoPage = React.lazy(() => import('./pages/myManifestoPage'))
const MySpeechPage = React.lazy(() => import('./pages/mySpeechPage'))

const App = () => {
  return (
    <React.Suspense>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route exact path='/about' element={<AboutPage/>}></Route>
        <Route exact path='/take-action' element={<TakeActionPage/>}></Route>
        <Route exact path='/events' element={<EventsPage/>}></Route>
        <Route exact path='/breakingthe2' element={<BreakingPage/>}></Route>
        <Route exact path='/donate' element={<DonatePage/>}></Route>
        <Route exact path='/register' element={<TakeActionRegisterForm/>}></Route>
        <Route exact path='/mymanifesto' element={<MyManifestoPage/>}></Route>
        <Route exact path='/myspeech' element={<MySpeechPage/>}></Route>
      </Routes>
      <RedFooter />
    </React.Suspense>
  );
}

export default App;
