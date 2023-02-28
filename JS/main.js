import data from './data.json' assert {type:'json'}




const homebtn = document.getElementById('homebtn')
const aboutbtn = document.getElementById('aboutbtn')
const projbtn = document.getElementById('projbtn'),
    homebtn2 = document.getElementById('homebtn2'),
    aboutbtn2 = document.getElementById('aboutbtn2'),
    projbtn2 = document.getElementById('projbtn2'),
    viewproj3 = document.getElementById('viewproj3')


function reset (){
    homebtn.classList.remove("mnavactive")
    aboutbtn.classList.remove("mnavactive")
    projbtn.classList.remove("mnavactive")
    homebtn2.classList.remove("mnavactive2")
    aboutbtn2.classList.remove("mnavactive2")
    projbtn2.classList.remove("mnavactive2")
}

function addactive(subject, subject2){
    subject.classList.add("mnavactive")
    subject2.classList.add("mnavactive2")
}

homebtn.addEventListener('click',()=>{
    reset()
    addactive(homebtn, homebtn2)
})
aboutbtn.addEventListener('click',()=>{
    reset()
    addactive(aboutbtn, aboutbtn2)
})
projbtn.addEventListener('click',()=>{
    reset()
    addactive(projbtn, projbtn2)
})
homebtn2.addEventListener('click',()=>{
    reset()
    addactive(homebtn, homebtn2)
})
aboutbtn2.addEventListener('click',()=>{
    reset()
    addactive(aboutbtn, aboutbtn2)
})
projbtn2.addEventListener('click',()=>{
    reset()
    addactive(projbtn, projbtn2)
})

viewproj3.addEventListener('click',()=>{
    reset()
    addactive(projbtn, projbtn2)
})

const specialpopup = document.getElementsByClassName("specialpopup")[0]
const closebtn = document.getElementsByClassName('closebtn')[0]
closebtn.addEventListener('click',()=>{
    specialpopup.style.display = "none"
})


const projects = document.getElementById('projects')
projects.addEventListener('click',(e)=>{
    if(e.target.tagName == "SPAN" || e.target.tagName == "I" || e.target.tagName == "A"){
        let id =""

        if (e.target.tagName == "SPAN" || e.target.tagName == "I"){
            id = e.target.parentElement.id
        }else{
            id = e.target.id
        }

        popup(id)

    }else{
        return true
    }
})
function popup(id){
    specialpopup.style.display = "block"

    const fheaderinfo = document.getElementsByClassName('fheaderinfo')[0]
    const spaboutinfo = document.getElementsByClassName("spaboutinfo")[0]
    const spname = document.getElementsByClassName('spname')[0]

    const datas = data[id]
    console.log(datas)

    const langdata = datas["languages"]
    langdata.sort()

    console.log(langdata)

    let langdatacontrol = ``

    for (let i in langdata){
        langdatacontrol += `<div> ${langdata[i]} </div>`
    }



    spname.innerHTML = datas["title"]
    fheaderinfo.innerHTML = langdatacontrol
    spaboutinfo.innerHTML = `<div> ${datas["about"]} </div>`
}

const showothermainnav = document.getElementById('showothermainnav'),
    mainnav2 = document.getElementById('mainnav2'),
    closenav2 = document.getElementById('closenav2')
    
    
showothermainnav.addEventListener('click',(e)=>{
    mainnav2.style.left = "0%";
})
closenav2.addEventListener('click',(e)=>{
    mainnav2.style.left = "100%";
})