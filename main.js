const navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('prim-nav__menu')
const closeIcon = document.querySelector('.nav__close') 
const openIcon = document.querySelector('.nav__burger') 


navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show')
    if(!navMenu.classList.contains('show')){
        openIcon.style.opacity = "1"
        closeIcon.style.opacity = "0"
    }else {
        closeIcon.style.opacity = "1"
        openIcon.style.opacity = "0"
    }
})

// Show Submenu 
const buttons = document.querySelectorAll('.prim-nav__dropdown')
const menus = document.querySelectorAll('.prim-nav__dropdown-list')
const iconToggle = document.querySelectorAll('.iconToggle')

buttons.forEach((button) => {
    // console.log(button.dataset);
    button.addEventListener('click', (e) => {
        const currentButtonId = e.currentTarget.dataset.id
        menus.forEach(menu => {
            const menuId = menu.id
            if (currentButtonId === menuId) {
                menu.classList.toggle('toggle--dropdown')
                iconToggle.forEach(icon => {
                const iconId = icon.dataset.id
                if (currentButtonId === iconId) {
                    icon.classList.toggle('iconToggle--transform')
                    console.log(icon.classList);
                }
                })
            }
        })
       const actives =  document.querySelectorAll('.prim-nav__dropdown-list.toggle--dropdown')
       actives.forEach(active => {
        if(active.id === currentButtonId){
            return
        }else {
            active.classList.remove('toggle--dropdown')
        }
       })
    })
})

// Change header Background Color

function getScrollPosition() {
   let scroll = window.scrollY
   if (scroll >= 100) {
        let navBar = document.querySelector('.prim-nav')
        navBar.style.background = "#ff525d"
   }else {
        let navBar = document.querySelector('.prim-nav')
        navBar.style.background = "transparent"
   }
}