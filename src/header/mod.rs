use crate::components::github::Github;
use crate::components::text::{Heading, Title};
use yew::{component, html, Html, Properties};

#[component]
pub(super) fn Header() -> Html {
    html! {
        <div class="header-container">
        <div class="header">
            <div class="header-top">
                <Title txt="Hi, I'm Takoda"/>
                <div class="header-end">
                    <Github/>
                </div>
            </div>

            <Heading txt="Developer - Creator - Rust Enthusiast"/>
        </div>
        </div>
    }
}
