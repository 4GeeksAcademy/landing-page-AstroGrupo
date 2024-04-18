import './Team.css';
import { Teammate } from './Teammate';
import  Albert  from '../../assets/albert.png';
import  Maria  from '../../assets/maria.png';
import  Cristina  from '../../assets/cristina.png';
import Andre from '../../assets/andre.jpg';
export const Team = () => {
    
    const team = [{name:"María SF", image:Maria, rrss:['#','https://github.com/DexpinBe']}, {name:"Andre Cortes", image:Andre, rrss:['#','https://github.com/andrecortes1997']},{name:"Cristina Benítez", image:Cristina, rrss:['#','https://github.com/Cristinacbm5']},{name:"Alberto Limón", image:'', rrss:['#','https://github.com/albertolimongithub']}, {name:"Albert Jané", image:Albert, rrss:['https://www.linkedin.com/in/albert-jan%C3%A9-medr%C3%A0n-1016132b8/','https://github.com/R3dH4wk44']} ];
    const teamList = team.map(member => {
        return (<Teammate name={member.name} image={member.image} rrss={member.rrss} />);
    })
    return (
        <>
            <div className="team__container">

                <h2 className='team__title'>Meet Our Team</h2>
                
                <p className='team__paragraph'>We are a team of space passionates who are willing to take this project one step furder</p>
                <div className="cards__container">
                    {teamList}
                </div>
                <div className='team__container__button'>
                    <a href="#" className='cards__contactus__button'>Contact Us!</a>                   
                </div>
            </div>
        </>
    );
}
