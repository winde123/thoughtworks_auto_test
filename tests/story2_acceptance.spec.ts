import { test, expect } from '@playwright/test';
import path from 'path';
import { makeid } from '../mocks/promocode_mock';

//set up procedure
test.beforeEach('Setup', async({page}) => {

    await page.addInitScript({path: path.resolve(__dirname,'../mocks/promocode_mock.js')})
    await page.goto('EdwinWan');
});

test.describe('Story #2', () => {
    test('Straight through flow for promo code', async ({ page }) =>{
    const promo_str = makeid();
    await expect(page.getByLabel('Departing')).toBeVisible();
    await expect(page.getByLabel('Returning')).toBeVisible();
    //selecting july  as option
    await page.getByLabel('Departing').selectOption('0')
    // selecting december(2yrs from now) as an option
    await page.getByLabel('Returning').selectOption('5')
    await page.getByRole('textbox', { name: 'Promotional Code' }).fill(promo_str)
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible()
    await page.getByRole('button', { name: 'Search' }).click()
    await expect(page.locator('p.promo_code')).toContainText('Promotional code')








    });

    test('negative  through flow for promo code', async ({ page }) =>{
        //const promo_str = makeid();
        await expect(page.getByLabel('Departing')).toBeVisible();
        await expect(page.getByLabel('Returning')).toBeVisible();
        //selecting july  as option
        await page.getByLabel('Departing').selectOption('0')
        // selecting december(2yrs from now) as an option
        await page.getByLabel('Returning').selectOption('5')
        await page.getByRole('textbox', { name: 'Promotional Code' }).fill('AB9-AAA-999')
        await expect(page.getByRole('button', { name: 'Search' })).toBeVisible()
        await page.getByRole('button', { name: 'Search' }).click()
        await expect(page.locator('p.promo_code')).toContainText('is not valid')
    
    
    
    
    
    
    
    
    });






});

