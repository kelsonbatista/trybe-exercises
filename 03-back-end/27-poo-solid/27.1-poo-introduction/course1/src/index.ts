class Student {
  private _enrollment: number;
  private _name: string;
  private _examsGrades: number[] = Array();
  private _worksGrades: number[] = Array();

  constructor(enrollment: number, name: string, exams: number[], works: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = exams;
    this.worksGrades = works;
  }

  public get enrollment(): number {
    return this._enrollment;
  }

  public set enrollment(value: number) {
    this._enrollment = value;
  }

  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    this._name = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa precisa ser 4 notas de prova.')
    }
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    if (value.length !== 2) {
      throw new Error('A pessoa precisa ser 2 notas de trabalho.')
    }
    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades]
      .reduce((prevGrade, grade) => {
        grade += prevGrade;
        return grade;
      }, 0); // zero é o valor inicial
  }

  gradesAverage(): number {
    const sumGrades = this.sumGrades();
    return sumGrades / (this.examsGrades.length + this.worksGrades.length);
  }
}

const student1 = new Student(1234, 'Jose', [5, 6, 7, 9], [8, 9]);
console.log(student1);
console.log(`Soma das notas de ${student1.name}: ${student1.sumGrades()}`);
console.log(`A média das notas de ${student1.name}: ${student1.gradesAverage().toFixed(2)}\n\n`);

const student2 = new Student(12345, 'Joao', [5, 5, 7, 8], [7, 4]);
console.log(student2);
console.log(`Soma das notas de ${student2.name}: ${student2.sumGrades()}`);
console.log(`A média das notas de ${student2.name}: ${student2.gradesAverage().toFixed(2)}\n\n`);
