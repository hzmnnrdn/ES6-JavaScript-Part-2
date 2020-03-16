import {Student} from './export.mjs';
import readline from 'readline';

//const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

//const kelas = require('./export.js');
//import{ name, matricNo, major } from './export.js';

rl.question(`Input your name: `, (name) => {
    rl.question(`Input your matric number: `, (matricNo) => {
        rl.question(`Input your major: `, (major) => {
    let baru = new Student(name, matricNo, major);
    baru.display();
    rl.close();
        })
    })
    
});