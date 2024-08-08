import { test, expect } from '@playwright/test';
import { log } from 'console';


test('Get API test', async ({ request }) => {

    const response = await request.post("https://reqres.in/api/users",{
        data: {
        "name": "morpheus",
        "job": "leader"
    }

})

    expect(response.status()).toBe(200);
    console.log(await response.json());




});