
interface Props{
    children:string;
    color?:'primary' |'secondary' | 'danger' ;
    onClick:() => void; //this is a function in react
}

const Button = ({children, onClick, color='primary'}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button