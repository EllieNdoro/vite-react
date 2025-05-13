
const myFun = ( a )=>{
    return a
 }
 
 console.log(myFun("josepp"))
 
 function myFun2 (a, b, callback){
 
     console.log(a,b)
     callback()
 }
 
 myFun2("david", 33,  function(){
      console.log("hii hello")
 })
 
 const gi = (c, b) =>{
     console.log("djfjk", b)
     c() 
 }
 
 console.log(gi(()=>{  console.log("this is a call back")}, "good"))
 const greetMe = ()=>{
     console.log("greet me")
 }
 
 
 console.log(gi(greetMe, "good"))
 
 
 
 
 //.map() function 
 // .find ()
 
 // let person ={
 //     name:"jdf",
 //     score:34
 // }
 
 
 
 
 
 //object of an array
 let allStudent = [
     {
         name:"fatai",
         score:23
     },
     {
         name:"aminu",
         score:10
     },
     {
         name:"joseph",
         score:90
     },
     {
         name:"courage",
         score:70
     }
 ]
 console.log("main student",allStudent)
 
 let under23 = allStudent.map((value)=>{
     // console.log(a)
     return value.score <= 23
 })
 
 console.log("under ",under23)
 
 
 
 const allCourses = [
     {
         img:"pic.png",
         name:"front end",
         rate:4,
         noOfStudent:5
     },
     {
         img:"pic.png",
         name:"front end",
         rate:4,
         noOfStudent:5
     },
     {
         img:"pic.png",
         name:"front end",
         rate:6,
         noOfStudent:5
     },
     {
         img:"pic.png",
         name:"front end",
         rate:4,
         noOfStudent:5
     },
     {
         img:"pic.png",
         name:"front end",
         rate:4,
         noOfStudent:5
     }
 ]
 
 let scores = [34, 50, 400, 79,78]
 console.log(scores[0])
 
 console.log(scores,"........")
 
 let newScore = scores.map((a, b, c)=>{
     // console.log(a)
     // console.log(b)
     // console.log(c)
     return a * 2
 
 })
 console.log(newScore)
 
 const array1 = [5, 8, 130, 44];
 
 let newArray = array1.find((value)=>{
     return value > 10
 })
 
 let jimArray = array1.find((value) =>  value > 10 )
 
 console.log(newArray)
 
 
 let userName = "joseph"
 let myString = `hello ${userName} `
 