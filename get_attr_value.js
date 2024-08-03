/*const innerNumberDiv = document.querySelector(".number_scrolling_vertical_inner_bx");
const dataNumValue = innerNumberDiv.getAttribute("data-num");
const dataValueArray = dataNumValue.split('');

const createElementDiv = document.createElement('div');
createElementDiv.classList.add('number_item_wrap');
innerNumberDiv.appendChild(createElementDiv);

const bg_item_wrap = document.querySelector('.bg_item_wrap');

dataValueArray.map(function(item) {
    const itemCreateElementDiv = document.createElement('div');
    itemCreateElementDiv.classList.add('number_item');
    
    for (let i = 0; i <= 19; i++) { // Change the condition to i <= 19
        let createSpan = document.createElement('span');
        createSpan.classList.add('number');
        createSpan.innerText = i % 10; // Use i % 10 to get the number within the range 0-9

        if (item == i % 10 && i > 5 && i < 16) {
            createSpan.classList.add('current');
        }
        itemCreateElementDiv.appendChild(createSpan);
    }

    setTimeout(() => {
        animationFun(itemCreateElementDiv); // used setTimeout for getting height;
    }, 150);
    
    createElementDiv.appendChild(itemCreateElementDiv);

    // bgColor js
    const bgCreateElementDiv= document.createElement('div');
    bgCreateElementDiv.classList.add('bg_number_item');
    bg_item_wrap.appendChild(bgCreateElementDiv);
});


function animationFun(animation_item) {
    let height = animation_item.querySelector('span').getBoundingClientRect().height;
    let currentIndex = Array.from(animation_item.querySelectorAll('.number')).findIndex((animation_span) =>
        animation_span.classList.contains('current')
    );

    let transformHeight = height * currentIndex + 'px';
    animation_item.style.transform = `translateY(-${transformHeight})`;
}*/


document.querySelectorAll(".number_scrolling_vertical_inner_bx").forEach(function(innerNumberDiv) {
    const dataNumValue = innerNumberDiv.getAttribute("data-num");
    const dataValueArray = dataNumValue.split('');

    const createElementDiv = document.createElement('div');
    createElementDiv.classList.add('number_item_wrap');
    innerNumberDiv.appendChild(createElementDiv);

    const bg_item_wrap = innerNumberDiv.querySelector('.bg_item_wrap');

    dataValueArray.forEach(function(item) {
        const itemCreateElementDiv = document.createElement('div');
        itemCreateElementDiv.classList.add('number_item');

        if (item === ',' || item === '.') {
            let createSpan = document.createElement('span');
            createSpan.classList.add('number');
            createSpan.innerText = item;
            itemCreateElementDiv.appendChild(createSpan);
            createElementDiv.appendChild(itemCreateElementDiv);
        } else {
            for (let i = 0; i <= 19; i++) {
                let createSpan = document.createElement('span');
                createSpan.classList.add('number');
                createSpan.innerText = i % 10;

                if (item == i % 10 && i > 5 && i < 16) {
                    createSpan.classList.add('current');
                }
                itemCreateElementDiv.appendChild(createSpan);
            }

            setTimeout(() => {
                animationFun(itemCreateElementDiv);
            }, 150);

            createElementDiv.appendChild(itemCreateElementDiv);
        }

        // bgColor js
        const bgCreateElementDiv = document.createElement('div');
        bgCreateElementDiv.classList.add('bg_number_item');
        bg_item_wrap.appendChild(bgCreateElementDiv);
    });
});

function animationFun(animation_item) {
    let height = animation_item.querySelector('span').getBoundingClientRect().height;
    let currentIndex = Array.from(animation_item.querySelectorAll('.number')).findIndex((animation_span) =>
        animation_span.classList.contains('current')
    );
    let transformHeight = height * currentIndex + 'px';
    animation_item.style.transform = `translateY(-${transformHeight})`;
}

// vertical increement number js
const scrolls = document.querySelectorAll(".skill__scroll");

scrolls.forEach((item) => {
    const countValue = item.getAttribute("data-count");
    let initialValue = 0;
    setInterval(() => {
    initialValue += 1;
    if (initialValue <= countValue) {
        item.style.width = `${initialValue}%`;
        item.children[0].style.left = `${initialValue}%`;
        item.children[0].innerHTML = `${initialValue}%`;
    }
    }, 10);
});
