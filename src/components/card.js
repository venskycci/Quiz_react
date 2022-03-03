import Button from "./button";
import '../index.css';


function Card(props){
    
        return(
                <div id='cuerpo'>
                    <section id='preguntas'>
                        <p className='question'>{props.question}</p>
                        <Button point='A' id={props.id[0]} icon={props.icon[0]} response={props.responses[0]} onClick={props.handle.butt_0} />
                        <Button point='B' id={props.id[1]} icon={props.icon[1]} response={props.responses[1]} onClick={props.handle.butt_1}/>
                        <Button point='C' id={props.id[2]} icon={props.icon[2]} response={props.responses[2]} onClick={props.handle.butt_2}/>
                        <Button point='D' id={props.id[3]} icon={props.icon[3]} response={props.responses[3]} onClick={props.handle.butt_3}/>
                        {props.show && <button id='nextButton' onClick={props.handle.next}>Next</button>}
                    </section>
                </div>
        )
}
export default Card