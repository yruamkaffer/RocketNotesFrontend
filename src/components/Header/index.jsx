import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";

export function Header(){

  return (
  <Container>
    <Profile to="/profile">
      <img
        src="https://github.com/yruamkaffer.png"
        alt="Profile picture"
      />

      <div>
        <span>Bem vindo!</span>
        <strong>Yruam Käffer de Faria</strong>
      </div>
    </Profile>

    <Logout>
      <RiShutDownLine />
    </Logout>

  </Container>
  )
}