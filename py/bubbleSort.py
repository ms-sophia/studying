arr = [7, 14, 11, 8, 9]
num1 = 0
num2 = 0
num3 = 0


def swap(num1, num2):
    num3 = num1
    num1 = num2
    return (num1, num3)


def bubbleSort(arr):
    for i in range(len(arr)):
        # print(f"iterate{i}:")
        for j in range(len(arr)):
            if arr[i] > arr[j]:
                print(f"Array(i): {arr[i]} Array(j): {arr[j]}")
                a, b = swap(arr[i], arr[j])
                print(f"a:{a} b:{b}")
                arr[j] = b
                arr[i] = a
                print(f"Array(i): {arr[i]} Array(j): {arr[j]}")
            print(f"iterate:{arr[i]}\tj:{arr[j]}")
    print(arr)


bubbleSort(arr)
# a, b = swap(5, 6)
# print(f"{a}")
# print(f"{b}")
