import './HelloPerson.css'
import Button from './Button';

function HelloPerson({nome, user, foto }){
    return(
        <div className="container">

            <p className="perfil">
            <img
             className='img'
              src={foto} 
              alt={nome}
              width ="120px"
              height="120px"
            /> 
            {nome}
            <p className="editUser">
            {user}   
            </p>
            <Button />

            </p>
        </div>
    );
}
export default HelloPerson