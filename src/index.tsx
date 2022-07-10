import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// service worker imports
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// component imports
import App from './App';
import Profile from './components/navigation/withActiveMission/drawContent/Profile';
import Settings from './components/navigation/withActiveMission/drawContent/Settings';
import Dashboard from './components/navigation/withoutActiveMission/drawContent/Dashboard';
import ActiveDashboard from './components/navigation/withActiveMission/drawContent/ActiveDashboard';
import Home from './components/navigation/Placeholder';
import Layout from './components/navigation/Layout';
import About from './components/navigation/About';
import AuthLayout from './components/auth/AuthLayout';
import UserDetails from './components/auth/UserDetails';
import Authentication from './components/auth/Authentication';
import RequireAuth from './components/auth/RequireAuth';
import CreateMapMarker from './components/navigation/withActiveMission/drawContent/CreateMapMarker';
import MissionLayout from './components/navigation/MissionLayout';
import RequireActiveMission from './components/navigation/RequireActiveMission';

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
            <Route
              path="user"
              element={
                <RequireAuth>
                  <UserDetails />
                </RequireAuth>
              }
            />

            <Route path="auth" element={<Authentication />} />
          </Route>

          {/* no active mission */}
          <Route
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
          </Route>

          {/* a mission is currently active */}
          <Route
            path="mission"
            element={
              <RequireAuth>
                {/* <RequireActiveMission> */}
                <MissionLayout />
                {/* </RequireActiveMission> */}
              </RequireAuth>
            }
          >
            <Route index element={<Home />} />
            <Route path="dashboard" element={<ActiveDashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="create-hazard"
              element={<CreateMapMarker type={'hazard'} />}
            />
            <Route
              path="create-casualty"
              element={<CreateMapMarker type={'casualty'} />}
            />
            <Route
              path="create-boo"
              element={<CreateMapMarker type={'boo'} />}
            />
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
