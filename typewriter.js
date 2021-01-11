const sentence = (input) => {
  const blockOfTime = 50;
  let timer =0
for (let char of input) {
  timer += blockOfTime
  setTimeout(() => {
  timer += blockOfTime
  process.stdout.write(char);
}, timer)
}
setTimeout(() => {
console.log(" ");
}, timer)
}

sentence('This is a ligthouselabs assignement')