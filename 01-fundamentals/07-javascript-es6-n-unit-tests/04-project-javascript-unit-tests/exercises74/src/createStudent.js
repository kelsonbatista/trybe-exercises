const createStudent = (firstName) => {
  const fb = () => { return 'Eita pessoa boa!' }
  const student = {
    name: firstName,
    feedback: fb(),
  }
  return student;
}

module.exports = createStudent;
