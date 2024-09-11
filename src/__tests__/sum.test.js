import { sum } from "../components/sumtest";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); // Expect the sum of 1 and 2 to be 3
});

test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(2); // Expect the sum of -1 and 1 to be 0
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0); // Sum of 0 + 0 should be 0
});