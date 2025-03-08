
// callback promises async /await 

// function getSons(){
//  setTimeout(function(){
//   console.log("Songs aa gaye");
//  },2*1000)
// }
// // miliseconds


// function getMoreSongs(){
//   setTimeout(function(){
//     console.log("More songs aa gaye");
//   },1200)
// }


// getSons();
// getMoreSongs()


// callback promises async /await 


function connectToServer(cbfn){
  console.log("connecting to server...");
  setTimeout(function(){
  console.log("server connected...");
  cbfn();
  },2000)
}

function fetchCourses(cbfn){
  console.log("fetching courses...");
  setTimeout(()=>{
  cbfn(["course: 1","course: 2","course: 3"]);
  },2000)
}



// apko ye niche vala code hi likhna hai ok 

connectToServer(function(){
  fetchCourses(function(data){
   console.log(data);
  });
});






