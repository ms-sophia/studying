def FirstFactorial(num):
    num = int(num)
    x = 1
    for i in range(1, num + 1):
        x = x * i

    print(x)


# keep this function call here
# print(FirstFactorial(input()))
FirstFactorial(input())
