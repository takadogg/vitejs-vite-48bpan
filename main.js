// /**
//  * const,letなどの変数宣言
//  */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";

// // constは再宣言不可能
// const val3 = "const変数を再宣言"

//  // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 31
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5)

// /**
//  * テンプレート文字列
//  */
//  const name = "じゃけぇ";
//  const age = 31;

//  // 「私の名前はじゃけぇです。年齢は31歳です。」

//  // 従来の方法
//  const message1 = "私の名前は"　+ name + "です。年齢は"　+ age + "です。";
//  console.log(message1)

//  // テンプレート文字列を用いた方法
//  const message2 = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message2)

/**
 * アロー関数
 */
//　従来の関数
// function funk(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log('func1です');

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2('funk2です'));

// const func3 = (num1, num2) => ({
//   hoge: num1,
//   huga: num2,
// });
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 31
// };

// // const massage1 = '名前は${myProfile.name}です。年齢は${myProfile.age}歳です。'
// // console.log(message1)

// const { name, age } = myProfile;
// const massage2 = '名前は${name}です。年齢は${age}歳です。'

// const myProfile = ["じゃけぇ", 31];

// const message3 = '名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。';
// console.log(message3)

// const [name, age] = myProfile;
// const message4 = '名前は${name}です。年齢は${age}歳です。';
// console.log(message4);

/**
 * デフォルト値（引数、分割代入）
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("じゃけぇ");

// const myProfile = {
//     age: 31
// };
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記法
 */
const name = "じゃけぇ";
const age = 31;

const myProfile = {
    name,
    age
};
console.log(myProfile)

