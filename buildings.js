import { Building } from "./modules/building.js";

export let buildings = {
    clicker: new Building(15, 0.1, 'Clicker'),
    turbo: new Building(100, 1, 'Turbo Clicker'),
    farm: new Building(1_100, 8, 'Farm'),
    mine: new Building(12_000, 47, 'Mine'),
    factory: new Building(130_000, 260, 'Factory'),
    bank: new Building(1_400_000, 1_400, 'Bank'),
    temple: new Building(20_000_000, 7_800, 'Temple'),
    wiz: new Building(330_000_000, 44_000, 'Wizard Tower'),
    ship: new Building(5_100_000_000, 260_000, 'Shipment'),
    lab: new Building(75_000_000_000, 1_600_000, 'Alchemy Lab'),
    portal: new Building(1_000_000_000_000, 10_000_000, 'Portal'),
};