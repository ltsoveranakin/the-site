use crate::components::text::Title;
use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct BannerProps {}

#[component]
pub(super) fn Banner(props: &BannerProps) -> Html {
    html! {
        <div class={"banner"}>
            <Title txt={"DEMO"}/>
        </div>
    }
}
