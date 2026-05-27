use crate::components::text::{Heading, SmallText};
use yew::{component, html, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct SkillsProps {}

#[component]
pub(super) fn Skills(props: &SkillsProps) -> Html {
    html! {
        <div>
            <Heading txt="Skills"/>
            <div>
                <Skill name="Rust" img_src="rust-logo.svg"/>
            </div>
            <div>
                <Skill name="Java" img_src="rust-logo.svg"/>
            </div>
        </div>
    }
}

#[derive(PartialEq, Properties)]
pub(super) struct SkillProps {
    name: &'static str,
    img_src: &'static str,
}

#[component]
fn Skill(props: &SkillProps) -> Html {
    html! {
        <div>
            <SmallText txt={props.name}/>
        </div>
    }
}
