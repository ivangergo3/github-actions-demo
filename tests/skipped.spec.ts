import { test, expect } from '@playwright/test';

test.describe('skipped examples', () => {
  test('skipped: security scan placeholder', async () => {
    test.skip(true, 'Demo: show skipped counts in CI summary');
    expect(true).toBe(false);
  });
});

