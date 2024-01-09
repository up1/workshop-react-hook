import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { GuessNumberPage } from "./pages/GuessNumberPage.jsx";
import { ChallengePage } from "./pages/ChallengePage.jsx";
import { NotFoundPage } from './pages/NotFoundPage.jsx';

import { useAuthContext } from "./hooks/useAuth.js";
import { AuthContext } from "./contexts/AuthContext.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/game",
    element: <GuessNumberPage />,
  },
  {
    path: "/challenge",
    element: <ChallengePage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

function App() {
  const authContextValue = useAuthContext()
  return (
    <AuthContext.Provider value={authContextValue}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App