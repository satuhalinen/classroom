export function getNumberOfGrades(grades: number[]) {
  return grades.length;
}

export function getSumGrades(grades: number[]) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
  }
  return sum;
}

export function getAverageValue(grades: number[]) {
    return getSumGrades(grades) / grades.length;
}

export function getPassingGrades(grades: number[]) {
  let passingGrades: number[];
  passingGrades = grades.filter((grade) => grade >= 10);
  return passingGrades;
}

export function getFailingGrades(grades: number[]) {
  let failingGrades: number[];
  failingGrades = grades.filter((grade) => grade < 10);
  return failingGrades;
}

export function getRaisedGrades(grades: number[]) {
  return grades.map((grade) => (grade < 20 ? grade + 1 : grade));
}
