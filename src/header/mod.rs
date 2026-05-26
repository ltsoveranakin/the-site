use crate::components::text::Title;
use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct HeaderProps {}

#[component]
pub(super) fn Header(props: &HeaderProps) -> Html {
    html! {
        <div class={"banner"}>
            <Title txt={"DEMO"}/>
        </div>
    }
}
