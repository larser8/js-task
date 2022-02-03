const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction,e) => {
    e.preventDefault();

    if (direction === "right"){
        itemsList.appendChild(itemsList.firstElementChild);
    } else {
        itemsList.insertBefore(itemsList.lastElementChild,items.firstElementChild)
    }
};

right.addEventListener("click", (e) =>{
   loop("right", e);
});


left.addEventListener("click", (e) =>{
    loop("left", e);
 });








                    //To meet the chalange #2

// const minRight = 0;
// const itemWidth = getComputedStyle(items[0]).width;
// const step = parseInt(itemWidth);
// const preShowItems = 300 / step;
// const maxRight = (items.lenght - preShowItems) * step;
// let currentRight = 0;

// itemsList.style.right = currentRight;


// right.addEventListener("ckick", e => {
//     e.preventDefault();

//     if (currentRight < maxRight) {
//         currentRight += step;
//         itemsList.styleright = `${currentRight}px`;
//     }
// })

// left.addEventListener("ckick", e => {
//     e.preventDefault();

//     if (currentRight > minRight){
//         currentRight -= step;
//         itemsList.style.right = `${currentRight}px`;
//     }
// })





                //to meet the chalange #1
// rightBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     let currentRight = parseInt(computedStyles.right)

//      if (currentRight < 500){

//      items.style.right = `${currentRight + 100}px`;
//     }

// });


// leftBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     let currentRight = parseInt(computedStyles.right);

//     if (currentRight > 0) {
//         items.style.right = `${currentRight - 100}px`;
//     }
// });