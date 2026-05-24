use crate::banner::Banner;
use crate::projects::ProjectsWhole;
use yew::prelude::*;

#[component]
pub(super) fn App() -> Html {
    html! {
        <main>
            <Banner/>
            <ProjectsWhole/>
        </main>
    }
}
