const $canvas = document.getElementById('gameCanvas');
// const $vidcanvas = document.getElementById('videoCanvas')
const context = $canvas.getContext('2d');
// const vidcontext = $vidcanvas.getContext('2d');
const game = new Game($canvas);

window.onload = function() {

document.getElementById("start-game-text").onclick = function() {
    
    game.startGame();

}}; 