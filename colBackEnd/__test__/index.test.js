const request = require('supertest')
const app = require('../app.js')

describe("POST /users/register", () => {
    test("ok", async () => {
        const res = await request(app)
            .post('/users/register')
            .send({
                "uname": "patil",
                "email": "patil@gmail.com",
                "password": "patil@gmail.com",
                "role": "user"
            })
        console.log(res)
        expect(res.statusCode).toEqual(200)
    })


    test("login user", async () => {
        const res = await request(app)
            .post('/users/login')
            .send({
                "email": "patil@gmail.com",
                "password": "patil@gmail.com"
            })
        console.log(res)
        expect(res.statusCode).toEqual(200)

    })
    test(" GET the details ", async () => {
        const res = await request(app)
            .get('/users/users')
        console.log(res)
        expect(res.statusCode).toEqual(200)
    })

    //post the samples
    test('POST', async () => {
        const res = await request(app)
            .post('/users/postsample')
            .send({
                "date": "2512012",
                "pname": "mythri",
                "email": "mythri@gmial.com",
                "sampleId": 112,
                "haemotology": { "name": "lalu", "totalCount": "34g/dt", "haemoglobin": "40/Cmm", "neutrophlips": "65%", "lymphocytes": "5%", "EsoinPhilies": "55%", "monocytes": "65%", "basophills": "65%", "RBC": "123ml/Cmm", "PCv": "65%" },
                "thyroid": { "TRI IODO Thyroian": "123g/dt", "Thyroxine": "123g/dt", "thyroid": "123g/dt" },
                "glucometry": { "Fastting Blood Sugar": "110g/dt", "post pandial Blod sugar": "5/Cmm", "HbA1c": "10dl/Cmm", "Calcium": "333g/dt" }

            })

        console.log(res)
        expect(res.statusCode).toEqual(200)
    })

    test("GET the samples", async () => {
        const getData = await request(app)
            .get('/users/getsample')
        console.log(getData)
        expect(getData.statusCode).toEqual(200)



    })

})

