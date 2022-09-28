const navMenu = document.querySelector('.nav-menu')
const navToggle = document.querySelector('.toggle')
const navToggleLine = document.querySelector('.toggle-line')
const navMenuLi = document.querySelectorAll('.nav-menu ul li');

// nav toggle
navToggle.addEventListener('click', (e) => {
  navMenu.classList.toggle('active')
  navToggleLine.classList.toggle('active')
})

navMenuLi.forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('active')
    navToggleLine.classList.remove('active')
  })
})




