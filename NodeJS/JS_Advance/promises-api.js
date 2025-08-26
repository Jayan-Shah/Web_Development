// const p=Promise.resolve({id:1});
// p.then(result =>console.log(result));

const p=Promise.reject(new Error('Message'));
p.catch(err=>console.log('Error',err));