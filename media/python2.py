import numpy as np

# 두 벡터
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# 두 행렬
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# 벡터의 내적
result_vector = np.dot(a, b)
print("Vector Dot Product:", result_vector)

# 행렬의 내적
result_matrix = np.dot(A, B)
print("Matrix Dot Product:\n", result_matrix)