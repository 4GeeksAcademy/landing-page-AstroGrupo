import './Team.css';
import { Teammate } from './Teammate';
import  Albert  from '../../assets/albert.png';
import  Maria  from '../../assets/maria.png';
import  Cristina  from '../../assets/cristina.png';
export const Team = () => {
    
    const team = [{name:"María SF", image:Maria}, {name:"Andre Cortes", image:''},{name:"Cristina Benítez", image:Cristina},{name:"Alberto Limón", image:''}, {name:"Albert Jané", image:Albert} ];
    const teamList = team.map(member => {
        return (<Teammate name={member.name} image={member.image} />);
    })
    return (
        <>
            <div className="team__container">

                <h2 className='team__title'>Meet Our Team</h2>
                
                <p className='team__paragraph'>We are a team of Space passionates who are willing to take this project one step furder</p>
                <div className="cards__container">
                    {teamList}
                </div>
            </div>
        </>
    );
}
