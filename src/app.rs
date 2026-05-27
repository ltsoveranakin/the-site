use crate::about_me::AboutMe;
use crate::skills::Skills;

use crate::hf::footer::Footer;
use crate::hf::header::Header;
use crate::projects::ProjectsWhole;
use yew::prelude::*;

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
