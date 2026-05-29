use crate::the_site::components::github::Github;
use crate::the_site::components::text::{Heading, Title};
use yew::{component, html, Html, Properties};

#[component]
pub(crate) fn Header() -> Html {
    html! {
        <div class="header-container">
            <div class="header">
                <div class="header-top">
                    <Title txt="Demo Site"/>
                    <div class="header-end">
                        <Github/>
                    </div>
                </div>

                <Heading txt="Developer - Creator - Rust Enthusiast"/>
            </div>
        </div>
    }
}
