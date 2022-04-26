const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let main=document.getElementById('main');
let form=document.getElementById('form');
let search=document.getElementById('search')

getMovies(APIURL);
function getMovies(url)
{
fetch(url).then(res=>res.json()).then(data=>{
    showMovies(data.results);
})
}


function showMovies (data){
    main.innerHTML=""
    data.forEach(film => {
    
    const{ title,poster_path,vote_average,overview}=film;
        
        let filmBig=document.createElement('div')
         filmBig.classList.add('film');
         let img=document.createElement('img')
         img.setAttribute("src",IMGPATH+poster_path)
         img.setAttribute("alt",title)
         filmBig.appendChild(img)
         let gom=document.createElement('div')
         gom.classList.add("infofilm")
         let h3=document.createElement("h3")
         h3.innerHTML=`${title}`
         gom.appendChild(h3)
         let span=document.createElement('span')
         span.classList.add(getcolor(vote_average))
         span.innerHTML=`${vote_average}`
         gom.appendChild(span)
         filmBig.appendChild(gom)
         let overviews=document.createElement('div')
         overviews.classList.add('overviews')
         overviews.innerHTML=`${overview}`
         filmBig.appendChild(overviews)
         main.appendChild(filmBig);


    })
}
function getcolor  (vote) {
          if(vote>=8) {
           return'green'
          }
          else
          if(vote>=5) {
            return'orange'
           } else{
               return 'red'
           }     
         }
 search.addEventListener('input',(e)=>{


          const searchTerm =search.value;
      
          if(searchTerm){
              getMovies(SEARCHAPI+searchTerm)
          }else{
            getMovies(APIURL)
          }cr

         })
let cpt=1
window.addEventListener('scroll',(e)=>{
    

const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
let page="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
if (scrollTop+scrollHeight>=clientHeight-10) {

    let page="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+cpt++;
    getMovies(page);
    


}





})
    
        






