const subtract = document.getElementById("-")
const add = document.getElementById("+")
const like = document.getElementById("<3")
const counter = document.getElementById("counter")
let is_paused = false
setInterval(() => {
if (!is_paused) {
  counter.innerText = parseInt(counter.innerText) + 1
}
}, 1000);


const pause = document.getElementById("pause")
pause.addEventListener('click',()=> {
  if (!is_paused) {
    is_paused = true
    pause.innerText = "resume"
    add.disabled = true
    subtract.disabled = true
    like.disabled = true
  }
  else {
    is_paused = false
    pause.innerText = "pause"
    add.disabled = false
    subtract.disabled = false
    like.disabled = false
  }
})


// const submit = document.getElementById("submit") //comment button




// submit.addEventListener('click',()=> {
//   // console.log(new FormData(document.querySelector('form')).value)
// let x = document.getElementById("data")
// console.log(x)
// })

// counter.innerText = parseInt(counter.innerText) + 1


subtract.addEventListener('click',()=> {counter.innerText = parseInt(counter.innerText) - 1})
add.addEventListener('click',()=> {counter.innerText = parseInt(counter.innerText) + 1})

// const li = document.createElement("li")
const likes = document.getElementsByClassName("likes")[0]


let current_counter = parseInt(counter.innerText)
// debugger
let like_count = 1
let arr = []
// let x = li.innerText = `${current_counter} has been liked ${like_count} times`

like.addEventListener('click',()=> {
  let current_counter = parseInt(counter.innerText)
  if (arr.includes(current_counter)) {
    let current_li = document.getElementsByClassName(current_counter)[0]
    like_count++
    console.log(current_li)
    current_li.innerText = `${current_counter} has been liked ${like_count} times`
  }
  else {
    arr.push(current_counter)
    like_count = 1
    let li = document.createElement("li")
    li.innerText = `${current_counter} has been liked ${like_count} times`
    li.className = current_counter
    likes.appendChild(li)
  }
})



// if (current_counter === counter.innerText) {
//   like_count++
// }
// else {
//   current_counter = counter.innerText
//   like_count = 0
// }
