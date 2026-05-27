use crate::about_me::AboutMe;

use crate::footer::Footer;
use crate::header::Header;
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
            <Footer/>
        </main>
    }
}
