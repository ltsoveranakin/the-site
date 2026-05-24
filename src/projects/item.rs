use web_sys::MouseEvent;
use yew::{component, html, Callback, Html, Properties};

#[derive(Properties, PartialEq)]
pub(super) struct ItemProps {
    pub(crate) cover_img: &'static str,
    pub(crate) name: &'static str,
    pub(crate) description: &'static str,
    pub(crate) url: &'static str,
    pub(super) on_hover: Callback<MouseEvent>,
}

#[component]
pub(super) fn DisplayItem(props: &ItemProps) -> Html {
    html! {
        <a href={props.url} onmouseover={props.on_hover.clone()}>
            <div class={"display-item"}>
                <img src={props.cover_img} class={"display-item-img"}/>

                <div class={"display-item-title"}>{props.name}</div>

                <div class={"display-item-description"}>{props.description}</div>
            </div>
        </a>
    }
}
