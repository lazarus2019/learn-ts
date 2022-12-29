# Các kiểu dữ liệu trong TS

## Primitive Types (Kiểu dữ liệu sơ khai)

\- number, boolean, string, void, null, undefined, symbol

## Object Types (Kiểu dữ liệu đối tượng)

\- functions, arrays, classes, objects

## Tại sao phải quan tâm đến kiểu dữ liệu

\- Giúp trình biên dịch TS phân tích và phát hiện lỗi
\- Cho phép người khác biết được dữ liệu nào đang được lưu hành trong mã code

## Khi nào thì sử dụng kiểu dữ liệu ==> Everywhere

## Unions type (|)

\- Chỉ định 2 hoặc nhiều kiểu dữ liệu

```ts
interface Admin {
  role: string;
}
interface User {
  email: string;
}

// Method 1: use `in` keyword
function redirect(user: Admin | User) {
  if ('role' in user) {
    // use the `in` operator for typeguards since TS 2.7+
    routeToAdminPage(user.role);
  } else {
    routeToHomePage(user.email);
  }
}
```

## Intersection Types (&)

\- Giao giữa 2 hoặc nhiều type hoặc interface (các prop optional bị loại bỏ)

```ts
// Type
type BaseProps = {
   className?: string,
   style?: React.CSSProperties
   name: string // used in both
}
type DogProps = {
  tailsCount: number
}
type HumanProps = {
  handsCount: number
}
export const Human = (props: BaseProps & HumanProps) => // ...
export const Dog = (props: BaseProps & DogProps) => // ...
```

```ts
interface BaseProps {
  name: string;
}

interface Human {
  handsCount: number;
}

interface Admin extends Human, BaseProps {
  isAdmin: boolean;
}
const krix: Admin = {
  name: 'Krix',
  handsCount: 1,
  isAdmin: true,
};
```

## Type Assertions (as)

\- Coi giá trị là 1 kiểu được chỉ định cụ thể - KHÔNG ÉP KIỂU

```ts
function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

// Chỉ định giá trị nhận thành string
let netPrice = getNetPrice(100, 0.05, true) as string;

// Chỉ định giá trị nhận thành number
let netPrice = getNetPrice(100, 0.05, false) as number;
```

\- Cú pháp

```ts
<targetType>value;

expression as targetType;
```

## Enum Types

\- Nhóm các giá trị cố định

```ts
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(Month.Jun)); // true
```
