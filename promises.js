

function connectToServer(cbfn){
  console.log("connecting to server...")
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("Server connected...")
    })
  },2000)
}



function getCourse(){
  console.log("getting courses...");
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(["course :1","course :2","course :3"]);
    },2000)
  })
}

function fetchCourses(){
  console.log("fetching courses...");
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(["course 1:DSA","course 2:Web dev"]);
    })
  })
}

connectToServer()

.then(function(response){
  console.log(response);

  return getCourse();

})
.then(function(response){
  console.log(response);
  return fetchCourses();
})
.then(function(response){
  console.log(response);
})






