var url="https://reqres.in"

function getUser(id) {
    var ajaxSYNC = function(endpoint){
        var request = function request(endpoint){
            var xhr = new XMLHttpRequest();
            xhr.open("GET", endpoint, false);
            xhr.send();
            return xhr.responseText;
        }
        return {request: request}
    }();
    return JSON.parse(ajaxSYNC.request(url+"/api/users/"+id)).data.email;
}

function addUser(name, job){
    var ajaxSYNC = {
        request: function (name ,job){
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url + "/api/users" , false);
            xhr.send(JSON.stringify({"name" : name, "job" : job}));
            return xhr.status;
        }
    };
    return ajaxSYNC.request(name, job);
}

function delUser(id){
    var ajaxSYNC = {
        request: function (id){
            var xhr = new XMLHttpRequest();
            xhr.open("DELETE", url + "/api/users/" + id , false);
            xhr.send();
            return xhr.status;
        }
    };
    return ajaxSYNC.request(id);
}