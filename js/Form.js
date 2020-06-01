class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Raseing Realtime Game");
        title.position(150,0);
        var input = createInput("Name");
        input.position(200,200);
        var button = createButton("Submit");
        button.position(200,275);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount += 1;
            player.update(name);
            player.updateCount(playercount);
            var greeting = createElement('h3');
            greeting.html("Hello "+name);
            greeting.position(200,200);    
        })
    }
}