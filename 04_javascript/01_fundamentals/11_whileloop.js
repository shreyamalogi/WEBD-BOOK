
var word = "bottles";
var count = 99;
while (count > 0) {
  if (count == 1){
    var word = "bottle"
  }
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
//     console.log("\n");
    --count;
    
    if (count > 0) {
      if (count == 1){
        var word = "bottle"
      }
        console.log(count + " " + word + " of beer on the wall.");
    } else {
      if (count < 1){
        var word = "bottles"
      }
        console.log("No more " + word + " of beer on the wall.");
    }
}
