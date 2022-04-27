var x=setInterval(function(){

    var maintenant=moment();
    var fin=moment(2023,'YYYY')
    var difference=fin-maintenant;
    var jour=fin.diff(maintenant,'days');
    const duree=moment.duration(difference,'milliseconds');
    var heures=duree._data.hours;
    var minutes=duree._data.minutes;
    var secondes=duree._data.seconds;
    
    document.getElementById('j').innerHTML=''+jour;
    document.getElementById('h').innerHTML=''+heures;
    document.getElementById('m').innerHTML=''+minutes;
    document.getElementById('s').innerHTML=''+secondes;











},1000);