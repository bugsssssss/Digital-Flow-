
let burger = document.getElementById('burger')
console.log(burger)

burger.addEventListener('click', openBurger)

let menu = document.getElementsByClassName('burger_menu')[0]
console.log(menu)

// white_menu.addEventListener('click', openBurger)

function openBurger () {
    menu.classList.add('_active')
    burger.style.visibility = "hidden" 
}

let close_burger = document.getElementById('close_burger')
console.log(close_burger)

close_burger.addEventListener('click', closeBurger)

function closeBurger () {
    menu.classList.remove('_active')
    burger.style.visibility = "visible" 
}

let head = document.getElementsByClassName('header')[0]
let black_logo = document.getElementById('digital_flow')
console.log(head, black_logo)

$(window).scroll(function() {
    const scrollToElementTop = $('#about').offset().top,
            scrollToElementHeight = $('#about').outerHeight(),
            windowHeight = $(window).height(),
            windowTop = $(this).scrollTop();
    if (!(windowTop >
            (scrollToElementTop + scrollToElementHeight - windowHeight) &&
            (scrollToElementTop > windowTop) &&
            (windowTop + windowHeight > scrollToElementTop + scrollToElementHeight)
    )) {
      head.style.backgroundColor = '#191A1E'
      black_logo.setAttribute('src', 'img/logo/white-logo.png')
      burger.setAttribute('src', 'img/logo/white-burger.png')
    } else {
        head.removeAttribute('style')
    }
  });