const pop_growth = (population, percent_growth, aug, population_goal) => {
    let years = 0;
    while (population < population_goal) {
        population = population * (1 + percent_growth /100) + aug;
        years++
    }
    return years;
}

console.log(pop_growth(1500000, 2.5, 10000, 2000000));

function nbYear(p0, percent, aug, p){
    // let i = 0;
    for (var i = 0; p0 < p; i++) {
      p0 += p0 * (percent / 100) + aug;
    }
    return i;
}

console.log(nbYear(1500, 5, 100, 5000))