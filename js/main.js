const stick = document.querySelectorAll('.calculator .stickers__item');





// Реализация клика по стикерам в калькуляторе: 
// - stickRemoveClass - перебирает все стики и ищет тот который содержит класс stick--active, и если он есть то удаляет его;
// - уже затем добавляет стику, по которому кликнул пользователь класс stick--active и выводит блок с выбором цвета стика;
// - stickBlock() - всем остальным стикам добавляет класс error, для того что бы реализовать их неактивность
for (let i = 0; i < stick.length; i++){
    stick[i].onclick = function(){
        stickRemoveClass();
        this.classList.add('stick--active');
        stickBlock();
    }
}


function stickRemoveClass () {
    for(let i = 0; i < stick.length; i++) {
        if (stick[i].classList.contains('stick--active')){
            stick[i].classList.remove('stick--active');
        }
    }
}

function stickBlock(){
    for (let i = 0; i < stick.length; i++) {
        if (stick[i].classList.contains('stick--active')){
            stick[i].classList.remove('error');
        } 
        else {
            stick[i].classList.add('error');
        }
    }
}

// ------------------------------------------------------------------------------------------------------------------
