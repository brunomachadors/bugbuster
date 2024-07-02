declare module 'prismjs' {
  interface PrismStatic {
    highlightAll: (async?: boolean, callback?: () => void) => void;
    highlight: (text: string, grammar: unknown, language: string) => string;
    languages: {
      [key: string]: PrismLanguage;
    };
    plugins: {
      [key: string]: unknown; // Se necessário, ajuste para um tipo mais específico
    };
  }

  interface PrismLanguage {
    alias?: string[];
    [key: string]: unknown; // Ou ajuste para um tipo mais específico, se souber a estrutura dos objetos de linguagem
  }

  const Prism: PrismStatic;
  export default Prism;
}
