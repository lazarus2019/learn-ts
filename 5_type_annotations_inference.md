# Type Annotations & Type Inference

## Type Annotations (Tự chú thích kiểu dữ liệu đê)

\- Tự khai báo kiểu dữ liệu được tham chiếu

### Khi nào thì dùng

\- Khi khởi tạo và khai báo biến cùng 1 dòng
\- Thiết lập kiểu dữ liệu cụ thể mà không muốn TS phải đoán
\- Thiết lập kiểu dữ liệu trả về cho function nếu kiểu dữ liệu hiện tại là any

### Đối với Around Function

\- Khai báo kiểu dữ liệu của đối số (arguments) truyền vào và kiểu dữ liệu sẽ return

## Type Inference (Tự mà đoán đê TS) - Chỉ hỗ trợ khi cùng 1 dòng

\- Typescript sẽ cố gắng để tìm ra kiểu dữ liệu được tham chiếu

### Khi nào dùng (luôn luôn được dùng, nếu không chú thích)

\- Khi khai báo biến cùng hàng với phần khởi tạo TS sẽ tự động kiểm tra kiểu dữ liệu, nếu không thì TS sẽ tự động chuyển thành type any

### Đối với Around Function

\- Chỉ đoán kiểu giá trị sẽ return dựa trên kiểu dữ liệu của đối số nếu có chú thích
\- Note: nếu TS kiểm tra code bên trong hàm nhưng không có return thì ==> type VOID
