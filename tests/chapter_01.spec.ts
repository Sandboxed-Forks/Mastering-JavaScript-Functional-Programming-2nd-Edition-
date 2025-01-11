import { describe, it, expect } from 'vitest';
import { makeSoldierClass } from '../chapters/ch-01';

describe('Ch 1 Questions - pp 71', () => {
    it.each([
        { soldier: 'Pvt. Johns', officer: 'Major Pain', message: 'Semperfi'},
    ])
    ('should have $soldier salute $officer with $message (Q.1.1)', ({soldier, officer, message}) => {
        const given = makeSoldierClass(message);
        const actual = new given(soldier).salute(officer);
        expect(actual).toBe(`${soldier} says "${message}" to ${officer}`);
    })
})