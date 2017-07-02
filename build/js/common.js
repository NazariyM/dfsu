$(document).ready(function () {

    // clear placeholder

    (function () {
        var el = $('input, textarea');
        el.focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        el.blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }());

    // main nav toggling

    (function () {
        var mainNav = $('.js-nav'),
            mainNavToggle = $('.js-nav-toggle');
        //


        mainNavToggle.on('click', function () {
            $(this).toggleClass('is-active').next(mainNav).slideToggle();
        });

        $(window).resize(function () {

            mainNavToggle.removeClass('is-active');
            if ($(window).width() <= 767) {
                mainNav.css('display', 'none');
            } else {
                mainNav.css('display', 'block');
            }
        });


    })();

    // services more

    (function () {
        var servRow = $('.js-services__row'),
            servItem = servRow.children(),
            servMore = $('.js-services-more');

        servMore.on('click', function (e) {
            e.preventDefault();

            if (($(this).text()) === 'Показати всі') {
                $(this).text('Приховати');
            } else {
                $(this).text('Показати всі');
            }

            servItem.each(function () {
                if ($(this).hasClass('is-visible')) {
                    $(this).fadeOut().removeClass('is-visible');
                    servRow.removeClass('is-active');
                }
                if ($(this).is(':hidden')) {
                    $(this).fadeIn().css("display", "inline-block").addClass('is-visible');
                    servRow.addClass('is-active');
                }
            });
        });
    })();

    //accordeon navigation
    (function () {
        var accord = $('.js-accord-nav'),
            accordToggle = accord.find('h3'),
            accordContent = accord.children('ul');

        accordToggle.on('click', function (e) {
            e.preventDefault();
            $(this).parent().addClass('is-active');
            if (!$(this).hasClass('is-active')) {
                accordToggle.removeClass('is-active');
                $(this).addClass('is-active');
                accordContent.slideUp();
                $(this).next().slideDown();
            }
        });
    })();

    // events-tabs
    (function () {
        $('.events-tabs__event').not(':first').hide();
        $('.js-events-tabs').children().on('click', function () {

            $('.js-events-tabs').children().removeClass('is-active').eq($(this).index()).addClass('is-active');
            $('.events-tabs__event').hide().eq($(this).index()).fadeIn();
            $('.js-events-pics').slick('setPosition');
            $('.js-events-nav').slick('setPosition');
        }).eq(0).addClass('is-active');
    })();

    // events picture sliders
    (function () {
        $('.js-events-pics').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-events-nav'
        });
        $('.js-events-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.js-events-pics',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 424,
                settings: {
                    slidesToShow: 3
                }
            }]
        });

    })();

    // news-tabs
    (function () {
        $('.news-tabs__item').not(':first').hide();
        $('.js-news-tabs').children().on('click', function () {
            $('.js-news-tabs').children().removeClass('is-active').eq($(this).index()).addClass('is-active');
            $('.news-tabs__item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('is-active');
    })();

    // events-announce slider
    (function () {
        $('.js-events-annonuce').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            speed: 700,
            fade: true,
            cssEase: 'linear'
        });
    })();

    // videoscenes-tabs
    (function () {
        $('.js-videoscenes-link').not(':first').hide();
        $('.js-videoscenes').children().on('click', function () {
            $('.js-videoscenes').children().removeClass('is-active').eq($(this).index()).addClass('is-active');
            $('.js-videoscenes-link').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('is-active');
    })();

    // calendar
    (function () {
        $('.js-calendar').datepicker({
            inline: true,
            defaultDate: '10/9/2016',
            showOtherMonths: true,
            dayNames: ['понеділок', 'вівторок', 'середа', 'четвер', 'п&#39;ятниця', 'субота', 'неділя'],
            monthNames: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
            dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
            prevText: '<i class="calendar__icon calendar__icon--prev icon-arrow"></i>',
            nextText: '<i class="calendar__icon calendar__icon--next icon-arrow"></i>'
        });
    })();

    // information accordion
    (function () {
        var allButtons = $('.js-information-accord'),
            allPanels = $('.js-information-content');

        allPanels.not(':first').hide();
        allPanels.first().parent().addClass('is-active');

        allButtons.click(function () {
            if (!$(this).parent().hasClass('is-active')) {
                allPanels.slideUp();
                allButtons.parent().removeClass('is-active');
                $(this).parent().addClass('is-active').children().last().slideDown();
                return false;
            }
        });
    })();

    // open selected option in link

    $(function(){
        $('.js-map-select').on('change', function () {
            var url = $(this).val();
            if (url) {
                window.location = url;
            }
            return false;
        });
    });

    // map
    (function () {

        var map = $('.js-map'),
            mapColor = '#1076C8',
            mapHvrColor = '#0d1529',
            mapBlackColor = '#D2D2D2',
            mapLink = $('.js-map-link'),
            mapImg = $('.js-map-pic');

        // toggle site color
        var colorToggle = $('.js-black-toggle'),
            logoMain = $('.js-logo'),
            togglePanel = $('.limit__panel');

        // map toggle

        var indMap = false;

        $(window).resize(function () {
            if ($(window).width() > 1023) {
                if (!indMap) {
                    mapImg.on('click', function () {

                        $(this).toggleClass('is-active');
                        $(this).next(map).fadeToggle();

                    });
                }
                indMap = true;

            } else if (indMap) {
                mapImg.off('click');
                map.fadeOut();
                indMap = false;
            }
        });

        if ($(window).width() > 1023) {
            if (!indMap) {
                mapImg.on('click', function () {

                    $(this).toggleClass('is-active');
                    $(this).next(map).fadeToggle();

                });
            }
            indMap = true;

        } else if (indMap) {
            mapImg.off('click');
            map.fadeOut();
            indMap = false;
        }

        // init map
        if (map.length > 0) {
            map.vectorMap({
                map: 'ukraine',
                backgroundColor: '#fff',
                borderColor: '#0d1529',
                borderOpacity: 0.4,
                borderWidth: 2,
                color: mapColor,
                hoverColor: mapHvrColor,
                selectedColor: false,
                onRegionClick: function (event, region) {

                    window.open("http://" + region.toLowerCase() + ".sfs.gov.ua", '_blank');
                    map.hide();
                    mapImg.removeClass('is-active');
                }

            });
        }

        // close map after link clicked
        mapLink.on('click', function () {
            map.hide();
            mapImg.removeClass('is-active');
        });

        // site switch color
        colorToggle.on('click', function () {

            $('html').toggleClass('is-black');
            $(this).toggleClass('is-active');

            if ($('html').hasClass('is-black')) {

                logoMain.attr('src', 'img/logo--blind.png');

                map.vectorMap('set', 'colors', {'1': mapBlackColor});
                map.vectorMap('set', 'colors', {'2': mapBlackColor});
                map.vectorMap('set', 'colors', {'3': mapBlackColor});
                map.vectorMap('set', 'colors', {'4': mapBlackColor});
                map.vectorMap('set', 'colors', {'5': mapBlackColor});
                map.vectorMap('set', 'colors', {'6': mapBlackColor});
                map.vectorMap('set', 'colors', {'7': mapBlackColor});
                map.vectorMap('set', 'colors', {'8': mapBlackColor});
                map.vectorMap('set', 'colors', {'9': mapBlackColor});
                map.vectorMap('set', 'colors', {'10': mapBlackColor});
                map.vectorMap('set', 'colors', {'11': mapBlackColor});
                map.vectorMap('set', 'colors', {'12': mapBlackColor});
                map.vectorMap('set', 'colors', {'13': mapBlackColor});
                map.vectorMap('set', 'colors', {'14': mapBlackColor});
                map.vectorMap('set', 'colors', {'15': mapBlackColor});
                map.vectorMap('set', 'colors', {'16': mapBlackColor});
                map.vectorMap('set', 'colors', {'17': mapBlackColor});
                map.vectorMap('set', 'colors', {'18': mapBlackColor});
                map.vectorMap('set', 'colors', {'19': mapBlackColor});
                map.vectorMap('set', 'colors', {'20': mapBlackColor});
                map.vectorMap('set', 'colors', {'21': mapBlackColor});
                map.vectorMap('set', 'colors', {'22': mapBlackColor});
                map.vectorMap('set', 'colors', {'23': mapBlackColor});
                map.vectorMap('set', 'colors', {'24': mapBlackColor});
                map.vectorMap('set', 'colors', {'25': mapBlackColor});

            } else {
                logoMain.attr('src', 'img/logo.png');

                map.vectorMap('set', 'colors', {'1': mapColor});
                map.vectorMap('set', 'colors', {'2': mapColor});
                map.vectorMap('set', 'colors', {'3': mapColor});
                map.vectorMap('set', 'colors', {'4': mapColor});
                map.vectorMap('set', 'colors', {'5': mapColor});
                map.vectorMap('set', 'colors', {'6': mapColor});
                map.vectorMap('set', 'colors', {'7': mapColor});
                map.vectorMap('set', 'colors', {'8': mapColor});
                map.vectorMap('set', 'colors', {'9': mapColor});
                map.vectorMap('set', 'colors', {'10': mapColor});
                map.vectorMap('set', 'colors', {'11': mapColor});
                map.vectorMap('set', 'colors', {'12': mapColor});
                map.vectorMap('set', 'colors', {'13': mapColor});
                map.vectorMap('set', 'colors', {'14': mapColor});
                map.vectorMap('set', 'colors', {'15': mapColor});
                map.vectorMap('set', 'colors', {'16': mapColor});
                map.vectorMap('set', 'colors', {'17': mapColor});
                map.vectorMap('set', 'colors', {'18': mapColor});
                map.vectorMap('set', 'colors', {'19': mapColor});
                map.vectorMap('set', 'colors', {'20': mapColor});
                map.vectorMap('set', 'colors', {'21': mapColor});
                map.vectorMap('set', 'colors', {'22': mapColor});
                map.vectorMap('set', 'colors', {'23': mapColor});
                map.vectorMap('set', 'colors', {'24': mapColor});
                map.vectorMap('set', 'colors', {'25': mapColor});
            }
        });

        togglePanel.on('click', function (e) {
            e.stopPropagation();
        });

        // change font size
        var fontDecr = $('.js-font-decr'),
            fontIncr = $('.js-font-incr'),
            fontReset = $('.js-font-reset');

        $('body').addClass('font-0');

        fontIncr.on('click', function () {
            var fontNumber = $('body').attr('class').substr(-1);

            if (fontNumber < 3) {
                fontNumber = parseInt(fontNumber);
                fontNumber = fontNumber + 1;
                $('body').addClass('font-'+fontNumber);
            }

        });

        fontDecr.on('click', function () {
            var fontNumber = $('body').attr('class').substr(-1);

            if (fontNumber > 0) {
                fontNumber = parseInt(fontNumber);
                $('body').removeClass('font-'+fontNumber);
            }
        });

        fontReset.on('click', function () {
            $('body').removeClass('font-1 font-2 font-3');
        });

    })();

    // popup gallery
    lightbox.option({
        'resizeDuration': 100,
        'wrapAround': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300,
        'albumLabel': 'Фото № %1/%2',
        'positionFromTop': 50
    });

    // video player
    $('.js-video-player').mediaelementplayer({
        alwaysShowControls: false,
        videoVolume: 'horizontal',
        features: ['playpause','progress','volume','fullscreen','current','duration']
    });

});