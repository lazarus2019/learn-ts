Các file được tạo ra trong pages sẽ trở thành đường dẫn đến trang đó.
Nested Routes: Các folder lồng nhau, các file sẽ trở tự động trở thành đường dẫn trên thanh url của website.
Dynamic routes: có thể thêm [] vào tên file để tạo ra đường dẫn động.
Catch All routes: Có thể thêm three dot (...) vào bên trong [] tên file để tạo ra đường dẫn match với tất cả.
Sử dụng Link component để chuyển trang trên giao diện
Hook useRouter có phương thức .push cũng giúp bạn chuyển trang mà không cần Link.
404 Pages: tạo 1 file 404.js ở trong folder pages