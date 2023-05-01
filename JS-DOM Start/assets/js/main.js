const inp=document.querySelector("input");
const color=document.getElementById("myColor");
const ls=document.getElementById("list");
let text=[];
function myFunction(){
    if (inp.value.trim() != "") {
        if (text.includes(inp.value.trim()) === false) {
            text.push(inp.value.trim());
        
           ls.style.color=myColor.value;
            inp.value = "";
            color.value="#ffffff"
            fillList();

        }
        else{
            alert("yenisini elave edin")
        }
    }
    else {
        alert("Nese daxil et")
    }
}
function fillList() {
    let res = text.reduce(
        (result, val) => result += `<ul>${val}</ul>`, ''
    );
    ls.innerHTML = res;
}