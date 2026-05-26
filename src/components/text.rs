use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(crate) struct TextProps {
    pub(crate) txt: &'static str,
}

#[component]
pub(crate) fn Title(props: &TextProps) -> Html {
    html! {
        <b class={"text-title"}>
            {props.txt}
        </b>
    }
}

#[component]
pub(crate) fn Heading(props: &TextProps) -> Html {
    html! {
        <div class={"text-heading"}>
            {props.txt}
        </div>
    }
}

#[component]
pub(crate) fn Description(props: &TextProps) -> Html {
    html! {
        <div class={"text-normal"}>
            {props.txt}
        </div>
    }
}
