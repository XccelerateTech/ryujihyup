let Player = require('./app').Player;

let Song = require('./app').Song;



let player;

let song;

beforeAll(()=> {

    player = new Player();

    song = new Song();

}) 
describe("Players should be able to play songs", ()=>{
// test("tells the current song if the user has made it a favorite using spy", ()=> {

//     const spySongStatus = jest.spyOn(song, 'persistFavoriteStatus').mockImplementation(()=>{console.log('Mocked persist')});

//     player.play(song);
//     player.makeFavourite();

// expect(spySongStatus).toHaveBeenCalled()

// expect(spySongStatus).toHaveBeenCalledWith(true);

// })
// test("tells the current song if the user has made it a favorite using mock", ()=> {

//     const mockPlayerFavorite = jest.spyOn(player, 'makeFavourite');

//     const mockSongStatus = jest.spyOn(song, 'persistFavoriteStatus');

 

//     mockPlayerFavorite.mockImplementation(()=> "done")

//     expect(player.makeFavourite()).toEqual("done")

  

//     mockSongStatus.mockImplementation(()=> true)

//     expect(song.persistFavoriteStatus()).toBeTruthy()

 

// });
test("tells the current song if the user has made it a favorite using mocks then delegates the method back to original     functions", ()=> {

    const mockPlayerFavorite = jest.spyOn(player, 'makeFavourite');

    const mockSongStatus = jest.spyOn(song, 'persistFavoriteStatus');



    mockPlayerFavorite.mockImplementation(()=> "done")

        expect(player.makeFavourite()).toEqual("done")



    mockSongStatus.mockImplementation(()=> true)

        expect(song.persistFavoriteStatus()).toBeTruthy()



   jest.restoreAllMocks();



    player.play(song);

    player.makeFavourite();

    expect(player.currentlyPlayingSong).toEqual(song);

    expect(mockPlayerFavorite).toHaveBeenCalled();

    expect(song.persistFavoriteStatus()).toBe(true);

  });

});