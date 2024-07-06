import { useTypewriter, Cursor } from 'react-simple-typewriter';
import useStore from './components/useStore.js';

export default function Typing() {

  const language = useStore((state) => state.language);

  const wordEN = ['Welcome!','A Front-End Developer', 'A React Developer', 'A JavaScript Developer', 'an Intermediate German Speaker', 'An advanced Intermediate English Speaker', 'A Metal Music Lover', 'A Man Full of Curiosity']

  const wordES = ['Bienvenido!','Un desarrollador Front-End', 'Un Desarrollador de React', 'Un Desarrollador de JavaScript', 'Con un nivel intermedio de alemán', 'Con un nivel intermedio-alto de inglés', 'Un apasionado del Heavy Metal', 'Un chaval lleno de curiosidad']

  const wordDE = ['Herzlich Willkommen!','Ein Front-End Developer', 'Ein React Developer', 'Ein JavaScript Developer', 'ein Sprecher von drei Sprachen: Spanisch, Englisch und Deutsch', 'das Lieblingshobby: Heavy Metal hören', 'Ein Mann, der sehr neugierig ist']

  const wordsLanguage = () => {
    switch (language) {
        case 'EN': return wordEN;
        case 'ES': return wordES;
        case 'DE': return wordDE;
        default: return wordEN;
    }
}

  const [text] = useTypewriter({
    words: wordsLanguage(),
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 600,
    loop: {},
  });

  return (
    <>
        <span>{text}</span>
        <span><Cursor/></span>
    </>
  );
};

