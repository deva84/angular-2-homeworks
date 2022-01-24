export function* genID() {
  let value = Math.floor(Math.random() * 1000000000);
  yield value;
}
