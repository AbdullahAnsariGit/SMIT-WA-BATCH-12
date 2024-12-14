let AddtaskBtn=document.getElementById("AddtaskBtn")

AddtaskBtn.addEventListener("click",function(){
    let input=document.getElementById("input")
    let output=document.querySelector(".output")
    let text=document.createElement("div")
    text.className="text"
    let p=document.createElement("p")
    let removeBtn=document.createElement("button")
    removeBtn.innerHTML="remove task"

    p.innerHTML=input.value

    text.append(p,removeBtn)
    output.append(text)
    input.value=""

    removeBtn.addEventListener("click",function(){
        text.removeChild(p)
        text.removeChild(removeBtn)


    })


})