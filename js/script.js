window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const cardsTopMore = document.querySelectorAll('.card-top__more');
  const overLay = document.querySelector('.overlay');
  const closeBtns = document.querySelectorAll('.close-btn');
  const favoriteNavBtn = document.querySelector('.nav-list__favorites');
  const cartNavBtn = document.querySelector('.nav-list__cart');
  const favoritesBtns = document.querySelectorAll('.favorites-btn');
  const favoritesItems = document.querySelector('.favorites-items');
  const addBtns = document.querySelectorAll('.add-btn');
  const cartItems = document.querySelector('.cart-items');
  const popupDescr = document.querySelector('.popup-descr');
  const popupImage = document.querySelector('.popup-image');
  const cardImages = document.querySelectorAll('.card-image');

  // popup more
  cardsTopMore.forEach((cardsTopMoreElement, index) => {
    cardsTopMoreElement.addEventListener('click', () => {
      overLay.classList.add('overlay--visible-popup');

      // popup descr
      const clickedCardNames =
        document.querySelectorAll('.card-name')[index].innerText;
      popupDescr.innerText = `${clickedCardNames} \n Стикер в виде emoji Выдры. Для его создания используется прочная бумага и качественная краска, что делает стикер максимально долговечным. \n Сделано в России с любовью!`;
    });
  });

  // popup image

  closeBtns.forEach((closeBtnsElement) => {
    closeBtnsElement.addEventListener('click', () => {
      overLay.classList.remove('overlay--visible-popup');
    });
  });

  // favorites
  favoriteNavBtn.addEventListener('click', () => {
    overLay.classList.add('overlay--visible-favorites');
  });

  closeBtns.forEach((closeBtnsElement) => {
    closeBtnsElement.addEventListener('click', () => {
      overLay.classList.remove('overlay--visible-favorites');
    });
  });

  // cart
  cartNavBtn.addEventListener('click', function () {
    overLay.classList.add('overlay--visible-cart');
  });

  closeBtns.forEach((closeBtnsElement) => {
    closeBtnsElement.addEventListener('click', () => {
      overLay.classList.remove('overlay--visible-cart');
    });
  });

  // add to favorites
  // clone card and add to favorites
  favoritesBtns.forEach((favoritesBtnsElement, index) => {
    favoritesBtnsElement.addEventListener('click', () => {
      const favoritesItem = cards[index].cloneNode(true);

      //add item to favorites
      favoritesItems.append(favoritesItem);

      // find card top, card top more
      const favoritesItemTop = favoritesItem.querySelector('.card-top');

      const favoritesItemTopMore =
        favoritesItem.querySelector('.card-top__more');

      // show more in favorites
      favoritesItemTopMore.addEventListener('click', () => {
        overLay.classList.add('overlay--visible-popup');
        overLay.classList.remove('overlay--visible-favorites');
      });

      //remove favorites button
      const favoritesBtnsInFavorites =
        favoritesItemTop.querySelector('.favorites-btn');

      favoritesBtnsInFavorites.remove();

      //create unfavorite button
      const unfavoriteBtn = document.createElement('img');

      unfavoriteBtn.src = './src/images/icons/unfavorite.svg';

      unfavoriteBtn.classList.add('unfavorites-btn');

      unfavoriteBtn.alt = 'unfavorite';

      favoritesItemTop.append(unfavoriteBtn);

      unfavoriteBtn.addEventListener('click', () => {
        favoritesItem.remove();
      });

      // add to cart from favorites
      const favoritesItemAddBtn = favoritesItem.querySelector('.add-btn');

      favoritesItemAddBtn.addEventListener('click', () => {
        const cartItemFromFavorites = favoritesItem.cloneNode(true);

        const cartItemFromFavoritesAddBtn =
          cartItemFromFavorites.querySelector('.add-btn');
        cartItemFromFavoritesAddBtn.remove();

        //create remove button
        const cartItemFromFavoritesBottom =
          cartItemFromFavorites.querySelector('.card-bottom');

        const remove = document.createElement('img');

        remove.src = './src/images/icons/remove.svg';

        remove.classList.add('remove-btn');

        remove.alt = 'remove';

        cartItemFromFavoritesBottom.append(remove);

        remove.addEventListener('click', () => {
          cartItemFromFavorites.remove();
        });

        // show more in cart from favorites
        const cartItemFromFavoritesTopMore =
          cartItemFromFavorites.querySelector('.card-top__more');

        cartItemFromFavoritesTopMore.addEventListener('click', () => {
          overLay.classList.add('overlay--visible-popup');
          overLay.classList.remove('overlay--visible-cart');
        });

        //add item to cart from favorites
        cartItems.append(cartItemFromFavorites);
      });
    });
  });

  // add to cart

  // slick
  $(document).ready(function () {
    $('.reviews-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });
});
