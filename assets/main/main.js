var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        900: {
            slidesPerView: 6,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 40
        }

    }
});

var swiper = new Swiper(".featured__swiper", {
    slidesPerView: 4,
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        }

    }
});

var swiper = new Swiper(".latest__swiper", {
    slidesPerView: 6,
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 5,

        },
        900: {
            slidesPerView: 6,
            spaceBetween: 5
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 40
        }

    }
});


var block2 = new Swiper(".block2__swiper", {
    cssMode: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    breakpoints: {
        800: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 2
        }
    },
});


var swiper = new Swiper(".block5-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 6
        },

    },
});
var swiper = new Swiper(".classic__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 6
        },

    },
});



$('.moreless-button').click(function() {
    $('.moretext').toggle();
    if ($('.moreless-button').text() == "SHOW MORE") {
        $(this).text("SHOW LESS")
    } else {
        $(this).text("SHOW MORE")
    }
});