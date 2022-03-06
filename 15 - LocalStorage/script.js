const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) ||[];

function addItem(e) {
    e.preventDefault();    //Prevent the page from reloading or submitting the form
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}

const populateList = (plates = [], plateList) => {
    plateList.innerHTML = plates.map((plate, index) => {
        return `
            <li>
                <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? "checked" : ""}>
                <label for="item${index}">${plate.text}</label>
            </li>
        `
    }).join('');
}

function toggleDone(e) {
    if(!e.target.matches("input")) return; //skip this unless it's an input
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);