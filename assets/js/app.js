let cl = console.log;


function extendfunction(child, parent){  // we created own extend function
    child.prototype =Object.create(parent.prototype)
    child.prototype.constructor =child
}
/* ==============Common method================== */

function Shape(){

}
Shape.prototype.duplicate = function(){
    cl(`Duplicate from shape`)
}

/* =========================================== */



function Circle (radius){
    this.radius = radius;
    /* this.draw = function(){
        cl(`Circle is drawn with radius ${this.radius}`)
    } */
    /* this.duplicate = function(){
        cl(`Circle is Drawn with radius ${this.radius}`)
    } */
}
Circle.prototype.duplicate = function(){  // circle having 2 duplicate methods one is own and 2nd one is shape 
    cl(`Circle Duplicated`)
    Shape.prototype.duplicated.call(this)  //this points to Circle
    
}
//Circle Constructor>> CircleBase >> ObjectBase
//Circle.prototype = Object.create(Object)
//Circle Constructor >> CircleBase(Circle.prototype) >> (Object >> ShapeBase(Shape.prototype)) >> ObjectBase


//Circle.prototype = Object.create(Shape.prototype)  // created own Prototype
//Circle.prototype.constructor = Circle   // we have to reset the constructor when we creating own prototype
extendfunction(Circle, Shape)


Circle.prototype.draw = function(){
    cl(`Circle is drawn with radius ${this.radius}`)  
}

/* Circle.prototype.duplicate = function(){  // this is a common method in Circle and Square
    cl(`Duplicate`)
} */

let c= new Circle(10)
cl(c)
c.duplicate() // circle base duplicate()methode is callled
/* ------------------------------------------------------------ */

function Square(side){
    this.side = side;
}
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

extendfunction(Square,Shape)

/* Square.prototype.duplicate = function(){
    cl('Duplicate')
} */

let s = new Square(100)
cl(s)
s.duplicate()   //shape base duplicate() method is called


/* class >> in ES6 it is just synthitical sugar coating over js existing prototype based inheritance (i.e constructor function) */

function Person(nm, age){
    this.nm = nm;
    this.age = age;
    /* this.greeting = function(){
        cl(`Hello there I'm ${this.nm}`)
    } */
}

Person.prototype.greeting = function(){
    cl(`Hello there I'm ${this.nm}`)
}

let p = new Person('Jhon', 33);
cl(p)

let p2 = new Person('jhon', 33);
cl(p2)

p.greeting();


function Emp1(role,empName,empAge){
    Person.call(this,empName,empAge)
    this.role = role
}
Emp1.prototype=Object.create(Person.prototype)
Emp1.prototype.constructor = Emp1;

let  emp1 = new Emp1("Developer" , "Harry", 25)
cl(emp1)


/* ==================================polymorphism===================== */
