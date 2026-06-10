import {
    getCurrentCommand,
    handleCommand,
    pushLine,
    setCurrentCommand,
    updateTerminal,
} from "./command";
import { terminalContainer } from "./element";

let cursorPosFromEnd = 0;

terminalContainer.addEventListener("keydown", (e) => {
    if (e.key.length == 1) {
        setCurrentCommand(getCurrentCommand() + e.key.toLowerCase());

        updateTerminal();
    } else if (e.key == "Backspace") {
        setCurrentCommand(getCurrentCommand().slice(0, -1));

        updateTerminal();
    } else if (e.key == "Enter") {
        handleCommand();
    }
});

let cursorLit = true;

setInterval(() => {
    let command = getCurrentCommand();

    if (cursorLit) {
        let cursorIndex = command.length - cursorPosFromEnd;

        command =
            command.slice(0, cursorIndex) +
            "█" +
            command.slice(cursorIndex + 1);
    }

    updateTerminal(command);

    cursorLit = !cursorLit;
}, 500);

pushLine();
