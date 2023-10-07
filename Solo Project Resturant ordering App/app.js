import { menuArray } from "./data.js"

const menuSection = document.getElementById("menu-section")

function createMenu(data) {
    let rendered = ""
    data.forEach(object => {
        const { name, ingredients, price, img, id } = object

        rendered += `
                <div class="food-container flex">
                    <img src=${img} data-img="${id}"  class="food-img">

                    <div class="food-discribtion flex">
                        <h2 class="food-name">${name}</h2>
                        <p class="food-ing">${ingredients.join(', ')}</p>
                        <p class="food-price">$${price}</p>
                    </div>

                    <button class="add">
                        <i data-id="${id}" class="fa-solid fa-circle-plus"></i>
                    </button>
                </div>
        `
    })

    return rendered
}

function renderMenu(data) {
    menuSection.innerHTML += createMenu(data)
}

renderMenu(menuArray)


/* -------- Functions ----------- */

const orderContainer = document.getElementById("order-container")
const totalPrice = document.getElementById("total-price")
const bigImgContainer = document.getElementById("big-img-container")
const checkOutSection = document.getElementById("check-out-section")
const payForm = document.getElementById("pay-form")

let renderedOrdersArray = []

document.addEventListener("click", function (e) {

    if (e.target.dataset.id) {
        handleAdd(e.target.dataset.id)
    }

    if (e.target.dataset.remove) {
        handleRemove(e.target.dataset.remove)
    }

    bigImgContainer.style.display = "none"

    if (e.target.dataset.img) {
        handleImage(e.target.dataset.img)
    }

    if (e.target.id === "place-order") {
        checkOutSection.style.display = "block"
    }

})



function handleImage(menuID) {
    const currentObject = menuArray.filter(object => {
        return object.id === menuID
    })[0]

    bigImgContainer.style.display = "block"
    let imgToRender = `<img src="${currentObject.img}" class="big-img">`
    bigImgContainer.innerHTML = imgToRender
}



function handleAdd(buttonID) {
    const currentObject = menuArray.filter(object => {
        return object.id === buttonID
    })[0]

    let newObject = {
        name: currentObject.name,
        price: currentObject.price,
        id: `${renderedOrdersArray.length + 1}`
    }

    // Check if an object with the same id already exists in renderedOrdersArray
    let isDuplicate = renderedOrdersArray.some(item => item.id === newObject.id);

    if (isDuplicate) {
        // Find the maximum id value in the array and increment it
        let maxId = Math.max(...renderedOrdersArray.map(item => Number(item.id)));
        newObject.id = `${maxId + 1}`;
    }

    renderedOrdersArray.push(newObject)

    renderOrder(renderedOrdersArray)
}



function createOrder(array) {
    const newRenderedArray = array.map((object) => {
        const { name, price, id } = object
        return `
        <div class="order-box flex">
            <p class="order-name">
                ${name} 
                <span class="remove" data-remove="${id}"> Remove </span>
            </p>
            <p class="order-price">
                $${price}
            </p>
        </div>
        `
    })

    return newRenderedArray
}



function renderOrder(array) {
    orderContainer.innerHTML = createOrder(array).join("")

    const price = renderedOrdersArray.reduce((total, current) => {
        return total + current.price
    }, 0)

    totalPrice.textContent = `$${price}`
}



function handleRemove(orderID) {
    const currentOrder = renderedOrdersArray.filter(order => {
        return order.id === orderID
    })[0]

    const newArray = renderedOrdersArray.filter(order => {
        return order.id !== currentOrder.id
    })

    renderedOrdersArray = newArray

    renderOrder(renderedOrdersArray)
}

payForm.addEventListener("submit", function(e) {
    e.preventDefault()

    checkOutSection.style.display = "none"

    renderedOrdersArray = []
    renderOrder(renderedOrdersArray)

})