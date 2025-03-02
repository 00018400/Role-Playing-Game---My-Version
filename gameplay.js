//Получаем доступ ко всему важному из HTML
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const text = document.querySelector('#text')
const img = document.querySelector('#mainphoto')

button1.onclick = goToDrakkveld;
button2.onclick = goToCursedForest;
button3.onclick = goToRottingCatacombs;
button4.onclick = goToCrimsonPass;
button5.onclick = goToForsakenMonastery;
button6.onclick = goToBottomlessRift;

const locations = [
    {
        name: "Drakkveld",
        "button text": ["Go to Noble District", "Go to Military Distrcict", "Go to Market District", "Go to Slums", "Go to Outskirts", "Get out of town"],
        "button functions": [goToNobleDistrict, goToMilitaryDistrcict, goToMarketDistrict, goToSlums, goToOutskirts, getOut],
        text: "You are now in the main square of city, choose where to go"
    },
    {
        name: "in map",
        "button text": ["Go to the Drakkveld", "Go to The Cursed Forest", "Go to The Rotting Catacombs", "Go to The Crimson Pass", "Go to The Forsaken Monastery", "Go to The Bottomless Rift"],
        "button functions": [goToDrakkveld, goToCursedForest, goToRottingCatacombs, goToCrimsonPass, goToForsakenMonastery, goToBottomlessRift],
        text: "You see the map, choose where to go"
    },
    {
        name: "in market",
        "button text": ["Blacksmith's Forge", "Apothecary's Stall", "Curio Merchant", "The Devil's Dice", "Whispering Pages Store", "Go back to Main Square"],
        "button functions": [goToDrakkveld, goToCursedForest, goToRottingCatacombs, goToCrimsonPass, goToForsakenMonastery, goToBottomlessRift],
        text: "You see the map, choose where to go"
    }
]

function update(location) {
    button1.innerText = location["button text"][0]; 
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button5.innerText = location["button text"][4];
    button6.innerText = location["button text"][5];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
    button5.onclick = location["button functions"][4];
    button5.onclick = location["button functions"][5];
    button6.onclick = location["button functions"][5];
    text.innerHTML = location.text;
}



function getOut() {;
    update(locations[1]);
}


//Главные местности
function goToDrakkveld() {
    update(locations[0]);
}
function goToCursedForest() {

}
function goToRottingCatacombs() {

}
function goToCrimsonPass() {
    
}
function goToForsakenMonastery() {
    
}
function goToBottomlessRift() {

}
//Внутри замка
function goToNobleDistrict() {

}
function goToMilitaryDistrcict() {

}
function goToMarketDistrict() {
    update(locations[2]); 
}
function goToSlums() {
    
}
function goToOutskirts() {
    
}
function goToBottomlessRift() {

}


//Внутри Market District
function goToBlacksmithForge() {

}
function goToApothecaryStall() {

}
function goToCurioMerchant() {
    
}
function goToTheDevilDice() {
    
}
function goToWhisperingPagesStore() {
    
}
function goToApothecaryStall() {
    
}