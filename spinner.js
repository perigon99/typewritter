const spinner = () => {
  const spin = "|\r/\r-\r\\\r|\r/\r-\r"
  const blockOfTime = 200;
  let timer =0
for (let spins of spin) {
  timer += blockOfTime
  setTimeout(() => {
  timer += blockOfTime
  process.stdout.write(spins);
}, timer)
}
setTimeout(() => {
//console.log(" ");
}, timer)
}
spinner();