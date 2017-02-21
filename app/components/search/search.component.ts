import { Component } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../../Artist";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ArtistComponent} from "../artist/artist.component";


@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: `search.component.html`,
    providers:[SpotifyService],
    directives:[ROUTER_DIRECTIVES]
})
export class SearchComponent {

    searchStr:string;
    searchRes:Artist[];
    constructor(private _spotifyService:SpotifyService){

    }


    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res=>{
                console.log();
                this.searchRes=res.artists.items;
            })
    }


}
