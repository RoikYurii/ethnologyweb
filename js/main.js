!function(){var e=$(".header"),t=e.outerHeight();$("header").is(".header")&&$(window).scroll(function(){e.offset().top>t?e.addClass("header--scrolled"):e.removeClass("header--scrolled")}),$(".header__hamb").click(function(){$(this).toggleClass("header__hamb--active"),$(".header__nav").toggleClass("header__nav--active")})}(),function(){$("#getAbout").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).hasClass("active")?$(this).html("Закрити"):$(this).html("Дізнатись більше"),$(".about-content").slideToggle()}),$(".about-directions__item").click(function(){$(".about-directions__item").removeClass("about-directions__item--active"),$(this).addClass("about-directions__item--active"),$(".about-directions__content").css("display","none"),$("#"+$(this).attr("data-direct")).fadeIn()});var e=$(".teacher-info__nav-item");e.click(function(){e.removeClass("teacher-info__nav-item--active"),$(this).addClass("teacher-info__nav-item--active"),$(".teacher-info__content").css("display","none");var t=$(this).attr("data-content");$("#"+t).fadeIn()}),$(".news_block__btn").click(function(){for(var e=$(".news_block__inner"),t=0;t<4;t++)e.append('\n    <div class="news_block__item">\n      <div class="news_block__item-body">\n        <h3 class="news_block__item-title">Новина</h3>\n        <p class="news_block__item-text">So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly.</p>\n        <p class="news_block__item-date">7.02.2016</p>\n      </div>\n      <a class="news_block__item-btn" href="#">\n        <p>Читати</p>\n        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">\n          <path style="fill:#1E201D;" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111              C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587              c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z">   </path>\n        </svg>\n      </a>\n    </div>')})}(),function(){function e(e,t){var n=e.width()*t;e.height(n)}e($(".contact_block__info-img"),1),e($(".teachers-main__item-head"),1.15),e($(".teacher-start__img"),1.15),e($(".about-directions__item-svg"),1),$(window).resize(function(){e($(".contact_block__info-img"),1),e($(".teacher-start__img"),1.15),e($(".about-directions__item-svg"),1)})}(),$(".about_block__gallery").slick({speed:500,infinite:!1,slidesToShow:1,slidesToScroll:1,dots:!1,nextArrow:'<div class="about_block__gallery-btn about_block__gallery-btn--next">\n                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">\n                    <path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111              C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587              c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path>\n                  </svg>\n                </div>',prevArrow:'<div class="about_block__gallery-btn about_block__gallery-btn--prev">\n                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">\n                    <path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111              C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587              c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path>\n                  </svg>\n                </div>'});