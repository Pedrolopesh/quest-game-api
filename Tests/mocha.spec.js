const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

// const app = require('../src/index')
// const request = chai.request(app)
const request = chai.request("http://localhost:3333")

const expect = chai.expect

const globalConfig = {
    player:'605961d59ab64256dcf1dbaf',
}

const testConfig = {
    studentName: "Unit Test Student numeber: "+ Math.floor(Math.random() * 100),
    testName: "Test: "+ Math.floor(Math.random() * 5),

    questionBodyRequest:{
        title:"Quest Collection: "+ Math.floor(Math.random() * 10),
        player: globalConfig.test_id,
        questionLevel: 1,
        questions:[
            {
                id:1, 
                questionDescription:"qual o resultado da expressão matématica: 1 + 1",
                alternatives:[
                    {option:"A", text:"resultado é 1"},
                    {option:"B", text:"resultado é 2"},
                    {option:"C", text:"resultado é 3"},
                    {option:"D", text:"resultado é 4"},
                    {option:"E", text:"resultado é 5"}
                ],
                correctAlternative:"B",
                playerNickname:'',
                points: 100
            },
        ]
    },
}

describe('Server', function(){

    // it('Creating new student', function(){
    //     expect(1).to.equals(1)
    //     // console.log("teste")
    // })

    it('Must return Server is runing', function(done){
        request.get('/api/sever/status').end( async function(err, resp){
            console.log(resp.body)
            expect(resp.body.success).to.equals(true);
            // expect(resp.body.message).to.equals('Server is runing');
            done();
        })
    })


})


// describe('Tests for Student model', function(){
//     it('Must create student', function(done){
//         request.post('/api/create/student')
//             .send({ name: testConfig.studentName})
//             .end( function(err, resp){
//             console.log(resp.body)
//             expect(resp.body.success).to.equals(true);
//             done();
//         })
//     })

//     // it('Should get all created Students', function(done){
//     //     request.get('/api/findAll/students')   
//     //         .end( function(err, resp){
//     //         console.log(resp.body)
//     //         expect(resp.body.success).to.equals(true);
//     //         done();
//     //     })
//     // })

// })

