class Player {

    play (song){
        this.currentlyPlayingSong = song;        
               this.isPlaying = true;
    };
    pause(){
        this.isPlaying = false;
    };
    resume(){
        if(this.isPlaying){
            throw new Error("Song is already playing");
        }
        this.isPlaying = true;
    }
    makeFavourite (){
        this.currentlyPlayingSong.persistFavoriteStatus(true)
    };
}
module.exports.Player = Player

class Song{

    persistFavoriteStatus(value){
        console.log('This is the real mathod')
        // throw new Error("Not Yet Implemented. ")
        return true
    };

};

module.exports.Song = Song;