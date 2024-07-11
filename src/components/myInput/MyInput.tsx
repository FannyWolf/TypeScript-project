import "./myInput.css";

interface IMyInputProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
}

const MyInput: React.FC<IMyInputProps> = ({
  label, name, type, placeholder
}) => {

   return (
    <>
      <label className='label'>{label}</label>
      <input 
        type={type}
        name={name} 
        placeholder={placeholder} 
        />
    </>
  );
}

export default MyInput;

 

