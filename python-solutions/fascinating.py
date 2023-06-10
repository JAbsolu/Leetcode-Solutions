
def isFascinating(n):
    isSeen = []
    concatNum = n + str(int(n) * 2) + str(int(n) * 3)
    
    for num in concatNum:
        num = int(num)
        if num < 1:
            return False
        if num in isSeen:
            return False
        isSeen.append(num)
    return True


print(isFascinating("192"))
print(isFascinating("100"))
print(isFascinating("123"))
print(isFascinating("172"))