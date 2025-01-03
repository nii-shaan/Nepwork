import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./Layout.jsx";
import {
    Dashboard,
    Home,
    Login,
    Logout,
    Notifications,
    Profile,
    Signup,
    Settings,
    VerifyEmail,
    Kyc,
} from "./pages/index.js";
import { Protected } from "./components";

createRoot(document.getElementById("root")).render(
    //  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route
                    path="dashboard"
                    element={
                        <Protected>
                            <Dashboard />
                        </Protected>
                    }
                />
                <Route
                    path="notifications"
                    element={
                        <Protected>
                            <Notifications />
                        </Protected>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <Protected>
                            <Profile />
                        </Protected>
                    }
                />
                <Route
                    path="settings"
                    element={
                        <Protected>
                            <Settings />
                        </Protected>
                    }
                />
                <Route
                    path="settings/kyc"
                    element={
                        <Protected>
                            <Kyc />
                        </Protected>
                    }
                />
                <Route
                    path="settings/verify-email"
                    element={
                        <Protected>
                            <VerifyEmail />
                        </Protected>
                    }
                />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    // </StrictMode>,
);
