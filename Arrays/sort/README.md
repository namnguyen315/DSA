# Bubble Sort (sắp xếp nổi bọt)

- là 1 thuật toán sắp xếp 1 mảng giá trị từ thấp nhất đến giá trị cao nhất
- time complexity (độ phức tạp thời gian): $O(n^2)$
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
- time complexity (độ phức tạp thời gian): $O(n^2)$
- cách thức hoạt động
    1. Tìm giá trị nhỏ nhất trong mảng và hoán đổi nó với giá trị ở vị trí đầu tiên của mảng.
    2. Tiếp tục tìm giá trị nhỏ nhất trong phần còn lại của mảng và hoán đổi nó với giá trị ở vị trí thứ hai của mảng
    3. Lặp lại quy trình này cho đến khi tất cả các phần tử trong mảng được sắp xếp.

# Insertion Sort (sắp xếp chèn)

- là 1 thuật toán sắp xếp 1 mảng giá trị từ thấp nhất đến giá trị cao nhất
- time complexity (độ phức tạp thời gian): $O(n^2)$
- cách thức hoạt động
    1. Duyệt qua mảng từ phần tử thứ 2 đến phần tử cuối cùng
    2. lấy phần tử hiện tại và so sánh với các phần tử trước đó
    3. nếu phần tử hiện tại nhỏ hơn phần tử trước nó thì hoán đổi chúng cho đến khi phần tử hiện tại lớn hơn hoặc bằng phần tử phía trước nó
    4. tiếp tục duyệt qua mảng cho đến khi tất cả các phần tử được sắp xếp

# Couting Sort (sắp xếp đếm)

- thuật toán counting sort sắp xếp 1 mảng bằng cách đếm số lần mỗi giá trị xuất hiện
- time complexity (độ phức tạp thời gian):
    - worst case: $O(n^2)$
    - best case: $O(n)$
    - in genaral: $O(n+k)$
- cách thức hoạt động:
    - Tạo một mảng đếm (count) có kích thước bằng phạm vi giá trị của mảng đầu
    vào.
    - Duyệt qua mảng đầu vào và tăng giá trị tương ứng trong mảng đếm cho mỗi phần tử.
    - Cộng dồn các giá trị trong mảng đếm để biết số lượng phần tử nhỏ hơn hoặc bằng mỗi giá trị.
    - Tạo 1 mảng đầu ra có cùng kích thước với mảng đầu vào
    - Duyệt qua mảng đầu vào từ cuối lên đầu
    - cho mỗi phần tử, giảm giá trị tương ứng trong mảng đếm xuống 1 và đặt phần tử đó vào vị trí được chỉ định bởi giá trị trong mảng đếm