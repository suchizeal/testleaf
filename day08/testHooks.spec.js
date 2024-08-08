import {test,expect} from '@playwright/test'


// test.beforeEach(async()=>{
//     console.log('This is before Each')
// })
// test.afterEach(async()=>{
//     console.log('This is after EAch')
// })
// test.beforeAll(async()=>{
//     console.log('This is before All')
// })
// test.afterAll(async()=>{
//     console.log('This is after All')
// })

test.describe('odd@reg', ()=>{
    test('Test1@sanity', async({page})=>{

        console.log('This is test 1')
    })
    test('Test3@reg', async({page})=>{

        console.log('This is test 3')
    })

})
test.describe('even@sanity', ()=>{


test('Test2@sanity', async({page})=>{

    console.log('This is test 2')
})

test('Test4@reg', async({page})=>{

    console.log('This is test 4')
})
})