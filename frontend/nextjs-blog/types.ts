enum eventTypes {
  MOVEMENT = "MOVEMENT",
}

interface EventPayload {
  type: eventTypes;
  data: {
    x: number;
    y: number;
  };
}
const payload: EventPayload = {
  type: eventTypes.MOVEMENT,
  data: {
    x: 10,
    y: 20,
  },
};
