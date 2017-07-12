/**
 * Created by alga on 12/09/16.
 */

// my super ES6 JS code !!


class MyClass {
    constructor(opt) {
        this._opt = opt;
    }

    helloWorld(){
        return "helloWorld";
    }

    promise(){
        return new Promise(resolve => {
            setTimeout(()=>resolve('MyClass::promise: ok after 2s'),2000);
        });
    }
}

export default MyClass
