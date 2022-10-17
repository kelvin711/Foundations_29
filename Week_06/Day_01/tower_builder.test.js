let towerBuilder = require("./tower_builder");


//describing our test
describe("build tower function", () => {
    //our test go here
    it("is a function", () => {
       expect(typeof towerBuilder).toEqual('function')
    })

    test("returns a formatted pyramid of three", () => {
        expect(towerBuilder(3)).toEqual([ '  *  ', ' *** ', '*****' ])
    })
})