import $ from "jquery";
import "select2"

const imageInSelect = opt => {
    const image = $(opt.element).data("image");
    console.log(image)
    if (!image) {
        return opt.text;
    } else {
        return $(`<div class="selected__item"><span class="selected__item--text">${opt.text}</span> <img class="selected__item--img" src="${image}" style="width: 60px"/></div>`)
    }
}

$(".model_modal").select2({
    templateResult: imageInSelect,
    templateSelection: imageInSelect
});

