import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// service worker imports
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// component imports
import App from "./App";
import Profile from "./components/navigation/withoutActiveMission/drawContent/Profile/Profile";
import Settings from "./components/navigation/withoutActiveMission/drawContent/Settings/Settings";
import ActiveDashboard from "./components/navigation/withActiveMission/drawContent/ActiveDashboard";
import Home from "./components/navigation/Home";
import Layout from "./components/navigation/withoutActiveMission/Layout";
import About from "./components/navigation/withoutActiveMission/drawContent/About/About";
import AuthAbout from "./components/auth/AuthAbout";
import AuthLayout from "./components/auth/AuthLayout";
import Authentication from "./components/auth/Authentication";
import RequireAuth from "./components/auth/RequireAuth";
import CreateHazardMarker from "./components/navigation/withActiveMission/drawContent/createMapMarker/CreateHazardMarker";
import MissionLayout from "./components/navigation/withActiveMission/MissionLayout";
import RequireActiveMission from "./components/navigation/RequireActiveMission";
import JoinMission from "./components/navigation/withoutActiveMission/drawContent/JoinMission";
import CreateMission from "./components/navigation/withoutActiveMission/drawContent/CreateMission";
import MissionCreationLayout from "./components/navigation/withoutActiveMission/MissionCreationLayout";
import CreateLocationMarker from "./components/navigation/withActiveMission/drawContent/createMapMarker/CreateLocationMarker";
import CreatePatientMarker from "./components/navigation/withActiveMission/drawContent/createMapMarker/CreatePatientMarker";
import CreateSignalMarker from "./components/navigation/withActiveMission/drawContent/createMapMarker/CreateSignalMarker";
import CreateVictimMarker from "./components/navigation/withActiveMission/drawContent/createMapMarker/CreateVictimMarker";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* the App component contains no html elements, its just for initializing the Realm connection and providing the contexts */}
        <Route path="/" element={<App />}>
          {/* Login and Register need another layout than the actual app */}

          <Route element={<AuthLayout />}>
            <Route path="auth-about" element={<AuthAbout />} />
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
            <Route path="create-mission" element={<CreateMission />} />\
            <Route path="join-mission" element={<JoinMission />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
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
            <Route path="create-patient" element={<CreatePatientMarker />} />
            <Route path="create-location" element={<CreateLocationMarker />} />
            <Route path="create-signal" element={<CreateSignalMarker />} />
            <Route path="create-victim" element={<CreateVictimMarker />} />
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
