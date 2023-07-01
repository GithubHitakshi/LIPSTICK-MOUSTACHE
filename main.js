nose_x = "";
nose_y = "";
lip_x = "";
lip_y = "";
draw_m = false;
draw_l = false;

function preload() {
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lipstick = loadImage("l1.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    pose_model = ml5.poseNet(video, model_loaded);
    pose_model.on("pose", get_results);
}

function draw() {
    image(video, 0, 0, 300, 300);
    if(draw_m==true){
       // lipstick.remove();
        image(moustache, nose_x-25, nose_y, 50, 50);

    }

    if(draw_l==true){
       // moustache.erase();
        image(lipstick, lip_x-25, lip_y-5, 50, 30);
    }

    
    
   
   
    
    




}

function take_pic() {
    save("mypic.png");
}

function model_loaded() {
    console.log("Model Loaded Successfully");
}

function get_results(r) {
    if (r.length > 0) {
        //console.log(r);
        nose_x = r[0].pose.nose.x;
        nose_y = r[0].pose.nose.y;
        lip_x = r[0].pose.nose.x;
        lip_y = r[0].pose.nose.y + 25;

    }
}

function moustache_click(){
    draw_m = true;
    draw_l=false;
}

function lipstick_click(){
    draw_l=true;
    draw_m=false;
}