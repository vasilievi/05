let headerMenu = document.getElementById('header-menu')

headerMenu.onclick = function () {
    console.log('headerMenu'); 
    let menu = document.getElementById('menu') 
    menu.classList.toggle('display-none')
}