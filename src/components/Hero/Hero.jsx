import { FaGraduationCap, FaSearchengin } from "react-icons/fa"
import mainPic from "../../assets/mainPic.png"

const Hero = () =>{
    return(
        <div>
                  <div className="heroSection">
                    <div className="subHero">
                      <section className="leftHero">
                        <div className="contentLeft">
                          <div style={{color:'green',fontWeight:'bolder'}}>Online Store</div>
                          <div style={{fontSize:'60px', fontWeight:'900'}}>We have all kinds of <span>Courses</span> Collections</div>
                          <div style={{color:"black"}}>Contrary to popular belief, we are the best</div>
                        </div>
                        <div className="inputCon">
                           <input placeholder="Search"/>
                           <FaSearchengin style={{backgroundColor:'green', padding:'6px', color:'white'}} />
                      
                        </div>
                          <div style={{display:'flex',alignItems:'center',marginTop:'10px',gap:'5px'}}>
                            <div >People search:</div>
                            <span style={{border:'1px solid green', width:'auto', padding:'5px', borderRadius:'10px'}}>
                              Blog
                            </span>
                            <span style={{border:'1px solid green', width:'auto', padding:'5px', borderRadius:'10px'}}>
                              Ui/Ux
                            </span>
                            <span style={{border:'1px solid green', width:'auto', padding:'5px', borderRadius:'10px'}}>
                              Front-End
                            </span>
                            <span style={{border:'1px solid green', width:'auto', padding:'5px', borderRadius:'10px'}}>
                              Back-End
                            </span>
                          </div>
                      </section>
                      <section className="rightHero">
                        <img src={mainPic}></img>
                        <div className="smallCon">
                          <div style={{width:"100px", height:"100%" , display: "flex" , justifyContent:"center" , backgroundColor:"grey",borderRadius:" 50px 0 0 50px"}}>
                          <FaGraduationCap style={{color:"green" , fontSize:"40px"}} />
                          </div>
                          <div>
                            2
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
        </div>
    )
}

export default Hero