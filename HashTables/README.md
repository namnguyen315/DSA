# **Hash Tables**

- Bảng băm là một cấu trúc dữ liệu được thiết kế để hoạt động nhanh chóng.

- Lý do Bảng băm đôi khi được ưa thích thay vì mảng hoặc danh sách liên kết là vì việc tìm kiếm, thêm và xóa dữ liệu có thể được thực hiện rất nhanh chóng, ngay cả đối với lượng lớn dữ liệu.

- Trong Danh sách liên kết, việc tìm kiếm nhiều thời gian vì chúng ta sẽ phải đi từ node này sang node tiếp theo, kiểm tra từng nút cho đến khi tìm thấy nút.

- Và việc tìm kiếm trong Mảng có thể nhanh nếu chúng ta biết chỉ mục, nhưng khi chúng ta chỉ biết tên, chúng ta cần so sánh từng phần tử (như với Danh sách liên kết) và việc đó cần có thời gian.

- Tuy nhiên, với Bảng băm, việc tìm kiếm được thực hiện rất nhanh vì có một cách để đi thẳng đến nơi lưu trữ dữ liệu bằng cách sử dụng một thứ gọi là hàm băm.

## **_Công dụng của bảng băm_**

- Kiểm tra xem thứ gì đó có trong bộ sưu tập hay không (Như tìm sách trong thư viện)

- Lưu trữ các vật phẩm duy nhất và tìm kiếm nhanh chóng (Như lưu trữ số điện thoại)

- kết nối giá trị với key (giống như liên kết tên với số điện thoại)

Lý do quan trọng nhất khiến Hash Table rất phù hợp cho những việc này là vì Hash Table rất nhanh so với Arrays và Linked List, đặc biệt với các tập hợp lớn. Arrays và Linked Lists có time complexity $O(n)$ với việc tìm và xóa trong khi Hash Table trun bình chỉ có $O(1)$.

## **_Hash Set vs Hash Map_**

|                                                                               | Hash Set                                                                               | Hash Map                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| tính duy nhất và lưu trữ                                                      | Mỗi phần tử là 1 khóa duy nhất                                                         | Mỗi mục nhập là 1 cặp key-value, với 1 key là duy nhất và 1 giá trị kết nối với nó      |
| trường họp sử dụng                                                            | kiểm tra nếu 1 phần tử có trong tập, như kiểm tra nếu 1 tên có trong 1 danh sách khách | tìm thông tin dựa trên 1 khóa, giống như tra cứu ai sở hữu một số điện thoại nhất định. |
| tìm kiếm, thêm và xóa phần tử nhanh                                           | có, trung bình o(1)                                                                    | có, trung bình o(1)                                                                     |
| có 1 hàm băm để lấy key, tạo 1 mã băm, và có nhóm nơi mà phần tử được lưu trữ | có                                                                                     | có                                                                                      |

## **_Hash Set_**

- Bộ băm là 1 dạng của cấu trúc dữ liệu cảu bảng băm thường chứa một số lượng lớn các phần tử

- sử dụng 1 bộ băm chúng ta có thể tìm kiếm, thêm và xóa phần tử thực sự rất nhanh

- bộ băm được sử dụng để tra cứu, kiểm tra xem 1 phần tử có là 1 phần của bộ hay không

- 1 bộ băm lưu trữ phần tử duy nhẩ trong nhóm theo mã băm cảu phần tủ

  - mã băm: 1 số được tạo từ 1 giá trị của 1 phần tử duy nhất, để xác định phần tử thuộc về nhóm nào

  - phần tử duy nhất: 1 bộ băm không thể có nhiều hơn 1 phần tử với cùng 1 giá trị

  - nhóm: 1 bộ băm bao gồm nhiều nhóm, hoặc thugf chứa để lưu trữ các phần tử. Nếu 2 phần tử có cùng mã băm, chúng thuộc về cùng 1 nhóm. Các nhóm thường được triển khai như mảng hoặc danh sách liên kết, bởi cì 1 nhóm có thể cần phải giữ nhiều hơn 1 phần tử.

## **_Hash Map_**

- hash map là 1 dạng của cấu trúc dữ liệu hash table thường chứa 1 số lượng lớn các mục nhập

- sử dụng hash map có thể tìm kiếm, thêm, sửa và xóa mục nhập rất nhanh

- hash map thường được sử dụng để tìm kiếm chi tiết về thứ gì đó

- entry: bao gồm 1 khóa và 1 giá trị, dạng cặp key-value

- key: mỗi mục nhập trong hash map là duy nhất. Được sử dụng để tạo 1 mã băm xác định nhóm mục nhập trong bản đồ băm

- mã băm: 1 số được tạo ra từ 1 khóa của mục nhập, để xác định nhóm mà mục nhập hash map thuộc về

- nhóm: 1 hash map bao gồm nhiều nhóm hoặc thùng chứa, để lưu trữ mục nhập

- giá trị: có thể là gần như bất kỳ loại thông tin nào, như tên, ngày sinh và địa chỉ của một người. Giá trị có thể là nhiều loại thông tin khác nhau kết hợp lại.
