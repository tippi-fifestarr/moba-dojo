import heroCardsArr from "./CharacterData.js"
import npcCardsArr from "./npcData.js"

const heroCardContainer = document.querySelector('#hero-card-container');
const heroName = document.querySelector('.hero-name')
const heroRole = document.querySelector('.hero-role')
// const heroImgBox = document.querySelector('#hero-img-box')
const heroImg = document.querySelector('#hero-card-img')
const heroPassive = document.querySelector('.hero-passive')
const heroS1 = document.querySelector('.hero-s1')
const heroS2 = document.querySelector('.hero-s2')
const heroS3 = document.querySelector('.hero-s3')


const npcCardContainer = document.querySelector('#npc-card-container')


heroName.innerText = heroCardsArr.aovHeroes[0].name
heroRole.innerText = heroCardsArr.aovHeroes[0].role
heroImg.src = heroCardsArr.aovHeroes[0].picture
heroPassive.innerText = `PASSIVE : ${heroCardsArr.aovHeroes[0].abilities.passive}`

heroS1.innerHTML = `<h4>S1</h4>`
for(var subAbil in heroCardsArr.aovHeroes[0].abilities.s1) {
  const subText = document.createElement("p");
  // charCard.classList.add("card")
  subText.innerText = `${subAbil} : ${heroCardsArr.aovHeroes[0].abilities.s1[subAbil]}`
  heroS1.appendChild(subText)
}
heroS2.innerHTML = `<h4>S2</h4>`
for(var subAbil in heroCardsArr.aovHeroes[0].abilities.s2) {
  const subText = document.createElement("p");
  // charCard.classList.add("card")
  subText.innerText = `${subAbil} : ${heroCardsArr.aovHeroes[0].abilities.s2[subAbil]}`
  heroS2.appendChild(subText)
}
heroS3.innerHTML = `<h4>ULT</h4>`
for(var subAbil in heroCardsArr.aovHeroes[0].abilities.s3) {
  const subText = document.createElement("p");
  // charCard.classList.add("card")
  subText.innerText = `${subAbil} : ${heroCardsArr.aovHeroes[0].abilities.s3[subAbil]}`
  heroS3.appendChild(subText)
}