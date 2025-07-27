import {test, expect, request} from '@playwright/test'

    const baseURL = 'https://reqres.in/api'

test("POST API test", async({request}) => {

    const response = await request.post(`${baseURL}/users`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
         },
        data: {
            id: 1012,
            email: 'abc@gmail.com',
            first_name: 'sam',
            last_name: 'smith'
        },
    })
    const responseBody = JSON.parse(await response.text())
    await expect(responseBody.id).toBe(1012)
    console.log(responseBody)

})

test.only("POST API Login test", async({request})=> {

    const response = await request.post(`${baseURL}/login`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
         },
         data: {
            email: 'abc@abs.com',
            //password: 'securepassword',
         },        
    })

    const responseBody = JSON.parse(await response.text())
    await expect(responseBody.error).toBe('Missing password')
    console.log(responseBody)
})