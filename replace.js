/*given a string it trys to search a "before" element in the string
if it founds the before element then it remove that "before" element 
and replace it with "after" element no matter how many "before" elements 
found in a string it replaces all that "before" elements with "after" 
here ==>"before" is the element we have to find 
==> "after" is the element we have to replace with "before"*/
function replace(str, before, after) {
  let Arr = str.split(" ");
  for (i = 0; i < Arr.length; i++) {
    if (Arr[i] == before) {
      Arr.splice(i, 1, after);
    }
  }
  console.log(...Arr);
}

replace("Hello i am ahmad", "Hello", "hi");
