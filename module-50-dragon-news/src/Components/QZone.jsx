import swimmingImage from '../assets/swimming.png';
import playgroundImage from '../assets/playground.png';
import classImage from '../assets/class.png';

const QZone = () => {
    return (
        <div className=" mt-5">
            <p className=" text-lg font-semibold">Q-Zone</p>
            <div className=' bg-gray-200 p-3 rounded-xl mt-2 space-y-3 '>
                <figure>
                    <img src={swimmingImage} alt="" />
                </figure>
                <figure>
                    <img src={classImage} alt="" />
                </figure>
                <figure>
                    <img src={playgroundImage} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default QZone;