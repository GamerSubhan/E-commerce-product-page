// HEADER FUNCTIONALITES!

const shopButton = document.getElementById('shopIcon');
const cartCanvas = document.getElementById('cartCanvas');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById('plusButton');
const shoeAmountText = document.getElementById('amount');


let cartActive = false;
let shoeAmount = 0;

shopButton.addEventListener('click', () => {
    if(cartActive === false)
    {   
        cartCanvas.style.display = 'block';
        cartActive = true;
    }
    else
    {
        cartCanvas.style.display = 'none';
        cartActive = false;
    }
});

minusButton.addEventListener('click', () => {
    if(shoeAmount > 0)
    {
        shoeAmount--;
    }
    shoeAmountText.textContent = shoeAmount;
});

plusButton.addEventListener('click', () => {
    shoeAmount++;
    shoeAmountText.textContent = shoeAmount;
});

//Thumbnail system
const thumbnailListt = document.querySelectorAll('.thumbnailListt');
const mainShoePhoto = document.getElementById('mainShoePhoto');
const defaultThumbnail = document.getElementById('thumbnail-1');

defaultThumbnail.classList.add('active');

const showcasePhoto = document.getElementById('showcasePhoto');
const thumbnailList = document.querySelectorAll('.thumbnailList');

const defaultThumbnaill = document.getElementById('thumbnaill-1');
defaultThumbnaill.classList.add('active');

thumbnailList.forEach(element => {
    const elementId = element.id;
    element.addEventListener('click', () => {
        thumbnailList.forEach(item => item.classList.remove('active'));
        element.classList.add('active');

        switch(elementId)
        {
            case 'thumbnail-1':
                mainShoePhoto.src = 'images/image-product-1.jpg'
                break;
            case 'thumbnail-2':
                mainShoePhoto.src = 'images/image-product-2.jpg'
                break;
            case 'thumbnail-3':
                mainShoePhoto.src = 'images/image-product-3.jpg'
                break;
            case 'thumbnail-4':
                mainShoePhoto.src = 'images/image-product-4.jpg'
                break;
            default:
                mainShoePhoto.src = 'images/image-product-1.jpg'
                break;
        }
    });
});

thumbnailListt.forEach(element => {
    const elementId = element.id;
    element.addEventListener('click', () => {
        thumbnailListt.forEach(item => item.classList.remove('active'));
        element.classList.add('active');

        switch(elementId)
        {
            case 'thumbnaill-1':
                showcasePhoto.src = 'images/image-product-1.jpg'
                break;
            case 'thumbnaill-2':
                showcasePhoto.src = 'images/image-product-2.jpg'
                break;
            case 'thumbnaill-3':
                showcasePhoto.src = 'images/image-product-3.jpg'
                break;
            case 'thumbnaill-4':
                showcasePhoto.src = 'images/image-product-4.jpg'
                break;
            default:
                showcasePhoto.src = 'images/image-product-1.jpg'
                break;
        }
    });
});

const nextButton = document.querySelector('#nextBtn');
const previousButton = document.querySelector('#previousBtn');
let thumbnailIndex = 1;

nextButton.addEventListener('click', () => {
    thumbnailIndex++

    if(thumbnailIndex > 4)
    {
        thumbnailIndex = 1;
    }

    showcasePhoto.src = `images/image-product-${thumbnailIndex}.jpg`;
})

previousButton.addEventListener('click', () => {
    thumbnailIndex--

    if(thumbnailIndex < 1)
    {
        thumbnailIndex = 4;
    }

    showcasePhoto.src = `images/image-product-${thumbnailIndex}.jpg`;
})

const exitButton = document.querySelector('#closeBtn');
const lightbox = document.querySelector('#lightBox');

mainShoePhoto.addEventListener('click', () => {
    lightbox.style.display = 'block';
});

exitButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

const cartText = document.getElementById('CartText');

const buyBtn = document.querySelector('#buyButton');
const checkOutBtn = document.querySelector('#checkOutButton');
const shoeThumb = document.getElementById('cartThumbnail');
const itemAmount = document.getElementById('itemAmount');

buyBtn.enabled = false;

const deleteButton = document.createElement('img');
deleteButton.src = 'images/icon-delete.svg';
deleteButton.id = 'deleteBtn';

buyBtn.addEventListener('click', () => {
    if(shoeAmount > 0)
    {
        let shoePrice = shoeAmount * 125;
        itemAmount.style.display = 'block'
        itemAmount.textContent = shoeAmount;

        cartText.innerHTML = `Fall Limited Edition Sneakers <br> $125.00 x ${shoeAmount} <strong>$${shoePrice}</strong>`;
        cartText.style.marginTop = '18%';

        cartCanvas.appendChild(deleteButton);
        
        checkOutBtn.style.display = 'block';
        shoeThumb.style.display = 'block'
    }
    else
    {
        itemAmount.style.display = 'none'
        cartText.innerHTML = 'Your cart is empty';
        cartText.style.marginTop = '';
        checkOutBtn.style.display = 'none';
        shoeThumb.style.display = 'none'
    }

});

deleteButton.addEventListener('click', () => {
    itemAmount.style.display = 'none'
    cartText.innerHTML = 'Your cart is empty';
    cartText.style.marginTop = '';
    checkOutBtn.style.display = 'none';
    shoeThumb.style.display = 'none'

    cartCanvas.removeChild(deleteButton);
});

