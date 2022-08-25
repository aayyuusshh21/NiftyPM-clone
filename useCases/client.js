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

    if(value === "Streamlined Communication ."){
        let one = document.createElement("h1")
        one.innerText = "Streamlined Communication"
        
        let two = document.createElement("p")
        two.innerText = "A space for your team and clients to share ideas, gather feedback, finalize specs, and turn discussions into actions."

        let three = document.createElement("img")
        three.src = "https://niftypm.com/_nuxt/img/large@1x.1450581.webp";

        maindata.append(one,two,three);
    } 
    else if(value === "... Automated Reporting ."){
        let one = document.createElement("h1")
        one.innerText = "Automated Reporting"
        
        let two = document.createElement("p")
        two.innerText = "Set your project milestones and Nifty will automate your progress reporting based on the completion of associated tasks."

        let three = document.createElement("img")
        three.src = "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp";

        maindata.append(one,two,three);
    }
    else if(value === "... Centralized Deliverables"){

        let one = document.createElement("h1")
        one.innerText = "Centralized Deliverables"
        
        let two = document.createElement("p")
        two.innerText = "Share, store, and retrieve project assets to let your clients see and grab whatever they need without asking."

        let three = document.createElement("img")
        three.src = "https://niftypm.com/_nuxt/img/large@1x.e8b1696.webp";

        maindata.append(one,two,three);
    }
    
}