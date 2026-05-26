use yew::{component, html, Html};

#[component]
pub(crate) fn Github() -> Html {
    html! {
        <a href="https://github.com/ltsoveranakin" target="_blank">
            <img src={"assets/img/GitHub_Invertocat_White.svg"} width={30}/>
        </a>
    }
}
