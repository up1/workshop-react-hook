import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { GuessNumberPage } from "./pages/GuessNumberPage.jsx";
import { ChallengePage } from "./pages/ChallengePage.jsx";
import { NotFoundPage } from './pages/NotFoundPage.jsx';

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
  return (
    <RouterProvider router={router} />
  )
}

export default App