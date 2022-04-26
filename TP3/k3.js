

  const container=document.getElementById("container");
  const gauche=document.getElementById("gauche");
  const droite=document.getElementById("droite");
  const PHOTO=document.getElementById("photo");

  
images=["images (4).jpeg","images (5).jpeg","images (6).jpeg","images (7).jpeg","hu.jpg","images (8).jpeg","img.jpeg","téléchargement (3).jpeg"];

var nbr=images.length;

var p=0;
setInterval(()=>{
  if(p>nbr-1){
      p=0;

    }
        PHOTO.setAttribute("src", `../TP3/images/${images[p]}`);
       p++;

}, 4000)
document.body.onload=function(){
  PHOTO.setAttribute("src", `../TP3/images/${images[0]}`);

droite.onclick=function() {

      if(p<0){
            p=nbr-1;
        }
        PHOTO.setAttribute("src", `../TP3/images/${images[p]}`);
          p--;
      }
gauche.onclick=function() {
   
        if(p>nbr-1){
            p=0;
         }

       PHOTO.setAttribute("src", `../TP3/images/${images[p]}`);
           p++;
        }
}









    