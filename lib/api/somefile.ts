export async function testFunc() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return "success";
}
