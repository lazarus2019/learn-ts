# Tuples trong TS

## Tuples là gì
\- Là mảng chứa giá trị có kiểu dữ liệu đã biết

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

## Tại sao phải dùng Tuples?