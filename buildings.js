import { Building } from "./modules/building.js";

export let buildings = {
    clicker: new Building(15, 0.1, 'Clicker'),
    turbo: new Building(100, 1, 'Turbo Clicker'),
    balls: new Building(1100, 8, 'Mes couilles'),
    portal: new Building(12000, 47, 'Portal'),
    sweatshop: new Building(130000, 260, 'Chinese Sweatshop'),
    bank: new Building(1400000, 1400, 'Bank'),
    temple: new Building(20000000, 7800, 'Temple'),
};