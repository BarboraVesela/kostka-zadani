console.log('funguju!');

let number = 1
const dice = document.querySelector('.dice')
const throwDice = () => {
	number = number + 1
	if (number === 7) {
		number = 1
	}
	dice.src = `img/side${number}.svg`
}
document.addEventListener('keydown', throwDice)

/* 
///// random 
let number = 1
const dice = document.querySelector('.dice')

const throwDice = () => {
    number =  Math.floor(Math.random()*6) + 1 
    dice.src = `img/side${number}.svg` 
}


document.addEventListener('keydown', throwDice) 
*/ 