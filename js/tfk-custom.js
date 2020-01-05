function revSlider_1() {
    $("#rev_slider_1").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 500,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "horizontal",
                drag_block_vertical: !1
            },
            bullets: {
                enable: !1,
                hide_onmobile: !1,
                hide_under: 600,
                style: "ares",
                hide_onleave: !0,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "baseline",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: '<span class="tp-bullet-title">{{title}}</span>'
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: 1240,
        gridheight: 1e3,
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2e3,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55]
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 2,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "on",
        fullScreenAutoWidth: "on",
        fullScreenAlignForce: "on",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        hideThumbsOnMobile: "on",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    });
}
function revSlider_2() {
    $("#rev_slider_2").show().revolution({
        sliderType: 'standard',
        sliderLayout: "",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "horizontal",
                drag_block_vertical: !1
            },
            bullets: {
                enable: !1,
                hide_onmobile: !1,
                hide_under: 600,
                style: "ares",
                hide_onleave: !0,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "baseline",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: '<span class="tp-bullet-title">{{title}}</span>'
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: 1240,
        gridheight: 1e3,
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2e3,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55]
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 2,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "on",
        fullScreenAutoWidth: "on",
        fullScreenAlignForce: "on",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        hideThumbsOnMobile: "on",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    })
}

function revSlider_3() {
    $("#rev_slider_3").show().revolution({
        sliderType: "standard",
        sliderLayout: "",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "horizontal",
                drag_block_vertical: !1
            },
            bullets: {
                enable: !0,
                hide_onmobile: !0,
                hide_under: 600,
                style: "ares",
                hide_onleave: !1,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "baseline",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: '{{title}}'
            }
        },
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: 1240,
        gridheight: 600,
        lazyType: "none",
        shadow: 0,
        spinner: "spinner0",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    })
}
$(document).ready(function() {
    function e() {
        $(".header-1").length > 0 && ($(window).width() < 1500 ? $("header").find(".noo-menu-option").find("li").length > 0 && $("header").find(".noo-menu-option").addClass("collapse") : $("header").find(".noo-menu-option").removeClass("collapse")), $(".header-3").length > 0 && ($(window).width() < 1300 ? $("header").find(".noo-menu-option").find("li").length > 0 && $("header").find(".noo-menu-option").addClass("collapse") : $("header").find(".noo-menu-option").removeClass("collapse"))
    }

    function o(e) {
        var o = this.currentItem;
        $(".noo-testimonial-sync1").find(".owl-item").removeClass("synced").eq(o).addClass("synced"), void 0 !== $(".noo-testimonial-sync1").data("owlCarousel") && i(o)
    }

    function i(e) {
        var o = a.data("owlCarousel").owl.visibleItems,
            i = e,
            t = !1;
        for (var n in o)
            if (i === o[n]) t = !0;
            !1 === t ? i > o[o.length - 1] ? a.trigger("owl.goTo", i - o.length + 2) : (i - 1 == -1 && (i = 0), a.trigger("owl.goTo", i)) : i === o[o.length - 1] ? a.trigger("owl.goTo", o[1]) : i === o[0] && a.trigger("owl.goTo", i - 1)
    }
    if ($(".noo-search").on("click", function() {
            return $(".search-header5").fadeIn(1).addClass("search-header-eff"), $(".search-header5").find('input[type="search"]').val("").attr("placeholder", "").select(), !1
        }), $(".remove-form").on("click", function() {
            $(".search-header5").fadeOut(1).removeClass("search-header-eff")
        }), $(".button-menu-extend").on("click", function() {
            return $(".noo-menu-extend-overlay").fadeIn(1, function() {
                $(".noo-menu-extend").addClass("show")
            }).addClass("show"), !1
        }), $(".menu-closed, .noo-menu-extend-overlay").on("click", function() {
            $(".noo-menu-extend-overlay").removeClass("show").hide(), $(".noo-menu-extend").removeClass("show")
        }), $("body").hasClass("fixed_top") && $(window).scroll(function() {
            var e = 0;
            $(".noo-topbar").length > 0 && (e = "-" + $(".noo-topbar").height() + "px");
            var o = $("header").height();
            $(".header-5").length > 0 && ($(window).width() < 992 ? e = "144px" : o = 200), $(window).scrollTop() <= o ? $("header").hasClass("eff") && ($(".header-6").length > 0 ? $("header").css("marginTop", "25px").removeClass("eff") : $("header").css("marginTop", 0).removeClass("eff")) : $("header").hasClass("eff") || ($("header").css("marginTop", "-150px").animate({
                marginTop: e
            }, 700), $("header").addClass("eff"))
        }), e(), $(window).resize(function() {
            e()
        }), $("#off-canvas-nav li.menu-item-has-children").append('<i class="fa fa-angle-down"></i>'), $("#off-canvas-nav li.menu-item-has-children i").on("click", function(e) {
            var o = $(this);
            o.prev().slideToggle(300), o.parent().toggleClass("active")
        }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(".navbar-nav").find(".menu-item-has-children").find("a").on("touchstart", function(e) {
            "use strict";
            var o = $(this);
            return !!o.hasClass("hover") || (o.addClass("hover"), $(".navbar-nav").find(".menu-item-has-children").find("a").not(this).removeClass("hover"), e.preventDefault(), !1)
        }), $("#elasticstack").length > 0 && new ElastiStack(document.getElementById("elasticstack")), $(".defaultCountdown").length > 0) {
        t = new Date(2016, 2, 31);
        $(".defaultCountdown").countdown({
            until: t
        }), $("#year").text(t.getFullYear())
    }
    if ($(".noo_custom_countdown").length > 0) {
        var t = new Date(2016, 2, 21);
        $(".noo_custom_countdown").countdown({
            until: t
        }), $("#year").text(t.getFullYear())
    }
    $(".noo-product-sliders").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 2],
        slideSpeed: 500,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoHeight: !1,
        addClassActive: !0,
        autoPlay: !1,
        loop: !0,
        pagination: !0
    }), $(".blog-slider").owlCarousel({
        items: 1,
		itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [768, 1],
        singleItem: !0,
		autoHeight: !0,
		startPosition: 1,
		autoWidth: !0,
		autoPlay: !1
    }), $(".noo-slider-image").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 1],
        slideSpeed: 500,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoHeight: !0,
        addClassActive: !0,
        autoPlay: !0,
        loop: !0,
        pagination: !1
    }), $(".noo-simple-product-slider").owlCarousel({
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        slideSpeed: 500,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoHeight: !0,
        addClassActive: !0,
        navigation: !1,
        autoPlay: !0,
        loop: !0,
        pagination: !1
    });
    var n = $(".noo-testimonial-sync2"),
        a = $(".noo-testimonial-sync1");
    n.owlCarousel({
        singleItem: !0,
        slideSpeed: 1e2,
        navigation: !1,
        pagination: !1,
		mouseDrag: !1,
        afterAction: o,
        responsiveRefreshRate: 100
    }), $(".noo-testimonial-sync1").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var o = $(this).data("owlItem");
        n.trigger("owl.goTo", o)
    }), a.owlCarousel({
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
        pagination: !1,
		loop: !1,
        responsiveRefreshRate: 100,
        afterInit: function(e) {
            e.find(".owl-item").eq(0).addClass("synced");
        }
    }), $(".noo_testimonial").each(function() {
        $(this).owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            slideSpeed: 500,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoHeight: !1,
            addClassActive: !0,
            autoPlay: !0,
            loop: !0,
            pagination: !0,
            afterInit: function(e) {
                e.find(".owl-item").eq(1).addClass("synced");
            }
        })
	}), $(".noo_testimonial2").each(function() {
        $(this).owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            slideSpeed: 800,
            paginationSpeed: 1200,
            rewindSpeed: 1e3,
			navigation: !1,
            autoHeight: !1,
            addClassActive: !0,
            autoPlay: !1,
            loop: !0,
            pagination: !0,
            afterInit: function(e) {
                e.find(".owl-item").eq(1).addClass("synced");
            }
        })
	}), $(".noo_testimonial3").each(function() {
        $(this).owlCarousel({
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            slideSpeed: 500,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoHeight: !1,
            addClassActive: !0,
            autoPlay: !1,
            loop: !0,
            pagination: !0,
            afterInit: function(e) {
                e.find(".owl-item").eq(1).addClass("synced");
            }
        })
    }), $(".noo-qucik-view").length > 0 && $(".noo-qucik-view").magnificPopup({
        type: "ajax"
    }), $(".box-inner").each(function() {
        var e = $(this).find(".product-box-header li:first-child span").data("color");
        $(this).find(".product-box-header li:first-child span").css("background", e).addClass("acitve"), $(this).find(".box-content h3").css("color", e), $(this).find(".box-description-tab").css("background-color", e)
    }), $(".product-box-header li span").mousemove(function() {
        var e = $(this).closest(".box-inner");
        e.find(".product-box-header li span").removeAttr("style").removeClass("acitve");
        var o = $(this).data("color"),
            i = $(this).data("id");
        $(this).css("background", o).addClass("acitve"), e.find(".box-content-tab").hide(), e.find(i).show()
    }), $(".sync1").owlCarousel({
        singleItem: !0,
        slideSpeed: 1e3,
        navigation: !1,
        pagination: !1,
        autoHeight: !0,
        responsiveRefreshRate: 200
    }), $(".sync2").owlCarousel({
        items: 6,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
        pagination: !1,
        responsiveRefreshRate: 100
    }), $(".sync2").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var o = $(this).data("owlItem");
        $(".sync1").trigger("owl.goTo", o)
    }), $(".widget_recent_entries .post_list_widget li").each(function() {
        var e = $(this).find(".post-thumb");
        e.css("background-image", 'url("' + e.attr("data-bg") + '")')
    }), $(".noo-simple-product-slider li").each(function() {
        var e = $(this).find(".noo-simple-slider-item");
        e.css("background-image", 'url("' + e.attr("data-bg") + '")')
    }), $(".super-sidebar").superSidebar({
        position: ["right", "top"],
        offset: [0, 0],
        shape: "square",
        sideSpace: !1,
        buttonSpace: !1,
        labelSpace: !1,
        labelConnected: !1,
        labelEffect: "slide-out-fade",
        labelAnim: [400, "easeOutQuad"],
        color: "default",
        overColor: "default",
        labelsOn: !0
    }), $(".super-sidebar2").superSidebar({
        position: ["right", "top"],
        windowPosition: ["right", "top"],
        windowOffset: [42, 0],
        windowShadow: !0,
        offset: [200, 17],
        shape: "square",
        sideSpace: !1,
        buttonSpace: !1,
        labelSpace: !1,
        labelConnected: !1,
        labelEffect: "slide-out-fade",
        labelAnim: [400, "easeOutQuad"],
        color: "default",
        overColor: "default",
        labelsOn: !1
    }), $(".super-sidebar3").superSidebar({
        position: ["right", "top"],
        windowPosition: ["right", "top"],
        windowOffset: [42, 0],
        windowShadow: !0,
        offset: [20, 17],
        shape: "square",
        sideSpace: !1,
        buttonSpace: !1,
        labelSpace: !1,
        labelConnected: !1,
        labelEffect: "slide-out-fade",
        labelAnim: [400, "easeOutQuad"],
        color: "default",
        overColor: "default",
        labelsOn: !1
    }), $(".super-sidebar-container").superSidebar({
        position: ["right", "top"],
        windowPosition: ["right", "top"],
        windowOffset: [0, 42],
        windowShadow: !0,
        offset: [0, 0],
        shape: "square",
        sideSpace: !1,
        buttonSpace: !1,
        labelSpace: !1,
        labelConnected: !1,
        labelEffect: "slide-out-fade",
        labelAnim: [400, "easeOutQuad"],
        color: "default",
        overColor: "default",
        labelsOn: !1
    }), $(".super-sidebarMobile2").superSidebar({
        position: ["left", "bottom"],
        windowPosition: ["middle", "bottom"],
        windowOffset: [0, 42],
        windowShadow: !0,
        offset: [0, 0],
        shape: "square",
        sideSpace: !1,
        buttonSpace: !1,
        labelSpace: !1,
        labelConnected: !1,
        labelEffect: "slide-out-fade",
        labelAnim: [400, "easeOutQuad"],
        color: "default",
        overColor: "default",
        labelsOn: !1
    }),
		$(".super-sidebarMobile3").superSidebar({
        position: ["middle", "bottom"],
        windowPosition: ["middle", "bottom"],
        windowOffset: [0, 42],
        windowShadow: !0,
        offset: [0, 0],
        shape: "square",
        sideSpace: !1,
        buttonSpace: !1,
        labelSpace: !1,
        labelConnected: !1,
        labelEffect: "slide-out-fade",
        labelAnim: [400, "easeOutQuad"],
        color: "default",
        overColor: "default",
        labelsOn: !1
    }), $(".flickr-badge-wrapper").length > 0 && $(".flickr-badge-wrapper").jflickrfeed({
        limit: 9,
        qstrings: {
            id: "71865026@N00"
        },
        itemTemplate: '<a class="flickr_badge_image" href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
    }, function(e) {
        $(".flickr_badge_image").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        })
    }), $("#rev_slider_1").length > 0 && revSlider_1(), $("#rev_slider_2").length > 0 && revSlider_2(), $("#rev_slider_3").length > 0 && revSlider_3()
}), $(document).ready(function() {
    var e;
    $(".more").each(function() {
        var o = $(this).html();
        if (e = o.search(/<!\-\-\s*break\s*\-\->/), o.length > e && -1 != e) {
            var i = o.substr(0, e) + '<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>' + o.substr(e, o.length - e) + '</span>&nbsp;&nbsp;<a href="" class="morelink">Read More</a></span>';
            $(this).html(i)
        }
    }), $(".morelink").click(function() {
        return $(this).hasClass("less") ? ($(this).removeClass("less"), $(this).html("Read More")) : ($(this).addClass("less"), $(this).html("Read Less.")), $(this).parent().prev().toggle(), $(this).prev().toggle(), !1
    })
}), $(window).load(function() {
    $(".noo-page-heading").addClass("eff"), $(".page-title").addClass("eff"), $(".noo-page-breadcrumb").addClass("eff"), $(".noo-spinner").remove()
});

