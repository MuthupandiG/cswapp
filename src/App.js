import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/login/login.js';
import Home from './pages/home/home.js';
import StaticData from './pages/staticData/static-data.js';
import DynamicData from './pages/dynamicData/dynamic-data.js';
import UserProfileInfo from './components/profile/user-profile.js';
import WildCardPage from './pages/wildCard/wild-card.js';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} >
            <Route index element={<UserProfileInfo />} />
            <Route path="staticdata" element={<StaticData />} />
            <Route path="dynamicdata" element={<DynamicData />} />
          </Route>
          <Route path="*" element={<WildCardPage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
