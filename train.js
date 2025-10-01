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

/* function countDigits(mix_digit) {   
    let count = 0;
    for (let index in mix_digit) {
      if (mix_digit[index]>= "0" && mix_digit[index]<= "9") {
        count = count + 1;
      }
    }
    return count;
}; */

// TASK-C

/* const moment = require("moment");

class shop{ 

  constructor(non, lagmon, cola){
    this.non = non
    this.lagmon = lagmon
    this.cola = cola
  }

  
  sotish(item, number){
    this.item = item;
    this.number = number;

    if(item === "non"){
      this.non -= this.number;
    } if(item === "lagmon") {
      this.lagmon -= this.number;
    } else if (item === "cola") {
      this.cola -= this.number;
    }

      console.log("Hozir",moment().format("HH:mm"), `da ${this.number}'ta ${this.item} sotildi.`);
    }
  

  qabul(item, number){
    this.item = item;
    this.number = number;

    if(item === "non"){
      this.non += this.number;
    } if(item === "lagmon") {
      this.lagmon += this.number;
    } else if (item === "cola") {
      this.cola += this.number;
    }

    console.log("Hozir",moment().format("HH:mm"), `da ${this.number}'ta ${this.item} qabul qilinid.`);
  }

  qoldiq(){
      console.log("Hozir",moment().format("HH:mm"), `da ${this.non}'ta non ${this.lagmon}'ta lagmon ${this.cola}'ta cola mavjud.`);
  }

};

const sell = new shop(5,6,7);
sell.sotish("non",1);
sell.qoldiq();
sell.qabul("cola",5);
sell.qoldiq(); */

// TASK-D

function equal_strings (first, second) {
  if (first.length === second.length){
    let count = 0
      for(let value_first of first){
          if (second.includes(value_first)) {
            count += 1;
          }
      }
      if (count === first.length) {
        return true;
      } else {
        return false;
      }
  } else {
    return false;
  }
};
console.log(equal_strings("apple", "palep"));