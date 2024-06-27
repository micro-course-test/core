import { test, expect } from '@playwright/test';

test('create delete course list', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Название').click();
  await page.getByPlaceholder('Название').fill('Тест');
  await page.getByPlaceholder('Название').press('Tab');
  await page.getByPlaceholder('Описание').fill('Тест');
  await page.getByRole('button', { name: 'Добавить' }).click();
  await expect(page.getByText('ТестТестУдалить')).toBeVisible();
  await page.getByRole('button', { name: 'Удалить' }).click();
  await expect(page.getByText('ТестТестУдалить')).not.toBeVisible();
});
