const marvelHeros = ["thor", "ironman", "spiderman"]

const dcHeros = ["superman", "batman", "flash"]


// marvelHeros.push(dcHeros)
// marvelHeros.push(dcHeros)

// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);+\

const anotherArry = [1, 2, 3, [4, 5, 6], [7]]

const realAnothrArry = anotherArry.flat(Infinity)

console.log(realAnothrArry);




console.log(Array.from("mayur"))


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));