use yew::{component, html, Classes, Html, Properties};

#[derive(PartialEq, Properties, Copy, Clone)]
pub(crate) struct TextProps {
    pub(crate) txt: &'static str,
}

#[component]
pub(crate) fn Title(props: &TextProps) -> Html {
    html! {
       <b class="text-title">
            {props.txt}
        </b>
    }
}

#[component]
pub(crate) fn Heading(props: &TextProps) -> Html {
    html! {
        <BasicText text_props={*props} class="text-heading"/>
    }
}

#[component]
pub(crate) fn Heading2(props: &TextProps) -> Html {
    html! {
        <BasicText text_props={*props} class="text-heading2"/>
    }
}

#[component]
pub(crate) fn Description(props: &TextProps) -> Html {
    html! {
        <BasicText text_props={*props} class="text-normal"/>
    }
}

#[component]
pub(crate) fn SmallText(props: &TextProps) -> Html {
    html! {
        <BasicText text_props={*props} class="text-small"/>
    }
}

#[component]
pub(crate) fn Paragraph(props: &TextProps) -> Html {
    html! {
        <BasicText text_props={*props} class="text-paragraph"/>
    }
}

#[derive(PartialEq, Properties)]
struct BasicTextProps {
    text_props: TextProps,
    #[prop_or_default]
    class: Classes,
}

#[component]
fn BasicText(props: &BasicTextProps) -> Html {
    html! {
        <div class={props.class.clone()}>
            {props.text_props.txt}
        </div>
    }
}
