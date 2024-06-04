
//Global Variables
var canvasSize = 16;
var cellItteration = 0;
const maxCanvasSize = 100;
const changeCanvasButton = document.querySelector("#ChangeCanvas");
const resetCanvasButton = document.querySelector("#Reset")
const canvasArea = document.querySelector("#playArea");

changeCanvasButton.addEventListener("click", function () {
    canvasSize = prompt ("Please enter a canvas size between 1 and 100.");
    var canvasSizeInt = parseInt(canvasSize);
    if (isNaN(canvasSizeInt)) {
        ThrowInputError();
    } else {
        if (typeof canvasSizeInt === "number"){
            SelectCanvasSize(canvasSizeInt); 
        } else {
            ThrowInputError();
        }
    }  
    }
);

resetCanvasButton.addEventListener("click", ClearCanvas);

function ThrowInputError(){
    ClearCanvas();
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "Invalid Selection, please select an integer size less than 100 squares.";
    canvasArea.appendChild(errorMessage);
}

function mouseHover (){
 //TODO: Implement hover listener
}

function SetUpGridRow(rowIteration) {
    // Create new grid rows
    var newGridRow = document.createElement("div");
    newGridRow.classList.add("gridRow");
    canvasArea.appendChild(newGridRow);
    CreateGridCell(rowIteration);
    console.log("row itteration");
}

function CreateGridCell(iteration){
    // Create new grid cells
    var gridRow = document.getElementsByClassName("gridRow")[iteration];
    for (cell=0; cell<canvasSize; cell++){
        var newGridCell = document.createElement("div");
        newGridCell.classList.add("gridCell");
        newGridCell.setAttribute("id", cellItteration)
        newGridCell.addEventListener("mouseover", function(event){
            console.log("mouseover detected");
            this.style.backgroundColor = "red";
        })
        gridRow.appendChild(newGridCell);
    }
}


function DrawCanvas(inputSize){
    // Create a new canvas
    console.log("Size selection is " + inputSize);
    for (row=0; row<inputSize; row++){
        SetUpGridRow(row);
    }
}

function ClearCanvas(){
    //Clear the canvas for a new selection        
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "Invalid Selection, please select an integer size less than 100 squares.";
    canvasArea.appendChild(errorMessage);
    canvasArea.replaceChildren();
    cellItteration = 0;
}

function SelectCanvasSize(canvasInput){
    // Generate a new user specified canvas and catch invalid inputs
    ClearCanvas();
    if (canvasInput > 100 | canvasInput < 1) {
        ThrowInputError();
    } else {
        var testMessage = document.createElement("p");
        testMessage.textContent = "Test Message for less than 100 grid squares";
        DrawCanvas(canvasInput);
    }
}


DrawCanvas(canvasSize);



