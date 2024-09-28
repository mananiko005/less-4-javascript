// 1.მოცემულია მასივი,რომელშიც არის ერთზე მეტი მნიშვნელობა,მაგრამ კონკრეტულად
// რამდენი არ ვიცით,
// შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]
//  splice  მეთოდის საშუალებით წაშალეთ
//  ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”.

let fruits = [`apple`, `mango`, `avocado`, `kiwi`];

fruits.splice(-2, 1, `strawberry`);

console.log(fruits);

// 2.	მოცემულია სტრინგი: let info= ‘good day”,
// ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.

let info = `good day`;

let newInfo = info.slice(5);

console.log(newInfo);

// 3.	დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს,
// და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

function fncNew(string) {
  return string.length;
}

resultName = fncNew(`pineapple`);
console.log(resultName);

// 4.	შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება
// რიცხვები: 5, 25, 89, 120, 36;
//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

let array = [5, 25, 89, 120, 36];

array.push(`javascript`, `python`);
array.unshift(`html`, `css`);
console.log(array.length);
array.shift();
array.pop();

console.log(array);

// 5.	შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;
//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let array1 = [`ფორთოხალი`, `ბანანი`, `კივი`];
console.log(array1.length);
array1.push(`ვაშლი`, `ანანასი`);
array1.unshift(`საზამთრო`);
console.log(array1.length);
array1.splice(2, 0, `მანგო`);
array1.shift();
array1.pop();
console.log(array1.length);

console.log(array1);

// 6.	მოცემულია მასივი let array3 =[1, 2, 3, 4, 5].
// splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, `a`, `b`, `c`);

console.log(array3);

// 7.	მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
//  წაშალეთ ამ მასივიდან რიცხვი 10;

let array7 = [15, 100, 25, 10, 36];

array7.splice(3, 1);

console.log(array7);

// 8.	მოცემულია მასივი:   let array8 = [ 1, 2 , 3 , 4, 5]
// Splice მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;

let array8 = [1, 2, 3, 4, 5];

array8.splice(2, 1, `three`);
console.log(array8);

// 9.	მოცემულია მასიცი:
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი
// ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი.
// თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით.
// სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array9 = [14, 150, "css", null, "javascript", 25];

let arrayNew = array9.map(function (item) {
  if (typeof item === "number") return Math.pow(item, 2);
  else if (typeof item === "string") return item.toUpperCase();
  else return item;
});

console.log(arrayNew);

let array11 = [14, 150, "css", null, "javascript", 25];

let arrayNew3 = array11.map((item1) => {
  if (typeof item1 === "number") {
    return Math.pow(item1, 2);
  } else if (typeof item1 === "string") {
    return item1.toUpperCase();
  }

  {
    return item1;
  }
});

console.log(arrayNew3);

// 10.	 მოცემულია მასივი:
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან
// თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array10 = [12, 25, 3, 6, 8, 14, 7, 23];

let array10New = array10.map(function (items) {
  return items / 3;
});

console.log(array10New);
