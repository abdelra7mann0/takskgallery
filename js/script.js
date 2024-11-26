let fb =document.querySelector("#fb")
let modal = document.querySelector("div.modal")
let x = document.querySelector(".fa-solid")
let im = document.querySelector("#im")
let galleryy = document.querySelectorAll(".gallery img")
let interr = document.querySelector(".interhere img")
let lis = document.querySelectorAll(".items ul li")
let h= document.querySelector(".items h1")
let bt= document.querySelector(".items button")
let ul = document.querySelector(".items ul")


let arr = Array.from(galleryy)
fb.onclick=()=>{
    im.src=fb.src
        modal.style.display="block"
}

x.onclick=()=>{
    modal.style.display="none"
}

document.onkeydown=(e)=>{
    if(e.keyCode == "27"){
        modal.style.display="none"

    }
}


///////////////////////////////////////////
    arr.map((element)=>{
        element.onmouseover=()=>{
      
            interr.src=element.src

        }
    })


///////////////////////////////////////////////////////////////
let number= 1

bt.onclick=()=>{
 
    ul.innerHTML +=`<li>new item ${number}</li>`
    number++
}



ul.onmouseover=(e)=>{
    if(e.target.nodeName == "LI"){
        h.innerHTML=e.target.innerHTML
        for(let y = 0 ; y < ul.children.length ; y++){
           ul.children[y].classList.remove("active")
        }
        e.target.classList.add("active")

    }
}

// let u = prompt("write ur name")
// if(u == "abdo"){
//     window.location=("")
// }


let arrt=["#936a6a" , "red" , "blue" , "yellow"]
let p = 0
function backk ()
{

    document.body.style.backgroundColor=arrt[p]
    p++

    setTimeout("backk()",3000)
}
backk()