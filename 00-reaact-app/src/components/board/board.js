import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Gag Grouper',
        img: 'img/250x180/Gag_Grouper.jpeg',
        clicked: false
    },
    {
        name: 'Grasby Grouper',
        img: 'img/250x180/Grasby_Grouper.jpeg',
        clicked: false
    },
    {
        name: 'Gulf Flounder',
        img: 'img/250x180/Gulf_Flounder.jpeg',
        clicked: false
    },
    {
        name: 'Mahi Mahi',
        img: 'img/250x180/Mahi_Mahi.jpg',
        clicked: false
    },
    {
        name: 'Nassau Grouper',
        img: 'img/250x180/Nassau_Grouper.jpg',
        clicked: false
    },
    {
        name: 'Queen Snapper',
        img: 'img/250x180/Queen_Snapper.jpg',
        clicked: false
    },
    {
        name: 'Rainbow Runner',
        img: 'img/250x180/Rainbow_Runner.jpg',
        clicked: false
    },
    {
        name: 'Red Grouper',
        img: 'img/250x180/Red_Grouper.jpg',
        clicked: false
    },
    {
        name: 'Red Snapper',
        img: 'img/250x180/Red_Snapper.jpg',
        clicked: false
    },
    {
        name: 'Redfish',
        img: 'img/250x180/Redfish.jpg',
        clicked: false
    },
    {
        name: 'Scamp Grouper',
        img: 'img/250x180/Scamp_Grouper.jpg',
        clicked: false
    },
    {
        name: 'Snowy Grouper',
        img: 'img/250x180/Snowy_Grouper.jpg',
        clicked: false
    },
    {
        name: 'Southern Flounder',
        img: 'img/250x180/Southern_Flounder.jpg',
        clicked: false
    },
    {
        name: 'Spanish Mackeral',
        img: 'img/250x180/Spanish_Mackeral.jpg',
        clicked: false
    },
    {
        name: 'Tiger Grouper',
        img: 'img/250x180/Tiger_Grouper.jpg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every NBA Player once. Once you click a player the grid will shuffle.<br/>Try not to click the same NBA Player twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}