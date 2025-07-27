import {test, expect, request} from '@playwright/test'

    const baseURL = 'https://reqres.in/api'

    test("PUT API request", async({request}) => {

        const response = await request.put(`${baseURL}/users/2`, {
              headers: {
            'x-api-key': 'reqres-free-v1'
         },
         data:{
            name: "newNAme",
            job: "newJOB"

         }
        })

        const responceBody = JSON.parse(await response.text())
        await expect(responceBody.name).toBe('newNAme')
        await expect(responceBody.job).toBe('newJOB')
        console.log(responceBody)
    })