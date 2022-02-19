song = " ";
rightwristX = 0;
leftwristX = 0;
rightwristY = 0;
leftwristY = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(430,250);

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is intialized");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;

     
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    console.log("rightwristX = "+ rightwristX+ "rightwristY = "+ rightwristY+ "leftwristX = "+ leftwristX+ "leftwristY = "+ leftwristY );
    
}
    
    
}

function preload(){
    song = loadSound("music.mp3");
}

function draw(){
    image(video, 0,0,500,600);

    fill("red");
    stroke("red");

    circle(leftwristX,leftwristY,20);
    leftwristY1 = Number(leftwristY);
    remove_decimal=floor(leftwristY1);
    volume= remove_decimal/500;
    document.getElementById("Volume").innerHTML = "Volume = "+ volume;
    song.setVolume(volume);
}

function play(){
    song.play(); 
    song.setVolume(1);
    song.rate(1);

}