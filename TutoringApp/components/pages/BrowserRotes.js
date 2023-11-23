import{BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"

function BrowserRouter(){
    return(
        <BrowserRouter>
        
        <nav>
        <h1>Users</h1>
        <Link to= "/">Home</Link>
        <Link to= "/create">Create New User</Link>

        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Update />} />
        </Routes>
        </BrowserRouter>

    );


}

export default BrowserRoutes;