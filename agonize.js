// let showUser = document.querySelector('.showUser');
// let toggle = true;

// function showHide () {
//     if (toggle) {
//         showUser.style.display = "none";
//         showUser.style.background = "yellow";
//         toggle = false;
//     }
//     else {
//         showUser.style.display = "block";
//         toggle = true;
//     }
// }



// let form = document.querySelector("form");
// let toggle = true;

// function showHide() {
//     if (toggle) {
//         form.style.display = "none";
//         toggle =false;


//     }
//     else {
//         form.style.display = "block";
//         toggle = true;
//     }
// }

// let form = document.querySelector("form");

// function  showHide() {
//     form.classList.toggle("hide");
// }


let  search = document.querySelector(".search");
let tgl = true;

function  showHide() {
    if (tgl) {
        search.style.display = "none";
        tgl = false;
    }

    else {
        search.style.display = "block";
        tgl = true;
    }
}



let pshow = document.querySelector(".p-show");
let toggle = true;

function aboutBtn() {
    if (toggle) {
        pshow.style.display = "none";
        toggle = false;
    }
    else {
        pshow.style.display = "block";
        toggle = true;
    }

}



let changeIcon = function(icon) {
    icon.classList.toggle('fa-eye-slash')
    
}






