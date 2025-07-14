import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"


const App = () => {

    return(
        <div>
            <Router>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App