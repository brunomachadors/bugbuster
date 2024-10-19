import {
  TestimonialsContainer,
  TestimonialBlock,
  TestimonialTextContainer,
  TestimonialTitle,
  TestimonialDescription,
  TestimonialAuthor,
  TestimonialImage,
  Title,
  Quote,
} from './style';

const testimonialsData = [
  {
    title: 'Uma jornada de aprendizado completa',
    description:
      'O Bruno é um mentor excepcional. Poder participar da mentoria está sendo uma jornada de aprendizado completa, onde a teoria se encontra com a prática de forma dinâmica e inspiradora. Além de adquirir novas habilidades, desenvolvi uma mentalidade de teste mais sólida. Super recomendo!',
    author:
      'Karina Yamashita - Engenheira que fez a transição para a área de testes',
    image:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1729379516/BUGBUSTER/kkyesbujstwuciybdgsp.jpg',
  },
  {
    title: 'Essencial para minha visão em QA',
    description:
      'Essencial para minha visão em QA. Com uma didática clara e exemplos práticos, Bruno simplificou conceitos complexos e me ajudou a aplicar boas práticas, aumentando minha confiança. Ele também personalizou a mentoria de acordo com minhas necessidades, o que fez toda a diferença no meu aprendizado.',
    author:
      'Raquel Gomes - Gerente de loja de telefonia que migrou para a área de testes',
    image:
      'https://media.licdn.com/dms/image/v2/D4D35AQG6KvSdHN_27w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1664226196119?e=1729897200&v=beta&t=B_evO9qDeH1arvLn1Ymn3gHjeJGRqBQW9QjLH6-MmEg',
  },

  {
    title: 'Ótimo mentor, excelente amigo',
    description:
      'Desde que comecei a trabalhar com ele, o Bruno, além de ser um ótimo mentor, também se tornou um excelente amigo. Aprendemos muito um com o outro.',
    author:
      'Luís Moreira - Mestre em Engenharia Eletrotécnica - Pessoa no espectro autista e com síndrome de Asperger',
    image:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1729337224/BUGBUSTER/nbgn3mztpbf1lwzdskld.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <Title>Depoimentos</Title>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialBlock key={index} reverse={index % 2 !== 0}>
          <TestimonialImage src={testimonial.image} alt={testimonial.author} />
          <TestimonialTextContainer>
            <TestimonialTitle>{testimonial.title}</TestimonialTitle>
            <Quote>
              <TestimonialDescription>
                {testimonial.description}
              </TestimonialDescription>
            </Quote>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialTextContainer>
        </TestimonialBlock>
      ))}
    </TestimonialsContainer>
  );
};

export default Testimonials;
