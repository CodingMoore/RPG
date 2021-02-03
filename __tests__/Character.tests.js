import {storeState, genChar} from '../src/js/Character.js'

describe('character', () => {

  const Bob;
  
  beforeEach(() => {
    Bob = storeState(genChar);
  });

  test("This will test that state exists", () => {
    expect(stateControl()).toEqual(initialState);
  });
});