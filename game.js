var username = "artursnik";

var socket = io.connect("https://tictactoe.info/", {transports: ['websocket']});
setupSocket();

function setupSocket() {
    socket.on('gameState', function (jsonGameState) {
        const gameData = JSON.parse(jsonGameState);
        const username = document.getElementById("username");
        const gold = document.getElementById("gold");
        const shovelName = document.getElementById("Nshovel");
        const shovelOwned = document.getElementById("Oshovel");
        const shovelCost = document.getElementById("Cshovel");
        const excavatorName = document.getElementById("Nexcavator");
        const excavatorOwned = document.getElementById("Oexcavator");
        const excavatorCost = document.getElementById("Cexcavator");
        const mineName = document.getElementById("Nmine");
        const mineOwned = document.getElementById("Omine");
        const mineCost = document.getElementById("Cmine");
    //=================================================================================================
        username.innerHTML = gameData.username;
        gold.innerHTML = gameData.gold
        shovelName.innerHTML = gameData.equipment.shovel.name
        shovelOwned.innerHTML = gameData.equipment.shovel.numberOwned
        shovelCost.innerHTML = gameData.equipment.shovel.cost
        excavatorName.innerHTML = gameData.equipment.excavator.name
        excavatorOwned.innerHTML = gameData.equipment.excavator.numberOwned
        excavatorCost.innerHTML = gameData.equipment.excavator.cost
        mineName.innerHTML = gameData.equipment.mine.name
        mineOwned.innerHTML = gameData.equipment.mine.numberOwned
        mineCost.innerHTML = gameData.equipment.mine.cost
    });
}
function initializeGame() {
    socket.emit("register", username);
}
function clickGold() {
    socket.emit("clickGold");
}
function buyEquipment(equipmentID) {
    socket.emit("buy", equipmentID);
}
