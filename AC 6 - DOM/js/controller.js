var HTML_string = '<section class="horizontal_flex">'+
                        '<label id="nom">Nom</label>'+
                        '<label id="unitats">Unitats</label>'+
                        '<label id="preu_unitat">Preu unitat</label>'+
                        '<label id="preu_total">Preu total</label>'+
                        '<label id="opcions">Opcions</label>'+
                    '</section><section id="item_list">'+
                    '</section>'+
                    '<section class="total_area">'+
                        '<label id="total_label">Total:</label>'+
                        '<label id="total">0€</label>'+
                        '<div class="input"></div>'+
                    '</section>'+
                    '<section class="horizontal_flex">'+
                            '<input class="input_doble"  id="new_nom" type="text">'+
                            '<input class="input" id="new_unitats" type="text">'+
                            '<input class="input" id="new_preu_unitat" type="text">'+
                            '<input class="input" type="text" placeholder="--" disabled >'+
                            '<div class="button_area">'+
                            '<button id="button" onclick="addItem()">'+
                                '<svg class="svgIcon" viewBox="0 0 512 512"><g><g><g><path d="M501.333,106.667H10.667C4.779,106.667,0,111.445,0,117.333v320C0,478.507,33.493,512,74.667,512h362.667    C478.507,512,512,478.507,512,437.333v-320C512,111.445,507.221,106.667,501.333,106.667z M490.667,437.333    c0,29.419-23.915,53.333-53.333,53.333H74.667c-29.419,0-53.333-23.915-53.333-53.333V128h469.333V437.333z" fill="#707070"  /></g></g><g   ><g><path d="M256,0c-58.816,0-106.667,47.851-106.667,106.667v74.667c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667    v-74.667c0-47.061,38.272-85.333,85.333-85.333s85.333,38.272,85.333,85.333v74.667c0,5.888,4.779,10.667,10.667,10.667    c5.888,0,10.667-4.779,10.667-10.667v-74.667C362.667,47.851,314.816,0,256,0z" fill="#707070"  /></g> </g><g   ><g><path d="M160,170.667c-17.643,0-32,14.357-32,32c0,17.643,14.357,32,32,32s32-14.357,32-32    C192,185.024,177.643,170.667,160,170.667z M160,213.333c-5.867,0-10.667-4.8-10.667-10.667c0-5.867,4.8-10.667,10.667-10.667    c5.867,0,10.667,4.8,10.667,10.667C170.667,208.533,165.867,213.333,160,213.333z" fill="#707070"  /></g></g><g   ><g><path d="M352,170.667c-17.643,0-32,14.357-32,32c0,17.643,14.357,32,32,32c17.643,0,32-14.357,32-32    C384,185.024,369.643,170.667,352,170.667z M352,213.333c-5.867,0-10.667-4.8-10.667-10.667c0-5.867,4.8-10.667,10.667-10.667    c5.867,0,10.667,4.8,10.667,10.667C362.667,208.533,357.867,213.333,352,213.333z" fill="#707070"  /></g></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g></g>'+
                                '</svg>'+
                            '</button>'+
                        '</div>'+
                    '</section>';

class Cistella{

}

class Items{

}

function updateTotalPrice(){
    var temp = 0.0;
    for(let i = 0; i< num_items ; i++){
        temp+=parseFloat(document.getElementById("price_" + i).value);
    }
    document.getElementById("total").innerHTML=temp.toString() + "€";
}

var num_items;
function buildHTML(){
    num_items=0;
    document.body.innerHTML+= HTML_string;

}

