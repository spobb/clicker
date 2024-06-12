import { Upgrade, ClickPercent, ClickMultiple, ClickAddition } from './upgrade.js';

export let upgrades = {
    // multiples
    m1: new ClickMultiple(100, 2, 'Reinforced index finger'),
    m2: new ClickMultiple(500, 2, 'Carpal tunnel prevention cream'),
    m3: new ClickMultiple(10_000, 2, 'Ambidextrous'),
    m4: new ClickMultiple(1e+7, 5, 'Million fingers'),
    m5: new ClickMultiple(1e+8, 10, 'Billion fingers'),
    m6: new ClickMultiple(1e+9, 20, 'Trillion fingers'),
    m7: new ClickMultiple(1e+10, 20, 'Quadrillion fingers'),

    // additions
    a1: new ClickAddition(1, 0.1, 'Thousand Fingers'),
}