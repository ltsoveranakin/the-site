use crate::components::text::{Description, Heading};
use crate::projects::technologies::Technolgies;
use web_sys::MouseEvent;
use yew::{component, html, Callback, Html, Properties};

const IMAGE_SIZE: f32 = 25.0;

#[derive(Properties, PartialEq)]
pub(super) struct ItemProps {
    pub(super) cover_img: &'static str,
    pub(super) name: &'static str,
    pub(super) description: &'static str,
    pub(super) url: &'static str,
    pub(super) tech_used: Technolgies,
    pub(super) on_hover: Callback<MouseEvent>,
}

#[component]
pub(super) fn DisplayItem(props: &ItemProps) -> Html {
    let techs_used = props.tech_used.get_img_sources();

    html! {
        <a href={props.url} onmouseover={props.on_hover.clone()}>
            <div class="display-item border">
                <img src={props.cover_img} class="display-item-img"/>

                <div class="display-item-title-container">

                    {
                        techs_used.iter().enumerate().map(|(i, (img_src, margin))| {
                            html! {
                                <>
                                    <img width={25} src={format!("assets/img/{}", img_src)} style={format!("margin:{}px;", margin)}/>
                                    if i < techs_used.len() - 1 {
                                        <img width={15} src="assets/img/plus_icon.svg"/>
                                    }
                                </>
                            }
                        }).collect::<Html>()
                    }


                    <Heading txt={props.name}/>
                </div>

                <Description txt={props.description}/>
            </div>
        </a>
    }
}
