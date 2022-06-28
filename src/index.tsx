import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// service worker imports
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// component imports
import App from './App';
import Profile from './components/navigation/Profile';
import Settings from './components/navigation/Settings';
import Mission from './components/navigation/Mission';
import Home from './components/navigation/Home';
import Layout from './components/navigation/Layout';
import AuthLayout from './components/auth/AuthLayout';
import UserDetails from './components/auth/UserDetails';
import Authentication from './components/auth/Authentication';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* the App component contains no html elements, its just for initializing the Realm connection and providing the contexts */}
        <Route path="/" element={<App />}>
          {/* Login and Register need another layout than the actual app */}
          <Route element={<AuthLayout />}>
            {/* /user is just for realm testing */}
            <Route path="user" element={<UserDetails />} />
            <Route path="auth" element={<Authentication />} />
            {/* <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} /> */}
          </Route>

          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mission" element={<Mission />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* <Route path="mission/:missionId" element={<Mission />} />
        <Route path="mission/:missionId/edit" element={<EditMission />} />
        <Route path="mission/create" element={<CreateMission />} /> */}

          {/* <Route path="about" element={<Draw />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
