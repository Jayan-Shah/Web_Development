const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async operation 1');
        resolve(1);
    },2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2");
    resolve(2);
  }, 2000);
});

Promise.all([p1,p2])//Here until all are fulfilled no result
    .then(result=>console.log(result));

// If any promise is rejected both will be rejected so final wont work..


// If we want result what of just first to get use 'race' instead of 'all'
Promise.race([p1, p2])
    .then(result=>console.log(result));
