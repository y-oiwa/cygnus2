function init() {
    if (!localStorage.getItem("formData")) {
        changeView("signUp");
    } else {
        changeView("main");
    }
}

function changeView(v) {
    let views = document.getElementsByClassName("view");
    for (let view of views) {
        view.style.display = "none";
    }
    document.getElementById(v).style.display = "block";
}

// process when window is loaded

window.onload = init();