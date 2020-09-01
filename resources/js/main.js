require("./bootstrap");
import $ from "jquery";
import "select2"

import {CAROUSEL} from "./carousel/main_carousel";
import {READMORE} from "./readmore";
import {SEND} from "./sender/mail_send";


require("./map/yandex_map");
require("./testdrive/testdrive__select");

READMORE();
CAROUSEL();
SEND();

var HeaderTop = $('.header').offset().top;
$(window).scroll(() => {
    if ($(window).scrollTop() > HeaderTop) {
        $(".header").addClass("header__fixed");
    } else {
        $(".header").removeClass("header__fixed");
    }
});


$("[data-href]").on("click", function (e) {
    if (e.target.tagName === "BUTTON" && $(e.target).data("src") !== "") {
        $.fancybox.open({
            src: $(e.target).data("src"),
        });
        return false;
    }
    const href = location.origin + $(this).data("href");
    console.log(href)
    location.assign(href);
});

/**
 * Поле выбора для select2
 * @param opt
 * @returns {jQuery|HTMLElement}
 * @constructor
 */
const SelectField = opt => $(`<div class="selected__item"><span class="selected__item--text">${opt.text}</span></div>`)

/**
 * select2 для витрины
 */
$(".showcase__navigation--select").select2({
    templateResult: SelectField,
    templateSelection: SelectField
})
    .on("input", function (e) {
        location.assign($(this).val())
    });
