export const calculateResult = (answers) => {
    const counts = {
      E: 0, I: 0, N: 0, S: 0,
      T: 0, F: 0, J: 0, P: 0
    };
    
    answers.forEach(score => {
      counts[score]++;
    });
  
    return [
      counts.E > counts.I ? 'E' : 'I',
      counts.N > counts.S ? 'N' : 'S', 
      counts.T > counts.F ? 'T' : 'F',
      counts.J > counts.P ? 'J' : 'P'
    ].join('');
  };