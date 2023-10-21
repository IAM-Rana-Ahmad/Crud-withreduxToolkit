import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Form from "./components/form";
import Read from "./components/read";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       
       <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path="/read" element={<Read/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
