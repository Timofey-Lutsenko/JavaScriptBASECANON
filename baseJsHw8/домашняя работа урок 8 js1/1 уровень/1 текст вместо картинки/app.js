'use strict';
/* 
1. получите все кнопки и сохраните в переменную
1.1 затем проитерируйтесь по кнопкам и каждой из
 них добавьте обработчик клика - функцию handleClick
 2. из объекта события получите ссылку на .product и
 сохраните в переменную:
 3. создайте литерал объекта со следующими свойствами:
 */

/*
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {

    const cardNode = clickedButtonEvent.target.parentElement;


    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.querySelector('img'), // здесь картинка внутри .product
        productName: cardNode.querySelector('.productName'), // здесь .productName, который внутри .product
        button: cardNode.querySelector('button'), // здесь button, который внутри .product
    };



    /* 
    4. получаем текст на кнопке, которая внутри .product
    4.1 проверяем равняется ли этот текст строке "Подробнее"
    4.2 если да, то передаем объект card в функцию showMoreText
    4.3 проверяем равняется ли текст на кнопке строке 
    4.4 если да, то передаем объект card в функцию hideMoreText
    */
    if (cardNode.querySelector('button').textContent === 'Подробнее') {
        showMoreText(card);
    } else if (cardNode.querySelector('button').textContent === 'Отмена') {
        "Отмена"
        hideMoreText(card);
    }
};

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */

// 5. картинке внутри .product ставим стиль display: block
// 5.1 внутри .product находим элемент с классом .desc и удаляем его
// 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
function hideMoreText(card) {
    card.img.style.display = 'block';
    card.productName.remove('desc');
    card.button.textContent = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
// 6. картинке внутри .product ставим display: none
// 6.1 сохраняем произвольный текст в переменную
// 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
// 6.3 внутри .product у кнопки текст ставим "Отмена"
function showMoreText(card) {
    let fishTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    card.img.style.display = 'none';
    card.productName.insertAdjacentHTML('afterbegin', `<div class=desc>${fishTxt}</div>`);
    card.button.textContent = 'Отмена';
}

let allBtns = document.querySelectorAll('button');
allBtns.forEach(targetBtn => targetBtn.addEventListener('click', function (event) {
    handleClick(event);
}));
