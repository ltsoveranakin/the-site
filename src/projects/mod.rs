mod item;

use crate::projects::item::DisplayItem;
use yew::{component, html, use_state, Callback, Html, Properties};

#[derive(PartialEq, Properties)]
pub(super) struct ProjectsProps {
    projects: Vec<Project>,
}

#[derive(PartialEq, Default)]
pub(super) struct Project {
    name: &'static str,
    cover_img: &'static str,
    description: &'static str,
    url: &'static str,
}

#[component]
fn Projects(props: &ProjectsProps) -> Html {
    let background_img_src = use_state(|| None);

    let projects_div_style = background_img_src
        .map(|src| format!("background-image:url({})", src))
        .unwrap_or_default();

    html! {
        <div class={"projects"} style={projects_div_style}>
            <h2>{"Projects"}</h2>
            <h3>{"These are some of the various personal projects I've worked on"}</h3>
            <div class={"projects-container"}>
                {
                    props.projects.iter().map(|project| {
                        let background_img_src = background_img_src.clone();
                        let cover_img = project.cover_img;

                        let on_hover = Callback::from(move |_| {
                              background_img_src.set(Some(cover_img))
                        });

                        html! {
                            <DisplayItem on_hover={on_hover} name={project.name} cover_img={project.cover_img} description={project.description} url={project.url}/>
                        }
                    }).collect::<Html>()
                }
            </div>
        </div>
    }
}

#[component]
pub(super) fn ProjectsWhole() -> Html {
    html! {
        <Projects projects={vec![
            Project {
                name: "Napoleon Amp",
                cover_img: "assets/img/napoleon_amp_pic.png",
                description: "A work-in-progress music manager, client, and player, written in rust",
                url: "https://github.com/ltsoveranakin/napoleon_amp",
            },
            Project {
                name: "My Website",
                description: "My very own website, written in rust using yew-rs!",
                url: "https://github.com/ltsoveranakin/the-site",
                ..Default::default()
            }
        ]}/>
    }
}
