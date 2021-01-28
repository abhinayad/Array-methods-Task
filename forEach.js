var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    
    
    data.forEach(function country(task2){
        
        console.log("Country name-"+task2.name," Capital-"+task2.capital," Flag-"+task2.flag);

    });

}



