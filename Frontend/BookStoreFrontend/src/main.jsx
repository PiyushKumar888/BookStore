import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    BrowserRouter as Router,
    createBrowserRouter,
    createRoutesFromElements, Navigate, redirect,
    Route,
    RouterProvider
} from 'react-router-dom'


import './index.css'
import App from './App.jsx'
import Home from "./pages/Home.jsx";
import {Course} from "./components/Course.jsx";
import {ContactUS} from "./components/ContactUS.jsx";
import {AboutUs} from "./components/AboutUs.jsx";
import {Toaster} from "react-hot-toast";
import AuthProvider, {useAuth} from "./context/context.jsx";


const ProtectedRoute = ({ children }) => {
    const [authUser] = useAuth();

    if (!authUser) {
        return <Navigate to="/" replace />;
    }

    return children;
};
const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="/" element={<Home/>} />
            <Route
                path="/course"
                element={
                    <ProtectedRoute>
                        <Course />
                    </ProtectedRoute>
                }
            />
            <Route path="/contact"  element={<ContactUS/>}/>
            <Route path="/about" element={<AboutUs/>} />

        </Route>

    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
          <RouterProvider router={routes}/>
          <Toaster/>
      </AuthProvider>

  </StrictMode>
)
