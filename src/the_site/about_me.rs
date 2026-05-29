use crate::the_site::components::text::{Heading, Paragraph};
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
                From a young age, I've always been interested in science and the inner workings of things. \
                I'd enjoy taking technology apart to better understand how it works. I this greatly translated into the programming languages I would go off to learn. \
                Languages like Rust and Java were always special to me due to the nature of the entire language being written in itself.
                You'll probably find me writing a random library/personal toolset or one of my many other projects
                I'm currently studying for my masters in computer science with a concentration in software engineering.\
                "/>
            </div>
        </div>
    }
}