"use strict";

var initTabPanel = function() {
    $('.tablist > li')
        .keydown(tabListKeyPress)
        .click(tabListClick);
}

var tabListKeyPress = function(event) {
    if (event.which === 37 || event.which === 38 || 
        (event.which === 33 && event.ctrlKey)) { //left/up/ctrl+pageup
        var prevItem = $(event.currentTarget).prev("li");
        if (prevItem.length > 0) {
            focusTab(prevItem);
			event.preventDefault(); 
        } else {
            //go to the last one
            var lastItem = $(event.currentTarget).siblings("li").last();
            focusTab(lastItem);
			event.preventDefault(); 
        }
    } else if (event.which === 39 || event.which === 40 || 
               (event.which === 34 && event.ctrlKey)) { //right/down/ctrl+pagedown
        var nextItem = $(event.currentTarget).next("li");
        if (nextItem.length > 0) {
            focusTab(nextItem);
			event.preventDefault(); 
        } else {
            //go to the first one
            var firstItem = $(event.currentTarget).siblings("li").first();
            focusTab(firstItem);
			event.preventDefault(); 
        }

    }
}

var tabListClick = function(event) {
    focusTab($(event.currentTarget)),
		$(this).addClass('clicked');
}

var focusTab = function(newTab) {
    // Identify existing focus tab and: 1) Unset aria-selected, 2) set tabindex=-1, 3) replace
    // active class with inactive on both the tab and the panel, 4) set aria-hidden on panel
    var activeTab = $('.tablist > li.active');
    
    activeTab
        .addClass("inactive")
        .removeClass("active")
        .attr("aria-selected", "false")
        .attr("tabindex", "-1");

    $("#" + activeTab.attr("aria-controls"))
        .addClass("inactive")
        .removeClass("active")
        .attr("aria-hidden", "true");

    // For newly focused tab: 1) Set aria-selected, 2) set tabindex=0, 3) replace inactive class
    // with active on both tab and panel, 4) unset aria-hidden on panel
    
    newTab
        .addClass("active")
        .removeClass("inactive")
        .attr("aria-selected", "true")
        .attr("tabindex", "0");

    $("#" + newTab.attr("aria-controls"))
        .addClass("active")
        .removeClass("inactive")
        .attr("aria-hidden", "false");

    newTab.focus();
}

