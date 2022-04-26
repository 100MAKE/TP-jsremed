      
      let boite2=document.getElementById("boite2");
      let buttons=document.querySelectorAll("button")


     buttons.forEach((btn,key)=>{
       btn.addEventListener("click", ()=>{
        let div1 = document.createElement('div');
        div1.classList.add("case","case"+(key+1))
        div1.textContent=btn.getAttribute('data-message')
        boite2.appendChild(div1)
       setTimeout(function(){boite2.removeChild(div1)},4000)})
     
     })
    
  
