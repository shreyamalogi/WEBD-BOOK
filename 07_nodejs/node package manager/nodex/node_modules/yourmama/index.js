const fs = require('fs')
const path = require('path')
/**
 * Get and return a roast using promises. 
 * @param {object} [searchArgs] Object that determens the roast.
 * If ommitted, it will return a random roast.
 * @param {String} [args.type] the type of roast Corresponds with the array name in jokes.json
 * If type is ommitted, getRoast() will flatten jokes.json for use with ID.
 * @param {String} [args.id] gets specific roast ID Corresponds with position of current selected array.
 * If id is omitted, it will return a random joke based on type.
 * 
 * @returns {Promise<string>} Roast based on your args.
 * 
 * @example yourmama.getRoast({type:"fat",id:0}).then(res=>console.log(res))
 * "Yo mama is so fat that her bellybutton gets home 15 minutes before she does."
 */
exports.getRoast = async (args) => {
    return new Promise((resolve,reject)=>{
        if((typeof args == 'undefined')||(typeof args.type == 'undefined'&& typeof args.id == 'undefined')){
            return this.getRandom().then(bruh => resolve(bruh))
        }
        if(typeof args.type == 'string' && typeof args.id == 'undefined'){
            return this.getRandomTopic(args.type).then(bruh => resolve(bruh))
        }
        if(typeof args.id == 'string' && typeof args.type == 'undefined'){
            return this.getID(args.id).then(bruh => resolve(bruh))
        }
        try{
            const jokes = JSON.parse(fs.readFileSync(path.join(__dirname,'/jokes.json')));
            return resolve(jokes[args.type][args.id])
        }catch(e){
            return reject(new Error("yo mama so stupid she fucked up syntax, probably\nshould be {type:'typet',id:#id}\n\n"+e))
        }
    })
}
/**
 * 
 * get a random roast
 * @returns {Promise<string>} A random roast.
 */
exports.getRandom = async() =>{
    return new Promise((resolve,reject)=>{
        try{
            const jokes = JSON.parse(fs.readFileSync(path.join(__dirname,'/jokes.json')));
            let bigArray = Object.values(jokes)
            let bruh = []
            for(thing of bigArray){
                bruh.push(...thing)
            }
            return resolve(bruh[Math.floor(Math.random() * bruh.length)])
        }catch(e){
            reject(new Error("something messed up\n\n"+e))
        }
    })
}
/**
 * Get a random roast based on topic
 * 
 * @param {string} topic Decides what array to use.
 * @returns {Promise<string>} A random roast based on your topic
 * @throws An error if topic doesn't exist.
 */
exports.getRandomTopic = async(topic) =>{
    return new Promise((resolve,reject)=>{
        try{
            const jokes = JSON.parse(fs.readFileSync(path.join(__dirname,'/jokes.json')));
            const bruh = Object.values(jokes[topic])
            return resolve(bruh[Math.floor(Math.random() * bruh.length)])
        }catch(e){
            reject(new Error("something messed up\n\n"+e))
        }
    })
}
/**
 * Flattens jokes.json and returns desired entry.
 * 
 * @param {int} id Position of desired roast.
 * @returns {Promise<string>} Said roast.
 * @throws An error if roast doesn't exist.
 */
exports.getID = async(id) =>{
    return new Promise((resolve,reject)=>{
        try{
            const jokes = JSON.parse(fs.readFileSync(path.join(__dirname,'/jokes.json')));
            let bigArray = Object.values(jokes)
            let bruh = []
            for(thing of bigArray){
                bruh.push(...thing)
            }
            return resolve(bruh[id])
        }catch(e){
            reject(new Error("something messed up\n\n"+e))
        }
    })
}