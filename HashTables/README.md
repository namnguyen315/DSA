# **Hash Tables**

- Bảng băm là một cấu trúc dữ liệu được thiết kế để hoạt động nhanh chóng.

- Lý do Bảng băm đôi khi được ưa thích thay vì mảng hoặc danh sách liên kết là vì việc tìm kiếm, thêm và xóa dữ liệu có thể được thực hiện rất nhanh chóng, ngay cả đối với lượng lớn dữ liệu.

- Trong Danh sách liên kết, việc tìm kiếm nhiều thời gian vì chúng ta sẽ phải đi từ node này sang node tiếp theo, kiểm tra từng nút cho đến khi tìm thấy nút.

- Và việc tìm kiếm trong Mảng có thể nhanh nếu chúng ta biết chỉ mục, nhưng khi chúng ta chỉ biết tên, chúng ta cần so sánh từng phần tử (như với Danh sách liên kết) và việc đó cần có thời gian.

- Tuy nhiên, với Bảng băm, việc tìm kiếm được thực hiện rất nhanh vì có một cách để đi thẳng đến nơi lưu trữ dữ liệu bằng cách sử dụng một thứ gọi là hàm băm.