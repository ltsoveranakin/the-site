use crate::components::text::{Description, Heading};
use crate::projects::technologies::Technolgies;
use web_sys::MouseEvent;
use yew::{component, html, Callback, Html, Properties};

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
    html! {
        <a href={props.url} onmouseover={props.on_hover.clone()}>
            <div class={"display-item border"}>
                <img src={props.cover_img} class={"display-item-img"}/>

                <div class={"display-item-title-container"}>

                    {
                        props.tech_used.get_img_src().iter().map(|img_src| {
                            html! {
                                <img class={"display-item-title-language-icon"} src={format!("assets/img/{}", img_src)}/>
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
