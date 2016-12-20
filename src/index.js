/**
 * Created by alga on 12/09/16.
 */

// my super ES6 JS code !!

import { BaseClass } from "./base-class"

class ClassName extends BaseClass {
    constructor(opt) {
        super(opt);
    }

    helloWorld(){
        return `${super.helloWorld()} !!!`;
    }
}

const myClass = new ClassName();
