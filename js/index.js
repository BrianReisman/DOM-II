// Your code goes here




// * [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
//   [ ]* `mouseover`
//   [ ]* `keydown`
//   [ ]* `wheel`
//   [ ]* `load`
//   [ ]* `focus`
//   [ ]* `resize`
//   [ ]* `scroll`
//   [ ]* `select`
//   [x]* `dblclick`
//   [ ]* `drag / drop`

// 1
const logo = document.querySelector('.logo-heading')
logo.addEventListener('dblclick', function(){
    alert('once was enough!!')
})
// 2 + 3
const firstImg = document.querySelector('img')
        firstImg.addEventListener('mouseover', function(){
            // console.log('hi')
            firstImg.setAttribute('src',"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0EDXrY-NXLlSjWbLW9RZMAHaHa%26pid%3DApi&f=1")
        }
        )
        firstImg.addEventListener('mouseout', function(){
            // console.log('hi')
            firstImg.setAttribute('src',"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PagtUPyMlPecRpaKOWZHjAHaJ4%26pid%3DApi&f=1")
        }
        )
//4
const scroll = document.addEventListener('scroll', function(){
    document.body.style.backgroundColor = "tomato"
    // console.log('scrolling')
})
// 5 - console log if anything from the page has been copied.
const firstP = document.querySelector('*')
firstP.addEventListener('copy', (e) => {console.log(`you've been hacked by ${e.type}`)})


//6 + 7- when I right click I want the p text to turn purple on down and back to black when I hit space button. 
const allP = document.querySelector('p')
// console.log(allP)

document.addEventListener('contextmenu', function(e){
    e.preventDefault()

    allP.style.color = 'purple'
    // console.log('right click')
    }
)

document.addEventListener('keydown', function(e){
    if(e.keyCode == 32){
        e.preventDefault()
        allP.style.color = `black`
        // console.log('space has been clicked')
    }
}) 

//8 on resize, all a links get bigger 4rem

window.addEventListener('resize', function(e){ //make all <a> tags big font size
    const allAs = document.querySelectorAll('a') //here I've captured a nodeList of all a tags
    // console.log(allAs) //returning a nodeList as expected which allows .forEach() on it. This is proof above worked.

    allAs.forEach(function(thisATag){
        thisATag.style.fontSize = "4rem"
    })

    }
)


//9
    window.addEventListener('wheel', function(e){
    // console.log(`the wheel moved at X:${e.clientX/2} and Y:${e.clientY}`)
        const footer = document.querySelector('footer')
        // console.log(footer)
        footer.style.fontSize = `${e.clientY}px`
})

//10