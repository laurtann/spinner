const cursorMoves = "|/-\\|/-\\|";

let timer = 100;
for (let el of cursorMoves) {
  setTimeout(() => process.stdout.write('\r' + el), timer);
  timer += 200;
};