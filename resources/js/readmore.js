import {CONSTANT} from "./constants";

/**
 * Переключение отображения текста
 * @param type
 */
const toggleText = type => {
    $(".moto__data--text p").each((inx, item) => {
        if (inx > 0) {
            $(item).css("display", type)
        }
    });
};


export const READMORE = _ => {
    if (window.innerWidth <= CONSTANT.MOBILE_WIDTH) {
        toggleText("none");
    }

    $(".read__more").on("click", function (e) {
        const prev = $(this).prev();
        prev.toggleClass("view_full");
        if (prev.hasClass("view_full")) {
            toggleText("block");
        } else {
            toggleText("none");
        }
    })
};
