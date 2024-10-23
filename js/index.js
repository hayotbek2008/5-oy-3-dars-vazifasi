// Massiv va obyektlar misollar
// 1-misol
// const oquvchilar = [
//   { name: "John", age: 17 },
//   { name: "David", age: 18 },
//   { name: "Alex", age: 19 }
// ];
// function chiqaish(oquvchilar) {
//   for (let i = 0; i < oquvchilar.length; i++) {
//     console.log(`Ism: ${oquvchilar[i].name}, Yosh: ${oquvchilar[i].age}`);

//   }
// }

// chiqaish(oquvchilar)

// 2 - misol
// const mahsulotNarxiniOshirish = (mahsulotlar) => {
//   return mahsulotlar.map(mahsulot => {
//     return { ...mahsulot, narx: mahsulot.narx * 1.2 }
//   })
// }

// const mahsulotlar = [
//   { nom: "Olma", narx: 100 },
//   { nom: "Nok", narx: 150 },
//   { nom: "Banan", narx: 200 }
// ];

// let res = mahsulotNarxiniOshirish(mahsulotlar)
// console.log(res);




// 3-misol
// const oquvchilar = [
//   { ism: "Dilorom", yosh: 20 },
//   { ism: "Shahrizoda", yosh: 17 },
//   { ism: "Akbar", yosh: 19 }
// ];

// function Over18YearsOld(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i].yosh > 18) {
//       console.log(`18 yoshdan kattalar, ${arg[i].yosh}`);

//     }
//   }
// }

// Over18YearsOld(oquvchilar)

// 4-misol
// const mualliflarniFormatlash = (kitoblar) => {
//   return kitoblar.map(kitob => kitob.muallif.toUpperCase())
// }
// const kitoblar = [
//   { nom: "Kitob A", muallif: "Said Ahmad" },
//   { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//   { nom: "Kitob C", muallif: "Murodjon Abduqodirov" }
// ];

// let res = mualliflarniFormatlash(kitoblar)
// console.log(res);

// 5-misol
// const ishHaqiniOshirish = (xodimlar) => {
//   return xodimlar.map(xodim => xodim.ishHaqi * 1.1)
// }


// const xodimlar = [
//   { ism: "Rashid", ishHaqi: 3000 },
//   { ism: "Dilshod", ishHaqi: 2500 },
//   { ism: "Farhod", ishHaqi: 4000 }
// ];
// let res = ishHaqiniOshirish(xodimlar)
// console.log(res);


// 6-misol
// const oquvchilar = [
//   { ism: "Jasur", yosh: 21 },
//   { ism: "Sardorbek", yosh: 22 },
//   { ism: "Azizbek", yosh: 20 }
// ];

// const ismgaPrefiksQoshish = (oquvchilar) => {
//   return oquvchilar.map(oquvchilar => `Mr. ${oquvchilar.ism}`)
// }

// let res = ismgaPrefiksQoshish(oquvchilar)
// console.log(res);


// 7-misol
// const avtomobillar = [
//   { nom: "Tesla", tur: "elektr" },
//   { nom: "Toyota", tur: "benzin" },
//   { nom: "Nissan Leaf", tur: "elektr" }
// ]

// function elektrAvtomobillarniTanlash(avtomobillar) {
//   return avtomobillar.filter(avtomobil => avtomobil.tur == 'elektr')
// }

// let res = elektrAvtomobillar = elektrAvtomobillarniTanlash(avtomobillar)
// console.log(res);
// 8-misol

// const foydalanuvchilar = [
//   { ism: "Aziz", email: "aziz@example.com" },
//   { ism: "Nodir", email: "nodir@example.com" },
//   { ism: "Malika", email: "malika@example.com" }
// ];


// function chiqaish(foydalanuvchilar) {
//   foydalanuvchilar.forEach(foydalanuvchilar => {
//     console.log(`Ism ${foydalanuvchilar.ism}, Email ${foydalanuvchilar.email}`);

//   });
// }

// chiqaish(foydalanuvchilar)

// 9-misol
// const mahsulotlar = [
//   { nom: "Televizor", narx: 500 },
//   { nom: "Konditsioner", narx: 700 },
//   { nom: "Butler", narx: 300 }
// ];


// function engYuqoriNarxliMahsulotniTopish(mahsulotlar) {
//   let engYuqoriMahsulot = mahsulotlar[0];

//   for (let i = 0; i < mahsulotlar.length; i++) {
//     if (mahsulotlar[i].narx > engYuqoriMahsulot.narx) {
//       engYuqoriMahsulot = mahsulotlar[i]

//     }
//   }
//   return engYuqoriMahsulot
// }

// let res = engYuqoriNarxliMahsulotniTopish(mahsulotlar)
// console.log(res);
// 10-misol

// const oquvchilar = [
//   { ism: "Zarina", ball: 85 },
//   { ism: "Doston", ball: 90 },
//   { ism: "Gulbahor", ball: 95 }
// ]; ?????????



// String metodiga oid masalalar
// 1-misol
// function kichikHarflarOgirish(satr) {
//   return satr.toLowerCase()
// }

// let res = kichikHarflarOgirish('SALOM, DUNYO!')
// console.log(res);


// 2-misol
// function satrningUzunliginiHisoblash(satr) {
//   return satr.length;
// }

// let res = satrningUzunliginiHisoblash('salom, dunyo')
// console.log(res);


// 3-misol
// const satrniTekshirish = (satr) => {
//   const boshlanishi = satr.startsWith('Hello')
//   const tugashi = satr.endsWith('!')
//   return {
//     boshlanishi,
//     tugashi
//   }
// }

// const satr = 'Hello, world'
// const res = satrniTekshirish(satr)
// console.log(res);

// 4-misol
// const satrniQisqartirish = (satr) => {
//   return satr.length > 10 ? satr.slice(0, 10) + '...' : satr;
// }

// const natijaniChopEtish = (satr) => {
//   const qisqartirilganSatr = satrniQisqartirish(satr)
//   console.log(qisqartirilganSatr);

// }

// let res = "Bu bir misoldir";
// natijaniChopEtish(res)


// 6-misol
// const belginiOlish = (satr, index) => {
//   if (index < 0 || index >= satr.length) {
//     return 'Index no`to`g``ri'
//   }
// }

// const natijaniChopEtish = (satr, indeks) => {
//   const belgi = belginiOlish(satr, indeks);
//   console.log(`Satrning ${indeks}-indeksidagi belgi: ${belgi}`);
// }


// let res = 'Salom, dunyo'
// console.log(res);

// 7-misol
// const qidiruv = (satr) => {
//   return satr.includes("JavaScript")

// }

// const natijaniChopEtish = (satr) => {
//   const mavjudmi = qidiruv(satr)
//   if (mavjudmi) {
//     console.log('Javascript sozi mavjud');

//   } else {
//     console.log('Javascript sozi mavjud emas');

//   }
// }
// let res = 'JavaScript   dasturlash tili'
// natijaniChopEtish(res);

