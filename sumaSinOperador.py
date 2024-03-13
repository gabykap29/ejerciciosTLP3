def sumaSinOperador(a, b):
    if b == 0:
        return a
    else:
        return sumaSinOperador(a ^ b, (a & b) << 1)
    

print(sumaSinOperador(5, 7)) # 12


def sumSinOperador(a, b):
    return -(-a - b)

print(sumSinOperador(-5, -7)) # 12