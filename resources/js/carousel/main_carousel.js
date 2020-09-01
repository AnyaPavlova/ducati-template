import {tns} from "tiny-slider/src/tiny-slider"

export const CAROUSEL = _ => {
    if(document.querySelector(".banner__slider")){
        const main_slider = tns({
            container: ".banner__slider",
            items: 1,
            mouseDrag:true,
            prevButton:".banner__controls-el.prev",
            nextButton:".banner__controls-el.next",
            autoHeight:true,
            nav:true,
            navPosition:"bottom",
            preventScrollOnTouch:"auto"
        });
    }
}
