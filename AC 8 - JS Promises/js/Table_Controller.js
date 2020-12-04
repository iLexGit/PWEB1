
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
        this.Homeworld = Homeworld+"?format=json";
    }

    getHomeworld(){
        fetch(this.Homeworld)
        .then((response) => response.json())
        .then(function(data){alert(data.name);})
        .catch((error) => alert("GetHomeworld didn't work. Error: "+error));
    }
}

class Table{
    People = new Array;

    fillTable(){
        document.body.innerHTML+='<table id="Table_of_Contents"><tr><th>name</th><th>height</th><th>mass</th><th>Hair color</th><th>Skin color</th><th>Eye Color</th><th>Birth Year</th><th>Homeworld</th></tr></table>'
        this.getPeople.then(
            function(items){
                items = JSON.parse(items).results;
                for (let i=0; i<items.length ; i++){
                    tabla.People.push(new Person(items[i].name, items[i].height, items[i].mass, items[i].hair_color, items[i].skin_color, items[i].eye_color, items[i].birth_year, items[i].homeworld));
                }
                tabla.People.forEach(
                    function(person, i){
                        document.getElementById("Table_of_Contents").innerHTML+='<tr><td>'+person.name+'</td><td>'+person.height+'</td><td>'+person.mass+'</td><td>'+person.Hair_color+'</td><td>'+person.Skin_color+'</td><td>'+person.Eye_Color+'</td><td>'+person.Birth_Year+'</td><td><input type="submit" value="Click me!" onclick=tabla.People['+i+'].getHomeworld()></td></tr>';
                    }
                );
            },
            function(error){
                alert(error);
            }
        );
    }

    getPeople = new Promise(function(resolve, error){
            var req = new XMLHttpRequest();
            req.open("GET", "https://swapi.dev/api/people/?format=json", true);//false = async
            req.onload = function (){(req.status == 200) ? resolve(req.responseText) : error("GetPeople didn't work...");};
            req.send();
        });
}

var tabla = new Table;