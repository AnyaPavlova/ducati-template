import axios from "./../axios";
import Cleave from "cleave.js";

const clearForm = form => $(form).trigger("clear");


const modalThanks = text => {
    $("#content .modal__text").text(text);
    $.fancybox.open({
        src: "#content",
        type: "inline"
    });
    setTimeout(_ => {
        $.fancybox.close(true);
    }, 5000);
};
const setTarget = _ => $("[name='target']").val(location.href);

const cleave_set= _=>{
    require("cleave.js/src/addons/phone-type-formatter.ru");
    Array.from(document.querySelectorAll("[type=tel]")).forEach(item=>{
        new Cleave(item,{
            phone: true,
            phoneRegionCode: "RU",
        })
    })
}

export const SEND = () => {
    setTarget();
    cleave_set();
    Array.from(document.querySelectorAll("form")).forEach(item => {
        item.addEventListener("submit", function (e) {
            e.preventDefault();
            let formData = new FormData(this);
            var self = this;
            axios.post("/sender", formData)
                .then(resp => {
                    modalThanks("Спасибо за обращение!");
                    if (resp.data.status) {
                        clearForm(self);
                    }
                });
            return false;
        });
    })
};

