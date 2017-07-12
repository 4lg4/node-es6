/**
 * Created by www.Alga.me on 12/09/16.
 */

// my super ES6 JS code !!

import MyClass from './MyClass'

class ClassName extends MyClass {
    constructor(opt) {
        super(opt);
    }

    helloWorld(){
        return `${super.helloWorld()} !!!`;
    }
}

const myClass = new ClassName();

console.log('first execution will take 2s and the second one will take 4s');

// no await on the top level !
(async () => {
    try {
        console.log(await myClass.promise());
    } catch (err) {
        console.error('ClassName::Error ', err);
    }
})();



async function myAsyncFunction() {
    return new Promise(resolve => {
        setTimeout(()=>resolve('myAsyncFunction: ok after 4s'),4000);
    });
}

(async () => {
    try {
        console.log(await myAsyncFunction());
    } catch (err) {
        console.error('myAsyncFunction::Error ', err);
    }
})();
