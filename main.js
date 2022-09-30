function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tQpP6x7a0/model.json",modelLoaded)
}
function modelLoaded(){
    console.log("modelLoaded")
    classifier.classify(gotresult)
}
function gotresult(error,results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
       
        random_r= Math.floor(Math.random()*255)+1
        random_g= Math.floor(Math.random()*255)+1
        random_b= Math.floor(Math.random()*255)+1
        document.getElementById("hear").style.color="rgb("+random_r+","+random_g+","+random_b + ")"
        document.getElementById("accuarcy").style.color="rgb("+random_g+","+random_b+","+random_r + ")"
 
        document.getElementById("hear").innerHTML=results[0].label
        document.getElementById("accuarcy").innerHTML=results[0].confidence.toFixed(2)*100 +"%"
 

 label= results[0].label
 if(label=="Background Noise"){
    document.getElementById("image_dedecte").src="bg.png"
 }else if(label=="Barrking"){
    document.getElementById("image_dedecte").src="dog.png"
 }else if(label=="Meowing"){
    document.getElementById("image_dedecte").src="CAT.jpg"
 }else if(label=="Mooing"){
    document.getElementById("image_dedecte").src="cow.jpg"
 }else if(label=="Roar"){
    document.getElementById("image_dedecte").src="roar.jpg"
 }
 
 
    }

}





// function Timer() {
//     window.setInterval("changeImage()", 5000);
//   }

//   function changeImage() {   
//     var BackgroundImg["./Img/Bg1.jpg",
//                       "./Img/Bg2.jpg",
//                       "./Img/Bg3.jpg",
//                       "./Img/Bg4.jpg"];
//     var i = Math.floor((Math.random() * 3));
//     var bgImg = document.body.style.backgroundImage();
//     bgImg.url = BackgroundImg[i];
//   }
// }
// window.onload = function () {
//     // Array of Images
//      var backgroundImg=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyB57zuc4bms-hDtWMa-4BZvscIlJDm4r7a9WLaO4SAxUvKM-DDA",
//                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBinSpWOvAtkxjmkf709O3rjH2ObRbWAEn9s0JcWaeL6LMtCbOrQ",
//                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY4J2qIFqkuDnABMzeypywbMSZL1cleS8vpySz0KD02wOYORU1g",
//                        "https://encrypted-