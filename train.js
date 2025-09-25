// TASK A


/* function countLetter(harf, soz) {
  if (harf.length !== 1) {
    return "Birinchi argumetga harf kiriting!";
  }

  let count = 0;
  for (let a of soz) {
    if (a === harf) {
      count++;
    }
  }

  return count;
}

console.log(countLetter("r4", "rear")); */

// TASK B

function countDigits(mix_digit) {   
    let count = 0;
    for (let index in mix_digit) {
      if (mix_digit[index]>= "0" && mix_digit[index]<= "9") {
        count = count + 1;
      }
    }
    return count;
};


const result = countDigits("ad2a54y79wet0sfgb9");
console.log(result);