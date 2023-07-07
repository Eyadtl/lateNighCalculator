// const first = document.querySelector(".first");
// const second = document.querySelector(".second")
// const sign = document.querySelector(".sign");
// const equal = document.querySelector("button")
// const plus = document.querySelector(".plus")
// const minus = document.querySelector(".minus")
// const division = document.querySelector('.division')
// const mult = document.querySelector('.mult')


// plus.addEventListener('click', () => {

//     document.querySelector(".result").innerHTML = parseInt(first.value) + parseInt(second.value);
// });

// minus.addEventListener('click', () => {

//     document.querySelector(".result").innerHTML = parseInt(first.value) - parseInt(second.value);
// });

// division.addEventListener('click', () => {

//     document.querySelector(".result").innerHTML = parseInt(first.value) / parseInt(second.value);
// });

// mult.addEventListener('click', () => {

//     document.querySelector(".result").innerHTML = parseInt(first.value) * parseInt(second.value);
// });


// const vehicle1 = document.querySelector("#vehicle1");
// const vehicle2 = document.querySelector("#vehicle2");
// const vehicle3 = document.querySelector("#vehicle3");

// const test = document.querySelector(".test")

// vehicle1.addEventListener('click', () => {
//     if (vehicle1.checked = true) {
//         vehicle2.checked = false;
//         vehicle3.checked = false;
//     }
//     vehicle2.addEventListener('click', () => {
//         if (vehicle2.checked = true) {
//             vehicle1.checked = false;
//             vehicle3.checked = false;
//         }
//         vehicle3.addEventListener('click', () => {
//             if (vehicle3.checked = true) {
//                 vehicle1.checked = false;
//                 vehicle2.checked = false;
//             }
//         })
//     })
// })


// const plusPr = document.querySelector(".plus-1");
// const product = document.querySelector(".product")
// const minusPr = document.querySelector(".minus-1")
// var prod = 0;
// plusPr.addEventListener('click', () => {
//     prod++;
//     product.innerHTML = prod;
// })

// minusPr.addEventListener('click', () => {
//     prod--;
//     product.innerHTML = prod;
// })




var number_of_videos = document.querySelector(".videos");
var enter = document.querySelector(".enter");
var arr = [];


enter.addEventListener("click", () => {
    var inputs = [];

    for (var i = 0; i < parseInt(number_of_videos.value); i++) {
        const input = document.createElement("input");
        input.classList.add("input" + i);
        document.querySelector(".container1").appendChild(input);
        inputs.push(input); // Store the input elements in an array
    }
    var refresh = document.querySelector(".refresh");
    refresh.addEventListener("click", () => {
        // window.location.reload();
        for (var t = 0; t < parseInt(number_of_videos.value); t++) {
            document.querySelector(`.input${t}`).remove()
        }
        document.querySelector(".press").remove()
        document.querySelector("h2").remove()

    })
    console.log(inputs)
    var button = document.createElement("button");
    button.innerHTML = "calculate";
    document.querySelector(".container1").appendChild(button)
    button.classList.add("press");

    button.addEventListener("click", () => {
        var values = inputs.map((input) => input.value); // Retrieve the values of the input fields
        var sum = values.reduce((acc, curr) => acc + parseInt(curr), 0);
        console.log(values)
        // console.log(sum / number_of_videos.value)
        const theAVREGE = document.createElement("h2");
        document.querySelector(".container1").appendChild(theAVREGE)
        theAVREGE.innerText = "The average is " + Math.round((sum / number_of_videos.value))
    });
});


