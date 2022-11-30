import { Container, Content, Brand, Menu, Search, NewNote } from "./styles"

import { FiPlus, FiSearch } from "react-icons/fi"

import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header" 
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

export function Home() {

  return(
    <Container>
       <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header /> 

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="NodeJs" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquiser pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'rocketseat'}
            ]
            }}
            />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}