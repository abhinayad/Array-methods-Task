var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    
    

    var countryarr=data.filter(function country(task1){
        
        return task1.region=="Asia"

    })

console.log(countryarr);
}



