let Song = require('./app');

beforeAll(()=>{
    song1 = new Song("Robinson", "Hachimitsu", "Spitz");
    song2 = new Song("Don't say goodbye", "Love Delight", "Davichi");
    song3 = new Song("Love the way you lie", "Recovery", "Eminem");
    song4 = new Song("The megan fox one", "Recovery", "Eminem");
    duplicatedSong = new Song("The megan fox one", "Recovery", "Eminem");

});

// describe("The song information", ()=>{
//     test("name, album and author, song1", () => {
//         expect(song1.getDescription()).toEqual("The name of this song is Robinson and it is from the album Hachimitsu. It was written by Spitz.")
//     });
//     test("name, album and author, song2", () => {
//         expect(song2.getDescription()).toEqual("The name of this song is Don't say goodbye and it is from the album Love Delight. It was written by Davichi.")
//     });
//     test('name, album and author, song3', () => {
//         expect(song3.getDescription()).toEqual("The name of this song is Love the way you lie and it is from the album Recovery. It was written by Eminem.")
//     });
// });

// describe("The song is same or not", () => {
//     test("The album match or not", ()=> {
//         expect(song1.isInSameAlbum(song3)).toBeTruthy();
//     });
//     test("The album match or not", ()=> {
//         expect(song2.isInSameAlbum(song3)).toBeFalsy();
//     });
// });

// beforeEach(()=>{
//     expect.extend({
//         toBeInTheSameAlbumAs(song, song1){
//             const pass = ( song.album === song1.album)
//             if(pass){
//                 return {
//                     message: () =>
//                     `expected ${song.album} to equal ${song1.album}`,
//                     pass: true,
//                 };
//             } else {
//                 return {
//                     message: () =>
//                     `expected ${song.album} to equal ${song1.album} and I didn't get it... it got ${song1.album}`,
//                     pass: false,
//                 };
//             }
//         },
//     });
// })

// describe("same or not", () => {
//     test("same or not", () => {
//         expect(song3).toBeInTheSameAlbumAs(song3, song4);

//     })
//     test("same or not", () => {
//         expect(song3).toBeInTheSameAlbumAs(song1, song3);
        
//     })
// });

describe('We can check to see if two objects which have the same values are different objects', ()=>{

    test("should be different song even if the attributes are the same",function(){
      //the next three lines explain what we are testing - technically not part of the test.
      // arr1 is an array, with the values, 1,2,3 and an object - arr2 is actually assigned arr1 so that it references the values.
      let arr1 = [1,2,3,{a:1}];
      let arr2 = arr1;
      console.log(arr2)
      expect(arr1).toBe(arr2);
      expect(song1).not.toBe(duplicatedSong);
      expect(song1).toBe(song1);
      console.log(song1)
  });
  
  test("should be equal to the duplicated song as the attributes are the same",function(){
        //the next three lines explain what we are testing - technically not part of the test.
        // here arr1 and arr2 are the exact same arrays, but different instances of the objects. 
      let arr1 = [1,2,3,{a:1}];
      let arr2 = [1,2,3,{a:1}];
      expect(arr1).toEqual(arr2);
      expect(song4).toEqual(duplicatedSong);
      expect(song4).toEqual(song4);
  
      // the point of ex H is to show you the difference between the matchers toBe and toEqual.
  });
  })