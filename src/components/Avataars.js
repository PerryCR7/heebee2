import Avatar from 'avataaars';
import "../css/bigCard.css"
const Avataars = () => {
    function randomInt(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
        
    }
    const mouth = ['Smile','Twinkle', 'Tongue', 'Default'];
    const tops = ['Hijab', 'Turban', 'WinterHat1', 'LongHairBigHair', 'LongHairBob', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairTheCaesar']
    const skins = ['Tanned', 'Pale', 'Light']
    const bgColors=["#E5A3B0","#EC7D34","#B487F9",'#FE91BA',"#FED95D","#F5845A"];
  
    return (
        <div className='avtar' style={{ display: 'inline-block', backgroundColor:`${bgColors[randomInt(0,5)]}`, borderRadius: "50%", padding: "3px",height:"60px",width:"60px" }}>
            <Avatar
                style={{ width: '50px', height: '50px' ,margin:"auto"}}
                avatarStyle='Transparent'
                topType={tops[randomInt(0,24)]}
                accessoriesType='Blank'
                hairColor='Brown'
                facialHairType='Blank'
                clotheType='Hoodie'
                clotheColor='Blue03'
                eyeType='Default'
                eyebrowType='Default'
                mouthType={mouth[randomInt(0,3)]}
                skinColor={skins[randomInt(0,2)]} />
        </div>


    );
}
export default Avataars; 