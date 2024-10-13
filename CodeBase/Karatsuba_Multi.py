"""
PROBLEM: Karastuba Multiplication in Python
AUTHOR: dikshat25
"""

def karatsuba_mul(n1, n2):
    """
    Recursively multiplies two integers using Karatsuba algorithm.
    
    :param n1: First non-negative integer
    :param n2: Second non-negative integer
    :return: Product of the two integers
    """
    if not isinstance(n1, int) or not isinstance(n2, int):
        raise ValueError("Inputs must be integers.")  # Validate input types
    
    if n1 < 0 or n2 < 0:
        raise ValueError("Inputs must be non-negative integers.")  # Validate non-negative inputs

    if n1 < 10 or n2 < 10:
        return n1 * n2  # Base case for recursion (single-digit numbers)

    n = max(len(str(n1)), len(str(n2))) // 2  # Split length of larger number

    # Split both numbers into halves
    a = n1 // 10**n
    b = n1 % 10**n
    c = n2 // 10**n
    d = n2 % 10**n

    # Recursive calls to calculate products
    p = karatsuba_mul(a, c)
    q = karatsuba_mul(b, d)
    r = karatsuba_mul(a + b, c + d) - p - q  # Combine the parts

    return p * 10**(2*n) + r * 10**n + q  # Compute final result


try:
    # Test cases for valid inputs
    result_1 = karatsuba_mul(23108, 19278)
    result_2 = karatsuba_mul(2981076893, 12045678910)
    result_3 = karatsuba_mul(67134678, 32314673)
except ValueError as e:
    result_1 = result_2 = result_3 = str(e)  # Handle exceptions in valid tests

try:
    # Test case for invalid input (non-integer)
    neg_result_1 = karatsuba_mul(4756.56, 9897.32)
except ValueError as e:
    neg_result_1 = str(e)  # Handle exception for non-integer input

try:
    # Test case for invalid input (negative integer)
    neg_result_2 = karatsuba_mul(123335, -247363)
except ValueError as e:
    neg_result_2 = str(e)  # Handle exception for negative input

# Output results
print("Result 1 (23108, 19278):", result_1)
print("Result 2 (2981076893, 12045678910):", result_2)
print("Result 3 (67134678, 3231467):", result_3)
print("Negative Result 1 (4756.56, 9897.32):", neg_result_1)
print("Negative Result 2 (123335, -247363):", neg_result_2)
