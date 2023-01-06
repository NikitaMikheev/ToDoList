let listArray = []   /* создание массива внутри которого содержатся объекты (для каждой задачи) */ 

const list = document.getElementById('list');
const button = document.querySelector('#buttonID');
button.addEventListener('click', () => { /* событие при клике на кнопку "Добавить" */
    var listName = document.querySelector('#inputName');
    var deadline = document.querySelector('#inputDate');

    if (listName.value!="" && deadline.value!="") /* проверка на заполненность полей ввода */
    {
        listArray.push(listName = {name: listName.value, status: false, date: deadline.value, id: listArray.length}); /* пуш в массив нового элемента (объекта с параметрами: id, имя задачи, статус, срок) */
        console.log(listArray); /* убрать при завершении работы */
        clearItem(); /* вызов функции очистки экрана (списка) */
        reDrawing(listArray); /* вызов функции отрисовки массива (параметром передаем массив) */

    }
    else {
        alert("Заполните текстовое поле и поле даты!")
    }
    
})


document.getElementById('list').addEventListener('click', event => {
    var buttonDelete = event.target;
    if (event.target.className==="buttonDel") {
        var objectID = buttonDelete.parentElement.parentElement.parentElement.id;
        listArray.splice(objectID, 1);
        clearItem(); 
        reDrawing(listArray);
        console.log(listArray);
    }
})

function clearItem() { /* функция для очистки содержимого экрана */
    var liItem = document.querySelectorAll('.list__item') /* поиск всех элементов списка */
    liItem.forEach(element => { /* удаление каждого найденного элемента через forEach */
        element.remove();
    });
   
}

function reDrawing(listArray) { /* функция для отрисовки массива */
    for (let index = 0; index < listArray.length; index++) {
        let newEl = document.createElement('li') /* создание нового элемента списка */
        newEl.className = "list__item"; /* присваиваем имя элементу */
        newEl.id = listArray[index].id; /* присваиваем id элементу */
        newEl.innerHTML = `<div class = "list__item-pos"><div><p class= "list__item-text">${listArray[index].name}</p><p>${String(listArray[index].date)}</p></div><div><button>Редактировать</button><button class="buttonDel">Удалить</button></div></div>`; /* помещаем текстовое значение для вывода - имя + дата + 2 кнопки*/
        list.append(newEl); /* добавление элемента в DOM дерево */
    }
}


/*
document.addEventListener('click', event => {
    var li = event.target.id;
    console.log(li.id);
}) */