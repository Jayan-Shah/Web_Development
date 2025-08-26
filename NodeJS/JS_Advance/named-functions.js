// Async Code
// getUser(1, (user) => {
//   getRepo(user.gitHubUsername, (repos) => {
//     getCommits(repo, (commits) => {});
//   });
// });



// Remove anonymous functions and change it to named function in order to make more like (commits) is an anonymous functionn
getUser(1, getRepo);


getUser(1, function (user) {
  console.log("User", user);
});

getRepositories("Jayan", (repos) => {
  console.log("Repos", repos);
});

function getRepo(user){
  getRepo(user.gitHubUsername, getCommits);
}

function getCommits(repos){
  getCommits(repo, displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

console.log("Before");

console.log("After");

// More better way to solve is promises





