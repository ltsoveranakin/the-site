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
        let element = document.createElement(curElTy.tag);
        element.className = curElTy.className;

        if (curElTy.innerText) {
            element.innerText = curElTy.innerText;
        }

        curParent.append(element);

        curParent = element;
        curElTy = curElTy.child;
    }

    return frag;
}
