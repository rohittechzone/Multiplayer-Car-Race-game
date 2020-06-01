var playercount,gamestate,form;
var database;
var game;
function setup(){
    createCanvas(400,400)
    
    database = firebase.database();

    game = new Game();
}

function draw(){
    background("white");
    game.getstate();
    game.start();
}


