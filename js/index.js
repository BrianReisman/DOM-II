//*1 - wheel
const navLink1 = document.querySelector('header div nav a');
navLink1.addEventListener('wheel', (e)=>{navLink1.textContent = 'Do NOT wheel me!'})

//*2 - click
const navLink2 = navLink1.nextElementSibling;
navLink2.addEventListener('click', (e)=>{console.log(e), alert(`A ${e.type} just took place on the ${e.target.textContent} button`)})

//*3 - double click
const navLink3 = navLink2.nextElementSibling
navLink3.addEventListener('dblclick', ()=>{body.style.background='tomato'});

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



//*9 + 10 keydown + keyup
const firstImage = document.querySelector('header img');
firstImage.addEventListener('keydown', ()=>{
  alert('keydown');
});
firstImage.addEventListener('keyup', ()=>{
  console.log('keyup');
});
console.log(firstImage);

