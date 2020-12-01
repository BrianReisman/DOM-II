//*1 - wheel
const navLink1 = document.querySelector('header div nav a');
navLink1.addEventListener('wheel', (e)=>{
  navLink1.textContent = 'Do NOT wheel me!'
})
navLink1.addEventListener('mouseout', (e)=>{
  navLink1.textContent = 'Home'
})

//*2 - click
const navLink2 = navLink1.nextElementSibling;
navLink2.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log(e), alert(`A ${e.type} just took place on the ${e.target.textContent} button`)
})

//*3 - double click
const body = document.querySelector('body');
const navLink3 = navLink2.nextElementSibling
navLink3.addEventListener('dblclick', (e)=>{
  e.preventDefault();
  body.style.background='tomato'
});

const once = {once: true};

//*4+5 - mouse Enter + mouse Leave
const heading = document.querySelector('header div h1');
heading.addEventListener('mouseenter', ()=>{
  const hoverHeading = heading.textContent.split('').join('-')
  heading.textContent = hoverHeading;
})
heading.addEventListener('mouseleave', ()=>{
  const hoverHeading = heading.textContent.split('-').join('')
  heading.textContent = hoverHeading;
})

//*6 - paste 
const section = document.querySelector('.content-pick');
const section1 = section.firstElementChild;
section1.addEventListener('paste', ()=>{
  const pTag = section1.querySelector('p');
  let newString = pTag.textContent.split(' ').reverse().join(' ');
  pTag.textContent = newString;
})

//*7 - resize
const newDiv = document.createElement('p');
heading.appendChild(newDiv);

window.addEventListener('resize', reportWindowSize)
function reportWindowSize(e){
  newDiv.textContent = `The screen is now ${e.target.innerHeight} by ${e.target.innerWidth}`;
}

//*8 - copy
window.addEventListener('copy', ()=>{
  alert('YOU TRYING TO COPY THIS?!?!');
})



//*9 + 10 mousedown + mouseup
const firstImage = document.querySelector('header img');
firstImage.addEventListener('mousedown', ()=>{
  firstImage.setAttribute('src', 'https://picsum.photos/seed/picsum/666/200')
  console.log('mouse down');
});
firstImage.addEventListener('mouseup', ()=>{
  firstImage.remove()
  console.log('mouse up');
});



// Array.from(document.all).forEach(el => {
//   el.addEventListener('click', (e)=>{
//     // e.stopPropagation();
//     console.log(`
//       event type: ${e.type}
//       event target: ${e.target.nodeName}
//       current target: ${e.currentTarget}
//     `);
//   })
// })