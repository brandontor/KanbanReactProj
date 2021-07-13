import './ListImg.css'
<<<<<<< HEAD
import alliance from './ImgAssets/alliance.jpg'
import horde from './ImgAssets/horde.jpg'
import spiderman from './ImgAssets/spiderman.png'
import stormtrooper from './ImgAssets/stormtrooper.jpg'

const ListImg = () => {

    const availableImgs = [alliance, horde, spiderman, stormtrooper];
    let randomNumber = Math.floor(Math.random() * availableImgs.length)
    let randomImg = availableImgs[randomNumber]

    return (
        <div className='list-img'>
            <img src={randomImg}></img>
=======

const ListImg = () => {
    return (
        <div className='list-img'>
            
>>>>>>> 6a8d015 (dom tree restructuring, added some static ele)
        </div>
    );
};

export default ListImg