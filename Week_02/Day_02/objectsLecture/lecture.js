// Objects

// Made up of Key/Value pairs
// Place related data types into a single structure

// Declare the object variable:

let pikachu = {
    name: 'Pikachu',
    species: 'Mouse',
    canEvolve: true,
    orderNumber: 25,
    moves: ['thundershock','tackle'],
    evolutions: {
        baby: "Pichu",
        middle: "Pikachu"
    },
    whosThatPokemon: () => {
        console.log(pikachu.name)
    }
};
pikachu.whosThatPokemon()
// Keys(properties) can be strings or not
// Values can be any JavaScript data type


// To access values in an object, we use dot notation or square brackets:

// console.log(pikachu.name);
// console.log(pikachu['species']);

// // Dot notation is great for accessing a given object, however if you want to reassign, or assign new values to a key, it is much better to use bracket notation.

// // Calling a property:
// console.log(`${pikachu.name} is a ${pikachu.species} Pokemon!`);

// Reassigning a property or creating a new property:
// pikachu['canEvolve'] = false;
// pikachu.suprised = ":o";
// pikachu['moves'].push("volt-tackle")
// console.log(pikachu)
// Bracket notation is more dynamic:

// const updatePokemon = (pokemon,banana,update) => {
//     pokemon[banana] = [update];    // pikachu['type'] = 'Electric'
// };

// updatePokemon(pikachu,'type','Electric');
// updatePokemon(pikachu,'type', 'Water');
// console.log(pikachu)
// You can also save these values to a new variable.
// Remember: If a reference is not a primitive value, it will change when the original value changes.

// const gengar = {
//     coolness: "110%",
//     moves: ["shadowball","fury swipes"]
// };

// let coolness = gengar.coolness;
// let moves = gengar.moves;

// gengar.coolness = "Over 9000";
// gengar.moves.push("psychic");

// Which of these console logs will be affected by the change?
// console.log("=====================")
// console.log(gengar, "---------------------------------------------------Object")
// console.log(coolness, "------------------------------------------------Primitive data type");
// console.log(moves, "----------Array");
// console.log("=====================")


// Another way to access these values is called destructuring:

// let { coolness } = gengar;
// console.log(coolness)

// The variable has to be named exactly like the property when destructuring.
// You can also destructure multiple variables at a time.

// let { coolness, moves } = gengar;
// // let coolness = gengar.coolness
// // let moves = gengar.moves
// console.log(coolness,moves)

// console.log(`Gengar is the best Pokemon. It can learn ${moves[2]} and its coolness factor is ${coolness}`);

// And, you can rename the variable as you're destructuring:

// let { coolness: gengarCoolness, moves: gengarMoves } = gengar;
// console.log(gengarCoolness)

// console.log(gengarCoolness, gengarMoves); //Over 9000 ["shadowball","fury swipes","psychic"]
// console.log(coolness); //undefined
// let { name: pikachuName } = pikachu

// We can also loop over objects using for... in... loops:
// for(let banana in pikachu){
//     // console.log(pikachu[banana])
//     console.log(`Pikachu's ${banana} is/are ${JSON.stringify(pikachu[banana])}`);
// };

// And we can delete values inside objects with the delete keyword:

// delete pikachu['moves']
// console.log(pikachu);


// ==========================================================================



// Objects have a lot of benefits --
// You can create many different objects with different properties

// let pikachu = {
//     name: 'Pikachu',
//     color: 'Yellow'
// };

// let gengar = {
//     name: 'Gengar',
//     type: 'ghost'
// };

// // and you can write functions, and loops to do interesting things with them:

// const whosThatPokemon = (pokemon) => console.log(`It's ${pokemon.name}!`);
// whosThatPokemon(pikachu);
// whosThatPokemon(gengar);

// let pokeArr = [pikachu,gengar];

// for(let i = 0; i < pokeArr.length; i++){
//     for(let info in pokeArr[i]){
//         console.log(`${pokeArr[i].name}'s ${info} is ${pokeArr[i][info]}`);
//     };
// };

// However, there are some issues with manually creating all of your objects.
// -matching properties for like objects
// -can't save "behaviors" (functions)

// In come classes!
// A class is like an object factory.
// You can define a blueprint for similar objects, as well as define "behaviors" -- known as methods.

class Pokemon {
    constructor(name,species,type,color){
        this.name = name;
        this.species = species;
        this.type = [...type];
        this.color = color;
        this.rating = 3;
    };

    whosThatPokemon(){
        console.log(`It's ${this.name}!`);
    };

    addType(type){
        this.type.push(type)
        return this
    }

    changeRating(typeOfChange){
        if(typeOfChange === 'plus'){
            this.rating++
            return this
        } else {
            this.rating--
            return this
        }
    }
};

// To start a new class, we use the class keyword.
// -constructor: define inputs
// -methods: define object functions
// -this.variable: retain class scope
// Now that we've defined a class for Pokemon, we can easily create Pokemon objects with the "new" keyword

// let pikachu = new Pokemon('Pikachu','Mouse',['Electric','Water'],'Yellow');
let gengar = new Pokemon('Gengar','Ghostly Cat',['Ghost','Fighting'],'Purple');
gengar.addType('dark').addType('normal')
gengar.changeRating('plus')
console.log(gengar)

class Car {
    constructor(make,model,year,price){
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    priceChange(type,change){
        if(type === "plus"){
            this.price += change
        } else {
            this.price -= change
        }
    }
}

let honda = new Car("Honda","Accord",2013,24000)
console.log(honda)

honda.priceChange('plus',3000)
console.log(honda)

// console.log(pikachu.name); //Pikachu
// console.log(gengar.species); //Ghostly Cat

// pikachu.whosThatPokemon(); //It's Pikachu!
// gengar.whosThatPokemon(); //It's Gengar!


// pikachu and gengar are instances of the class Pokemon
// They are also objects of the type Pokemon
// When you make new pokemon using the Pokemon class, we call it instantiation.


// You can also extend classes using the extends keyword.
// This can add extra details or functionality to the original class.
// Extended classes inherit properties from their parent classes.
// The same is not true for the opposite.

// class Evolution extends Pokemon {
//     constructor(name,species,type,color,evolution,evolutionType,evolutionLevel) {
//         super(name, species, type, color)

//         this.evolution = evolution;
//         this.evolutionType = evolutionType;
//         this.evolutionLevel = evolutionLevel;
//     };

//     evolve() {
//         console.log(`What's this? ${this.name} has evolved into ${this.evolution}!`);
//     };
// };

// Now, if we want to create a pokemon with evolution information, all we do is invoke the extended class:

// let pikachu = new Evolution('Pikachu','Mouse','Electric','Yellow','Raichu','Electric',null);

// pikachu.whosThatPokemon();
// pikachu.evolve();

// for(let info in pikachu){
//         console.log(`${pikachu.name}'s ${info} is ${pikachu[info]}`);
// };

class Driver extends Car {
    constructor(make,model,year,price,name,state,age){
        super(make,model,year,price)
        
        this.name = name;
        this.state = state;
        this.age = age;
    }
}

let holly = new Driver("Lambo","Fancy",2030,200000000000,"Holly","Indiana", 30)
console.log(holly)

holly.priceChange('plus', 30000000)
console.log(holly)

let driverArr = []

for(let i = 0; i < 100; i++){
    driverArr.push(new Driver("Test","Test",2000,3000000,"Test","Test",40))
}

console.log(driverArr)