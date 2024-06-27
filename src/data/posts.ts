// exemploPosts.ts

import { IPost } from '../Types/IPost';

export const examplePosts: IPost[] = [
  {
    id: 'lancamentobugbuster',
    title: 'Lançamento do Novo Site de Mentoria Bug Buster',
    banner:
      'https://res.cloudinary.com/dtglidvcw/image/upload/e_improve:outdoor/c_crop,h_0.70,w_1.00/BUGBUSTER/ldz2movmit4domxmp230.jpg',
    content: [
      {
        type: 'text',
        value:
          'É com grande entusiasmo que anunciamos o lançamento do nosso novo site de mentoria, Bug Buster. Oferecemos serviços de auxílio para profissionais que buscam especialização, transição de carreira, preparação para vagas internacionais e suporte técnico.',
      },
      {
        type: 'text',
        value:
          'No Bug Buster Mentoria, você encontrará conteúdos de alta qualidade na área de testes, além de dicas valiosas para alcançar seus objetivos. Convidamos todos a visitarem nosso site e entrarem em contato para verificar disponibilidade e valores.',
      },

      {
        type: 'image',
        value:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1718663243/BUGBUSTER/gzrqylhommnfbaxrezjw.jpg',
      },
    ],
    author: 'Bruno Machado', // Adicionando o autor aqui
  },

  {
    id: 'terceirotesttribeporto',
    title: '3º Test Tribe Porto',
    banner:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1718573164/BUGBUSTER/Screenshot_2024-05-27_at_13.30.38_frkmsf.png',
    content: [
      {
        type: 'text',
        value:
          'Estou incrivelmente feliz em compartilhar que tive a honra de ser o orador na 3ª edição do Test Tribe, realizada na encantadora cidade do Porto. Minha palestra abordou um tema que considero crucial nos dias de hoje: "Acessibilidade para Todos".',
      },
      {
        type: 'text',
        value:
          'Recebi feedbacks extremamente positivos sobre a palestra, e fiquei especialmente tocado pelo interesse genuíno das pessoas em discutir o tema e pelos elogios recebidos. Estou empolgado em compartilhar que o conteúdo da minha apresentação pode se tornar material para uma das aulas da mentoria que estou desenvolvendo.',
      },
      {
        type: 'text',
        value:
          'Se você deseja saber mais sobre este tema ou iniciar uma conversa sobre acessibilidade e inclusão, sinta-se à vontade para entrar em contato através das nossas redes sociais.',
      },
      {
        type: 'image',
        value:
          'https://res.cloudinary.com/dtglidvcw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718577316/BUGBUSTER/WhatsApp_Image_2024-06-12_at_23.14.06_1_xvwdsb.jpg',
      },
    ],

    author: 'Bruno Machado', // Adicionando o autor aqui
  },

  {
    id: 'mentoriaequipequalidade',
    title: 'Mentoria na Equipe de Qualidade',
    banner:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1719424197/BUGBUSTER/ikwsuvpawyn5iowxtsm9.png',
    content: [
      {
        type: 'text',
        value:
          'Desde que comecei a atuar como mentor há alguns meses, a experiência tem sido verdadeiramente gratificante. Tive o privilégio de guiar equipes em dois projetos distintos: Tem Vaga Mestre e Diaristando.',
      },
      {
        type: 'image',
        value:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1719477885/BUGBUSTER/s1fa5v6b1adahhtwmdox.png',
      },
      {
        type: 'text',
        value:
          'No Diaristando, estamos nos estágios iniciais, explorando frameworks antes de começar oficialmente o desenvolvimento do projeto. Recentemente, iniciamos o uso do Playwright para automação de testes em uma aplicação semelhante a uma Pokédex. No Tem Vaga Mestre, estamos avançando significativamente, implementando testes manuais e automatizados tanto no front-end quanto no back-end.',
      },
      {
        type: 'text',
        value:
          'Uma nota pessoal minha é que fico impressionado com a evolução em tão pouco tempo. Quando começamos há alguns meses, elas ainda estavam dando os primeiros passos na área de testes. Agora, gradualmente, estão se tornando cada vez mais independentes e constantemente me surpreendem.',
      },
      {
        type: 'image',
        value:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1719424441/BUGBUSTER/jxx71mohving6decooj2.png',
      },

      {
        type: 'text',
        value:
          'Nessa imagem acima estavamos desenvolvendo testes automatizados de front-end para essa página do pokedex',
      },
    ],
    author: 'Bruno Machado',
  },
];