/* Integrated Nav */
$.get("navigations/nav_main.html", function(data){
	$("#nav-mainholder").replaceWith(data);
});
$.get("navigations/nav_main-order.html", function(data){
	$("#nav-main-orderholder").replaceWith(data);
});
$.get("navigations/nav_mainjuby.html", function(data){
	$("#nav-mainholderjuby").replaceWith(data);
});
$.get("navigations/nav_locations.html", function(data){
	$("#nav-locationsholder").replaceWith(data);
});
$.get("navigations/nav_locations-mobileorder.html", function(data){
	$("#nav-locationsmobileorder-holder").replaceWith(data);
});
$.get("../navigations/nav_locations-hh.html", function(data){
	$("#nav-locationsholder-hh").replaceWith(data);
});
$.get("../navigations/nav_locations-mobileorder-hh.html", function(data){
	$("#nav-locationsmobileorder-holder-hh").replaceWith(data);
});
/* Integrated Footer */
$.get("navigations/footer_mainsocial.html", function(data){
	$("#footer-mainsocialholder").replaceWith(data);
});
$.get("navigations/footer_mainsocialjuby.html", function(data){
	$("#footer-mainsocialholderjuby").replaceWith(data);
});
$.get("navigations/footer_main.html", function(data){
	$("#footer-mainholder").replaceWith(data);
});
$.get("../navigations/footer_mainsocial.html", function(data){
	$("#footer-mainsocialholder-menu").replaceWith(data);
});
$.get("../navigations/footer_main.html", function(data){
	$("#footer-mainholder-menu").replaceWith(data);
});

