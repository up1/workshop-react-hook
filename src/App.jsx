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

import { Provider } from 'react-redux'
import store from './redux/store.js'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App