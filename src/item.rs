use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub struct ItemProps {
    pub(crate) is_v: bool,
}

#[component]
pub fn ItemComp(props: &ItemProps) -> Html {
    if props.is_v {
        html! {
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SChnJDfmrSU?si=f2MJ08kEzaBNQjjG&amp;start=19135" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen={true}></iframe>
        }
    } else {
        html! {}
    }
}
