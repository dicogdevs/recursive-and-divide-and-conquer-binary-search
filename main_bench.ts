import { binary_search } from './main.ts';

Deno.bench(function findOne() {
  binary_search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
});
