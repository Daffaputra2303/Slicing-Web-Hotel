// 

// document.getElementById('password').type = 'password';

var inputpass = document.getElementById('password')
var eye = document.querySelector ('.eye')
eye.addEventListener('click',()=> {
    if ( inputpass.type === "password") {
        inputpass.type = "text"
    } else {
        inputpass.type = "password"


    }
})
// bagian ini kak aku masih bingung mau set attribut ke text tapi jadi ke default