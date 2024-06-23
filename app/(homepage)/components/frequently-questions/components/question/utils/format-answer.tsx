interface IParagraph {
  p: string;
}

const PureParagraph = ({ p }: IParagraph) => <>{p}</>;

const IndentedParagraph = ({ p }: IParagraph) => (
  <>
    <PureParagraph p={p} />
    <br />
    <br />
  </>
);

export function formatAnswer(answer: string): JSX.Element[] {
  const paragraphs = answer.split(`\n`);

  const formattedAnswer = paragraphs.map((p, i) => {
    const isLastParagraph = i === paragraphs.length - 1;

    const paragraph = isLastParagraph ? (
      <PureParagraph key={p} p={p} />
    ) : (
      <IndentedParagraph key={p} p={p} />
    );

    return paragraph;
  });

  return formattedAnswer;
}
