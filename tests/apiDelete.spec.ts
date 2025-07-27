import {test, expect, request} from '@playwright/test'

    const baseURL = 'https://reqres.in/api'

    test("PUT API request", async({request}) => {

        const reponse = await request.delete(`${baseURL}/users/2`,{
            headers: {
            'x-api-key': 'reqres-free-v1'
         },
        })
        await expect(reponse.status()).toBe(204) // Expecting a 204 No Content status for successful deletion

    }) 