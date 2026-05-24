use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct BannerProps {}

#[component]
pub(super) fn Banner(props: &BannerProps) -> Html {
    html! {
        <div class={"banner"}>
        <h1>{"DEMO"}</h1>
        <h4>{"... stuff"}</h4>
        </div>
    }
}
