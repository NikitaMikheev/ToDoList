let listArray = [   /* создание массива внутри которого содержатся объекты (для каждой задачи) */ 
    firstTask = { 
        id: 0,
        name: "firstTask",
        status: false,
        date: "29.12.2022"
    }    
]

const list = document.getElementById('list');
const button = document.querySelector('#buttonID');
button.addEventListener('click', () => { /* событие при клике на кнопку "Добавить" */
    var listName = document.querySelector('#inputName');
    var deadline = document.querySelector('#inputDate');
    listArray.push(listName = {name: listName.value, status: false, date: deadline.value}); /* пуш в массив нового элемента (объекта с параметрами: id, имя задачи, статус, срок) */
    console.log(listArray); /* убрать при завершении работы */
    
    let newEl = document.createElement('li') /* создание нового элемента списка */
    newEl.className = "list__item"; /* присваиваем имя элементу */
    newEl.innerHTML = `<div class = "list__item-pos"><div><p class= "list__item-text">${listName.name}</p><p>${String(listName.date)}</p></div><div><button>Редактировать</button><button>Удалить</button></div></div>`; /* помещаем текстовое значение для вывода - имя + дата + 2 кнопки*/
    list.append(newEl);
})

const textName = document.querySelector('class__item-text')   /* подумать */
textName = document.addEventListener('click', () => {
    
})
