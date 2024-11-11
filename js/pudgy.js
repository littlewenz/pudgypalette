$(document).ready(function () {
    // auto populate featured products based on json file

    var featuredProductsString = "";
    var imageUrl = "";
    var title = "";
    var creator = "";
    var url = "";

    $.getJSON("https://testportal.merchandice.me/js/featured_products.json", function (data) {
        $.each(data, function(topKey, topVal) {
            $.each(topVal, function(middleKey, middleVal) {
                $.each(middleVal, function(innerKey, innerVal){
                    if (innerKey == "ImageUrl") {
                        imageUrl = innerVal;
                    }
                    if (innerKey == "Title") {
                        title = innerVal;
                    }
                    if (innerKey == "Creator") {
                        creator = innerVal;
                    }
                    if (innerKey == "Url") {
                        url = innerVal;
                    }
                });

                if(isImgUrl(imageUrl)) {
                    featuredProductsString = featuredProductsString + '<div class="card">'
                        + '<img src="' + imageUrl + '">'
                        + '<div class="card-body d-flex flex-column align-items-center justify-content-center text-center">'
                        + '<h5 class="card-title">' + title + '</h5>'
                        + '<p class="card-text">' + creator + '</p>'
                        + '<a href="' + url +'" target="_blank" class="btn product-btn btn-sm">See Product</a>'
                        + '</div></div>';
                };
            });
        });

        $("#products-cards").html(featuredProductsString);
    });
});

function isImgUrl(url) {
    const img = new Image();
    img.src = url;
    if (img.onerror) return false;
    if (img.onload) return true;
  }

const swiper = new Swiper('.swiper-members', {
    loop: true,
    autoheight: true,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 576px
        576: {
            slidesPerView: 3
        }
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        depth: 400,
        slideShadows: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    }, 

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
  });