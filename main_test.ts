import { assertEquals } from 'https://deno.land/std@0.192.0/testing/asserts.ts';
import { binary_search } from './main.ts';

Deno.test(function binarySearchTest() {
  assertEquals(binary_search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 0);
  assertEquals(binary_search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 10);
  assertEquals(binary_search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 3);
  assertEquals(binary_search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 23), -1);
});
