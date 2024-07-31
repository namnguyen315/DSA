# Bubble Sort (sắp xếp nổi bọt)

- là 1 thuật toán sắp xếp 1 mảng giá trị từ thấp nhất đến giá trị cao nhất
- time complexity (độ phức tạp thời gian): **O(n^2 )**
- Cách thức hoạt động :
  - đi qua mảng, mỗi lần 1 giá trị
  - với mỗi giá trị, so sánh giá trị với giá trị tiếp theo
  - nếu giá trị cao hơn giá trị tiếp theo, hãy hoán đổi các giá trị sao cho giá trị cao nhất đến sau cùng
  - duyệt qua mảng nhiều lần bằng số giá trị trong mảng
- Cải thiện Bubble Sort:
  - giả sử sau lần lặp đầu tiên ta có được 1 mảng đã được sắp xếp đúng vị trí vậy thì không cần lặp lại cho các bước sau nữa
  - để cải thiện vấn đề này ta thêm 1 biến checkSwap sau mỗi vòng lặp. nếu sau 1 vòng lặp biến checkSwap vẫn là false thì nó sẽ break vòng lặp

# Selection Sort (săp xếp chọn)

- là 1 thuật toán sắp xếp 1 mảng giá trị từ thấp nhất đến giá trị cao nhất
- time complexity (độ phức tạp thời gian): **O(n2 )**
- cách thức hoạt động
    1. Tìm giá trị nhỏ nhất trong mảng và hoán đổi nó với giá trị ở vị trí đầu tiên của mảng.
    2. Tiếp tục tìm giá trị nhỏ nhất trong phần còn lại của mảng và hoán đổi nó với giá trị ở vị trí thứ hai của mảng
    3. Lặp lại quy trình này cho đến khi tất cả các phần tử trong mảng được sắp xếp.

