import React,{useEffect,useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ClassForm({handleChange,userCharacter}) {
    const [classes,setClasses] = useState([]);

    useEffect(()=> {
        axios.get('https://eldenring.fanapis.com/api/classes').then((data)=>{
            console.log(data);
            setClasses(data.data.data)
        })

    },[])
    return (
        <div>
            <Form.Control as='select' onChange={handleChange} name='charClass' value={userCharacter.charClass}>
            <option>Starting Class</option>
                {
                    classes.map((classItem,index)=>{
                    return <option value={classItem.name} key = {index}>{classItem.name}</option>
                    })
                }
                {/* <option>Starting Class</option>
                <option value='Hero'>Hero</option>
                <option value='Bandit'>Bandit</option>
                <option value='Astrologer'>Astrologer</option>
                <option value='Warrior'>Warrior</option>
                <option value='Prisoner'>Prisoner</option>
                <option value='Confessor'>Confessor</option>
                <option value='Wretch'>Wretch</option>
                <option value='Vagabond'>Vagabond</option>
                <option value='Prophet'>Prophet</option>
                <option value='Samuri'>Samuri</option> */}
                </Form.Control>
        </div>
    );
}

export default ClassForm;