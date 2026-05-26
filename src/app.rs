use crate::about_me::AboutMe;
use crate::banner::Banner;
use crate::disclaimer::Disclaimer;
use crate::projects::ProjectsWhole;
use yew::prelude::*;

#[component]
pub(super) fn App() -> Html {
    html! {
        <main>
            <Banner/>
            <AboutMe/>
            <ProjectsWhole/>
            <Disclaimer/>
        </main>
    }
}
