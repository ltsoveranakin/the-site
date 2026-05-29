use crate::the_site::GITHUB_LINK;
use yew::{component, html, Html};

#[component]
pub(crate) fn Github() -> Html {
    html! {
        <a href={GITHUB_LINK} target="_blank">
            <img src="assets/img/GitHub_Invertocat_White.svg" width={30}/>
        </a>
    }
}
