import * as React from "react";
import {
  createHashRouter,
  RouterProvider,

  Link,
} from "react-router-dom";
import NavigationBar from "./NavigationBar";



const router = createHashRouter([
    {
        path: "/",
        element: <div>
        <h1>Welcome Home</h1>
        <h2>Click the link below to get to see other things <Link to= "/navigation">here</Link>
        </h2>
        </div>,
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