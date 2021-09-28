import {Container} from "./styles";
const Button = ({children, onClick, ...rest}) => {
  return (
    <Container onClick={onClick}>{children}</Container>
  )
}
export default Button;
