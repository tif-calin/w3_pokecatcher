// IMPORT MODULES under test here:
import { getSubset, findById } from '../utils.js';

const test = QUnit.test;

test('testing getSubset', (expect) => {
    const arr = ['Pork', 'Blue', 'Fish', 'Fast', 'Tilt', 'Ripe', 'Bump', 'Kite', 'Seat', 'Home', 'Farm', 'Card', 'Math', 'Able'];
    const excl1 = [0, 4, 5];
    const excl2 = [1, 3, 45];

    // Test to make sure unique elements
    let expected1 = getSubset(arr);
    expected1 = expected1.length === [...new Set(expected1)].length;
    let expected2 = getSubset(arr, excl1, 7);
    expected2 = expected2.length === [...new Set(expected2)].length;
    let expected3 = getSubset(arr, undefined, 8);
    expected3 = expected3.length === [...new Set(expected3)].length;

    expect.equal(expected1, true);
    expect.equal(expected2, true);
    expect.equal(expected3, true);

    // Test to make sure amount returned correctly 
    expected1 = getSubset(arr, undefined, 2).length;
    expected2 = getSubset(arr, undefined, 5).length;
    expected3 = getSubset(arr, undefined, 999).length;

    expect.equal(expected1, 2);
    expect.equal(expected2, 5);
    expect.equal(expected3, arr.length);

    // Test to make sure exclusion works
    expected1 = getSubset(arr, excl2);
});

test('testing findByID', (expect) => {
    const arr = [
        {
            'id': 'aaa',
            'name': 'pork'
        },
        {
            'id': 'bbb',
            'name': 'blue'
        },
        {
            'id': 'ccc',
            'name': 'fish'
        },
        {
            'id': 'ddd',
            'name': 'fast'
        },
        {
            'id': 'bbb',
            'name': 'tilt'
        }
    ];

    // Test to make correct element returned (first with id)
    let expected1 = findByID(arr, 'aaa').name;
    let expected1 = findByID(arr, 'bbb').name;
    let expected1 = findByID(arr, 'ccc').name;

    expect.equal(expected1, 'pork');
    expect.equal(expected2, 'blue');
    expect.equal(expected3, 'fish');
});
