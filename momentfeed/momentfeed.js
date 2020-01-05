var tabIndex = 10;
var accountId = "5dd48e2324f0994c740192e7";
var token = "IFWKRODYUFWLASDC";
var menus;

function renderMomentfeedMenus(menusArray) {
    var apiUrl = "https://momentfeed-prod.apigee.net/menu/account/" + accountId + "/menus?auth_token=" + token;

    $.getJSON(apiUrl)
        .done(function (data) {
            menus = data.data;
            console.log(menus);

            $.each(menusArray, function (i, e) {
                handleMenu(menusArray[i]);
            });
        })
        .fail(function (xhr, status, error) {
            console.error("error: " + xhr.responseText);
        });
}



function handleMenu(menuId) {
    var result = $.grep(menus, function (e) { return e.id === menuId; });

    if (result.length === 0)
        return;    

    var menu = result[0];

    $("ul#menu_tabs").append('<li class="primary_menu_tab ' + (tabIndex === 10 ? "active" : "inactive") + '" role="tab" aria-selected="' + (tabIndex === 10 ? "true" : "false") + '" rel="' + menu.id + '" tabindex="' + tabIndex + '">' + menu.displayName + '</li > ');
    $("#output").append('<div id="' + menu.id + '" class="tabpanel active row" role="tabpanel" aria-hidden="' + (tabIndex === 10 ? "true" : "false") + '" style="' + (tabIndex === 10 ? "display:block" : "display:none") + '" ></div>');

    $("#" + menu.id).append(
        "<fieldset class='category_root' id='menu-" + menu.id + "' style='padding:2px;'>" +
        "<legend>" + menu.displayName + "</legend>" +
        "<div class='category_sections'></div>" +
        "</fieldset>");

    tabIndex++;

    $.each(menu.sections, function (i, e) {
        handleSection(menu.sections[i], menu.id);
    })
}



function handleSection(section, menuId) {

    $("#menu-" + menuId + " .category_sections").append(
        "<div class='col-md-12 col-sm-12 pb-2'>" +
        "<h3 class='section_name' style='color:#477C31; font-size:18px; font-weight:600; margin:4px; padding:4px;'>" + section.displayName + "</h3>" +
        "<p class='small'>" + section.description + "</p>" +
        "<ul id='section-" + section.id + "' class='section_items'>" +
        "</ul>" +
        "</div>");

    $.each(section.items, function (i, e) {
        handleItem(section.items[i], section.id);
    })
}



function handleItem(item, sectionId) {

    $("#section-" + sectionId + "").append(
        "<li>" +
        "<div class='item_container'>" +
        "<p class='item_name'>" +
        (item.displayName.indexOf('**') == 0 ? "<img id='seasonal-img' src='/images/icon_menu_seasonal.png'>" : "") +
        item.displayName.replace('**', '') +
        "</p>" +
        ((item.price.amount === "") ? "" : "<p>$" + item.price.amount + "</p>") +
        "</div>" +
        "<p class='item_description'>" + item.description + "</p>" +
        "</li>");
}



$('#menu_tabs').on('keydown', function (e) {
    console.log(e.which);

    if (e.which === 37 || e.which === 38 || (e.which === 33 && e.ctrlKey)) { //left/up/ctrl+pageup
        var prevItem = $('.primary_menu_tab.active').prev("li");
        if (prevItem.length > 0) {
            prevItem.trigger("click");
            e.preventDefault();
        } else {
            //go to the last one
            var lastItem = $('.primary_menu_tab.active').siblings("li").last();
            lastItem.trigger("click");
            e.preventDefault();
        }
    }
    else if (e.which === 39 || e.which === 40 || (e.which === 34 && e.ctrlKey)) { //right/down/ctrl+pagedown
        var nextItem = $('.primary_menu_tab.active').next("li");
        if (nextItem.length > 0) {
            nextItem.trigger("click");
            e.preventDefault();
        } else {
            //go to the first one
            var firstItem = $('.primary_menu_tab.active').siblings("li").first();
            firstItem.trigger("click");
            e.preventDefault();
        }
    }
    else if (e.which == 9) {
        if (e.shiftKey) {
            
        }
        else {
            $("a.btn-download").focus();
            e.preventDefault();
        }
    }
});



$('#menu_tabs').delegate('.primary_menu_tab', 'focus click', function (event) {
    var target = $(this).attr('rel');

    $("#output").children()
        .hide()
        .attr('aria-hidden', true)
        .attr('aria-selected', false);

    $("#menu_tabs").children()
        .removeClass('active')
        .addClass('inactive')
        .attr('aria-selected', false);

    $(this)
        .removeClass('inactive')
        .addClass('active')
        .attr('aria-selected', true);

    $('#' + target)
        .show()
        .attr('aria-selected', true)
        .attr('aria-hidden', false);
});