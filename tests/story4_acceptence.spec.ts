//set up procedure

import { test, expect } from '@playwright/test';

test.beforeEach('Setup', async({page}) => {
    await page.goto('EdwinWan');
});

test.describe('Story #4', ()=>{
    test('User tries to book a date lesser than 1 year from the departure date', async({ page }) => {
        await expect(page.getByLabel('Departing')).toBeVisible();
        await expect(page.getByLabel('Returning')).toBeVisible();

        //selecting july option
        await page.getByLabel('Departing').selectOption('0')
        await page.getByLabel('Returning').selectOption('1')
        await expect(page.getByRole('button', { name: 'Search' })).toBeVisible()
        await page.getByRole('button', { name: 'Search' }).click()

        // asserting the error message to be visible
        await expect(page.getByText('Unfortunately, this schedule')).toBeVisible()

    });

    test('User tries to book the same date for departing and returning fields', async({ page }) => {
        await expect(page.getByLabel('Departing')).toBeVisible();
        await expect(page.getByLabel('Returning')).toBeVisible();

        //selecting july option
        await page.getByLabel('Departing').selectOption('0')
        await page.getByLabel('Returning').selectOption('0')
        await expect(page.getByRole('button', { name: 'Search' })).toBeVisible()
        await page.getByRole('button', { name: 'Search' }).click()

        // asserting the error message to be visible
        await expect(page.getByText('Unfortunately, this schedule')).toBeVisible()

    });






});