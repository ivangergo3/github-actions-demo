import { test, expect } from '@playwright/test';

test('form: can submit and shows confirmation', async ({ page }) => {
  await page.setContent(`
    <form>
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
    <p role="status" id="status"></p>
    <script>
      const form = document.querySelector('form');
      const status = document.querySelector('#status');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = new FormData(form).get('email');
        status.textContent = 'saved: ' + email;
      });
    </script>
  `);

  await page.getByLabel('Email').fill('dev@example.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('status')).toHaveText('saved: dev@example.com');
});

