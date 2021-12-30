function preload(){
    clown_nose=loadImage("https://i.postimg.cc/bvZbtd3v/clown-removebg-preview.png");
}
nosex= 0
nosey= 0 
function setup(){
    Canvas=createCanvas(300,300);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('the posenet is initialised');
}

function gotPoses(results){
    if (results.length>0)
    {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-10;
        nosey=results[0].pose.nose.y-10;
    }
}
function draw(){
    image(video,0,0,300,300);
    
    image(clown_nose,nosex,nosey,30,30);
}
function take_snapshot(){
    save('myfilterimage.png');
}