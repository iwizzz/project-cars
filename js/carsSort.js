"use strict"

for (let i of document.querySelectorAll("input[name=car-tag]")) {
    i.addEventListener("change", (event) => sortCarByTag(event, i.id))
    console.log(1)
}






function sortCarByTag(event, tagName) {
    const list = document.querySelectorAll(".choose-car_cars-list-item");

    if (event.target.id == "ALL") {
        list.forEach(item => item.hidden = "");
        return;
    }
    
    list.forEach(item => item.hasAttribute(tagName) ? item.hidden = "" : item.hidden = true)
}