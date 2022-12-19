import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // 가장 가까운 provider가 컨텍스트를 공급해줌
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  // 객체의 특정 속성만 의존성에 주입하기 위하여 분해 구조 할당 사용
  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    // 애니메이션 종료되면 클래스를 다시 삭제
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // 클린업 함수 반환
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
