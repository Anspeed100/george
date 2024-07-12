import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Loader from './components/loader';
import Navbar from './components/navbar';


const LandingPage = React.lazy(() => import('./pages/landing'))
const AboutPage = React.lazy(() => import('./pages/about'))
const TakeActionPage = React.lazy(() => import('./pages/take_action'))
const EventsPage = React.lazy(() => import('./pages/events'))
const BreakingPage = React.lazy(() => import('./pages/breaking'))

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
      </Routes>
    </React.Suspense>
  );
}

export default App;
