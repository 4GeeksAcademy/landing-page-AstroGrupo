import './Form.css';
import { Title } from './title/Title';
import { Input } from './info_input/Input';

 export const Form = () => {

    return (
        <>
            <div className="form_Background" >
                <Title />
                <Input/>
            </div>
        </>
    );
};

