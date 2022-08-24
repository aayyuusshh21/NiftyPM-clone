let Para_tag = document.querySelectorAll(".Para_tag");

for(let i = 0; i<Para_tag.length;i++){
    Para_tag[i].addEventListener("click",()=>{
        showImgOnWebpage(Para_tag[i].innerText)
        console.log(Para_tag[i]);
    })
}

let maindata = document.getElementById("changing_data");
let showImgOnWebpage = (value) =>{
    console.log("yes");
    maindata.innerHTML = "";

    if(value === "Plan Better Products ."){
        let one = document.createElement("h1")
        one.innerText = "Plan Better Products"
        
        let two = document.createElement("p")
        two.innerText = "Centralize everything from pre-planning with the product team to user feedback from support tickets."

        let three = document.createElement("img")
        three.src = "https://niftypm.com/_nuxt/img/large@1x.1450581.webp";

        maindata.append(one,two,three);
    } 
    else if(value === "... Balance Resources ."){
        let one = document.createElement("h1")
        one.innerText = "Balance Resources"
        
        let two = document.createElement("p")
        two.innerText = "Assign a weight to tasks using story points to balance resources while predicting the efforts of upcoming releases."

        let three = document.createElement("img")
        three.src = "https://niftypm.com/_nuxt/img/large@1x.326dfff.webp";

        maindata.append(one,two,three);
    }
    else if(value === "... Real-time Reporting"){

        let one = document.createElement("h1")
        one.innerText = "Real-time Reporting"
        
        let two = document.createElement("p")
        two.innerText = "Keep track of your entire team's automated sprint progress as you approach your release dates."

        let three = document.createElement("img")
        three.src = "https://niftypm.com/_nuxt/img/large@1x.c8361c6.webp";

        maindata.append(one,two,three);
    }
    
}