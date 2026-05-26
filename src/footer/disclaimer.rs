use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct DisclaimerProps {}

#[component]
pub(super) fn Disclaimer(props: &DisclaimerProps) -> Html {
    html! {
        <div>
        {"The rust logo is a registered trademark of the rust foundation"}
        </div>
    }
}
