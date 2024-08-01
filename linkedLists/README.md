# **Linked lists** (danh sách liên kết)

- Danh sách liên kết là danh sách trong đó có các nút được liên kết với nhau. Mỗi nút chưa dữ liệu và một con trỏ. Cách chúng liên kết với nhau là mỗi nút trỏ đến vị trí mà nút tiếp theo được đặt trong bộ nhớ
- Lợi ích lớn của việc sử dụng danh sách liên kết là các nút được lưu trữ ở bất kì nơi nào có dung lượng trống trong bộ nhớ, các nút không cần phải được lưu trữ liền kề nhau giống như các phần tủ được lưu trữ trong mảng. Một điều thú vị khác với linked list là khi thêm hoặc xoác các nút, các nút còn lại trong danh sách không cần phải dịch chuyển

# **Linked Lists** _vs_ **Arrays**

|                                                                                                                                       | Arrays | Linked Lists |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------ |
| Là 1 cấu trúc dữ liệu hiện có trong ngôn ngữ lập trình                                                                                | yes    | no           |
| Kích thước bộ nhớ cố định                                                                                                             | yes    | no           |
| Các element hoặc nút được lưu trữ ngay sau nhau trong bộ nhớ                                                                          | yes    | no           |
| Mức sử dụng bộ nhớ thấp (Mỗi nút chỉ chứa dữ liệu, không <br/> có liên kết tới các nút khác)                                          | yes    | no           |
| Các phần tử hoặc nút có thể được truy cập trực tiếp (truy cập ngẫu nhiên)                                                             | yes    | no           |
| Các phần tử hoặc nút có thể chèn hoặc xóa theo thời gian không <br/> đổi mà không cần thực hiện các thao tác dịch chuyển trong bộ nhớ | no     | yes          |

# **Linked List in Memory**

## **Variables in Memory**

- Giả sử chúng ta muốn lưu trữ số nguyên “17” trong 1 biến myNumber. Để đơn giản, giả sử số nguyên được lưu dưới dạng hai byte (16 bit) và địa chỉ trong bộ nhớ đối với myNumber là 0x7F30.

  ![img_linkedlists_memory](/Images//img_linkedlists_memory.png)

- Ví dụ trên cho thấy cách lưu trữ một giá trị số nguyên trên bộ vi điều khiển Arduino Uno đơn giản nhưng phổ biến. Bộ vi điều khiển này có kiến trúc 8 bit với bus địa chỉ 16 bit và sử dụng hai byte cho số nguyên và hai byte cho địa chỉ bộ nhớ. Để so sánh, máy tính cá nhân và điện thoại thông minh sử dụng 32 hoặc 64 bit cho số nguyên và địa chỉ, nhưng về cơ bản bộ nhớ hoạt động theo cùng một cách.

## **Arrays in Memory**

- Các phần tử trong 1 mảng được lưu trữ liên tục trong bộ nhớ. Có nghĩa là Mỗi phần tử được lưu trữ ngay sau phần tử trước đó.

- ảnh bên dưới cho ta thấy cách 1 mảng số nguyên myArray = [3,5,13,2] được lưu trữ.

  ![img_arrays_memory](/Images/img_linkedlists_arraymemory.png)

- Máy tính chỉ có địa chỉ của byte đầu tiên của myArray, vì vậy để truy cập phần tử thứ 3 bằng cách myArray[2], máy tính bắt đầu ở 0x7f28 và nhảy qua hai số nguyên đầu tiên. Máy tính biết rằng một số nguyên được lưu trữ 2 byte, vì vậy nó nhảy 2x2 byte về phía trước từ 0x7F28 và đọc giá trị 13 bắt đầu từ địa chỉ 0x7F32

- Khi xóa hoặc chèn các phần tử vào 1 mảng, mọi phần tử theo sau phải được dịch chuyển lên để nhường chỗ cho phần tử mới hoặc dịch chuyển xuống để thế chỗ cho phần tử đã bị xóa. Các hoặt động dịch chuyển như vậy tốn nhiều thời gian và có thể gây ra sự cố trong cá hệ thống thời gian thực

## **Linked lists in Memory**

- Thay vì lưu trữ tập hợp dữ liệu dưới dạng mảng, chúng ta có thể tạo danh sách liên kết. Danh sách liên kết được sử dụng trong nhiều trường hợp, như lưu trữ dữ liệu động, triển khai ngăn xếp và hàng đợi hoặc biểu diễn biểu đồ, để đề cập đến một số trường hợp trong số đó.

- 1 danh sách liên kết bao gồm các nút có một số loại dữ liệu và ít nhất một con trỏ hoặc liên kết với các nút khác.

- Lợi ích của việc sử dụng danh sách liên kết là các nút được lưu trữ ở bất kì nơi nào có dung lượng trống trong bộ nhớ, các nút không cần phải được lưu trữ liền kề nhau giống như các phần tử được lưu trữ trong mảng. Một điều thú vị khác với danh sách liên kết là khi thêm hoặc xóa các nút, các nút còn lại trong danh sách không cần phải dịch chuyển.

- Hình ảnh bên dưới cho thấy cách lưu trữ danh sách liên kết trong bộ nhớ. Danh sách liên kết có bốn nút có giá trị 3,5,13,2 và mỗi nút có 1 con trỏ tới nút tiếp theo trong danh sách.

    ![img_linked_list_memoryu](/Images/img_linkedlists_memory2.png)

