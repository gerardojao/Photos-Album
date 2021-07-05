const d = document;
const inputSearch = d.getElementById("input-search")
const selector = d.querySelectorAll(".card")
const darkBtn = d.querySelector(".dark-theme-btn")
const label = d.querySelector(".form-label")
const ls= localStorage;
const selectors = d.querySelectorAll("[data-dark]")

inputSearch.addEventListener("click",()=>{
    inputSearch.removeAttribute("placeholder")
})

inputSearch.addEventListener("keyup",e=>{
    
    if(inputSearch.nextElementSibling.classList.contains("form-label"))
    inputSearch.nextElementSibling.classList.replace("form-label","form-js")
    if (inputSearch.value.length<1) {
        inputSearch.nextElementSibling.classList.replace("form-js","form-label")
    }
    if(e.key=="Escape"){
        e.target.value="";
        inputSearch.nextElementSibling.classList.replace("form-js","form-label")
    }
    selector.forEach(el=>el.textContent.toLowerCase().includes(e.target.value)
            ?el.classList.remove("filter")
            :el.classList.add("filter")) 
    }) 

let sun ="☀️", moon="🌙" ;
    
const lightMode = ()=>{
    selectors.forEach(el=>el.classList.remove("dark-mode"))   
    darkBtn.textContent=sun;
    inputSearch.classList.replace("items-dark","items-light")
    inputSearch.classList.remove("formulario__items-dark")
    label.classList.replace("items-dark","items-light")
    label.classList.remove("form-js")
    ls.setItem("theme","light")
}
const darkMode = ()=>{
    selectors.forEach(el=>el.classList.add("dark-mode"))
    darkBtn.textContent=moon;
    label.classList.add("form-js")
    inputSearch.classList.add("formulario__items-dark")
    inputSearch.classList.replace("items-light","items-dark")
    label.classList.replace("items-light","items-dark")
    ls.setItem("theme","dark")
       }
darkBtn.addEventListener("click",()=>{
    if(darkBtn.textContent===sun)darkMode()
    else lightMode()
})
    
d.addEventListener("DOMContentLoaded",()=>{ 
    if(ls.getItem("theme")==null)ls.setItem("theme","light")
    if(ls.getItem("theme")=="light")lightMode()
    if(ls.getItem("theme")=="dark")darkMode()
    
})
        
    


       
        
        