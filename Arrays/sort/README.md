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

# Quick Sort (sắp xếp nhanh)

- Thuật toán quick sort lấy một mảng giá trị, chọn 1 trong các giá trị làm phần tử trục và di chuyển các giá trị khác sao cho các giá trị thấp hơn nằm phía ở bên trái của phần tử trục và các giá trị cao hơn phần tử trục nằm ở phía bên phải phần tử trục
- time complexity (độ phức tạp thời gian):
    - worst case : $O(n^2)$
    - on average : $O(nlogn)$
- cách thức hoạt động:
    - Chọn một phần tử làm pivot (thường là phần tử cuối cùng của mảng).
    - Phân hoạch mảng sao cho tất cả các phần tử nhỏ hơn pivot nằm ở bên trái
    pivot và tất cả các phần tử lớn hơn pivot nằm ở bên phải pivot.
    - Áp dụng thuật toán quick sort cho hai phần con bên trái và bên phải của
    pivot.
    - Lặp lại các bước trên cho đến khi tất cả các phần tử trong mảng được sắp
    xếp.

# Merge Sort (sắp xếp trộn)

- Thuật toán merge sort chia mảng thành 2 phần con, sắp xếp 2 phần con và sau đó trộn 2 phần con đã sắp xếp lại với nhau
- time complexity (độ phức tạp thời gian): $O(nlogn)$
- cách thức hoạt động:
    - Chia mảng thành 2 phần con cho đến khi mỗi phần con chỉ còn 1 phần tử
    - Sắp xếp 2 phần con đã được chia
    - Trộn 2 phần con đã được sắp xếp lại với nhau

# Radix Sort (sắp xếp cơ số)

- Thuật toán radix sort sắp xếp 1 mảng bằng cách sắp xếp các phần tử theo từng chữ số của chúng
- time complexity (độ phức tạp thời gian): $O(nk)$
- cách thức hoạt động:
    - Duyệt qua mảng từ chữ số ít ý nghĩa nhất đến chữ số có ý nghĩa nhất
    - Sắp xếp các phần tử theo từng chữ số bằng cách sử dụng 1 thuật toán sắp xếp ổn định (ví dụ như counting sort)
    - Sau khi sắp xếp theo từng chữ số, mảng sẽ được sắp xếp theo thứ tự

# Heap Sort (sắp xếp đống)

- Thuật toán heap sort sắp xếp 1 mảng bằng cách sử dụng 1 cấu trúc dữ liệu gọi là đống (heap)
- time complexity (độ phức tạp thời gian): $O(nlogn)$
- cách thức hoạt động:
    - Xây dựng 1 đống từ mảng đầu vào
    - Lấy phần tử lớn nhất (hoặc nhỏ nhất) từ đống và hoán đổi nó với phần tử cuối cùng của mảng
    - Loại bỏ phần tử cuối cùng khỏi đống và giảm kích thước của đống xuống 1
    - Sắp xếp lại đống để đảm bảo tính chất của đống được giữ nguyên
    - Lặp lại các bước trên cho đến khi đống rỗng

# Các thuật toán sắp xếp khác

- **Shell Sort**: Thuật toán sắp xếp Shell Sort là một cải tiến của thuật toán Insertion Sort. Nó sắp xếp các phần tử cách nhau một khoảng nhất định, sau đó giảm dần khoảng cách cho đến khi khoảng cách bằng 1.
- **Comb Sort**: Thuật toán Comb Sort là một cải tiến của thuật toán Bubble Sort. Nó sử dụng một khoảng cách