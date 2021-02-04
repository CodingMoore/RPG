export const genChar = {health: 100, armor: 0, defense: 50, strength: 50, attack: 1}

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + (value || -state[prop])
    })
  }
}

// let myData = results && results.data;

export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const healthToZero = changeState("health")(0);
export const blowToHead = changeState("health")(-100);
export const arrowToGut = changeState("health")(-50);
export const arrowToKnee = changeState("health")(-25);

export const healthPotion = changeState("health")(50);
export const bigHealthPotion = changeState("health")(100);

export const arrowHitsShield = changeState("armor")(-10);
export const equipShield = changeState("armor")(25);


export const Bob = storeState(genChar);


if (Bob().health <= 0) {
  console.log("Bob is DEAD!")
}


// const genChar = {health: 100, armor: 0, defense: 50, strength: 50, attack: 1}

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

// const storeState = (initialState = {}) => {
//   let currentState = initialState;
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const healthToZero = changeState("health")(-(changeState("health")));
// const arrowToGut = changeState("health")(-50);
// const arrowToKnee = changeState("health")(-25);

// const healthPotion = changeState("health")(50);
// const bigHealthPotion = changeState("health")(100);

// const arrowHitsShield = changeState("armor")(-10);
// const equipShield = changeState("armor")(25);

// const Bob = storeState(genChar);

// if (Bob().health <= 0) {
//   console.log("Bob is DEAD!")
// }