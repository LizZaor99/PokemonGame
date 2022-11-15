let PlayerAttack
let EnemyAttack
let PlayerLives = 3
let EnemyLives = 3
let CombatResult

function Start(){

    let AttackSelectSection = document.getElementById("AttackSelect")
    AttackSelectSection.style.display = "none"

    let RestartSection = document.getElementById("Restart")
    RestartSection.style.display = "none"

    let PetButton = document.getElementById("PetSelectButton")
    PetButton.addEventListener("click", PlayerPetSelection)

    let FireButton = document.getElementById("FireButton")
    FireButton.addEventListener("click", FireAttack)

    let WaterButton = document.getElementById("WaterButton")
    WaterButton.addEventListener("click", WaterAttack)

    let PlantButton = document.getElementById("PlantButton")
    PlantButton.addEventListener("click", PlantAttack)

    let RestartButton = document.getElementById("RestartButton")
    RestartButton.addEventListener("click", Restart)
}

function Random(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function RamdomAttack(){
    EnemyAttack = Random(1,3)

    if(EnemyAttack == 1) {
      EnemyAttack = "Fire"
    } else if (EnemyAttack == 2) {
      EnemyAttack = "Water"
    } else if (EnemyAttack == 3) {
      EnemyAttack = "Plant"
    }
    Combat()
    Message()
    Lives()
}

//Select the Pet to player
function PlayerPetSelection(){
    let AttackSelectSection = document.getElementById("AttackSelect")
    AttackSelectSection.style.display = "block"

    let PetSelectSection = document.getElementById("PetSelect")
    PetSelectSection.style.display = "none"

    //variables
    let Magikarp = document.getElementById("Magikarp")
    let Chikorita = document.getElementById("Chikorita") 
    let Charmander = document.getElementById("Charmander")
    let Charizard = document.getElementById("Charizard")
    let Eevee = document.getElementById("Eevee")
    let Bulbasaur = document.getElementById("Bulbasaur")
    let SpanPetPlayer= document.getElementById("PetPlayer")

    //Section PetSelect
    if(Magikarp.checked){
        SpanPetPlayer.innerHTML = "Magikarp"
    }else if(Chikorita.checked){
        SpanPetPlayer.innerHTML = "Chikorita"
    }else if(Charmander.checked){
        SpanPetPlayer.innerHTML = "Charmander"
    }else if(Charizard.checked){
        SpanPetPlayer.innerHTML = "Charizard"
    }else if(Eevee.checked){
        SpanPetPlayer.innerHTML = "Eevee"
    }else if(Bulbasaur.checked){
        SpanPetPlayer.innerHTML = "Bulbasaur"
    } 
    
    EnemyPetSelection() 
}
//Select the Pet to enemy 
function EnemyPetSelection(){
    //variables
    let Pet = Random(1,6)
    let EnemyPetSpan = document.getElementById("EnemyPet")

    //Section AttackSelect
    if(Pet == 1) {
        EnemyPetSpan.innerHTML = "Magikarp"
      } else if (Pet == 2) {
        EnemyPetSpan.innerHTML = "Chikorita"
      } else if (Pet == 3) {
        EnemyPetSpan.innerHTML = "Charmander"
      }else if (Pet == 4) {
        EnemyPetSpan.innerHTML = "Charizard"
      }else if (Pet == 5) {
        EnemyPetSpan.innerHTML = "Eevee"
      }else if (Pet == 6) {
        EnemyPetSpan.innerHTML = "Bulbasaur"
      }
    let FireButton = document.getElementById("FireButton")
    FireButton.disabled=false

    let WaterButton = document.getElementById("WaterButton")
    WaterButton.disabled=false

    let PlantButton = document.getElementById("PlantButton")
    PlantButton.disabled=false
}
//Attacks
function FireAttack(){
  PlayerAttack="Fire"
  RamdomAttack()
}

function WaterAttack(){
  PlayerAttack="Water"
  RamdomAttack()
}

function PlantAttack(){
  PlayerAttack="Plant"
  RamdomAttack()
}

// Function of combat
function Combat(){

  let SpanPlayerLives = document.getElementById("PlayerLive")
  let SpanEnemyLives = document.getElementById("EnemyLive")

  if (PlayerAttack == EnemyAttack) {
    CombatResult = "Draw"
  } else if ((PlayerAttack == "Fire" && EnemyAttack == "Plant") || (PlayerAttack == "Water" && EnemyAttack == "Fire") || (PlayerAttack == "Plant" && EnemyAttack == "Water")){
    CombatResult = "You won"
    EnemyLives--
    SpanEnemyLives.innerHTML = EnemyLives
  } else {
    CombatResult = "You Lost"
    PlayerLives--
    SpanPlayerLives.innerHTML = PlayerLives
  }
}
//To show the messages with the results of combat
function Message(){

  let MessageSection = document.getElementById("Messages")
  let Text = document.createElement("p")
  Text.innerHTML= "Your Pet attacked with " + PlayerAttack + ", and the Pet of the enemy attacked with " + EnemyAttack + " - " + CombatResult
  MessageSection.appendChild(Text)
}

//Function of the lives
function Lives(){
  if (EnemyLives==0){
    LivesMessage("YOU WIN 🎉")
  }else if(PlayerLives==0){
    LivesMessage("YOU LOST 😔")
  }
}

function LivesMessage(Result){
  let MessageSection = document.getElementById("Messages")
  let Text = document.createElement("p")
  Text.innerHTML= Result
  MessageSection.appendChild(Text)

    let FireButton = document.getElementById("FireButton")
    FireButton.disabled=true

    let WaterButton = document.getElementById("WaterButton")
    WaterButton.disabled=true

    let PlantButton = document.getElementById("PlantButton")
    PlantButton.disabled=true

    let RestartSection = document.getElementById("Restart")
    RestartSection.style.display = "block"
}

function Restart(){
  location.reload()
}

window.addEventListener("load", Start)
