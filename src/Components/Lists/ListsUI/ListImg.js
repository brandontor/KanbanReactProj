import './ListImg.css'
import alliance from './ImgAssets/alliance.jpg'
import horde from './ImgAssets/horde.jpg'
import spiderman from './ImgAssets/spiderman.png'
import stormtrooper from './ImgAssets/stormtrooper.jpg'
import akuma from './ImgAssets/akuma.jpg'
import lotr from './ImgAssets/lotr.jpg'
import dune from './ImgAssets/dune.jpg'
import React from 'react'


const ListImg = React.memo(() => {

    const availableImgs = [alliance, horde, spiderman, stormtrooper, akuma, lotr, dune];
    let randomNumber = Math.floor(Math.random() * availableImgs.length)
    let randomImg = availableImgs[randomNumber]

    const addImageHandler = () => {
        
    }

    return (
        <div id='list-img'>
            <img src={randomImg}></img>
        </div>
    );
});

export default ListImg