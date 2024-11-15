export const calculateResult = (answers) => {
  // Filter out transition scores before calculating
  const mbtiAnswers = answers.filter(score => score !== 'transition');
  
  const counts = {
    E: 0, I: 0, N: 0, S: 0,
    T: 0, F: 0, J: 0, P: 0
  };
  
  mbtiAnswers.forEach(score => {
    counts[score]++;
  });

  return [
    counts.E > counts.I ? 'E' : 'I',
    counts.N > counts.S ? 'N' : 'S', 
    counts.T > counts.F ? 'T' : 'F',
    counts.J > counts.P ? 'J' : 'P'
  ].join('');
};