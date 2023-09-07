import Logo from "../../assets/logo.svg"
import {StyledHeader} from "./header.js"

export const Header = () =>{
    return(
        <StyledHeader>
            <span>
                 <img src={Logo} alt="Logo NuKenzie" />
            </span>
        </StyledHeader>
    )
}