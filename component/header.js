const Header = () => (
    

    <div className="header">
        
        <div className="humberger__menu__overlay"></div>
          <div className="humberger__menu__wrapper">
            <div className="humberger__menu__logo">
                <a href="#"><img src="img/sabsewa.png"  alt="logo"/></a>
            </div>
            <div className="humberger__menu__cart">
                <ul>
                    <li><a href="#"><i className="fa fa-heart"></i><span>1</span></a></li>
                    <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    <button type="button" className="btn btn-primary">hi</button>
                </ul>
                <div className="header__cart__price">Total: <span>Rs. 1500</span></div>
            </div>
        </div>
    </div>
);
export default Header;