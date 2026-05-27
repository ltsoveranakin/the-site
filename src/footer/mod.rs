mod disclaimer;

use crate::footer::disclaimer::Disclaimer;
use yew::{component, html, Html};

#[component]
pub(super) fn Footer() -> Html {
    html! {
        <footer class="footer border-t">
            // <div class="findme">
            //     <Heading txt="Where to find me:"/>
            //     <p class="text-paragraph findme-paragraph">{"You can find me on"} <a href={GITHUB_LINK}>{"github"}</a> </p>
            // </div>
            <Disclaimer/>
        </footer>
    }
}
