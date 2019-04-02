
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
    turnColor();
}

// remove blue class
function removeColor() {
    let cells = document.querySelectorAll("div.cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("color");
    } 
}

// on page load, create grid of 16x16
createGrid(16);

// on mouse over, turn cell gray
function turnColor () {
    let cells = document.querySelectorAll("div.cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function() {
        cells[i].classList.add("color");
        });
    }
}

// refresh button
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', removeColor);

// new grid button
const grid = document.getElementById('new');
grid.addEventListener('click', () => {
    let squares = prompt(
        "How many squares per side do you want on your new grid?", '');
    if (squares) {
        let inner = document.getElementById('inner');
        let container = document.getElementById('container');
        inner.removeChild(container);
        createGrid(squares);
   } else if (squares === null) {
    return;
    }
});

// random colors
// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// const colors = document.getElementById('colors');
// colors.addEventListener('click', () => {
//     let cells = document.querySelectorAll("div.cell");
//     for (let i = 0; i < cells.length; i++) {
//         cells[i].removeEventListener()
//         cells[i].addEventListener("mouseover", function() {
//         cells[i].style.color = getRandomColor;
//         });
//     }   
// });



// fade to black

