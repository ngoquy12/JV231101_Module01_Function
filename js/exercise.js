const array = [4, 7, 9, 2, 1, 5, 4, 9, 9, 1];
// console.log("Mảng cũ: ", array);

// // for (let i = 0; i < array.length; i++) {
// //   for (let j = i + 1; j < array.length; j++) {
// //     if (array[i] < array[j]) {
// //       // Biến trung gian
// //       let temp = array[i];
// //       array[i] = array[j];
// //       array[j] = temp;
// //     }
// //   }
// // }
// array.sort();

// console.log("Mảng mới: ", array);

// Khai báo một biến đếm số lần xuất hiện
// let count = 0;
// let itemMax; // Phần tử lớn nhất
// let maxAppear = 0; // Số lớn xuất hiện nhiều nhất

// for (let i = 0; i < array.length; i++) {
//   // Biến đếm cho từng phần tử
//   let countItem = 0;
//   for (let j = 0; j < array.length; j++) {
//     if (array[i] === array[j]) {
//       countItem++; // Tăng số đếm lên 1 đơn vị
//     }
//   }

//   if (countItem > count) {
//     count = countItem;
//     itemMax = array[i];
//     maxAppear = count;
//   }
// }

// console.log("Phần tử xuất hiện nhiều nhất: ", itemMax);
// console.log("Số lần xuất hiện: ", maxAppear);

// Khai báo mảng chưa các phần tử không trùng lặp
let uniqueArr = [];

for (let i = 0; i < array.length; i++) {
  // Gắn một cờ
  let isDuplicate = false;

  // Kiểm tra xem phần tử đã tồn tại trong mảng mới chưa
  for (let j = 0; j < uniqueArr.length; j++) {
    if (array[i] === uniqueArr[j]) {
      // Phần tử đã trùng lặp
      // Gắn lại cờ
      isDuplicate = true;
      break;
    }
  }

  // Push phần tử vào trong mảng uniqueArr
  if (!isDuplicate) {
    // ! tương đương với các giá trị: undefined, "", false
    uniqueArr.push(array[i]);
  }
}

console.log("Mảng sau khi loại bỏ các phần tử trùng lặp: ", uniqueArr);
