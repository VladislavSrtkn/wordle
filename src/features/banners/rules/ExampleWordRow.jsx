import LetterBox from '../../gamefield/LetterBox';

export default function ExampleWordRow({ data }) {
  const { word, styles } = data;

  const letters = word
    .split('')
    .map((letter, i) => <LetterBox key={i} letter={letter} statusClass={styles[i]} />);

  return <div className='example-word-row d-flex gap-1 mb-4'>{letters}</div>;
}
