import { tinykeys } from "tinykeys";
import { modal } from "~/components/Modal";

export default (window: Window) => {
    const unsubscribe = tinykeys(window, {
        "P": (event) => {
            event.preventDefault()
            modal()
        }
    })
    return unsubscribe
}