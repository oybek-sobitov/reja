/* const { links } = require("express/lib/response");

console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "togri boshliq tanlang va koproq xato qiling", // 20-30
    "ozingiz uchun ishlashni boshlang", // 30-40
    "sizda kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yo'q endi", // 60
]; */

/* function maslahatBering (a, callback) {
    if(typeof a !== 'number') callback("insert a number", null);
    else if (a <=20) callback(null, list[0]);
    else if (a < 20 && a <= 30) callback(null, list[1]);
    else if (a < 30 && a <= 40) callback(null, list[2]);
    else if (a < 40 && a <= 50) callback(null, list[3]);
    else if (a < 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function(){
            callback(null, list[5]);
        }, 5000);
    }
    
}

console.log("passed here 0") 

maslahatBering(65, (err, data) => {
    if(err)  console.log('EROR:', err);
    console.log('Javob:', data);
})

console.log("passed here 1") */

// async function
/* async function maslahatBering (a) {
    if(typeof a !== 'number') throw new Error("insert a number");
    else if (a <=20) return list[0];
    else if (a < 20 && a <= 30) return list[1];
    else if (a < 30 && a <= 40) return list[2];
    else if (a < 40 && a <= 50) return list[3];
    else if (a < 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, rejcet) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000)
        });
        
        /*    setTimeout(function(){
                return list[5];
            }, 5000); */
/*    }
    
} */ 
 

// call via then / catch
/* console.log("passed here 0")

maslahatBering(25).then(data => {
    console.log("Javob:", data);
}).catch(err => {
    console.log("ERROR:", err);
});

console.log("passed here 1") */

// async / await
/* async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(35);
    console.log(javob);
    javob = await maslahatBering(45);
    console.log(javob);
}   

run();

*/


// TASK A


function countLetter(harf, soz) {
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

console.log(countLetter("r", "rear"));