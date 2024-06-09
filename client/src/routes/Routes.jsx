import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DefaultLayout from "../layouts/DefaultLayout";

const Routes = () => {
  //   const ProtectedRoute = ({ children }) => {
  //     if (!currentUser) {
  //       return <Navigate to="/login" />;
  //     }
  //     return children;
  //   };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <DefaultLayout />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return router;
};

export default Routes;
