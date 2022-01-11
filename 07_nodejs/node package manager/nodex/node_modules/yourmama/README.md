# yourmama package

![Node.js Package](https://github.com/JesseStorms/yomama/workflows/Node.js%20Package/badge.svg)

My first really stupid npm package.

Promise based yomama joke getting package. Just in case you need to have access to mom-roasting things while working offline. I used [Josh Buchea's wonderful repo](https://github.com/joshbuchea/yo-mama) as source of the yomama jokes. You can find my fork [here](https://github.com/JesseStorms/yo-mama), if you want to contribute to the file.

Why did I make this? I was really bored and searched for excuses to learn how to use [Mocha.js](https://mochajs.org/) and how to make packages. I only spent one hour on this.

## Usage (dont)

Install the package first:  

```bash
npm i yourmama
```

```js
//require it
const yourmama = require('yourmama')

//getting random jokes
const randomJoke = yourmama.getRandom().then(roast=>{return roast})
//Omitting params on .getRoast() returns a random roast as well.
const randomJoke = yourmama.getRoast().then(roast=>{return roast})

//get a random joke in a topic
//topic can be: fat, short, stupid, ugly, nasty, hairy, bald, old, poor, skinny, talland nice
const fatJoke = yourmama.getTopic("fat").then(roast=>{return roast})
//if you want to use .getRoast()
const fatJoke = yourmama.getRoast({topic:'fat'}).then(roast=>{return roast}) 
 
//get by ID, just makes a giant array and selects one of them
const specificJoke = yourmama.getID(0).then(roast=>{return roast})
//if you want to use .getRoast();
const speficicJoke = yourmama.getRoast({id:0}).then(roast=>{return roast})
//returns "Yo mama is so fat that her bellybutton gets home 15 minutes before she does." 
 
//get a specific one out of the topic array
const firstFatJoke = yourmama.getRoast({topic:'fat',id:0}).then(roast=>{return roast}) 
//returns "Yo mama is so fat that her bellybutton gets home 15 minutes before she does." 
```

## Contributing

Fork and merge request the [repo](https://github.com/JesseStorms/yomama). You can find the source of the jokes [here](https://github.com/JesseStorms/yo-mama), if you want to contribute to the jokes themselves.

If there are (somehow) any issues, let me know on the [repository](https://github.com/JesseStorms/yomama/issues).

## Changes

### Version 1.0.4

Added some JSDocumentation to help out Intellisense and fixed typos. Otherwise, it's the exact same as v1.0.3.

## License

This project uses the MIT License, read more [here](https://github.com/JesseStorms/yomama/blob/main/LICENSE.md)