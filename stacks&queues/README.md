# **Stacks and Queues**

## **Stacks**

- Ngăn xếp là 1 kiểu dữ liệu có thể chứa nhiều phần tử

- Tưởng tượng một stack giống như một đống pancake

- Trong 1 đống pancake, nhuwngc chiếc bánh vừa được thêm vào và lấy ra từ trên xuống. Vì vậy chiếc bánh vừa lấy ra sẽ là chiếc bánh cuối cùng vừa thêm vào. Cách tổ chức các phần tử này được gọi là _LIFO (Last In First Out)_

- Các thao tác cơ bản chúng ta có thể thực hiện trên ngăn xếp là

  - Push: Thêm 1 phần tử mới vào ngăn xếp

  - Pop: Xóa và trả về phần tử trên cùng của ngăn xếp

  - Peek: Trả về phần tử trên cũng của ngăn xếp

  - isEmpty: Kiểm tra ngăn xếp có rỗng

  - Size: tìm số lượng phần tử trong ngăn xếp

- Ngăn xếp có thể thực hiện bằng cách sử dụng mảng hoặc danh sách liên kết

- Ngăn xếp có thể được sử dụng để triển khai cơ chế hoàn tác về trạng thái trước đó, tạo thuật toán tìm kiếm theo chiều sâu trong biểu đồ hoặc để quay lui.

- Ngăn xếp thường được đề cập với hàng đợi

### **Triển khai Stack bằng Array**

- Lý do triển khai Stack bằng Array

  - Bộ nhớ hiệu quả: Các phần tử mảng không giữ địa chỉ của phần tiếp theo giống như các nút trong Linked List

  - Dễ triển khai và dễ hiểu hơn: Việc sử dụng mảng để triển khai Stack yêu cầu ít mã hơn so với sử dụng Linked List do đó việc sử dụng Array dễ hiểu hơn

- Lý do không dùng Array để triển khai Stack

  - Kích thước cố định: Một mảng chiếm một phần cố định của bộ nhớ. Điều này có nghĩa là nó có thể chiếm nhiều bộ nhớ hơn mức cần thiết nếu dùng mảng, hoặc nếu mảng đầy nó không thể chứa nhiều phần tử hơn

### **Triển khai Stack bằng Linked List**

- Lý do triển khai Stack bằng LinkedList

  - Kích thước động: Stack có thể được mở rộng hoặc thu nhỏ một cách link hoạt không giống như khi sử dụng Array

- Lý do không dùng Linked List để triển khai Stack

  - Tốn bộ nhớ: Mỗi element trong Stack phải chứa địa chỉ của phần tử tiếp theo (node tiếp theo trong Linked List)

  - Khả năng đọc: code khó đọc và khó viết hơn đối với 1 số người vì nó dài hơn và phức tạp hơn

## **Queues**

- Hàng đợi là 1 cấu trúc dữ liệu có thể chứ nhiều phần tử

- Hãy tưởng tượng hàng đợi giống như mọi người xếp hàng trong siêu thị. Người đầu tiên đứng xếp hàng cũng là người đầu tiên có thể thanh toán và rời khỏi siêu thị. Cách tổ chức các phần tử như này được gọi là _FIFO (First In First Out)_

- Các thao tác cơ bản có thể thực hiện trên hàng đợi:

  - Enqueue: Thêm 1 element mới vào hàng đợi

  - Dequeue: Xóa và trả về phần tử đầu tiên trong hàng đợi

  - Peek: Trả về phần tử đầu tiên có trong hàng đợi

  - isEmpty: kiểm tra hàng đợi có rỗng

  - Size: tìm số lượng phần

- Hàng đợi có thể thực thi bằng Array hoặc LinkedList

- Hàng đợi có thể được sử dụng để thực hiện lập kế hoặc cho công việc cho máy tin văn phòng, xử lý đơn hàng cho vé điện tử hoặc để tạo thuật toán tìm kiếm theo chiều rộng trong biểu đồ

### **Triển khai Queue bằng Array**

- **Lý do triển khai Queue bằng Array**

  - Bộ nhớ hiệu quả: Các phần tử mảng không giữ địa chỉ của phần tiếp theo giống như các nút trong Linked List

  - Dễ triển khai và dễ hiểu hơn: Việc sử dụng mảng để triển khai Stack yêu cầu ít mã hơn so với sử dụng Linked List do đó việc sử dụng Array dễ hiểu hơn

- **Lý do không dùng Array để triển khai Queue**

  - Kích thước cố định: Một mảng chiếm một phần cố định của bộ nhớ. Điều này có nghĩa là nó có thể chiếm nhiều bộ nhớ hơn mức cần thiết hoặc nếu mảng đầy, nó không thể chứa nhiều phần tử hơn. Và việc thay đổi kích thước một mảng có thể tốn kém.

  - Chi phí dịch chuyển: Dequeue làm cho phần tử đầu tiên trong hàng đợi bị xóa và các phần tử khác phải được dịch chuyển để thế chỗ các phần tử đã bị xóa. Điều này không hiệu quả và có thể gây ra vấn đề, đặc biệt nếu hàng đợi dài.

  - Các lựa chọn thay thế: Một số ngôn ngữ lập trình có cấu trúc dữ liệu tích hợp được tối ưu hóa cho các hoạt động xếp hàng tốt hơn so với việc sử dụng mảng.

## **Triển khai Queue bằng LinkedList**

- **Lý do triển khai Queue bằng LinkedList**

  - Kích thước động: Hàng đợi có thể tăng và giảm linh hoạt, không giống như mảng.

  - Không dịch chuyển: Phần tử phía trước của hàng đợi có thể bị xóa (enqueue) mà không cần phải dịch chuyển các phần tử khác trong bộ nhớ.

- **Lý do không dùng LinkedList để triển khai Queue**

  - Bộ nhớ bổ sung: Mỗi phần tử hàng đợi phải chứa địa chỉ của phần tử tiếp theo (nút danh sách liên kết tiếp theo).

  - Khả năng đọc: Mã có thể khó đọc và viết hơn đối với một số người vì nó dài hơn và phức tạp hơn.
