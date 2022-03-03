import Header from './header';
import '../index.css';
import win from '../images/win.svg'

function Result(props){
     return(
        <div id='contenedor'>
          <div id='cabeza'>
            <Header value={false}/>
          </div>
        <div id='cuerpo'>
            <section id='preguntas'>
               <img id="win" src={win} alt='' height="100" width="200" />
               <p id="result">Results</p><p id='got'>you got <span id="correcta">{props.value}</span>correct answer(s)</p>
               <button id="try" type="button" onClick={props.onClick}>Try again</button>
            </section>
        </div>
        </div>
      )
      }
export default Result