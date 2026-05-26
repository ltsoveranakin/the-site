use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct AboutMeProps {}

#[component]
pub(super) fn AboutMe(props: &AboutMeProps) -> Html {
    html! {
        <div>
        {"<About me>"}
        </div>
    }
}
