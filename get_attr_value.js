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

// skill__progress
// document.querySelectorAll('.skill__progressdynamic').forEach(function(skillValue){
//     const sillWidth = skillValue.getAttribute("data-percent");
//     sillWidthNumber = parseInt(sillWidth);
//     skillValue.style.width = sillWidthNumber + '%';
//     console.log(sillWidthNumber, skillValue.style.width)
// });

/*document.querySelectorAll('.skill__progressdynamic').forEach(function(skillValue) {
    const sillWidth = skillValue.getAttribute("data-percent");
    const sillWidthNumber = parseInt(sillWidth);
  
    // Get the computed width of the element (considering applied styles)
    const computedStyle = getComputedStyle(skillValue);
    const actualWidth = computedStyle.getPropertyValue('width');
  
    console.log(actualWidth); // This will log the actual width in pixels (or other units)
  });
  */

  /*document.querySelectorAll('.skill__progressdynamic').forEach(function(skillValue, index) {
    const sillWidth = skillValue.getAttribute("data-percent");
    const sillWidthNumber = parseInt(sillWidth);
  
    // Define a function to handle width logic
    function setWidth() {
      skillValue.style.width = sillWidthNumber + '%'; // Example: Set width
      const computedStyle = getComputedStyle(skillValue);
      const actualWidth = computedStyle.getPropertyValue('width'); // Example: Get computed width
  
      console.log(skillValue.style.width, actualWidth); // Log width (adjust for computed width approach)
    }
  
    // Apply the delay using setTimeout
    setTimeout(setWidth, index * 2000); // Delay based on loop index
  });*/

  function setWidth(skillValue, sillWidthNumber) {
    // Set initial width to 0
    skillValue.style.width = '0%';
  
    // Calculate the total number of increments for 3000ms animation with 1% increments
    const totalIncrements = Math.ceil(sillWidthNumber / 1); // Assuming 1% increments (modify for larger increments)
  
    // Function to handle width incrementation
    function incrementWidth(currentIncrement) {
      const currentWidth = parseFloat(computedStyle.getPropertyValue('width'));
  
      // Check if animation is complete
      if (currentIncrement >= totalIncrements) {
        skillValue.style.width = sillWidthNumber + '%'; // Set final width
        return; // Stop incrementing
      }
  
      const targetWidth = Math.min(currentWidth + 1, sillWidthNumber); // Increment by 1% (modify for larger increments), ensure it doesn't exceed target
  
      skillValue.style.width = targetWidth + '%';
  
      // Calculate delay based on remaining increments and desired animation duration
      const remainingIncrements = totalIncrements - currentIncrement;
      const delay = Math.max(500 * (remainingIncrements / totalIncrements), 1); // Adjust delay for smoothness
  
      // Schedule the next increment with the calculated delay
      setTimeout(() => incrementWidth(currentIncrement + 1), delay);
    }
  
    // Get the computed width considering applied CSS styles
    const computedStyle = getComputedStyle(skillValue);
  
    // Start the width incrementation process with no delay
    incrementWidth(0);
  
    // Optional final width logging
    console.log(`Initial width: 0`);
    skillValue.addEventListener('transitionend', () => {
      console.log(`Final width: ${computedStyle.getPropertyValue('width')}`);
    });
  }
  
  document.querySelectorAll('.skill__progressdynamic').forEach(function(skillValue) {
    const sillWidth = skillValue.getAttribute("data-percent");
    const sillWidthNumber = parseInt(sillWidth);
  
    setWidth(skillValue, sillWidthNumber);
  });
  