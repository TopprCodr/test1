const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, crazyBall,basketBall,platform;

function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;

    var static_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,590,600,20,static_options);
    World.add(world,ground);
    platform = Bodies.rectangle(100,520,170,120,static_options);
    World.add(world,platform);

    var bb_options ={
        restitution: 0.5,
        
    }
    var cb_options ={
        restitution: 1.2
    }

    basketBall = Bodies.circle(100,100,30, bb_options);
    World.add(world,basketBall);
    crazyBall = Bodies.circle(190,100,15, cb_options);
    World.add(world,crazyBall);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    
    rect(ground.position.x,ground.position.y,600,20);
    fill("green");
    rect(platform.position.x,platform.position.y,170,120);
    fill("yellow");
    ellipseMode(RADIUS)
    ellipse(crazyBall.position.x, crazyBall.position.y, 15, 15);
    ellipse(basketBall.position.x, basketBall.position.y, 30, 30);
}