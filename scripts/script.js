
// create grid of squares
function createGrid(x) {
    let div = document.createElement('div');
    div.setAttribute('id','container');
    let inner = document.getElementById('inner');
    inner.appendChild(div);
    for (let i = 0; i < x; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < x; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.height = (480 / x) + "px";
            cell.style.width = (480 / x) + "px";
            row.appendChild(cell);
        }
        div.appendChild(row);
    }
    turnGray();
}

// remove blue class
function removeBlue() {
    let cells = document.querySelectorAll("div.cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("blue");
    } 
}

// on page load, create grid of 16x16
createGrid(16);

// on mouse over, turn cell gray
function turnGray () {
    let cells = document.querySelectorAll("div.cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function() {
        cells[i].classList.add("gray");
        });
    }
}

// refresh button
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', removeBlue);

refresh.addEventListener('click', () => {
    let squares = prompt(
        "How many squares per side do you want on your new grid?", '');
    if (squares) {
        let inner = document.getElementById('inner');
        let container = document.getElementById('container');
        inner.removeChild(container);
    }
    createGrid(squares);
})

