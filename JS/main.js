import data from './data.json' assert {type:'json'}




const homebtn = document.getElementById('homebtn')
const aboutbtn = document.getElementById('aboutbtn')
const projbtn = document.getElementById('projbtn')


function reset (){
    homebtn.classList.remove("mnavactive")
    aboutbtn.classList.remove("mnavactive")
    projbtn.classList.remove("mnavactive")
}

function addactive(subject){
    subject.classList.add("mnavactive")
}

homebtn.addEventListener('click',()=>{
    reset()
    addactive(homebtn)
})
aboutbtn.addEventListener('click',()=>{
    reset()
    addactive(aboutbtn)
})
projbtn.addEventListener('click',()=>{
    reset()
    addactive(projbtn)
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

