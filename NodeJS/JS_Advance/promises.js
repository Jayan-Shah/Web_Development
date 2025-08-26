// const p= new Promise(function(resolve,reject){
    //Lick off some async work
    //...
    // resolve(1); //If fullfilled
//     reject(new Error('message'));
// });
// Promise has 2 main function then and catch
// p
//     .then(result=> console.log('Result',result))
//     .catch(err=>console.log('Error',err.message));





// Replacing callbacks with promises
// Async Code
    // getUser(1, (user)=>{
    //     getRepo(user.gitHubUsername,(repos)=>{
    //         getCommits(repo,(commits)=>{
    //         });
    //     });
    // });

    // getUser(1, (user) => {
    //   getRepo(user.gitHubUsername, (repos) => {
    //     getCommits(repo, (commits) => {});
    //   });
    // });




// getUser(1, function (user) {
//   console.log("User", user);
// });

// getRepositories("Jayan", (repos) => {
//   console.log("Repos", repos);
// });

// const p = getUser(1);
// p.then(user=>console.log(user));

getUser(1)
    .then(user=>getRepositories(user.gitHubUsername))
    .then(repos=>getCommits(repos[0]))
    .then(commits=>console.log('Commits',commits))
    .catch(err=>console.log('Error',err.message));


function getUser(id) {
   return new Promise((resolve,result)=>{
       setTimeout(() => {
         console.log("Reading a user from a database...");
         resolve({ id: id, gitHubUsername: "mosh" });
       }, 2000);
   });
}

function getRepositories(username) {
    return new Promise((resolve,result)=>{
        setTimeout(() => {
          console.log('Calling github API')
          resolve(["repo1", "repo2", "repo3"]);
        }, 2000);
    });
}

function getCommits(commits){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Calling github commits");
          resolve(['commit']);
        }, 2000);
    });
}


