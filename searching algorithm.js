function lSearch(str, Sel) {
  let arr = str.split(" ");
  let found = 0;
  let position= [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === Sel) {
      found += 1;
      position.push(i+1);
    }
  }
  if (found>0) {
     console.log(`${Sel} found at position ${position} `);
  } else {
    console.log(`${Sel} not found`);
  }
}
lSearch('my name is my aht and i nse my agshg my','my');
