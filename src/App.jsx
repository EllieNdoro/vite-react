import "..//src/App.css"

import Home from "./Pages/Home/Home";
import {BrowserRouter , Route , Routes} from "react-router-dom"
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Services from "./Pages/Services/Services";
import Header from "./components/header/header";
import Counter from "./Pages/Counter/Counter";

const App = () =>{
  return (
    <div>
      <BrowserRouter>
      <Header/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Counter" element ={<Counter/>}/>

         </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
