use crate::components::text::{Heading, Paragraph};
use yew::{component, html, Html};

#[component]
pub(super) fn AboutMe() -> Html {
    html! {
        <div class="about">
            <div class="about-heading">

                    <Heading txt="About Me"/>

            </div>

            <div class="about-paragraph">
                <Paragraph txt="\
                Even from a young age, I've always been interested in science and the inner workings of things. \
                Shows like mythbusters inspired me to
                I'm currently studying for my masters in computer science with a concentration in software engineering.\
                "/>
            </div>
        </div>
    }
}
