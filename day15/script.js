const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clear = document.querySelector('.clear');

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); //local storage only takes strings
    this.reset();
}

function populateList(plates = [], platesList){ //setting default plates to empty, so that if ever there is no data, the app wont break
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e){
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

// function clearAll(){
//     window.localStorage.clear();
//     populateList(items, itemsList);
// }

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
// clear.addEventListener('click', clearAll);

populateList(items, itemsList);

//add a button to check all/uncheck all
//add a button to clear all

