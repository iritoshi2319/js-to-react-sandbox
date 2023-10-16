/**
 * const/let等の変数宣言
 */
// var val1 = "val変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "val変数うわがき";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "val変数再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);

// const val4 = {
//   name: "iri",
//   age: 40,
// };
// console.log(val4);

// val4.name = "hoge";
// val4.address = "kobe";

// const val5 = ["doc", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("fish");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "iri";
// const age = 48;

// console.log(`私の名前は${name}です。年齢は${age}です`);

/**
 * アロー関数
 */
// 従来
// function fnc1(str) {
//   return str;
// }

// const fnc1 = function (str) {
//   return str;
// };
// console.log(fnc1("hohoho"));

// // アロー関数
// const fnc2 = (str) => {
//   return str;
// };
// console.log(fnc2("あいうえお"));

// const fnc3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(fnc3(5, 4));

/**
 * 分割代入
 */
// オブジェクトの場合
// const myProfile = {
//   name: "iri",
//   age: 48,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `なまえは${name}です。としは${age}です。`;
// console.log(message2);

// 配列の場合
// const myProfile = ["iri", 48];

// // const message3 = `なまえは${myProfile[0]}です。としは${myProfile[1]}です。`;
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `なまえは${name}です。としは${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "david") => {
//   console.log(`こんにちは！　${name}さん`);
// };
// sayHello("ひろし");

/**
 * スプレッド構文（ドット3つ）
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["いり", "山田", "田中"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => {
//   console.log(`${index + 1}番目は${name}`);
// });

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const members = ["香川", "本田", "中田"];

// const showMember = members.map((name,index) => {
// 	console.log(`番号${index + 1}は${name}です`);
// }

// const newNameArr = nameArr.map((name) => {
//   if (name === "いり") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// ||は左側がfalseとなるとき右を返す　左がtrueならそのまま左を返す
// const num = 100;
// const fee = num || "金額未定です";
// console.log(fee);

// &&は左側がtrueとなるとき右を返す　左がfalseならそのまま左を返す
const num2 = 0;
const fee2 = num2 && "ahahahahaa";
console.log(fee2);
