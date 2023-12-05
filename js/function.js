// Tính tổng các số trong khoảng từ 10 đến 20, từ 25 đến 40 và từ 15 đến 30

// 1. Cú pháp

/**
 * Tính tổng các số trong khoảng từ a đến b
 * @param {*} startValue Giá trị bắt đầu
 * @param {*} endValue Giá trị kết thúc
 * @returns Tổng của số trong khoảng từ a đến b
 * Author / CreatedBy: Ngọ Văn Quý (04/12/2023)
 * ModifiedBy: Nguyễn Văn An (04/12/2024)
 */

function caculate(startValue, endValue) {
  // Biến lưu trữ
  let total = 0;
  for (let i = startValue; i <= endValue; i++) {
    total = total + i;
  }

  // Trả về giá trị cho hàm
  return total;
}

console.log(caculate(10, 20));
console.log(caculate(25, 30));
console.log(caculate(15, 30));

// Xây dựng một hàm có tham số truyền vào là mảng, sau đó trả về một mảng mới chứa các phần tử là số chẵn
// Input: [1,2,3,4,5,6,7,8] ; output: [2,4,6,8]

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(handleEvenNumber(array1));

function handleEvenNumber(array) {
  const arrayStore = [];
  // Cú pháp để kiểm tra một biến có phải mảng không?
  if (!Array.isArray(array)) {
    console.log("Đây không phải là một mảng");
  } else {
    // Lặp qua các phần tử của mảng
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        arrayStore.push(array[i]);
      }
    }

    return arrayStore;
  }
}

// 2. Expression function

const getName = function () {
  return "Nguyễn Văn A";
};

console.log(getName());

// 3. Arrow function

const getClassName = (className) => {
  return className;
};

let a = 10;
let b = a; // a lúc này là bản sao của a dòng 66
b = 20;

console.log("a: ", a);
console.log("b: ", b);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(3);
console.log("Arr1: ", arr1);
console.log("Arr2: ", arr2);
