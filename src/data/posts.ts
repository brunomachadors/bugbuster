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

    author: 'Bruno Machado',
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
          'Essa publicação tem o objetivo de compartilhar alguns dos meus primeiros pensamentos sobre ser um mentor na área de testes. Trabalho com testes de software desde 2009 e recentemente comecei a explorar esse novo aspecto da minha carreira.',
      },
      {
        type: 'text',
        value:
          'Cerca de um ano atrás, minha esposa começou a trabalhar em um projeto voluntário, o que acabou gerando uma oportunidade para eu atuar como mentor no mesmo projeto. O projeto se chama “Tem Vaga Mestre”. A ideia é criar uma plataforma de RPG que facilite o encontro entre mestres e jogadores de RPG. Este é um desafio imenso, pois não se trata apenas de facilitar esses encontros, mas também de criar uma rede social onde a comunidade possa se encontrar e, futuramente, jogar.',
      },
      {
        type: 'image',
        value:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1719503672/BUGBUSTER/xfsleawyi8kcoyg3iejc.png',
      },
      {
        type: 'text',
        value:
          'Comecei a trabalhar com a Jessica e a Renata no projeto há mais de um ano (encontrei a primeira mensagem datada de julho de 2023). Inicialmente, a ideia era apenas trazer tópicos para discussão sobre o assunto, o que de fato gera muito valor. No entanto, aos poucos, comecei a pensar na ideia de introduzir alguns desafios práticos. Uma das primeiras atividades que realizamos foi abrir uma página de testes (cheia de bugs) para tentar encontrar e reportar o máximo de bugs possíveis, destacando suas criticidades. ',
      },

      {
        type: 'text',
        value:
          'Foi aí que percebi um grande potencial em trabalhar com aspectos mais práticos, em vez de focar apenas na teoria. Eu fiquei impressionado com a quantidade de bugs que elas encontraram. Contudo, alguns bugs que pareciam óbvios para quem já está na área passaram despercebidos. Hoje, passado um ano desde o primeiro contato, o projeto já evoluiu muito, tendo diversas páginas, APIs e espaço para que pudéssemos explorar novos testes automatizados. Semana passada, recebi a atualização de que uma das participantes da mentoria conseguiu sua primeira vaga de emprego na área, e fiquei tão feliz como se fosse a minha.',
      },

      {
        type: 'image',
        value:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1719477885/BUGBUSTER/s1fa5v6b1adahhtwmdox.png',
      },
      {
        type: 'text',
        value:
          'Já no projeto “Diaristando”, estamos ainda no começo, mas a ideia é conectar diaristas e contratantes para que possam efetuar serviços de limpeza em residências ou empresas. Aqui está uma imagem de divulgação do projeto.',
      },

      {
        type: 'text',
        value:
          'Nesse projeto, trabalho com a Tatiana Honda, a Débora Silva e a Karina Yamashita. Como o projeto está no início, montamos planos para realizar exercícios e pesquisas sobre diversos temas. Um dos temas que escolhemos foi sobre Teste de Acessibilidade, o que acabou gerando um artigo meu sobre o assunto. Descobrimos boas práticas e adicionamos ferramentas para testar. Logo depois, começamos a fazer novos testes automatizados, seja testes de API usando o Postman e o Newman, ou agora, recentemente, testes usando o Playwright.',
      },
      {
        type: 'image',
        value:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1719424441/BUGBUSTER/jxx71mohving6decooj2.png',
      },

      {
        type: 'text',
        value:
          'A parte mais interessante disso tudo é que tive a chance de colher resultados práticos. Fui convidado para falar no 3º Test Tribe do Porto e ser orador sobre o tema. Ser mentor não é apenas ensinar, mas também aprender junto, muitas vezes transformando os mentorados em quase colegas de estudo.',
      },

      {
        type: 'image',
        value:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1719503923/BUGBUSTER/pozhytyoxx1odetqgzrm.webp',
      },

      {
        type: 'text',
        value:
          'Após iniciar os dois projetos voluntários, a Mindera me convidou para um novo desafio: ser mentor do Luís Moreira, que está participando de um programa de estágio voltado para a integração de pessoas do espectro autista no ambiente de trabalho.',
      },
      {
        type: 'text',
        value:
          'Sem entrar em muitos detalhes, posso dizer que, inicialmente, o Luís não estava progredindo bem e não se adaptou ao seu primeiro mentor. Foi então que meu nome surgiu para acompanhá-lo. Percebi que um dos principais obstáculos na aprendizagem dele era a questão da motivação. Para facilitar o processo, utilizei uma abordagem de teste de API com Pokémon, e a resposta foi surpreendente.',
      },
      {
        type: 'text',
        value:
          'Em pouco tempo, o Luís estava realizando testes de API extremamente complexos, demonstrando um bom entendimento de conceitos de programação e testes. Criamos o hábito de almoçar juntos uma vez por semana, o que nos permitiu nos conectar melhor e compreender os desafios que ele enfrenta. Fomos a uma pizzaria brasileira chamada Rei da Gula, que ele adorou!',
      },
      {
        type: 'image',
        value:
          '    https://miro.medium.com/v2/resize:fit:720/format:webp/1*CGhyGKoeiXJHzmAUaTgdnQ.jpeg',
      },

      {
        type: 'text',
        value:
          'Sempre tive muita vontade de ensinar outras pessoas, e acredito que essa abordagem mais individual ou pessoal me permite conectar e entender melhor as dificuldades de cada um no seu desenvolvimento profissional. Atualmente, depois de um ano atuando como mentor, resolvi abrir meu serviço para o público através do meu portal chamado Bug Buster.',
      },

      {
        type: 'text',
        value:
          'Caso você, que está lendo este texto, tenha interesse em desenvolver habilidades na área de testes ou até mesmo fazer uma formação básica, pode entrar em contato comigo através do meu site BUG BUSTER.',
      },
    ],

    author: 'Bruno Machado',
  },
];
