import { html } from "./util";

export const terminalElement = document.getElementById("terminal")!;
const terminalContainer = document.getElementById("terminal-container")!;

let currentCommand = "";
let cursorPosFromEnd = 0;

function terminalText(text: string) {
    return `takoda@website~$ ${text}`;
}

function createLine() {
    let lineElement = html({
        tag: "div",
        className: "line",
        innerText: terminalText(""),
    });

    return lineElement;
}

function pushLine() {
    updateTerminal(currentCommand);
    currentCommand = "";
    terminalElement.appendChild(createLine());
}

function updateTerminal(withStr?: string) {
    let terminalChildren = terminalElement.children;
    let promptElement = terminalChildren[terminalChildren.length - 1] as
        | HTMLDivElement
        | undefined;

    if (!promptElement) {
        return;
    }

    promptElement.innerText = terminalText(withStr ?? currentCommand);
}

terminalContainer.addEventListener("keydown", (e) => {
    if (e.key.length == 1) {
        currentCommand += e.key.toLowerCase();

        updateTerminal();
    } else if (e.key == "Backspace") {
        currentCommand = currentCommand.slice(0, -1);

        updateTerminal();
    } else if (e.key == "Enter") {
        pushLine();
    }
});

let cursorLit = true;

setInterval(() => {
    let command = currentCommand;

    if (cursorLit) {
        let cursorIndex = currentCommand.length - cursorPosFromEnd;

        command =
            command.slice(0, cursorIndex) +
            "█" +
            command.slice(cursorIndex + 1);
    }

    updateTerminal(command);

    cursorLit = !cursorLit;
}, 500);

pushLine();
