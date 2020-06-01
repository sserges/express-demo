// const p = Promise.resolve({ id: 1 });
// p.then((result) => console.log(result));

const pr = Promise.reject(new Error('reason for rejection...'));
pr.catch((error) => console.log(error));
