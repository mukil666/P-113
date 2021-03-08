function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(580, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);
    
    rect(90, 390, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 400, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(580, 400, 80);
    

}

function take_snapshot(){
    save('My_pic.png');
}

function filter_tint()
{
  tint_color = document.getElementById("color_name").value;
}
