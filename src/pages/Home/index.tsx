import {
  BlockContainer,
  Description,
  DescriptionContainer,
  HomeContainer,
  MaterialIcon,
  Title,
} from './style';

const Home = () => {
  return (
    <HomeContainer id="homeContainer">
      <BlockContainer id="blockContainer">
        <MaterialIcon iconName="work" size="100px" />
        <DescriptionContainer>
          <Title>Transição de carreira</Title>
          <Description>
            Se você está mudando para a área de testes, oferecemos um programa
            personalizado para facilitar sua transição. Vamos criar um plano de
            formação com teoria e prática, ajudando você a se destacar como um
            profissional de testes.
          </Description>
        </DescriptionContainer>
      </BlockContainer>

      <BlockContainer>
        <MaterialIcon iconName="code" size="100px" />
        <DescriptionContainer>
          <Title>Automação de Teste</Title>
          <Description>
            Se você já trabalha na área, mas deseja se especializar em automação
            de testes, nossa mentoria personalizada é ideal. Desenvolva suas
            habilidades e aprenda as melhores práticas para se tornar um
            especialista em automação de testes.
          </Description>
        </DescriptionContainer>
      </BlockContainer>

      <BlockContainer>
        <MaterialIcon iconName="engineering" size="100px" />
        <DescriptionContainer>
          <Title>Especialização</Title>
          <Description>
            Para profissionais que desejam avançar na carreira e buscar algo a
            mais para sua formação, nossa especialização oferece o conhecimento
            e as habilidades necessárias para se destacar no campo de testes de
            software.
          </Description>
        </DescriptionContainer>
      </BlockContainer>
    </HomeContainer>
  );
};

export default Home;
