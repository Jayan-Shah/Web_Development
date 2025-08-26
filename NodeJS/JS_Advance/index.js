console.log('Before');

console.log('After');

// Here setTimeout is a asynchronous function so it simply schedule a time when it will run the function...

// function getUser(id){
//     setTimeout(()=>{
//         console.log('Reading a user from a database...');
//         return {id:id,gitHubUsername:'mosh'};
//     },2000);
// }

// Callback to resolve above problem

getUser(1, function(user){
    console.log('User',user);
});

getRepositories('Jayan',(repos)=>{
    console.log('Repos',repos);
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "mosh" });
  }, 2000);
}

function getRepositories(username,callback){
    setTimeout(()=>{
        callback( ['repo1','repo2','repo3']);
    },2000);
}


