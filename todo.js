let ul= document.getElementById("list");
let li;

var addButton = document.getElementById("add");
addButton.addEventListener("click" ,addElement);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click" ,deleteElement);

var removelist= document.getElementById("removeall");
removelist.addEventListener('click', removeall)






function addElement()
{
    var input= document.getElementById('input');
    var item= input.value;
    
    var text = document.createTextNode(item);

    if (item === '') {
        var p = document.createElement('p')
        p.setAttribute('id','opa');
        p.textContent= "enter todo first";
        document.querySelector("body").appendChild(p);
       
       setTimeout(() => {
        var element = document.getElementById("opa");
            element.parentNode.removeChild(element);
       }, 1000);
       
        
        
    } else
    {
        //create li
        var li= document.createElement('li');
        //create input tag
        var checkbox = document.createElement("input");
        // setting type to checkbox
        checkbox.type = 'checkbox';
        // assigning id to the input tag 
        checkbox.setAttribute('id', "check");

        // create lable
        var lable= document.createElement('label');

        //adding tto the web page
        ul.appendChild(lable);
        li.appendChild(checkbox);
        lable.appendChild(text);
        li.appendChild(lable);
        ul.insertBefore(li,ul.childNodes[0]);
        input.value = ""


    }


}

function deleteElement()
{
    li=ul.children;
    
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
       while (li[index] && li[index].children[0].checked) {
           ul.removeChild(li[index]);
       }
        
    }
}
function removeall()
{
    li=ul.children;
    
    
    for (let i = 0; i<li.length; i++) {
        ul.removeChild(li[i])
        
    }
}