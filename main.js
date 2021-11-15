img="";
Status="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHtml="Status:Detecting Objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("dog",45,80);
    noFill();
    stroke("#FF0000");
rect(30,60,450,350);
fill("#FF0000");
text("cat",311,80);
noFill();
stroke("#FF0000");
rect(300,60,100,350);
}
function modelLoaded(){
    console.log("Model Loaded!")
    Status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
console.log(error);
    }
    else{console.log(results);
    }
    
}