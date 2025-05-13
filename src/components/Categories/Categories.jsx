import frontEnd from "../../assets/frontEnd.svg"
import backEnd from "../../assets/backEnd.svg"
import library from "../../assets/library.svg"
import database from "../../assets/database.svg"
import debug from "../../assets/debug.svg"

const Categories = () =>{
    return(
        <div>
                      <div className="mainCategory">
          <div style={{paddingLeft:"190px"}}>
             <h3>
              Explore The Categories
            </h3>
          </div>
          <div className="categories">
           
            <div>
              <div className="frontEnd">
              <img src={frontEnd} style={{height:"150px" , width:"180px"}}></img>
              </div>
              <div style={{fontWeight:"bolder" , marginTop:"20px"}}>Front-End</div>
            </div>

            <div>
              <div className="frontEnd">
              <img src={backEnd} style={{height:"150px" , width:"180px"}}></img>
              </div>
              <div style={{fontWeight:"bolder" , marginTop:"20px"}}>Back-End</div>
            </div>

            <div>
              <div className="frontEnd">
              <img src={library} style={{height:"150px" , width:"180px"}}></img>
              </div>
              <div style={{fontWeight:"bolder" , marginTop:"20px"}}>Libraries</div>
            </div>

            <div>
              <div className="frontEnd">
              <img src={database} style={{height:"150px" , width:"180px"}}></img>
              </div>
              <div style={{fontWeight:"bolder" , marginTop:"20px"}}>Databases</div>
            </div>

            <div>
              <div className="frontEnd">
              <img src={debug} style={{height:"150px" , width:"180px"}}></img>
              </div>
              <div style={{fontWeight:"bolder" , marginTop:"20px"}}>Debugging</div>
            </div>
            
          </div>
          </div>
        </div>
    )
}

export default Categories 
