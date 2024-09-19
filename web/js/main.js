document.querySelector('footer').innerHTML = document.querySelector("footer").innerHTML + `
<span>Orange Cat / 2024</span>
<nav>
    <a href="https://www.youtube.com/@bot_techjr" target="_blank">Youtube</a>
    <a href="https://discord.gg/ThUb8mTdyA" target="_blank">Discord</a>
    <a href="https://github.com/luisRG-L/Bot-tech-Jr" target="_blank">GitHub</a>
</nav>
<span style="font-size: 0.7em">Hecho con HTML, CSS y JS nativo</span>
`;
let openedNav = false;
document.addEventListener('click', (e) => {
    if(e.target == document.querySelector('#show-ul')) {
        openedNav = !openedNav;
        if(openedNav) {
            document.querySelector("header nav ul").style.display = "block";
            document.querySelector("header nav ul").style.backgroundColor = "black";
            document.querySelector("header nav ul").style.zIndex = "30";
        }else  {
            document.querySelector("header nav ul").style.display = "none";
        }
    }
})
