# **Stacks and Queues**

## **Stacks**

- Ngăn xếp là 1 kiểu dữ liệu có thể chứa nhiều phần tử

- Tưởng tượng một stack giống như một đống pancake

- Trong 1 đống pancake, nhuwngc chiếc bánh vừa được thêm vào và lấy ra từ trên xuống. Vì vậy chiếc bánh vừa lấy ra sẽ là chiếc bánh cuối cùng vừa thêm vào. Cách tổ chức các phần tử này được gọi là _FIFO (First In First Out)_

- Các thao tác cơ bản chúng ta có thể thực hiện trên ngăn xếp là

  - Push: Thêm 1 phần tử mới vào ngăn xếp

  - Pop: Xóa và trả về phần tử trên cùng của ngăn xếp

  - Peek: Trả về phần tử trên cũng của ngăn xếp

  - isEmpty: Kiểm tra ngăn xếp có rỗng

  - Size: tìm số lượng phần tử trong ngăn xếp

- Ngăn xếp có thể thực hiện bằng cách sử dụng mảng hoặc danh sách liên kết

- Ngăn xếp có thể được sử dụng để triển khai cơ chế hoàn tác về trạng thái trước đó, tạo thuật toán tìm kiếm theo chiều sâu trong biểu đồ hoặc để quay lui.

- Ngăn xếp thường được đề cập với hàng đợi

## **Triển khai Stack bằng Array**

- Lý do triển khai Stack bằng Array

  - Bộ nhớ hiệu quả: Các phần tử mảng không giữ địa chỉ của phần tiếp theo giống như các nút trong Linked List

  - Dễ triển khai và dễ hiểu hơn: Việc sử dụng mảng để triển khai Stack yêu cầu ít mã hơn so với sử dụng Linked List do đó việc sử dụng Array dễ hiểu hơn

- Lý do không dùng Array để triển khai Stack

  - Kích thước cố định: Một mảng chiếm một phần cố định của bộ nhớ. Điều này có nghĩa là nó có thể chiếm nhiều bộ nhớ hơn mức cần thiết nếu dùng mảng, hoặc nếu mảng đầy nó không thể chứa nhiều phần tử hơn

## ** Triển khai Stack bằng Linked List**

- Lý do triển khai Stack bằng LinkedList

  - Kích thước động: Stack có thể được mở rộng hoặc thu nhỏ một cách link hoạt không giống như khi sử dụng Array

- Lý do không dùng Linked List để triển khai Stack

  - Tốn bộ nhớ: Mỗi element trong Stack phải chứa địa chỉ của phần tử tiếp theo (node tiếp theo trong Linked List)

  - Khả năng đọc: code khó đọc và khó viết hơn đối với 1 số người vì nó dài hơn và phức tạp hơn