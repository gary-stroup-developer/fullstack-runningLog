import forestGump from '../images/forestGump.jpeg';
import jump from '../images/jump.jpeg';
import mtns from '../images/mountains.jpeg';
import mtns2 from '../images/mountains-2.jpeg';
import edge from '../images/onTheEdge.jpeg';
import topOfMtn from '../images/topOfMtn.jpeg';


export const MotivationImage = () => {
    const img = [
        forestGump,
        jump,
        mtns,
        edge,
        topOfMtn,
        mtns2
    ];

    const length = img.length;
    let num = Math.floor(Math.random()*length);
    const src = img[num];
    return <img style={{width: "80%", borderRadius: "15px"}} src={src} alt="motivational image for quote" />;
}