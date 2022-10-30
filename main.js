song1 = "";
song2 = "";
leftx = 0;
lefty = 0;
rightx = 0;
righty = 0;
score1 = 0;
song1playing = "";

function preload() {
    song1 = loadSound("1.mp3");
    song2 = loadSound("09 09.mp3");
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    canvas.position(515, 250);
    cam = createCapture(VIDEO);
    cam.hide();
    posenet = ml5.poseNet(cam, modelLoaded);
    posenet.on('pose', gotposes);
}
function draw() {
    image(cam, 0, 0, 400, 400);
    stroke("red");
    if (song1.isPlaying()) {
        song1playing = song1.isPlaying();
    }
    if (score1 > 0.2) {
        circle(leftx, lefty, 50);
        song2.stop();

    }
    if (song1playing == false) {
        song1.play();
        document.getElementById("song").innerHTML = "Harry Potter";
    }
}

function modelLoaded() {
    console.log("model is loaded");
}
function gotposes(results) {
    if (results.length) {
        leftx = results[0].pose.leftWrist.x;
        score = leftx;
        lefty = results[0].pose.leftWrist.y;
        rigthx = results[0].pose.rightWrist.x;
        rigthy = results[0].pose.rightWrist.y;
    }
}