import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearchengin } from "react-icons/fa6";
import { BsMenuButtonWideFill } from "react-icons/bs";
import {Link} from "react-router-dom"
import {useState} from "react"


const Header = () =>{

      const[fullName,setName] = useState ("Ellie")
      const[email, setMail] = useState ("Ellie@gmail")

    return (
        <div>
                <header className="header">
                    <div className="subHeader">
                    <div className="logo">
                      <p><span style={{backgroundColor:"green", color:"white", paddingLeft:"12px"}}>E</span>don</p>
                    </div>
                    
                    <nav className="navBar">
                        
                        <Link style={{textDecoration:"none", color:"black"}} to="/"><span>Home</span></Link>
                        <Link style={{textDecoration:"none", color:"black"}} to="/Services"><span>Service</span></Link>
                        <Link style={{textDecoration:"none", color:"black"}} to="About"><span>About</span></Link>
                        <Link style={{textDecoration:"none", color:"black"}} to="Blog"><span>Blog</span></Link>
                        <Link style={{textDecoration:"none", color:"black"}} to="Contact"><span>Contact</span></Link>
                        <Link style={{textDecoration:"none", color:"black"}} to="Counter"><span>Counter</span></Link>
                    </nav>
                        
                    <div className="holder">
                      {fullName} {email}
                      <AiOutlineShoppingCart/>
            
                      <div className="iconInput">
                         <input placeholder="search"/>
                         <FaSearchengin />
                      </div>
                       
                    </div>
                    
                    </div>
                    
                    <BsMenuButtonWideFill className="burgerMenu" style={{color:"purple",fontSize:"20px"}} />
            
                  </header>
        </div>
    )
}


export default Header