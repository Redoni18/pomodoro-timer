
const Button = ({title, customClass, callbackFunc}) => {
    return (
        <button className={customClass} onClick={callbackFunc}>{title}</button>
    )
}

export default Button;