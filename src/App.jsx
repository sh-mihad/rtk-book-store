import { RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import router from "./router/route"


function App() {

  return (
   <>
   <Navbar/>
     <RouterProvider router={router}/>
   </>
  )
}

export default App
