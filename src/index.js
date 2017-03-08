import './index.css'

class Person {
    constructor(name) {
        this.name = name;
    }
}
class Friend extends Person{
    constructor(name) {
      super(name);
    }
    callName() {
      alert(this.name);
    }
}
var friend = new Friend('yrq110');
friend.callName();

var p = document.getElementById('wp');
p.innerHTML = 'Hello webpack!';
console.log("Hi");


arr = ['1','2'];
console.log(...arr);
