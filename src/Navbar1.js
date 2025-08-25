import { Component } from 'react'
import styled from 'styled-components';

class Navbar extends Component {

    render(){
        return(
            <>
            <NavbarContainer>
                <div className='title'>Movie-App</div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png" alt="logo" className="logo" />
                    <span className='cart-count'>4</span>
                </div>
            </NavbarContainer>
            </>
        )
    }

}

export default Navbar;