var nav = $('#menu > ul > li');
nav.find('li').hide();
nav.hover(function () {
    nav.not(this).find('li').hide();
    $(this).find('li').slideToggle();
});
$(function () {
    $('#menu input').click(function () {
        $('#menu ul').slideToggle()
    });
});

if (screen.width < 769) {
    $('#menu ul').on("click", function () {
        $('#menu ul').css("display", "block")
    })

    // ESC keyboard press close hamburger menu
    $(document).on('keydown', function (event) {
        if (event.key == "Escape") {
            $('#menu ul').css("display", "none")
        }
    });
}


/* When the user clicks on the button, 
   toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn', '.dropbtn img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// SLICK SLIDERS
$('.usp').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 427,
            settings: {
                arrows: true,
                prevArrow: '<i class="fa-solid fa-angle-left"></i>',
                nextArrow: '<i class="fa-solid fa-angle-right"></i>',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

$('.testimonialsBottom').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 427,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.topBrandsBottom').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 427,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.joinUsBottom').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 427,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.productBottom').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 427,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.bannersection').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    fade: true,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
});