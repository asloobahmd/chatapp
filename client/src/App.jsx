import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  const router = Routes();

  return (
    <div className="h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
