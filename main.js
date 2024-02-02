m="";
m2="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;


function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

    
}

function draw(){
    image(video,0,0,300,300);
}

function preload(){
  m=loadSound("music.mp3");
  m2=loadSound("music2.mp3");
}

function modelLoaded(){
    console.log('posenet is intialized');
}


function gotPoses(results){
  if(results.length>0){
    console.log(results);
    scoreRightWrist=results[0].pose.keypoints[9].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log("scoreRightWrist ="+scoreRightWrist+"scoreLeftWrist="+scoreLeftWrist);
    

  }
}


