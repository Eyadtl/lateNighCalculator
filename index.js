const first = document.querySelector(".first");
const second = document.querySelector(".second")
const sign = document.querySelector(".sign");
const equal = document.querySelector("button")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const division = document.querySelector('.division')
const mult = document.querySelector('.mult')



plus.addEventListener('click', () => {

    document.querySelector(".result").innerHTML = parseInt(first.value) + parseInt(second.value);
});

minus.addEventListener('click', () => {

    document.querySelector(".result").innerHTML = parseInt(first.value) - parseInt(second.value);
});

division.addEventListener('click', () => {

    document.querySelector(".result").innerHTML = parseInt(first.value) / parseInt(second.value);
});

mult.addEventListener('click', () => {

    document.querySelector(".result").innerHTML = parseInt(first.value) * parseInt(second.value);
});
