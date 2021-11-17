
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const totalCheck = (right, student, callback) => {
  let count = 0;
  for (let i = 0; i <= student.length; i += 1) {
    count += callback(right[i], student[i]);
  }
  return `Respostas certas: ${count}`;
}

const verifyQuestions = (right, student) => {
  
  if (student === 'N.A') {
    return 0;
  } else if (student !== right)  {
    return -0.5;
  } else {
    return 1;
  }

}

// console.log(totalCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyQuestions));
console.log(totalCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyQuestions));