import {storeState, genChar, changeState} from '../src/js/Character.js'

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
  test("Test the ability to change state.", () => {
    expect(changeState("health")(1)(Bob()).health).toEqual(101);
    expect(changeState("armor")(1)(Bob()).armor).toEqual(1);
    expect(changeState("defense")(1)(Bob()).defense).toEqual(51);
    expect(changeState("strength")(1)(Bob()).strength).toEqual(51);
    expect(changeState("attack")(1)(Bob()).attack).toEqual(2);
  });


});
