import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import Profile from './components/Profile/Profile.jsx';
import About from './components/About/About.jsx';
import ExperienceList from './components/ExperienceList/ExperienceList.jsx';

import './index.css';



const App = () => {
  return (
    <div className='grid-container'>
      <Profile/>
      <About/>
      <ExperienceList/>

    </div>
  )
}

export default App