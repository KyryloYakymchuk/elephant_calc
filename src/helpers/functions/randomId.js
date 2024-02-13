export function generateRandomId() {
  const randomNumber = Date.now() + Math.random();
  return randomNumber.toFixed(0);
}
