function getname(a, b, c) {
  const name = a;
  const age = b;
  const gender = c;
  const value = name + " " + age + " " + gender;
  return value;
}
const value = getname("Tom", 25, "Man");
console.log(value);

function isEven(input) {
  const value = input % 2;
  if (value > 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isEven(3));
console.log(isEven(4));

function getDevice(size) {
  let deviceName;
  if (size < 400) {
    deviceName = "mobile";
  } else if (size >= 400 && size < 800) {
    deviceName = "tablet";
  } else if (size >= 800) {
    deviceName = "pc";
  }
  return deviceName;
}
console.log(getDevice(399));
console.log(getDevice(1024));

// const isPositive = (num) => {
//   if (num > 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
const isPositive = (num) => num > 0;
//현업에서의 트랜드는 funtion을 이용한 함수선언 보다 익명함수를 사용하는 것.
console.log(isPositive(100));

const getMaxNumber = (x, y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};
console.log(getMaxNumber(5, 6));

const 입장확인 = (나이) => {
  const 제한나이 = 29;
  if (나이 <= 제한나이) {
    return true;
  } else {
    return false;
  }
};
console.log(입장확인(25));
console.log(입장확인(30));
