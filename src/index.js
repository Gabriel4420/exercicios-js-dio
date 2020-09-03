import "./styles.css";

function Animal(qtdPatas){
  this.qtdPatas = qtdPatas;
  this.movimentar = () => {

  }
}

function Cachorro(morde){
  Animal.call(this,4);
  this.morde = morde;
  this.latir = () => {
    console.log('au au')
  }
}

const pug = new Cachorro(true);

console.log(pug)

const myText = 'Hello prototype';

myText.split(' ');

const myText2 = String('Hello prototype');

console.log(myText2.__proto__.split);

//console.log(String.prototype.split(' '))

console.log(myText.__proto__.split === String.prototype.split)

console.log(myText.constructor === String)



function Person(){}

Person.walk = () =>{
  console.log('walking...');
}

console.log(Person.walk())

class Animal2 {
  constructor(patas){
    this.patas = patas;
  }

  movimentar(){}
}

class Dog extends Animal2{
  constructor(morde){
    super(4);
    this.morde = morde;
  }

  latir(){
    console.log('au au au')
  }
}

const pug2 = new Dog(false);

console.log(pug2);

console.log(Dog.constructor === Object)

function Persona(initialName){
  let name = initialName;

  this.getName = () => {
    console.log(name);
    return name;
  }

  this.setName = (newName) => {
    name = newName;
  }
}

const p = new Persona('Gabriel')

console.log(p)

p.getName()

p.setName('Marcos')

p.getName()



document.getElementById("app").innerHTML = `
<h1>Hello ${p.getName()}</h1>
<div>
  <input type="text" id="nome" onchange="nome()">
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// funções factory
function Pessoa3(customp){
  return {
    name:'Gabriel',
    ln:'rodrigues',
    ...customp
  }
}

const px = Pessoa3({name:'nome', age:18});

console.log(px)

// Singleton >> criar uma instancia e toda vez q for utilizada, sempre é utilizada a msm instância

function myApp(){
  if(!myApp.instance)
    myApp.instance = this;
  else 
    return myApp.instance
}

myApp();

