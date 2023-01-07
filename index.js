let listArray = []   /* создание массива внутри которого содержатся объекты (для каждой задачи) */ 
var objectID; 

const list = document.getElementById('list');
const button = document.querySelector('#buttonID');
button.addEventListener('click', () => { /* событие при клике на кнопку "Добавить" */
    var listName = document.querySelector('#inputName');
    var deadline = document.querySelector('#inputDate');

    if (listName.value!="" && deadline.value!="") /* проверка на заполненность полей ввода */
    {
        if (button.id === 'buttonSave') {
            editObject(listName.value, deadline.value, objectID);
            clearItem(); /* вызов функции очистки экрана (списка) */
            reDrawing(listArray); /* вызов функции отрисовки массива (параметром передаем массив) */
            clearInput(listName, deadline);
            button.innerHTML = 'Добавить'
            button.id = 'buttonID'
            console.log(listArray);
        }
        else {
            listArray.push(objectItem = {name: listName.value, status: false, date: deadline.value, id: listArray.length}); /* пуш в массив нового элемента (объекта с параметрами: id, имя задачи, статус, срок) */
            console.log(listArray);                 /* убрать при завершении работы */
            clearItem(); /* вызов функции очистки экрана (списка) */
            reDrawing(listArray); /* вызов функции отрисовки массива (параметром передаем массив) */
            clearInput(listName, deadline);
        }
    }
    else {
        alert("Заполните текстовое поле и поле даты!")
    }
    
})

document.getElementById('list').addEventListener('click', event => {
    var buttonDelete = event.target;
    if (event.target.className ==='buttonDel') {
        if (confirm('Подтвердите удаление задачи!')) {
            objectID = buttonDelete.parentElement.parentElement.parentElement.id;
            listArray.splice(objectID, 1);
            funcID(listArray);
            clearItem(); 
            reDrawing(listArray);
            console.log(listArray);    /* убрать при завершении работы */
        }
    }

    else if (event.target.className === 'buttonEdit') {
        objectID = buttonDelete.parentElement.parentElement.parentElement.id;
        document.querySelector('#inputName').value = listArray[objectID].name;
        document.querySelector('#inputDate').value = listArray[objectID].date;
        button.innerHTML = 'Сохранить'
        button.id = 'buttonSave'
    }
})
                                                                                            /* КОМПОНЕНТЫ */

function funcID(listArray) { /* функция для переприсваивания ID для элементов массива для поддержания правильной нумерации */
    for (let index = 0; index < listArray.length; index++) {
        listArray[index].id = index; 
        
    }
}

function clearItem() { /* функция для очистки содержимого экрана */
    var liItem = document.querySelectorAll('.list__item') /* поиск всех элементов списка */
    liItem.forEach(element => { /* удаление каждого найденного элемента через forEach */
        element.remove();
    });
   
}

function reDrawing(listArray) { /* функция для отрисовки массива */
    for (let index = 0; index < listArray.length; index++) {
        let newEl = document.createElement('li') /* создание нового элемента списка */
        newEl.className = 'list__item'; /* присваиваем имя элементу */
        newEl.id = listArray[index].id; /* присваиваем id элементу */
        newEl.innerHTML = `<div class = "list__item-pos"><div><p class= "list__item-text">${listArray[index].name}</p><p>${String(listArray[index].date)}</p></div><div><button class="buttonEdit">Редактировать</button><button class="buttonDel">Удалить</button></div></div>`; /* помещаем текстовое значение для вывода - имя + дата + 2 кнопки*/
        list.append(newEl); /* добавление элемента в DOM дерево */
    }
}

function editObject(name, date, objectID) {
    listArray[objectID].name = name;
    listArray[objectID].date = date; 
}

function clearInput(listName, deadline) { /* функция для очистки input (первый параметр - название задачи, второй параметр - дата) */
    listName.value = '';
    deadline.value = '';
}


