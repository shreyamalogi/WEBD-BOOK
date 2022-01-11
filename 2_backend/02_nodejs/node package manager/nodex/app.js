// to use a package just go to
// https: //www.npmjs.com/package/package
//     import it by using require and execute it by typing node < filename >

//if npm or node is not working just restrat the pc or vscode
//node can be executed in cmd 





var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);


//output

// PS C: \Users\ Shre9\ nodex > node app.js {
//     body: 'There are 364 days until Christmas and people already have their Christmas lights up. Unbelievable...',
//     tags: ['Christmas', 'people']
// }
// PS C: \Users\ Shre9\ nodex >