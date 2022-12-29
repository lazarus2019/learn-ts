# Utility Types

## Partial<Type>
\- Thiết lập tất cả thuộc tính trong type thành optional

```ts
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

## Pick<T,K>
\- Tạo type mới và chọn những type cần thiết trong type ban đầu
```ts
 type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

```ts
type Person = { name: string; age: number }
type Name = Pick<Person , 'name'>;

const n: Name = {name: 'John'}; // ok
const err: Name = {name: 'John', age: 26} // error
```

## Omit<T,K> (Ngược lại với Pick)
\- Tạo type mới gồm tất cả trừ 1 vài field từ 1 type trước đó

```ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
```

```ts
type Person = { name: string; age: number }

type Name = Omit<Person , 'age'>;

const n: Name = {name: 'John'}; // ok
const err: Name = {name: 'John', age: 26} // error
```