function addItem(){
    let new_name = document.getElementById("new_nom").value;
    let new_unitats = document.getElementById("new_unitats").value;
    let new_preu_unitat = document.getElementById("new_preu_unitat").value;
    let preu = (new_unitats*new_preu_unitat).toString();

    let article = document.createElement('article');
    article.className="horizontal_flex";
    article.id="item_" + num_items;

    article.innerHTML+='<input id="name_' + num_items + '" class="input_doble" type="text" value="'+new_name+'">'+
                        '<input id="amount_' + num_items + '" class="input" type="text" value="'+new_unitats+'">'+
                        '<input id="uni_price_' + num_items + '" class="input" type="text" value="'+new_preu_unitat+'">'+
                        '<input id="price_' + num_items + '" class="input" type="text" value="'+preu+'" disabled>'+
                        '<div class="button_area">'+
                            '<button id="edit_button_'+num_items+'" onclick="updateItem('+num_items+')">'+
                                '<svg class="svgIcon" viewBox="0 0 512 512"><g><g><g><path d="M400,0H112C50.144,0,0,50.144,0,112v288c0,61.856,50.144,112,112,112h288c61.856,0,112-50.144,112-112V112     C512,50.144,461.856,0,400,0z M480,400c0,44.183-35.817,80-80,80H112c-44.183,0-80-35.817-80-80V112c0-44.183,35.817-80,80-80     h288c44.183,0,80,35.817,80,80V400z" fill="#707070"  /><path d="M160,112h-32c-8.837,0-16,7.163-16,16v32c0,8.837,7.163,16,16,16h32c8.837,0,16-7.163,16-16v-32     C176,119.163,168.837,112,160,112z" fill="#707070"  /><path d="M160,224h-32c-8.837,0-16,7.163-16,16v32c0,8.837,7.163,16,16,16h32c8.837,0,16-7.163,16-16v-32     C176,231.163,168.837,224,160,224z" fill="#707070"  /><path d="M160,336h-32c-8.837,0-16,7.163-16,16v32c0,8.837,7.163,16,16,16h32c8.837,0,16-7.163,16-16v-32     C176,343.163,168.837,336,160,336z" fill="#707070"  /><rect x="208" y="128" width="192" height="32" fill="#707070"  /><rect x="208" y="240" width="192" height="32" fill="#707070"  /><rect x="208" y="352" width="192" height="32" fill="#707070"  /></g> </g></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g><g   ></g></svg>'+
                            '</button>'+
                            '<button id="delete_button'+num_items+'"onclick="deleteItem('+num_items+')">'+
                                '<svg class="svgIcon" viewBox="-10 -10 150 150"><g><path d="M70.086,112.138c3.867,0,7.009-3.142,7.009-7.009V49.06c0-3.869-3.142-7.008-7.009-7.008c-3.869,0-7.008,3.14-7.008,7.008v56.069C63.078,108.996,66.217,112.138,70.086,112.138z M126.155,14.017h-21.026V7.009C105.129,3.14,101.987,0,98.12,0H42.052c-3.869,0-7.008,3.14-7.008,7.009v7.008H14.018c-3.872,0-7.009,3.14-7.009,7.009s3.137,7.008,7.009,7.008v98.12c0,7.741,6.276,14.018,14.017,14.018h84.103c7.741,0,14.018-6.276,14.018-14.018v-98.12c3.867,0,7.008-3.14,7.008-7.008S130.022,14.017,126.155,14.017z M112.138,126.154H28.035v-98.12h84.103V126.154zM49.061,112.138c3.869,0,7.008-3.142,7.008-7.009V49.06c0-3.869-3.14-7.008-7.008-7.008s-7.009,3.14-7.009,7.008v56.069C42.052,108.996,45.192,112.138,49.061,112.138z M91.112,112.138c3.867,0,7.008-3.142,7.008-7.009V49.06c0-3.869-3.141-7.008-7.008-7.008s-7.009,3.14-7.009,7.008v56.069C84.104,108.996,87.245,112.138,91.112,112.138z" fill="#707070"/></g></svg>'+
                            '</button>'+
                        '</div>';
    
    document.getElementById("item_list").appendChild(article);

    
    num_items++;
    updateTotalPrice();
    
    document.getElementById("new_nom").value = "";
    document.getElementById("new_unitats").value = "";
    document.getElementById("new_preu_unitat").value = "";
    
}

function updateItem(id){
    let amount = document.getElementById("amount_" + id).value;
    let uni_price = document.getElementById("uni_price_" + id).value;
    document.getElementById("price_" + id).value = (amount*uni_price).toString();
    updateTotalPrice();
}

function deleteItem(id){
    console.log("Deleting Item: " + id);
    let art_to_delete = document.getElementById("item_"+id);
    art_to_delete.parentNode.removeChild(art_to_delete);
    updateTotalPrice();
}