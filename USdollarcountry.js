var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    
    data.forEach(function country(task2){
        task2.currencies.forEach(function (currencytask){
        
        if(currencytask.code==="USD")
        {console.log("Country name-"+task2.name);
        }
    })
        
    });
    
}



