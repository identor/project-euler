def factors(num):
    factors = [1, num]

    i = 2
    while i < num/2:
        if num % i == 0: factors.append(i)
        i += 1

    return factors

def primeFactors(num):
    factors = []

    i = 2
    while i < num/2:
        if num % i == 0 and isPrime(i): factors.append(i)
        i += 1

    return factors

def isPrime(num):
    return len(factors(num)) < 3

if __name__ == '__main__':
    print primeFactors(600851475143)
    # print primeFactors(13195)

