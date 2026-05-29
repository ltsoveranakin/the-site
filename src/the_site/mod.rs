mod about_me;
mod components;
mod hf;
mod projects;
mod skills;

use crate::the_site::about_me::AboutMe;
use crate::the_site::hf::footer::Footer;
use crate::the_site::hf::header::Header;
use crate::the_site::projects::ProjectsWhole;
use crate::the_site::skills::Skills;
use yew::{component, html, Html};

pub(crate) const GITHUB_LINK: &str = "https://github.com/ltsoveranakin";

#[component]
pub(super) fn App() -> Html {
    html! {
        <main>
            <Header/>
            <AboutMe/>
            <ProjectsWhole/>
            <Skills/>
            <Footer/>
        </main>
    }
}
