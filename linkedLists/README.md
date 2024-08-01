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

