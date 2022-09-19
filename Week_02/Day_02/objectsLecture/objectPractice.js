let pikachu = {
    name: 'Pikachu',
    types: [
        {
        name: 'Electric',
        weaknesses: ['Ground','Grass','Electric','Dragon'],
        strengths: ['Flying','Water']
        }
    ],
    evolutionChain: {
        count: 3,
        names: {
            baby: 'Pichu',
            teen: 'Pikachu',
            adult: 'Raichu'
        }
    },
    generation: 'Generation I',
    canEvolve: true,
    evolutionRequirements: "Thunder Stone",
    moves: [
        {
            name: "Thundershock",
            type: "Electric",
            damageType: "Special"
        },
        {
            name: "Dig",
            type: "Ground",
            damageType: "Physical"
        },
        {
            name: "Thunder Wave",
            type: "Electric",
            damageType: "Status"
        },
        {
            name: "Brick Break",
            type: "Fighting",
            damageType: "Physical"
        }
    ]
};

console.log(
    `My ${ /* insert name */ } is the best Pokemon in the world\nIt is an ${ /* insert type */ } type Pokemon, which means that it is weak to ${ /* insert any type weak to */ } types, and strong against ${ /* insert any type strong against */ } types.\nIts adult evolved form is ${ /* insert adult evolution */ }. It needs a ${ /* insert evolution requirement */ } to evolve into ${ /* insert adult evolution */ }, and it evolves from ${ /* insert baby evolution */ }!\nMy ${ /* insert name */ } knows many moves, and even though ${ /* insert name */ } is an ${ /* insert type */ } type, not all of its moves are that type.\nFor example, my ${ /* insert name */ } knows ${ /* insert a non-electric move */ } which is a ${ /* insert that move's type */ } type move, and does ${ /* insert damage type */ } damage.`
);


//Write a function that creates a grammatically correct sentence, spelling out all of Pikachu's weaknesses, strengths, and moves (Their names, types, and damage types) and logs it to the console.