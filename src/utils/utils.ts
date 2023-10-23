export const countStatistic = (
  storedAnswers: Record<string, string[]>[],
  questions: Question[]
) => {
  const result = questions.map((question) => {
    const userAnswer = storedAnswers.find((item) =>
      item.hasOwnProperty(+question.id)
    );
    let count = 0;
    question.answer.forEach((option) => {
      if (userAnswer) {
        if (Object.values(userAnswer)[0].includes(option)) {
          count++;
        }
      }
    });
    return count / question.answer.length;
  });
  const fullAnswers = result.filter((item) => item === 1).length;
  const partlyAnswers = result.filter((item) => item > 0 && item < 1).length;
  const incorrectAnswers = result.filter((item) => item === 0).length;
  const totalPercent =
    (result.reduce((acc, item) => acc + item, 0) / questions.length) * 100;

  return {
    fullAnswers,
    partlyAnswers,
    incorrectAnswers,
    totalPercent,
  };
};
