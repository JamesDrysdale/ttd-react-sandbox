import mapChooser from '../mapChooser'

describe("mapChooser", function() {
    it("returns an image name based on input passed into it,", function (){
        let expected = "portland.png";
        let actual = mapChooser("portland")
        expect(actual).toEqual(expected);
    })

    it("returns a default image name when no input passed into it,", function (){
        let expected = "none.png";
        let actual = mapChooser("")
        expect(actual).toEqual(expected);
    })
});