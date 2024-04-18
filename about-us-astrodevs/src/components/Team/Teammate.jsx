import './Teammate.css'

export const Teammate = ({name,image})=> {
    console.log(image);
    return (
        <>
            <div className='member__container'>
                <img className='member__image' src={image} alt="Team Member" />
                <h2 className='member__name'>{name}</h2>
            </div>
            
        </>
    )
}