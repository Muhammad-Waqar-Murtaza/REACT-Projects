import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <div>
            <header className='header'>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.clickHandle}/>
            </header>
            <div className='main-image'>
                <img src={mealsImage} alt="a table full of dishes" />
            </div>
        </div>
        
    );
}
 
export default Header;