use web_sys::HtmlAudioElement;
use yew::prelude::*;

#[component]
pub fn App() -> Html {
    let audio_ref = use_node_ref();

    let started = use_state(|| false);

    let div_clicked = {
        let audio_ref = audio_ref.clone();
        let started = started.clone();

        Callback::from(move |a| {
            if *started {
                return;
            }

            let audio = audio_ref.cast::<HtmlAudioElement>().unwrap();

            let _ = audio.play();

            started.set(true);
        })
    };

    html! {
        <main onclick={div_clicked}>
            <h1>{":3 Welcome 2 My website!!!!! :3"}</h1>
            <img src="assets/img/roach.gif"/>
            <img src="assets/img/roach.gif"/>
            <h6>{ "Graphics design is my passion" }</h6>
            <img src="assets/img/muney.gif"/>
            <img src="assets/img/muney.gif"/>
            <img src="assets/img/muney.gif"/>
            <img src="assets/img/muney.gif"/>
            <img src="assets/img/muney.gif"/>
            <img src="assets/img/muney.gif"/>
            <h6>{ "Look at alat money" }</h6>

            <audio ref={audio_ref} controls={true} autoplay={true} loop={true}>
                <source src="assets/audio/portal.mp3" type="audio/mpeg" />
            </audio>
        </main>
    }
}
