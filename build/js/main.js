(function ($) {
  "use strict";
  // variables
  var header = $(".layout__header"),
    layout = $(".layout");
  // preloader
  preloader();

  function preloader() {
    layout.on("click", ".nav__link", function (event) {
      layout.removeClass("layout_ready-load");
      event.preventDefault();
      var linkLocation = this.href;
      setTimeout(function () {
        window.location = linkLocation;
      }, 500);
    });
    setTimeout(function () {
      layout.addClass("layout_ready-load");
    }, 0);
  }

  // Sliders init
  // Single slider init
  if ($(".layout__slider").length) {
    $(".layout__slider").each((index, el) => {
      $(el).append('<div class="slider__nav"></div>');
      $(el)
        .find(".slider__list")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 6000,
          fade: true,
          appendArrows: $(".layout__slider").find(".slider__nav"),
          prevArrow:
            '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M1.72727 6.81836H17" stroke-linecap="round"/><path d="M8.27202 1L1.72656 6.81818L8.27202 12.6364" stroke-linecap="round"/></svg></div>',
          nextArrow:
            '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M16.2727 6.81836H1" stroke-linecap="round"/><path d="M9.72798 1L16.2734 6.81818L9.72798 12.6364" stroke-linecap="round"/></svg></div>',
        });
    });
  }

  if ($(".posts__slider").length) {
    $(".posts__slider").each((index, el) => {
      $(el).append('<div class="slider__nav slider__nav_secondary"></div>');
      $(el)
        .find(".slider__list")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          speed: 1000,
          fade: true,
          autoplay: true,
          autoplaySpeed: 6000,
          appendArrows: $(".posts__slider").find(".slider__nav"),
          prevArrow:
            '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M1.72727 6.81836H17" stroke-linecap="round"/><path d="M8.27202 1L1.72656 6.81818L8.27202 12.6364" stroke-linecap="round"/></svg></div>',
          nextArrow:
            '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M16.2727 6.81836H1" stroke-linecap="round"/><path d="M9.72798 1L16.2734 6.81818L9.72798 12.6364" stroke-linecap="round"/></svg></div>',
        });
    });
  }

  if ($(".products__slider").length) {
    $(".products__slider").each((index, el) => {
      $(el).append('<div class="slider__nav slider__nav_secondary"></div>');
      $(el)
        .find(".slider__list")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          speed: 1000,
          fade: true,
          autoplay: true,
          autoplaySpeed: 6000,
          appendArrows: $(".products__slider").find(".slider__nav"),
          prevArrow:
            '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M1.72727 6.81836H17" stroke-linecap="round"/><path d="M8.27202 1L1.72656 6.81818L8.27202 12.6364" stroke-linecap="round"/></svg></div>',
          nextArrow:
            '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M16.2727 6.81836H1" stroke-linecap="round"/><path d="M9.72798 1L16.2734 6.81818L9.72798 12.6364" stroke-linecap="round"/></svg></div>',
        });
    });
  }

  if ($(".products__list_carousel").length) {
    $(".products__list_carousel").each(function () {
      $(this).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 6000,
        appendArrows: $(this).closest(".layout__section").find(".section__nav"),
        prevArrow:
          '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M1.72727 6.81836H17" stroke-linecap="round"/><path d="M8.27202 1L1.72656 6.81818L8.27202 12.6364" stroke-linecap="round"/></svg></div>',
        nextArrow:
          '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M16.2727 6.81836H1" stroke-linecap="round"/><path d="M9.72798 1L16.2734 6.81818L9.72798 12.6364" stroke-linecap="round"/></svg></div>',
      });
    });
  }

  // Menu
  navInit();

  function navInit() {
    header.find(".burger").on("click", function () {
      $(this).closest(header).toggleClass("header_menu-active");
    });
  }

  // Submenu
  dropDownInit();

  function dropDownInit() {
    header.find(".nav__ico").on("click", function () {
      $(this).closest(".nav__item_dropdown").toggleClass("nav__item_active");
    });
  }

  /// Scroll functions
  $(window).on("load resize scroll", function () {
    let h = $(window).height();
    scrollHeader(h);
    scrollSection(h);
    scrollImage(h);
    scrollCounter(h);
    scrollFixSection(h);
  });
  function scrollFixSection(h) {
    wrap = $(".history__item");
    wrap.each(function () {
      let height = $(this).find(".history__layout").innerHeight();
      $(this).css("height", height);
      if (
        $(window).scrollTop() + $(".layout__header").height() >=
        $(this).offset().top
      ) {
        $(this).find(".history__layout").addClass("history__layout_fix");
      } else {
        $(this).find(".history__layout").removeClass("history__layout_fix");
      }
    });
  }

  function scrollCounter(h) {
    let statisticsTitle = $(".layout__statistics");
    statisticsTitle.each(function () {
      if ($(window).scrollTop() + h >= $(this).offset().top) {
        $(".statistics__counter").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).data("num"),
              },
              {
                duration: 1500,
                easing: "swing",
                step: function (now) {
                  let second = String(Math.ceil(now)).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1 ",
                  );
                  $(this).text(second);
                },
              },
            );
        });
      }
    });
  }

  function scrollHeader(h) {
    if ($(window).scrollTop() >= 1) {
      header.addClass("layout__header_animation");
    } else {
      header.removeClass("layout__header_animation");
    }
  }

  function scrollSection(h) {
    let section = $(".section");
    section.each(function () {
      if ($(window).scrollTop() + h >= $(this).offset().top) {
        $(this).addClass("section_current");
      }
    });
  }

  function scrollImage(h) {
    // Image initialization
    let img = $("img");
    img.each(function () {
      if (
        $(window).scrollTop() + h * 2 >= $(this).offset().top &&
        this.getAttribute("data-src") &&
        this.src !== this.getAttribute("data-src")
      ) {
        this.src = this.getAttribute("data-src");
      }
    });
  }

  // MODAL INIT
  modalInit();

  function modalInit() {
    let modalName;
    // modal show
    $(document).on("click", ".modal-init", function () {
      layout
        .addClass("layout_modal-active")
        .find(".modal__layout")
        .removeClass("modal__layout_active");
      modalName = $(this).data("modalname");
      layout.find("." + modalName + "").addClass("modal__layout_active");
    });
    // modal hide
    $(document).mouseup(function (e) {
      if ($(".modal__layout_active").length) {
        var div = $(".modal__layout");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          modalHide();
        }
      }
    });
    // modal hide
    $(document).on("click", ".modal__action", function () {
      modalHide();
    });
    // modal hide
    $(window).keydown(function (e) {
      if (e.key === "Escape") {
        modalHide();
      }
    });

    function modalHide() {
      layout
        .removeClass("layout_modal-active")
        .find(".modal__layout")
        .removeClass("modal__layout_active");
    }
  }

  // Scroll
  linkScroll();

  function linkScroll() {
    $('a[href^="#"]:not([href="#"])').click(function (e) {
      e.preventDefault();
      var target = $($(this).attr("href"));
      if (target.length) {
        var scrollTo = target.offset().top;
        $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
      }
    });
  }

  // Search
  search();

  function search() {
    $(".header__search").on("input", ".search__input", function () {
      if ($(this).val().length >= 1) {
        header.addClass("layout__header_search-active");
      } else {
        header.removeClass("layout__header_search-active");
      }
    });
    $(".search__footer").on("click", ".btn", function () {
      header.removeClass("layout__header_search-active");
      header.find(".search__input").val("");
    });
  }

  // Contact
  contactFunction();

  function contactFunction() {
    $(".footer__contact").on("click", ".contact__header", function () {
      $(this).closest(".contact__item").toggleClass("contact__item_active");
    });
  }

  // Contact
  filterFunction();

  function filterFunction() {
    $(".layout__filter").on("click", ".filter__toggle", function () {
      $(".layout__filter_vertical").toggleClass(
        "layout__filter_vertical-active",
      );
    });

    // modal hide
    $(document).mouseup(function (e) {
      if ($(".layout__filter_vertical-active").length) {
        var div = $(".layout__filter_vertical");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          $(".layout__filter_vertical").removeClass(
            "layout__filter_vertical-active",
          );
        }
      }
    });
    // modal hide
    $(document).on("click", ".filter__action", function () {
      $(".layout__filter_vertical").removeClass(
        "layout__filter_vertical-active",
      );
    });
    // modal hide
    $(window).keydown(function (e) {
      if (e.key === "Escape") {
        $(".layout__filter_vertical").removeClass(
          "layout__filter_vertical-active",
        );
      }
    });
  }

  // Contact
  if ($(".product__slider").length) {
    productFunction();
  }

  function productFunction() {
    let length = $(".slider__secondary").find(".slider__slide").length;
    $(".slider__primary").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: length >= 5 ? ".slider__secondary" : "",
    });

    $(".slider__secondary").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      vertical: true,
      prevArrow:
        '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 80 36" fill="none"><rect width="80" height="36" rx="8" /><path d="M35 21L40 16L45 21" stroke="white"/></svg></div>',
      nextArrow:
        '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 80 36" fill="none"><rect width="80" height="36" rx="8" /><path d="M35 16L40 21L45 16" stroke="white"/></svg></div>',
      asNavFor: ".slider__primary",
      responsive: [
        {
          breakpoint: 579,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            arrows: false,
            prevArrow:
              '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48" fill="none"><rect width="36" height="48" rx="8" fill="#141414"/><path d="M20 29L15 24L20 19" stroke="white"/></svg></div>',
            nextArrow:
              '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48" fill="none"><rect width="36" height="48" rx="8" fill="#141414"/><path d="M15 19L20 24L15 29" stroke="white"/></svg></div>',
          },
        },
      ],
    });
  }

  if ($("select").length) {
    jcf.setOptions("Select", {
      wrapNative: false,
      wrapNativeOnMobile: false,
      fakeDropInBody: false,
    });
    jcf.replaceAll();
  }

  if ($(".layout__history").length) {
    historyFunction();
  }
  function historyFunction() {
    let length = $(".slider__secondary").find(".slider__slide").length;
    $(".date__list").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      vertical: true,
      asNavFor: ".history__list",
    });

    $(".history__list").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      vertical: true,
      asNavFor: ".date__list",
    });
    if ($(window).width() > 580) {
      const history = $(".layout__history"),
        slider = $(".date__list");
      history.on("wheel", function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY >= 0) {
          slider.slick("slickNext");
        } else {
          slider.slick("slickPrev");
        }
      });
    }
  }
})(jQuery);
