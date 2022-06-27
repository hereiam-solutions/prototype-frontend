import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// component imports
import App from './App';
import Profile from './components/navigation/Profile';
import Home from './components/navigation/Home';
import Layout from './components/navigation/Layout';

// service worker imports
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Settings from './components/Settings';
import Mission from './components/navigation/Mission';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* the App component contains no html elements, its just for initializing the Realm connection and providing the contexts */}
        <Route path="/" element={<App />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mission" element={<Mission />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />

            {/* <Route path="mission/:missionId" element={<Mission />} />
        <Route path="mission/:missionId/edit" element={<EditMission />} />
        <Route path="mission/create" element={<CreateMission />} /> */}

            {/* <Route path="about" element={<Draw />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
