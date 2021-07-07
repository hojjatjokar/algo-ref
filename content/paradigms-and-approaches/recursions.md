# Recursion

The idea is basically taking one problem and doing it over and over on a smaller piece or on a changing piece until you hit some endpoint which we call the base case.

## What is recursion?

A **process** (a function in our case) that **calls itself**

## It's Usages:

- JSON.parse / JSON.stringify
- `document.getElementById` and DOM traversal algorithms
- Object traversal
- Very common with more complex algorithms
- It's sometimes a cleaner alternative to iteration

## Helper Method Recursion vs Pure Recursion:

```jsx
function collectOdds(arr) {
  let result = [];

  function helper(list) {
    if (list.length === 0) {
      return [];
    }
    if (list[0] % 2 === 0) {
      result.push(list[0]);
    }

    return helper(list.slice(1));
  }

  helper(arr);

  return result;
}

function collectOddsPure(arr) {
  if (arr.length == 0) {
    return [];
  }

  const result = arr[0] % 2 == 0 ? [arr[0]] : [];

  return result.concat(collectOddsPure(arr.slice(1)));
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer = collectOdds(input);
const answer2 = collectOddsPure(input);

console.log(answer);
console.log(answer2);
```
