
// let number = +prompt("Son kiriting")

// if (number % 2 === 0) {
//     console.log(number + "juft")
// } else {
//     console.log(number + "toq")
// }

// let Svetafor = prompt("Rangni kiriting")

// if (Svetafor === "Qizil") {
//     console.log("Stop")
// } else if (Svetafor === "Sariq") {
//     console.log("Wait");
// } else if (Svetafor === "Yashil") {
//     console.log("Let's go")
// }

// let week = prompt("Hafta kunini kiriting")

// // if (week === "Dushanba") {
// //     console.log(false)
// // } else if (week === "Seshanba") {
// //     console.log(false)
// // } else if (week === "Chorshanba") {
// //     console.log(false)
// // } else if (week === "Payshanba") {
// //     console.log(false)
// // } else if (week === "Juma") {
// //     console.log(false)
// // } else if (week === "Shanba") {
// //     console.log(true);
// // } else if (week === "Yakshanba") {
// //     console.log(true);
// // }

// if (week < 5) {
//     console.log(false);
// } else {
//     console.log(true);
// }

let number = +prompt("Birinchi raqam kiritng") 
let number2 = +prompt("Ikkinchi raqam kiritng") 
 
let info = confirm("1)Agar ok bossangiz raqamlar qoshiladi. \n2)Agar 'Otmena' bossangiz raqamlar ayiriladi") 
if (info ) { 
    console.log(number + number2); 
} 
else { 
    console.log(number - number2);
}