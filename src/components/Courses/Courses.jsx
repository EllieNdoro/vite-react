import "./style.css"
import { FaCalendarDays } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import Course from "../../assets/courses.jpg"


const CourseData = [
   {
    pic:"../../assets/courses.jpg",
    title:"Indroduction to chemistry",
    start:"12:00",
    end:"End Date",
   },
   {
    pic:"../../assets/courses.jpg",
    title:"How to structure a good folder",
    start:"start Date",
    end:"End Date",
   },
   {
    pic:"../../assets/courses.jpg",
    title:"how to become a better cook",
    start:"start Date",
    end:"End Date",
   },
   {
    pic:"../../assets/courses.jpg",
    title:"how to become a better cook",
    start:"start Date",
    end:"End Date",
   },
   {
    pic:"../../assets/courses.jpg",
    title:"how to become a better cook",
    start:"start Date",
    end:"End Date",
   },
   {
    pic:"../../assets/courses.jpg",
    title:"how to become a better cook",
    start:"start Date",
    end:"End Date",
   },
   {
    pic:"../../assets/courses.jpg",
    title:"how to become a better cook",
    start:"start Date",
    end:"End Date",
   },
 
    
]

const Courses = () => {

    return (
        <div className="courseCon">
           <div className="CoursesOne">
            <div className="popular">
                <span>Popular Courses</span>
                <button>
                    Explore Courses
                </button>
            </div>


            <div className="contentCourses">
                   

                    {
                        CourseData.map((value)=>{
                            return (
                                <div className="CoursesCard">
                                <div className="imgCon">
                                   <img src={Course}/>
                                </div>
                                <span>{value.title}</span>
                                <div className="dateCon">
                                    <div>
                                    <FaCalendarDays/>
                                    <span style={{fontWeight:"300"}}>{value.start}</span>
                                    </div>
        
                                    <div>
                                    <FaCalendarDays/>
                                    <span style={{fontWeight:"300"}}>end date</span>
                                    </div>
         
                                </div>
                                <hr/>
        
                                <div className="dateCon">
                                    <div style={{border:"1px solid gray", backgroundColor:"whitesmoke" , borderRadius:"10px", padding:"7px"}}>
                                    <MdStarRate/>
                                    <span style={{fontWeight:"300"}}>rate</span>
                                    </div>
        
                                    <div style={{border:"1px solid gray", backgroundColor:"whitesmoke" , borderRadius:"10px", padding:"7px"}}>
                                    <MdRateReview/>
                                    <span style={{fontWeight:"300"}}>chat</span>
                                    </div>
         
                                </div>
                            </div> 

                            )
                        })
                    }

            </div>

           </div>
        </div>
    )
}

export default Courses