$(document).ready(initTabPanel);

 /* focusin/out event polyfill (firefox) */
!function(){
  var w = window,
  d = w.document;

  if( w.onfocusin === undefined ){
    d.addEventListener('focus' ,addPolyfill ,true);
    d.addEventListener('blur' ,addPolyfill ,true);
    d.addEventListener('focusin' ,removePolyfill ,true);
    d.addEventListener('focusout' ,removePolyfill ,true);
  }
  function addPolyfill(e){
    var type = e.type === 'focus' ? 'focusin' : 'focusout';
    var event = new CustomEvent(type, { bubbles:true, cancelable:false });
    event.c1Generated = true;
    e.target.dispatchEvent( event );
  }
  function removePolyfill(e){
if(!e.c1Generated){ // focus after focusin, so chrome will the first time trigger tow times focusin
  d.removeEventListener('focus' ,addPolyfill ,true);
  d.removeEventListener('blur' ,addPolyfill ,true);
  d.removeEventListener('focusin' ,removePolyfill ,true);
  d.removeEventListener('focusout' ,removePolyfill ,true);
}
setTimeout(function(){
  d.removeEventListener('focusin' ,removePolyfill ,true);
  d.removeEventListener('focusout' ,removePolyfill ,true);
});
}
}();

var myCarousel = (function() {

  var carousel, slides, index, slidenav, settings, timer, setFocus, animationSuspended;

  function forEachElement(elements, fn) {
    for (var i = 0; i < elements.length; i++)
      fn(elements[i], i);
  }

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }

  function init(set) {
    settings = set;
    carousel = document.getElementById(settings.id);
    slides = carousel.querySelectorAll('.slide');

    carousel.className = 'active carousel';

    var ctrls = document.createElement('ul');

    ctrls.className = 'controls';
    ctrls.innerHTML = '<li>' +
        '<button type="button" class="btn-prev"><img alt="Previous Item" src="https://www.truefoodkitchen.com/images/chevron-left.png" /></button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn-next"><img alt="Next Item" src="https://www.truefoodkitchen.com/images/chevron-right.png" /> </button>' +
      '</li>';

    ctrls.querySelector('.btn-prev')
      .addEventListener('click', function () {
        prevSlide(true);
      });
    ctrls.querySelector('.btn-next')
      .addEventListener('click', function () {
        nextSlide(true);
      });

    carousel.appendChild(ctrls);

    if (settings.slidenav || settings.animate) {
      slidenav = document.createElement('ul');

      slidenav.className = 'slidenav';

      if (settings.animate) {
        var li = document.createElement('li');

        if (settings.startAnimated) {
          li.innerHTML = '<button data-action="stop"><span class="visuallyhidden">Stop Animation </span>Pause</button>';
        } else {
          li.innerHTML = '<button data-action="start"><span class="visuallyhidden">Start Animation </span>Play</button>';
        }

        slidenav.appendChild(li);
      }

      if (settings.slidenav) {
        forEachElement(slides, function(el, i){
          var li = document.createElement('li');
          var klass = (i===0) ? 'class="current" ' : '';
          var kurrent = (i===0) ? ' <span class="visuallyhidden">(Current Item)</span>' : '';

          li.innerHTML = '<button '+ klass +'data-slide="' + i + '"><span class="visuallyhidden">Juby True Location Photo</span> ' + (i+1) + kurrent + '</button>';
          slidenav.appendChild(li);
        });
      }

      slidenav.addEventListener('click', function(event) {
        var button = event.target;
        if (button.localName == 'button') {
          if (button.getAttribute('data-slide')) {
            stopAnimation();
            setSlides(button.getAttribute('data-slide'), true);
          } else if (button.getAttribute('data-action') == "stop") {
            stopAnimation();
          } else if (button.getAttribute('data-action') == "start") {
            startAnimation();
          }
        }
      }, true);

      carousel.className = 'active carousel with-slidenav';
      carousel.appendChild(slidenav);
    }

    var liveregion = document.createElement('div');
    liveregion.setAttribute('aria-live', 'polite');
    liveregion.setAttribute('aria-atomic', 'true');
    liveregion.setAttribute('class', 'liveregion visuallyhidden');
    carousel.appendChild(liveregion);

      slides[0].parentNode.addEventListener('transitionend', function (event) {
        var slide = event.target;
        removeClass(slide, 'in-transition');
        if (hasClass(slide, 'current'))  {
          if(setFocus) {
            slide.setAttribute('tabindex', '-1');
            slide.focus();
            setFocus = false;
          }
        }
      });

      carousel.addEventListener('mouseenter', suspendAnimation);
      carousel.addEventListener('mouseleave', function(event) {
        if (animationSuspended) {
          startAnimation();
        }
      });

      carousel.addEventListener('focusin', function(event) {
        if (!hasClass(event.target, 'slide')) {
          suspendAnimation();
        }
      });
      carousel.addEventListener('focusout', function(event) {
        if (!hasClass(event.target, 'slide') && animationSuspended) {
          startAnimation();
        }
      });

    index = 0;
    setSlides(index);

     if (settings.startAnimated) {
      timer = setTimeout(nextSlide, 5000);
    }
  }

  function setSlides(new_current, setFocusHere, transition, announceItemHere) {
    setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;
    announceItem = typeof announceItemHere !== 'undefined' ? announceItemHere : false;
    transition = typeof transition !== 'undefined' ? transition : 'none';

    new_current = parseFloat(new_current);

    var length = slides.length;
    var new_next = new_current+1;
    var new_prev = new_current-1;

    if(new_next === length) {
      new_next = 0;
    } else if(new_prev < 0) {
      new_prev = length-1;
    }

    for (var i = slides.length - 1; i >= 0; i--) {
      slides[i].className = "slide";
    }

    slides[new_next].className = 'next slide' + ((transition == 'next') ? ' in-transition' : '');
    slides[new_next].setAttribute('aria-hidden', 'true');

    slides[new_prev].className = 'prev slide' + ((transition == 'prev') ? ' in-transition' : '');
    slides[new_prev].setAttribute('aria-hidden', 'true');


    slides[new_current].className = 'current slide';
    slides[new_current].removeAttribute('aria-hidden');


    if (announceItem) {
      carousel.querySelector('.liveregion').textContent = 'Item ' + (new_current + 1) + ' of ' +   slides.length;
    }

    if(settings.slidenav) {
      var buttons = carousel.querySelectorAll('.slidenav button[data-slide]');
      for (var j = buttons.length - 1; j >= 0; j--) {
        buttons[j].className = '';
        buttons[j].innerHTML = '<span class="visuallyhidden">Juby True Location Photo</span> ' + (j+1);
      }
      buttons[new_current].className = "current";
      buttons[new_current].innerHTML = '<span class="visuallyhidden">Juby True Location Photo</span> ' + (new_current+1) + ' <span class="visuallyhidden">(Current Item)</span>';
    }

    index = new_current;

  }

  function nextSlide(announceItem) {
    announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

    var length = slides.length,
    new_current = index + 1;

    if(new_current === length) {
      new_current = 0;
    }

    setSlides(new_current, false, 'prev', announceItem);

    if (settings.animate) {
      timer = setTimeout(nextSlide, 5000);
    }

  }

  function prevSlide(announceItem) {
    announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

    var length = slides.length,
    new_current = index - 1;

    if(new_current < 0) {
      new_current = length-1;
    }

    setSlides(new_current, false, 'next', announceItem);

  }

  function stopAnimation() {
    clearTimeout(timer);
    settings.animate = false;
    animationSuspended = false;
    _this = carousel.querySelector('[data-action]');
    _this.innerHTML = '<span class="visuallyhidden">Start Animation </span>Play';
    _this.setAttribute('data-action', 'start');
  }

  function startAnimation() {
    settings.animate = true;
    animationSuspended = false;
    timer = setTimeout(nextSlide, 5000);
    _this = carousel.querySelector('[data-action]');
    _this.innerHTML = '<span class="visuallyhidden">Stop Animation </span>Pause';
    _this.setAttribute('data-action', 'stop');
  }

  function suspendAnimation() {
    if(settings.animate) {
      clearTimeout(timer);
      settings.animate = false;
      animationSuspended = true;
    }
  }

  return {
    init:init,
    next:nextSlide,
    prev:prevSlide,
    goto:setSlides,
    stop:stopAnimation,
    start:startAnimation
  };
});

var c = new myCarousel();
c.init({
  id: 'c',
  slidenav: true,
  animate: true,
  startAnimated: true
});
