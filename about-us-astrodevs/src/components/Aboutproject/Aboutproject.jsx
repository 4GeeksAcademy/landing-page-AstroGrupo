import './Aboutproject.css';

const imagen = "https://i.ibb.co/Sn4V21q/original-34b8113cd3bddb2122c3301f830ce41a.png";

    export const Aboutproject = () => {
        return (
            <div className="welcome">
                <h1 className="titleProject">Welcome to space</h1>
                <img src={imagen} alt="astronaut" className="Astro"/>
                <h2 className="aboutTheProject">About the project</h2>
                <p className="explanation">We have created this page because we are a group of people who are passionate about space and we wanted to provide a tool for anyone who is interested to follow upcoming rocket launches. If you have any questions, please do not hesitate to contact us and we will be glad to assist you.</p>
            </div>
             
        );
    };