import {storeState, genChar} from '../src/js/Character.js'

describe('character', () => {

  let Bob;
  beforeEach(() => {
    Bob = storeState(genChar);
  });

  test("This will test that state exists", () => {
    expect(storeState()()).toEqual({});
  });

  test("Sucessfully store a generic character 'Bob'.", () => {
    expect(Bob()).toEqual({health: 100, armor: 0, defense: 50, strength: 50, attack: 1});
  });


});
