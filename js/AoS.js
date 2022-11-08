window.addEventListener("scroll", AoS)


const elementos = document.getElementsByClassName("AoS");
for (const el of elementos) {
    el.style.opacity = "0";
    el.style.transform = "scale(50%) translateX(-100%)";
}

function AoS () {

    for (const el of elementos) {
        if (el.getBoundingClientRect().top <= window.innerHeight) {
            el.style.opacity = "1";
            el.style.transform = "scale(100%) translateX(0)";
            el.style.transitionProperty = "all";
            el.style.transitionDuration = "0.75s";
            el.style.transitionTimingFunction = "ease-out";
        }
    }

}
