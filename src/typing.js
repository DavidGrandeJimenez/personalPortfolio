import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Typing() {

  const [text] = useTypewriter({
    words: ['Welcome! || Bienvenido! || Willkommen!','A Front-End Developer', 'A React Junior Developer', 'A JavaScript Developer', 'ein Mann, dass auf Deutsch sprechen kann', 'An advanced Intermediate English Speaker', 'A Metal Music Lover', 'A Man Full of Curiosity'],
    typeSpeed: 70,
    deleteSpeed: 30,
    delaySpeed: 800,
    loop: {},
  });

  return (
    <>
        <span>{text}</span>
        <span><Cursor/></span>
    </>
  );
};

