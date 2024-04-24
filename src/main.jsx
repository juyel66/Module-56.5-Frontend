import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddsCoffee from "./components/AddsCoffee.jsx";
import UpdatesCoffee from "./components/UpdatesCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProviders from "./components/AuthProviders.jsx";
import Users from "./components/Users.jsx";
import Root from "./components/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("https://coffees-store-server-six.vercel.app/coffee"),
      },
      {
        path: "addCoffees",
        element: <AddsCoffee></AddsCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdatesCoffee></UpdatesCoffee>,
        loader: ({ params }) => fetch(`https://coffees-store-server-six.vercel.app/coffee/${params.id}`),
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch('https://coffees-store-server-six.vercel.app/user')
      }

    ]

  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
