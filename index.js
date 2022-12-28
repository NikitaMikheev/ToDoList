let listArray = [
    firstTask = {
        id: 0,
        name: "firstTask",
        status: false,
        date: "29.12.2022"
    }    
]

const list = document.getElementById('list');
const button = document.querySelector('#buttonID');
button.addEventListener('click', () => {
    var listName = document.querySelector('#inputName');
    var deadline = document.querySelector('#inputDate');
    listArray.push(listName = {name: listName.value, status: false, date: deadline.value});
    console.log(listArray);
    
    let newEl = document.createElement('li')
    newEl.className = "list__item";
    list.append(newEl);
})
