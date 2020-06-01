class Game{
    constructor(){

    }
    getstate(){
     var gamestateref = database.ref("GameState");
     gamestateref.on("value",function(data){
         gamestate = data.val();
     });

    }

    update(state){
      database.ref("/").update({
          GameState : state
      });

    }

    start(){
      if(gamestate === 0){
       var player = new Player();
        player.getcount();
        form = new Form();
        form.display();
      }
    }
}