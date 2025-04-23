import { test, expect } from '@playwright/test';

//set up procedure
test.beforeEach('Setup', async({page}) => {
  await page.goto('EdwinWan');
});

test.describe('Story #1',() =>{

  test('There should be departure and return fields on a search form.', async ({ page }) => {
    //await page.goto('examples/react/dist/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Mars Airlines: Home/);
    // Expect header to have the correct value
    await expect(page.getByRole('heading', { name: 'Welcome to MarsAir!' })).toHaveText('Welcome to MarsAir!');
    // checking that deaparture and arrival fields are visible
    await expect(page.getByLabel('Departing')).toBeVisible();
    await expect(page.getByLabel('Returning')).toBeVisible();
    // checking if search button is visble
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible()


  });

  test('Flights leave every six months, in July and December, both ways ', async ({ page })=> {
    
    
    //doing an assertion for the values in the drop down for the departure field
    await expect(page.getByLabel('Departing')).toBeVisible();

    await expect(page.locator('#departing > option')).toHaveText(['Select...','July','December','July (next year)','December (next year)','July (two years from now)','December (two years from now)'])

    //doing an assertion for the values in the drop down for returning field

    await expect(page.getByLabel('Returning')).toBeVisible();
    await expect(page.locator('#returning > option')).toHaveText(['Select...','July','December','July (next year)','December (next year)','July (two years from now)','December (two years from now)'])


  });

  test('Straight through for Trips for the next two years should be searchable.', async({ page }) =>{
    // doing a valid booking and asserting for success message
    await expect(page.getByLabel('Departing')).toBeVisible();
    await expect(page.getByLabel('Returning')).toBeVisible();
    //selecting july as option
    await page.getByLabel('Departing').selectOption('0')
    // selecting december(2yrs from now) as an option
    await page.getByLabel('Returning').selectOption('5')
    await page.getByRole('button', { name: 'Search' }).click()

    // asserting for success message
    await expect(page.getByText('Seats available!')).toBeVisible()
    await expect(page.getByText('Call now on 0800 MARSAIR to')).toBeVisible()
  });

  test('negative flow for Trips for the next two years should be searchable.', async({ page }) =>{
    // doing a valid booking and asserting for success message
    await expect(page.getByLabel('Departing')).toBeVisible();
    await expect(page.getByLabel('Returning')).toBeVisible();
    //selecting december as option
    await page.getByLabel('Departing').selectOption('1')
    // selecting december(2yrs from now) as an option
    await page.getByLabel('Returning').selectOption('5')
    await page.getByRole('button', { name: 'Search' }).click()

    // asserting for failure message
    await expect(page.getByText('Sorry, there are no more')).toBeVisible()
  });







});
