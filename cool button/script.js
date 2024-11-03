const btn = document.querySelectorAll(".btn");

btn.forEach((el) => {
    let count = 0;
    const click = el.querySelector(".click");

    el.addEventListener("click", ()=> {
        count++;
        if(count % 2 === 1) {
            click.classList.remove("small-width");
            click.classList.add("full-width");
        } else {
            click.classList.remove("small-width");
            click.classList.add("full-width");
            click.style.background = "white";
        }
        
    });

    el.addEventListener("transitionend", ()=> {
        if(count % 2 === 1) {
            click.classList.remove("full-width");
            click.classList.add("small-width");
            click.classList.remove("left-margin");
            click.classList.add("right-margin");
            el.setAttribute("check", true);
            click.style.background = "rgb(111, 190, 214)";
        } else {
            click.classList.remove("right-margin");
            click.classList.add("left-margin");
            click.classList.remove("full-width");
            click.classList.add("small-width");
            el.setAttribute("check", false)
        }
    });
});

