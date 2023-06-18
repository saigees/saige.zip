import { tinykeys } from "tinykeys";
import { modal } from "~/components/Modal";

export default (window: Window) => {
    const unsubscribe = tinykeys(window, {
        "F1": (event) => {
            event.preventDefault()
            modal()
        }
    })
    return unsubscribe
}