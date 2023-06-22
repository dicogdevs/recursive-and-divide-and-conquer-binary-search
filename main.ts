export function binary_search(arr: number[], target: number): number {
  const arr_length = arr.length;
  if (!arr_length) return -1;

  const mid = Math.floor(arr_length / 2);
  const guess = arr[mid];

  if (guess === target) return mid;

  if (guess > target) return binary_search(arr.slice(0, mid), target);

  const result = binary_search(arr.slice(mid + 1), target);
  return result != -1 ? result + mid + 1 : -1;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(
    'The item is at = ' + binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)
  );
}
