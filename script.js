


const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'teal',
    'maroon',
    'navy',
    'olive',
    'brown',
    'gray',
    'magenta',
    'turquoise',
    'white',
    'gold',
    'silver',
    'violet'
];

const btn = document.getElementById("btn")


btn.addEventListener("click", () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor

})
