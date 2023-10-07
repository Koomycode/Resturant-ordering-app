export const menuArray = [

    {
        name: "Filet Mignon",
        ingredients: ["3 ounces cut from the tip of the Tenderloin", "Mashed Potatoes with Sour Cream", "Asparagus"],
        price: 62,
        id: '1',
        img: "./images/steak.jpg",
    },
    {
        name: "Neapolitan pizza",
        ingredients: ["San Marzano tomatoes", "Mozzarella cheese", "Basil & Olive oil"],
        id: '2',
        price: 28,
        img: "./images/pizza.jpg",
    },
    {
        name: "Cheesesteak Pasta",
        ingredients: ["Tenderloin steak", "Grilled mushrooms and garlic sauce", "Parmesan cheese", "Basil"],
        price: 25,
        id: '3',
        img: "./images/pasta.jpg",
    },
    {
        name: "Philly cheesesteak",
        ingredients: ["Thinly sliced beef and cheese", "Grilled mushrooms", "Cooked onions & garlic"],
        price: 18,
        id: '4',
        img: "./images/sandwish.jpg",
    },
]


/* 
----------- Each menu item HTML
<div class="food-container flex">
    <img src="./images/sandwish.jpg" class="food-img">

    <div class="food-discribtion flex">
        <h2 class="food-name">Sandwish</h2>
        <p class="food-ing">Something, Somthing, Somthing</p>
        <p class="food-price">$24</p>
    </div>

    <button class="add" id="add">
        <i class="fa-solid fa-circle-plus"></i>
    </button>
</div> 
*/



/* 
 -------- Each Order item HTML
<div class="order-box flex">
    <p class="order-name">Sandwish <span class="remove">( Remove )</span></p>
    <p class="order-price">$24</p>
</div>
*/



/* 
---------- What i want to use

- Object Destructuring
- .filter()
- (e).target.dataset 
- .map()
- .join() 
- .reduce() [total + current]
- Math.max()
- Spread operators (...)
- .some()
- Rest Parameters

Constructor function new Object()
Default Parameters
Short circuiting || or &&

Maybe Firebase database
*/


/*
----------- Using Math.max() on array of objects
const objects = [
    {
        id: 1
    },
    {
        id: 5
    },
    {
        id: 2
    },
]

const maxNumber = Math.max(...objects.map(item => item.id))
let idArray = objects.map(item => item.id)

console.log(maxNumber)
console.log(idArray)

----------- Another Example -----------\

const newArray = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
]
const newObject = {num: 1}
const checkDuplicate = newArray.some(item => item.num === newObject.num )

if (checkDuplicate) {
    let maxNum = Math.max(...newArray.map(item => item.num))
    newObject.num = maxNum + 1
}

console.log(newObject)

*/