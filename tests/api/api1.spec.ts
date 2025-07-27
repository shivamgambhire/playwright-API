import {test, expect} from '@playwright/test'

test.describe('API Tests', () => {

    const baseURL = 'https://reqres.in/api'
    
    test('valid scenario simple get api request', async({request}) => {

        const response = await request.get(`${baseURL}/users/3` ,{ headers: {
            'x-api-key': 'reqres-free-v1'
         }})

        await expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())      //get resopnse body and parse it into JSON
        console.log(responseBody)

        //validate the response body
        await expect(responseBody.data.id).toBe(3)
        await expect(responseBody.data.first_name).toBe('Emma')
        await expect(responseBody.data.email).toBeTruthy()
    })

    test('invalid scenario simple get api request', async({request}) => {

        const response = await request.get(`${baseURL}/users/2asd5456451` ,{ headers: {
            'x-api-key': 'reqres-free-v1'
         }})

        await expect(response.status()).toBe(404)

    })

})