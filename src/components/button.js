import '../index.css'


function Button(props){
     return(<button type='button' id={props.id} onClick={props.onClick}>
                        <span>{props.point}</span> <p className='answers'>{props.response}</p> <i className={props.icon}></i>
            </button>)
}
export default Button;