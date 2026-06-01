type ElementTy = {
    tag: string;
    className: string;
    innerText?: string;
    child?: ElementTy;
};

export function html(elementTy: ElementTy) {
    const frag = document.createDocumentFragment();

    let curParent: ParentNode = frag;
    let curElTy: ElementTy | undefined = elementTy;

    while (curElTy) {
        let element = document.createElement(elementTy.tag);
        element.className = elementTy.className;

        if (elementTy.innerText) {
            element.innerText = elementTy.innerText;
        }

        curParent.append(element);

        curParent = element;
        curElTy = elementTy.child;
    }

    return frag;
}
