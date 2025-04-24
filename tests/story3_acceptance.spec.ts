import { test, expect } from '@playwright/test';

//set up procedure
test.beforeEach('Setup', async({page}) => {
  await page.goto('EdwinWan');
});

test.describe('Story #3', ()=>{
    test('Checking the functionality of the MarsAir logo link', async ({ page }) =>{
        await expect(page.getByRole('link', { name: 'MarsAir' })).toBeVisible()
        //checking whether the link has a valid href value
        await expect(page.getByRole('link', { name: 'MarsAir' })).toHaveAttribute('href','/EdwinWan')
        await page.getByRole('link', { name: 'MarsAir' }).click()
        await page.waitForURL('**/EdwinWan')
    });

    test('Checking the visibility of CTA header', async ({ page }) =>{
        await expect(page.getByRole('heading', { name: 'Book a ticket to the red' })).toBeVisible()
        await expect(page.getByRole('heading', { name: 'Book a ticket to the red' })).toContainText('Book a ticket to the red planet now!')
        
    });

    test('Checking the functionality of the CTA header link', async ({ page }) =>{
        await expect(page.getByRole('heading', { name: 'Book a ticket to the red' })).toBeVisible()
        //checking whether the link has a valid href value
        await expect(page.getByRole('heading', { name: 'Book a ticket to the red' })).toHaveAttribute('href','/EdwinWan')
        //await expect(page.getByRole('heading', { name: 'Book a ticket to the red' })).click()
        //await page.waitForURL('**/EdwinWan')
    });




});