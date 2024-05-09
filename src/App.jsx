
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import './App.css'
import { ROUTES } from "./routes/index.jsx";


const routes = createBrowserRouter(ROUTES);
function App() {


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
