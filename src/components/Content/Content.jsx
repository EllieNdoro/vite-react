import { BiSolidShoppingBags } from "react-icons/bi"
import { GrDocumentStore } from "react-icons/gr"
import { HiUserGroup } from "react-icons/hi"

const Content = () =>{
    return(
        <div>
                <div className="contentIcon">
        <div className="subContentIcon">

          <div className="showCon">
            <div style={{width:"130px" , height:"100%"  , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <BiSolidShoppingBags style={{color:"navy" , fontSize:"60px"}} />
            </div>

            <div style={{flex:"1" , height:"100%" , paddingTop:"20px" , padding:"2px"}}>
              <div style={{fontWeight:"900"}}>
               Expedite Learning 
              </div>

              <div>
              business it will frequently repudiated and annoyances accepted.   
              </div>
            </div>
          </div>

          <div className="showCon">
            <div style={{width:"130px" , height:"100%"  , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <GrDocumentStore style={{color:"navy" , fontSize:"60px"}} />
            </div>

            <div style={{flex:"1" , height:"100%" , paddingTop:"20px" , padding:"2px"}}>
              <div style={{fontWeight:"900"}}>
               Open-source Plartform 
              </div>

              <div>
              business it will frequently repudiated and annoyances accepted. 
              </div>
            </div>
          </div>

          <div className="showCon">
            <div style={{width:"130px" , height:"100%"  , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <HiUserGroup style={{color:"navy" , fontSize:"60px"}} />
            </div>

            <div style={{flex:"1" , height:"100%" , paddingTop:"20px" , padding:"2px"}}>
              <div style={{fontWeight:"900"}}>
               Maximum Efficiency 
              </div>

              <div>
               business it will frequently repudiated and annoyances accepted. 
              </div>
            </div>
          </div>
            
        </div>
      </div>
        </div>
    )
}

export default Content