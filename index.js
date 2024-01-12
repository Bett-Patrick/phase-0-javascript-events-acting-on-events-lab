// Your code here


    /*moving elements on the page*/
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"


/**
    dodger.style.bottom = "100px"
    dodger.style.bottom = "0px"
    dodger.style.left = "0px"
**/

//function to move dodger to the left
function moveDodgerLeft(){
    const leftPixelsAsString = dodger.style.left.replace("px","")
    const leftPixels = parseInt(leftPixelsAsString, 10)
    console.log(`Left: ${leftPixels}`)

    if (leftPixels > 0) {
        dodger.style.left = `${leftPixels-1}px`
    }
}
//invoke the moveDodgerLeft()
document.addEventListener("keydown", (e)=>{
    if (e.key==="ArrowLeft") {
        moveDodgerLeft()
    }
})

//function to move dodger to the right
function moveDodgerRight(){
    const leftPixelsAsString = dodger.style.left.replace("px", "")
    const leftPixels = parseInt(leftPixelsAsString, 10)
    console.log(`Left: ${leftPixels}`)

    if (leftPixels <360) {
        dodger.style.left = `${leftPixels+1}px`
    }
}
//invoke moveDodgerRight()
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})
