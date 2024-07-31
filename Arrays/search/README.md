# Linear Search (tìm kiếm tuyến tính)

- là 1 thuật toán tìm kiếm 1 giá trị trong 1 mảng bằng cách duyệt qua từng phần tử trong mảng
- time complexity (độ phức tạp thời gian): $O(n)$
- cách thức hoạt động:
    - Duyệt qua từng phần tử trong mảng
    - So sánh phần tử hiện tại với giá trị cần tìm
    - Nếu phần tử hiện tại bằng giá trị cần tìm thì trả về vị trí của phần tử đó
    - Nếu duyệt hết mảng mà không tìm thấy giá trị cần tìm thì trả về -1

# Binary Search (tìm kiếm nhị phân)

- là 1 thuật toán tìm kiếm 1 giá trị trong 1 mảng đã được sắp xếp
- time complexity (độ phức tạp thời gian): $O(logn)$
- cách thức hoạt động:
    - Duyệt qua mảng bằng cách chia đôi mảng
    - So sánh giá trị cần tìm với giá trị ở giữa mảng
    - Nếu giá trị cần tìm bằng giá trị ở giữa mảng thì trả về vị trí của giá trị đó
    - Nếu giá trị cần tìm nhỏ hơn giá trị ở giữa mảng thì tiếp tục tìm kiếm trong nửa trái của mảng
    - Nếu giá trị cần tìm lớn hơn giá trị ở giữa mảng thì tiếp tục tìm kiếm trong nửa phải của mảng
    - Lặp lại các bước trên cho đến khi tìm thấy giá trị cần tìm hoặc mảng chỉ còn 1 phần tử

