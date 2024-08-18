import header from '../images/header.svg';
import '../index.css';

function Header(props){
        return (<div id="cabeza">
                <section id="country" translate='no'>antonella QUIZ</section>
                { props.value && <aside id="aventura"> <img src={header} alt='' height="145" width="160"/> </aside>}
            </div>
        )
}

export default Header;
