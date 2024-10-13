def karatsuba_mul(n1, n2):
    if not isinstance(n1, int) or not isinstance(n2, int):
        raise ValueError("Inputs must be integers.")
    
    if n1 < 0 or n2 < 0:
        raise ValueError("Inputs must be non-negative integers.")

    if n1 < 10 or n2 < 10:
        return n1 * n2

    n = max(len(str(n1)), len(str(n2))) // 2

    a = n1 // 10**n
    b = n1 % 10**n
    c = n2 // 10**n
    d = n2 % 10**n

    p = karatsuba_mul(a, c)
    q = karatsuba_mul(b, d)
    r = karatsuba_mul(a + b, c + d) - p - q

    return p * 10**(2*n) + r * 10**n + q

try:
    result_1 = karatsuba_mul(23108, 19278)
    result_2 = karatsuba_mul(2981076893, 12045678910)
    result_3 = karatsuba_mul(67134678, 32314673)
except ValueError as e:
    result_1 = result_2 = result_3 = str(e)

try:
    neg_result_1 = karatsuba_mul(4756.56, 9897.32)  # Invalid input: non-integer
except ValueError as e:
    neg_result_1 = str(e)

try:
    neg_result_2 = karatsuba_mul(123335, -247363)  # Invalid input: negative integer
except ValueError as e:
    neg_result_2 = str(e)

print("Result 1 (23108, 19278):", result_1)
print("Result 2 (2981076893, 12045678910):", result_2)
print("Result 3 (67134678, 3231467):", result_3)
print("Negative Result 1 (4756.56, 9897.32):", neg_result_1)
print("Negative Result 2 (123335, -247363):", neg_result_2)
