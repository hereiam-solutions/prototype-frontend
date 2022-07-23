import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// service worker imports
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// component imports
import App from './App';
import Profile from './components/navigation/withoutActiveMission/drawContent/Profile';
import Settings from './components/navigation/withoutActiveMission/drawContent/Settings';
import Dashboard from './components/navigation/withoutActiveMission/drawContent/Dashboard';
import ActiveDashboard from './components/navigation/withActiveMission/drawContent/ActiveDashboard';
import Home from './components/navigation/Home';
import Layout from './components/navigation/withoutActiveMission/Layout';
import About from './components/navigation/withoutActiveMission/drawContent/About/About';
import AuthLayout from './components/auth/AuthLayout';
import UserDetails from './components/auth/UserDetails';
import Authentication from './components/auth/Authentication';
import RequireAuth from './components/auth/RequireAuth';
import CreateHazardMarker from './components/navigation/withActiveMission/drawContent/createMapMarker/CreateHazardMarker';
import MissionLayout from './components/navigation/withActiveMission/MissionLayout';
import RequireActiveMission from './components/navigation/RequireActiveMission';
import JoinMission from './components/navigation/withoutActiveMission/drawContent/JoinMission';
import CreateMission from './components/navigation/withoutActiveMission/drawContent/CreateMission';
import MissionCreationLayout from './components/navigation/withoutActiveMission/MissionCreationLayout';

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
            <Route path="join-mission" element={<JoinMission />} />
            {/* <Route path="create-mission" element={<CreateMission />} /> */}
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
          </Route>

          {/* currently creating a mission */}
          <Route
            path="create-mission"
            element={
              <RequireAuth>
                <MissionCreationLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Home />} />
            <Route path="create-mission" element={<CreateMission />} />
            <Route path="about" element={<About />} />
          </Route>

          {/* a mission is currently active */}
          <Route
            path="mission"
            element={
              <RequireAuth>
                <RequireActiveMission>
                  <MissionLayout />
                </RequireActiveMission>
              </RequireAuth>
            }
          >
            <Route index element={<Home />} />
            <Route path="dashboard" element={<ActiveDashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="create-hazard" element={<CreateHazardMarker />} />
            <Route path="create-casualty" element={<CreateHazardMarker />} />
            <Route path="create-boo" element={<CreateHazardMarker />} />
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
