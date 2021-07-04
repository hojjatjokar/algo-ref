# Frequency Counter Pattern

This pattern uses objects or sets to collect values/frequencies of values.

This can often avoid the need for nested loops or O(n^2) operations with arrays/strings.

So the idea behind the frequency counter usually uses an object and you use that object to construct a profile sort of a way of breaking down the contents of an array or a string.
Usually, some sort of linear structure like an array or a string and then you're able to quickly compare that breakdown to how another object looks. That was constructed from a string or an array. So we had two arrays. We break them down into objects that sort of classifying what's in those arrays and then we can compare those objects and this allows us to improve our code significantly.

## Example 1: same

Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The **frequency** of values must be the **same**.

### First Naive solution - O(n^2)

```javascript
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const productIndex = arr2.indexOf(arr1[i] ** 2);

    if (productIndex === -1) {
      return false;
    }
    arr2.splice(productIndex, 1);
  }

  return true;
}
```

### Second Naive solution - O(n^2)

```javascript
function same(a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] === a[i] ** 2) {
        b.splice(j, 1);
        count++;
      }
    }
  }

  return a.length === count;
}
```

### Frequency counter solution - O(n)

```jsx
function same(a, b) {
  let objValues = {};
  let objProducts = {};

  for (let i = 0; i < a.length; i++) {
    const key = a[i];
    objValues[key] = objValues[key] ? objValues[key] + 1 : 1;
  }

  for (let i = 0; i < b.length; i++) {
    const key = b[i];
    objProducts[key] = objProducts[key] ? objProducts[key] + 1 : 1;
  }

  const keys = Object.keys(objValues);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (objValues[key] !== objProducts[key ** 2]) {
      return false;
    }
  }

  return true;
}
```

## Example 2: Anagram

Given two strings, write a function to determine if the second string is an anagram of the first. An Anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```jsx
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false) // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
```

### Naive solution - O(n^2)

### Frequency counter solution - O(n)

```javascript
function validAnagram(a,b){
	const lookup = {};

	for(let value of a){
		lookup[value] = lookup[value] ? lookup[value]+1; 1
	}

	for(let key of b){
		if(lookup[key]){
			lookup[key]--;

		} else {
			return false;
		}
	}

	return true;
}
```
