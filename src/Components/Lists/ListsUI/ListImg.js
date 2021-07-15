import './ListImg.css'
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
        </div>
    );
};

export default ListImg