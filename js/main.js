const stick = document.querySelectorAll('.calculator .stickers__item');

// const stickColor = document.querySelectorAll('.calculator .')
for (let i = 0; i < stick.length; i++){
    stick[i].onclick = function(){
        this.classList.toggle('stick--active');
        // stickBlock();
    }

}

// function stickBlock(){
//     for (let i = 0; i < stick.length; i++) {
//         if (stick[i].classList.contains('test')){
//             // stick[i].classList.add('rename');
//             console.log(verno)
//         } 
//         // else {
//         //     stick[i].classList.add('error');
//         // }
//     }
// }