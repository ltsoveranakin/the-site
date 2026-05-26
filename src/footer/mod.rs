mod disclaimer;

use crate::components::text::Heading;
use crate::footer::disclaimer::Disclaimer;
use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct FooterProps {}

#[component]
pub(super) fn Footer(props: &FooterProps) -> Html {
    html! {
        <footer class="footer border-t">
            <Heading txt={"Where to find me:"}/>
            <Disclaimer/>
        </footer>
    }
}
