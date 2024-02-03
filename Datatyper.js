/**
 * Data typer, olika sätt att spara data på inom programmering
 * olika typer av data bör sparas i rätt data typ, därav finns det
 * olika datatyper
 */


//Primitiva datatyper

/**
 * String | Sträng - Text
 * ungefär som att klippa ut bokstäver ur en tidning
 * 
 */

// Keyword, variabel namn, datatyp
let playerName = 'Suri'
let polishName = "Semir"

// Integer / Int | Heltal, siffror på en miniräknare, går att göra algebra med
let health = 5
let playerAmmount = 2

// Boolean | booleskt, En datatyp som antigen har värdet 'true/sant' eller 'false/falskt'
let isPlayerDead = true


/**
 * Icke Primitiva datatyper
 */

// Object | Objekt, En icke primitiv datatype som kan va olika formet
// key value pairs
// 'name' är en key, 'Suri' är ett value
let player1 = {
  name: 'Suri',
  friend: polishName,
  health: 100,
  alive: isPlayerDead
}


// console.log(Object.keys(player1)[2])

// let playerNameList = ["suri", "semir"]
// console.log(playerNameList[1])

