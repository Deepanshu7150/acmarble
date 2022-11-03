(function(jQuery) {
    'use strict';
    var mobileDevice = !1;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        jQuery('html').addClass('mobile');
        mobileDevice = !0
    } else {
        jQuery('html').addClass('no-mobile');
        mobileDevice = !1
    }
    jQuery(window).load(function() {
        jQuery('.loader').fadeOut(300);
        jQuery('.navbar-desctop-menu  a').each(function() {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                jQuery(this).addClass('active')
            }
        })
    });
    var wow = new WOW({
        offset: 150,
        mobile: !1
    });
    wow.init();
    var navbarDesctop = jQuery('.navbar-desctop');
    var navbarMobile = jQuery('.navbar-mobile');
    navbarDesctop.affix({
        offset: {
            top: 200
        }
    });
    navbarDesctop.on('affix.bs.affix', function() {
        if (!navbarDesctop.hasClass('affix')) {
            navbarDesctop.addClass('animated slideInDown')
        }
    });
    navbarDesctop.on('affix-top.bs.affix', function() {
        navbarDesctop.removeClass('animated slideInDown');
        jQuery('.navbar-collapse').collapse('hide')
    });
    navbarMobile.affix({
        offset: {
            top: 1
        }
    });
    navbarMobile.on('affix.bs.affix', function() {
        if (!navbarMobile.hasClass('affix')) {
            navbarMobile.addClass('animated slideInDown')
        }
    });
    navbarMobile.on('affixed-top.bs.affix', function() {
        navbarMobile.removeClass('animated slideInDown')
    });
    jQuery('.navbar-nav-mobile .menu-item-has-children > a').on('click', function() {
        jQuery(this).closest('li').toggleClass('current');
        jQuery(this).closest('li').find('ul').slideToggle(200);
        return !1
    });
    jQuery('.navbar-collapse').on('show.bs.collapse', function() {
        navbarMobile.addClass('affix')
    });
    jQuery('.navbar-collapse').on('hidden.bs.collapse', function() {
        if (navbarMobile.hasClass('affix-top')) {
            navbarMobile.removeClass('affix')
        }
    });
    navbarMobile.on('affixed-top.bs.affix', function() {
        if (jQuery('.navbar-collapse').hasClass('in')) {
            navbarMobile.addClass('affix')
        }
    });
    jQuery('.js-target-scroll').on('click', function() {
        var target = jQuery(this.hash);
        if (target.length) {
            jQuery('html,body').animate({
                scrollTop: (target.offset().top - 100)
            }, 1000);
            return !1
        }
    });
    jQuery('.object-label').on('click', function() {
        jQuery('.object-label').not(this).find(jQuery('.object-info')).fadeOut(200);
        jQuery(this).find('.object-info').fadeToggle(200)
    });
    jQuery(window).stellar({
        responsive: !0,
        horizontalScrolling: !1,
        hideDistantElements: !1,
        horizontalOffset: 0,
        verticalOffset: 0,
    });
    jQuery(".js-projects-carousel").owlCarousel({
        itemsMobile: [479, 1],
        itemsTablet: [768, 2],
        itemsDesktopSmall: [979, 2],
        itemsDesktop: [1250, 3],
        items: 4,
        pagination: !1,
        navigation: !0,
        slideSpeed: 700,
        responsiveRefreshRate: 0
    });
    jQuery('.js-projects-gallery').each(function() {
        jQuery(this).magnificPopup({
            delegate: 'a:not(.link)',
            type: 'image',
            removalDelay: 300,
            tLoading: 'Loading image #%curr%...',
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>'
                }
            }
        })
    });
    if (jQuery('.js-ajax-form').length) {
        jQuery('.js-ajax-form').each(function() {
            jQuery(this).validate({
                errorClass: 'error wobble-error',
                submitHandler: function(form) {
                    jQuery.ajax({
                        type: "POST",
                        url: goarch_obj.ajaxurl,
                        data: 'action=goarch_mail_send&' + jQuery(form).serialize(),
                        success: function(res) {
                            console.log(res);
                            jQuery('.col-message, .success-message').show()
                        },
                        error: function() {
                            jQuery('.col-message, .error-message').show()
                        }
                    })
                }
            })
        })
    }
})(jQuery);
jQuery(document).ready(function($) {
    jQuery('.navbar-nav-mobile li a').each(function() {
        if (jQuery(this).attr('href') == location.href) {
            jQuery(this).parent().addClass('active')
        }
    });
    jQuery('.js-target-scroll, .navbar-nav li a[href^="#"], .navbar-desctop-menu li a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, 900, 'swing', function() {
            window.location.hash = target
        })
    })
})