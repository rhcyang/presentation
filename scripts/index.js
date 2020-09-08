document.addEventListener("DOMContentLoaded", (event) => { 
    const parentFirstProject = document.getElementById("firstProject")
    parentFirstProject.innerHTML = firstProject.trim();

    document.getElementById("timeline-2").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = MICROSOFT_IMAGINE_CUP
    })

    document.getElementById("timeline-3").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = ENSO
    })

    document.getElementById("timeline-4").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = GOOGLE
    })

    document.getElementById("timeline-5").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = RESEARCH
    })

    document.getElementById("timeline-6").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = ANDROID
    })

    window.addEventListener('scroll', function (event) {  

        const upper = 1;
        const lower = 0.86;
        
        const lowerSize = 50;
        const upperSize = 90;

        const proportion = (window.innerHeight + window.scrollY) / document.body.offsetHeight

        if(proportion >= lower && proportion <= upper){
            const elem = document.getElementById("thanks");
            const percentage = (proportion - lower) / (upper - lower);
            elem.style.opacity = percentage;
            elem.style.fontSize = Math.floor(lowerSize + (percentage * (upperSize - lowerSize))) + "pt"
        }

        //console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
        // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //     // you're at the bottom of the page
        //     console.log("Bottom")
        // }


    }, true /*Capture event*/);
});