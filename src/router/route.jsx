import { createBrowserRouter } from "react-router-dom";
import BookAddEditForm from "../../pages/AddEditBook";
import Home from "../../pages/Home";

const router = createBrowserRouter([
     {
        path:"/",
        element:<Home/>
     },
     {
        path:"/addBook",
        element:<BookAddEditForm/>
     },
     {
        path:"/editBook/:id",
        element:<BookAddEditForm/>
     }
])


export default router;