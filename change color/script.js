let index = 0;
function changecolor() {
    let color = ["red", "green", "yellow", "voilet", "pink", "gray", "light-blue"];
    document.getElementsByTagName("body")[0].style.background = color[index++]
    if (index > color.length - 1) {
        index = 0;
    }
};