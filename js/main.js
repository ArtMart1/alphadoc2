

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки события прокрутки
function handleScroll() {
    var element0 = document.querySelectorAll('.content');
    var element_btn1 = document.querySelectorAll('.web');
    var element_btn2 = document.querySelectorAll('.integration');
    var element_cards = document.querySelectorAll('.bottom_content, .card_box');
    var element_box = document.querySelectorAll('.left_bottom, .registration_box, .enter_box, .control_box, .creation_box, .use_box, .modules_top, .modules_bottom, .roles_top, .roles_bottom, .oneC');
    var element1 = document.querySelectorAll('.scroll-reveal');
    var element4 = document.querySelectorAll('.toggle-img');
    var element5 = document.querySelectorAll('.functional_inner, .all_functions_top, .all_functions_bottom');
    var element6 = document.querySelectorAll('.text');

    var element8 = document.querySelectorAll('.top_contentp3, .card1p3, .card2p3, .card3p3, .footerp3');
    element0.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
    element_btn1.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
    element_btn2.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
    element_cards.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        } 
    });
    element_box.forEach(function(element) {
        if (isElementInViewport(element)) {
            element_box.forEach(function(innerElement) {
                innerElement.classList.add('visible');
            });
        }
    });

    element1.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
  
    element4.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
    element5.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
    element6.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
  
    element8.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Добавление обработчика события прокрутки
window.addEventListener('scroll', handleScroll);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    handleScroll(); 
});
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var classesToStyle = ['header', 'content', 'card_box', 'projects', 'about','left_bottom', 'bottom_item', 'possibilities_inner', 'shrink_safari'];

    // Если это Safari, применяем стили для каждого класса
    if (isSafari) {
      for (var i = 0; i < classesToStyle.length; i++) {
        var elements = document.getElementsByClassName(classesToStyle[i]);
        for (var j = 0; j < elements.length; j++) {
          elements[j].style.fontWeight = '500';
        }
      }
    }
    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.toggle-btn');
        const images = document.querySelectorAll('.toggle-img');
        const texts = document.querySelectorAll('.text');
    
        function activateContent(index) {
            buttons.forEach(function (btn) {
                btn.classList.remove('open');
            });
    
            images.forEach(function (img) {
                img.classList.remove('open');
            });
    
            texts.forEach(function (text) {
                text.style.display = 'none';
            });
    
            buttons[index].classList.add('open');
            images[index].classList.add('open');
            texts[index].style.display = 'flex';
        }
    
        buttons.forEach(function (button, index) {
            button.addEventListener('click', function () {
                activateContent(index);
            });
        });
    
        images.forEach(function (image, index) {
            image.addEventListener('click', function () {
                activateContent(index);
            });
        });
    
        // Делаем первую кнопку и соответствующий текст активными изначально
        activateContent(0);
    });