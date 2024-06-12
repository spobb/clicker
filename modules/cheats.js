import { Game } from "../game.js";

export class Cheats {
    constructor() { }

    setCookies(toGive) {
        Game.cookies = toGive;
    }
}
