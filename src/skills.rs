use crate::components::text::{Heading, Heading2};
use yew::{component, html, Html, Properties};

#[component]
pub(super) fn Skills() -> Html {
    html! {
        <div >
            <Heading txt="Skills"/>
            <div class="skills-content">
                <Skill name="Rust" img_src="assets/img/rust-logo.svg"/>
                <Skill name="Java" img_src="assets/img/java.svg"/>
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
        <div class="skill">
            <img width={100} src={props.img_src}/>
            <Heading2 txt={props.name}/>
        </div>
    }
}
