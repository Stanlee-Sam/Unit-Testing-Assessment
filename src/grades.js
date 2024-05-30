function calculateGradesAndAverage(studentScore) {
  studentScore.math = studentScore.math ?? 0;
  studentScore.eng = studentScore.eng ?? 0;
  studentScore.kis = studentScore.kis ?? 0;
  studentScore.phy = studentScore.phy ?? 0;
  studentScore.che = studentScore.che ?? 0;
  studentScore.re = studentScore.re ?? 0;
  studentScore.comp = studentScore.comp ?? 0;

  let average =
    (studentScore.math +
      studentScore.eng +
      studentScore.kis +
      studentScore.phy +
      studentScore.che +
      studentScore.re +
      studentScore.comp) /
    7;
  let grade = {};

  function mathPhysicsChemistry(score) {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 40) return "Pass";
    return "Sup";
  }

  function religiousEducation(score) {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "Pass";
    return "Sup";
  }

  function computerLanguages(score) {
    if (score >= 75) return "A";
    if (score >= 65) return "B";
    if (score >= 55) return "C";
    if (score >= 45) return "Pass";
    return "Sup";
  }

  grade.math = mathPhysicsChemistry(studentScore.math);
  grade.eng = computerLanguages(studentScore.eng);
  grade.kis = computerLanguages(studentScore.kis);
  grade.phy = mathPhysicsChemistry(studentScore.phy);
  grade.che = mathPhysicsChemistry(studentScore.che);
  grade.re = religiousEducation(studentScore.re);
  grade.comp = computerLanguages(studentScore.comp);

  const result = {
    name: studentScore.name,
    math: grade.math,
    eng: grade.eng,
    kis: grade.kis,
    phy: grade.phy,
    che: grade.che,
    re: grade.re,
    comp: grade.comp,
    avgPts: Math.round(average),
  };

  return result;
}

const studentScore = {
  name: "Dennis Doe",
  math: 80,
  eng: 65,
  kis: 48,
  phy: 67,
  che: 56,
  re: 89,
  comp: 82,
};

const output = calculateGradesAndAverage(studentScore);
console.log(output);

module.exports = { calculateGradesAndAverage };
