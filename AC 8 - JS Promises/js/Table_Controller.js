
var url = "https://swapi.dev/api/"

class Person{
    constructor(name, height, mass, Hair_color, Skin_color, Eye_Color, Birth_Year, Homeworld){
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.Hair_color = Hair_color;
        this.Skin_color = Skin_color;
        this.Eye_Color = Eye_Color;
        this.Birth_Year = Birth_Year;
        this.Homeworld = Homeworld;
    }
    getHomeworld(){

    }
}

class Table{
    People = new Array;

    fillTable(){
        console.log("Filling...");
        document.body.innerHTML+='<table id="Table_of_Contents"><tr><th>name</th><th>height</th><th>mass</th><th>Hair color</th><th>Skin color</th><th>Eye Color</th><th>Birth Year</th><th>Homeworld</th></tr></table>'
        this.getPeople.then(
            function(items){
                console.log("aquí");
                console.log(items);
            },
            function(e){
                console.log(e);
            }
        );
        
            /*function(items){
                console.log(items);
            },
            function(e){
                console.log("error")
            },
        );
        console.log();
        /*this.getPeople().then(
            this.People.forEach(
                function(person){
                    document.body.innerHTML+='<tr><td>'+person.name+'</td><td>'+person.height+'</td><td>'+person.mass+'</td><td>'+person.Hair_color+'</td><td>'+person.Skin_color+'</td><td>'+person.Eye_Color+'</td><td>'+person.Birth_Year+'</td><td>'+person.Homeworld+'</td></tr>'
    
                }
            )
        );
        /*console.log("Get: ");
        console.log(this.People);*/
    }

    getPeople = new Promise(function(resolve, error){
            console.log("Getting people...");
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", false);
            xhr.send();
            console.log(resolve);
            console.log(error);
            }
        );
        /*let items = JSON.parse(ajaxSYNC.request("https://swapi.dev/api/people/?format=json")).results;
        for (let i=0; i<items.length ; i++){
            this.People.push(new Person(items[i].name, items[i].height, items[i].mass, items[i].hair_color, items[i].skin_color, items[i].eye_color, items[i].birth_year, items[i].homeworld));
        }
        console.log(this.People);*/
        //return JSON.parse(ajaxSYNC.request("https://swapi.dev/api/people/?format=json")).results;
    //}
}

var tabla = new Table;

function clicked(){
    console.log();
    rowHTML = '<tr><td>'+name+'</td><td>'+height+'</td><td>'+mass+'</td><td>'+Hair_color+'</td><td>'+Skin_color+'</td><td>'+Eye_Color+'</td><td>'+Birth_Year+'</td><td><input type="submit" value="Click me!" onclick=clicked()></td></tr>'
    document.getElementById("Table_of_Contents").innerHTML+=rowHTML;
}