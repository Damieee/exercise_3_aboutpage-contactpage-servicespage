import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";
import AboutPage from "./AboutPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },

    {
      path: "/about",
      element: (
        <AboutPage/>
      ),
    },
    {
      path: "/services",
      element: (
        <ServicesPage/>
      ),
    },
    {
      path: "/contact",
      element: (
        <ContactPage/>
      ),
    },
    {
      path: "/navigation",
      element: (
        <NavigationBar/>
      ),
    },

  ]);

function App() {
    return (
            <RouterProvider router={router}/>
        
    );
};

export default App;