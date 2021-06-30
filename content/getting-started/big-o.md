---
title: 'Big O Notation'
metaTitle: 'Big O Notation'
metaDescription: 'Big O Notation explanation and usages.'
---

Objectivs:

- What is Big O Notation for?
- What is Big O?
- Simplify Big O Expression
- Define Time complexity and Space Complexity
- Evaluate time and space complexity of different algorithms using Big O notation

## What is Big O Notation for?

We need a way to choose which solution is more performant that other.

Timing our algorithms for measuring how fast an algorithms could be a splution but has some drawbacks that we want Big O to address them.
drawbacks of measuring performance with timing:

- May be vary with differnet devices
- May be vary with same machine
- For fast algorithms it may not be precise

## What is Big O Notation?

Big O Notation is a system to describe and classify solutions according to how time or space growes as input to solution grows.

Big O Notation invented by Paul Bachmann,[1] Edmund Landau,[2] and others, collectively called Bachmann–Landau notation or asymptotic notation.

Big O notation characterizes functions according to their growth rates: different functions with the same growth rate may be represented using the same O notation. The letter O is used because the growth rate of a function is also referred to as the order of the function. A description of a function in terms of big O notation usually only provides an upper bound on the growth rate of the function.

Associated with big O notation are several related notations, using the symbols o, Ω, ω, and Θ, to describe other kinds of bounds on asymptotic growth rates.

- Big O: upper bound
- Big Theta: lower bound
- Big Omega: both uppper bound and lower bound

## Counting operations

- simple operations
- loops

We can count simple operations and if they are happening in loop multiply it in n. For example for this:

```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

1 multiplication + 1 addition + 1 division = 3 simple operations, regardless of the size of n

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

1 assignment + 1 assignment + n comparisons + n additions and n assignments + n additions and n assignments = ????

The number of operations can be between 2n and 5n + 2. But regardless of the exact number, the number of operations grows roughly proportionally with n

## Definition of Big O Notation

Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n )
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different!

### Broad trends:

- O(1) consonant times
- O(log n)
- O(n)
- O(n log n)
- O(N^2)

```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

O(1)

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

O(n)

```
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

O(n^2)

![Big O comparison](https://i.ibb.co/TKsNd2h/bigo.png)

### Simplifying Big O Expressions

- Constants Don't Matter
- Smaller Terms Don't Matter
- Arithmetic operations are constant Variable assignment is constant Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Space complexity

We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?

rules:

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)
