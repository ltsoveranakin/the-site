import { html } from "../util";
import { terminalElement } from "./element";

let currentCommand = "";

type ExecFn = (...args: string[]) => string;

const commandMap: Record<string, ExecFn | undefined> = {
    help: () => {
        return "<insert joke about help command here>";
    },
    info: () => {
        return "soon...";
    },
};

export function handleCommand() {
    let [commandName, ...args] = currentCommand.split(" ");

    let commandExecutor = commandMap[commandName];

    if (commandExecutor) {
        terminalPrint(commandExecutor(...args));
    } else {
        terminalPrint("Unknown command");
    }

    pushLine();
}

export function pushLine() {
    updateTerminal(getCurrentCommand());
    setCurrentCommand("");
    terminalElement.appendChild(createCommandLine());
}

function terminalText(text: string) {
    return `takoda@website~$ ${text}`;
}

function createCommandLine() {
    let lineElement = html({
        tag: "div",
        className: "command",
        child: {
            tag: "div",
            className: "line",
            innerText: terminalText(""),
        },
    });

    return lineElement;
}

function getCommandElement() {
    return terminalElement.lastChild as HTMLDivElement | undefined;
}

export function updateTerminal(withStr?: string) {
    let promptElement = getCommandElement()?.firstChild as
        | HTMLDivElement
        | undefined;

    if (!promptElement) {
        return;
    }

    promptElement.innerText = terminalText(withStr ?? getCurrentCommand());
}

function terminalPrint(msg: string) {
    let commandElement = getCommandElement();

    if (!commandElement) {
        return;
    }

    commandElement.appendChild(
        html({
            tag: "div",
            innerText: msg,
            className: "command-output",
        }),
    );
}

export function getCurrentCommand() {
    return currentCommand;
}

export function setCurrentCommand(newCommand: string) {
    currentCommand = newCommand;
}
