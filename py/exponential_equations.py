from math import log


def solve_for_exp(a, b):
    a = int(a)
    b = int(b)
    print(round(log(b, a)))


solve_for_exp(input(), input())
