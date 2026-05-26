use crate::components::text::SmallText;
use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct DisclaimerProps {}

#[component]
pub(super) fn Disclaimer(props: &DisclaimerProps) -> Html {
    html! {
        <SmallText txt=
        {"The rust logo is a registered trademark of the rust foundation"}
        />
    }
}
