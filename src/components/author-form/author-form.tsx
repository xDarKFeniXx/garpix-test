import React, {useState} from 'react';
import {Button, Input} from "antd";
import {IAuthor, IAuthorDTO} from "../../types/author.interface";
import {useHistory} from "react-router-dom";
interface IAuthorFormProps {
    author?: IAuthor,
    onSubmitCB:(newAuthor:IAuthorDTO)=>void
}
export const AuthorForm:React.FC<IAuthorFormProps> = ({author, onSubmitCB}) => {

    const history=useHistory()
    const [firstName, setFirstName] = useState(author?.first_name||'')
    const [lastName, setLastName] = useState(author?.last_name||'')
    const handleChangeFirstName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFirstName(e.target.value)
    }
    const handleChangeLastName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLastName(e.target.value)
    }
    const handleSubmit=()=>{
        onSubmitCB({first_name:firstName, last_name:lastName, id: author?.id||undefined })
        history.push('/authors')
    }
    return (
        <form>
            <Input placeholder='First Name' value={firstName} onChange={handleChangeFirstName}/>
            <Input placeholder='Last Name' value={lastName} onChange={handleChangeLastName}/>
            <Button onClick={handleSubmit}>Save</Button>
        </form>
    );
};

