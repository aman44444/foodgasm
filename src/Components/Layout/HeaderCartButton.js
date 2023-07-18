import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
import { useContext,useEffect,useState} from 'react'
import CartContext from "../../store/Cart-context"

const HeaderCartButton =( props) => {
  const [btnIsHighLighted,setBtnHighLighted] = useState(false);
    const cartCtx = useContext(CartContext)

const {items} = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((currNumber,item) => {
    return currNumber + item.amount;
  },0);
  
  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump: ''}`;

  useEffect(()=>{
    if(items.length===0){
      return;
    }

    
    setBtnHighLighted(true);

    const timer = setTimeout(()=>{
      setBtnHighLighted(false)
    },300)

    return () =>{
      clearTimeout(timer);
    }
  },[items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your cart
            </span>
            <span className={classes.badge}>
             {numberOfCartItems}
            </span>
    </button>
    )
}

export default  HeaderCartButton;