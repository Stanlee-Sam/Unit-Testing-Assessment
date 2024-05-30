const {
  calculateGradesAndAverage,
  mathPhysicsChemistry,
  religiousEducation,
  computerLanguages,
} = require("./grades");

describe("Grades", () => {
  /*Test for all the grade categories*/
  it("should calculate the average grade for given scores", () => {
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

    const expectedOutput = {
      name: "Dennis Doe",
      math: "A",
      eng: "B",
      kis: "Pass",
      phy: "B",
      che: "C",
      re: "A",
      comp: "A",
      avgPts: 70,
    };

    expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
  });

  it("assigns grades correctly at the boundaries of the range", () => {
    const studentScore = {
      name: "Dennis Doe",
      math: 79,
      eng: 69,
      kis: 49,
      phy: 69,
      che: 59,
      re: 89,
      comp: 80,
    };

    const expectedOutput = {
      name: "Dennis Doe",
      math: "A",
      eng: "B",
      kis: "Pass",
      phy: "B",
      che: "C",
      re: "A",
      comp: "A",
      avgPts: 71,
    };

    expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
  });

  it("assigns grades correctly at another boundary", () => {
    const studentScore = {
      name: "Agnes Jake",
      math: 80,
      eng: 70,
      kis: 50,
      phy: 70,
      che: 60,
      re: 90,
      comp: 74,
    };

    const expectedOutput = {
      name: "Agnes Jake",
      math: "A",
      eng: "B",
      kis: "Pass",
      phy: "A",
      che: "B",
      re: "A",
      comp: "B",
      avgPts: 71,
    };

    expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
  });

  it("should handle empty objects", () => {
    const studentScore = {};

    const expectedOutput = {
      name: undefined,
      math: "Sup",
      eng: "Sup",
      kis: "Sup",
      phy: "Sup",
      che: "Sup",
      re: "Sup",
      comp: "Sup",
      avgPts: 0,
    };
    expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
  });
  /*test for missing grades*/
  it("handles the scenario where some grades are missing", () => {
    const studentScore = {
      name: "John Freeman",
      math: 0,
      eng: undefined,
      kis: 50,
      phy: undefined,
      che: 90,
      re: 90,
      comp: undefined,
    };
    const expectedOutput = {
      name: "John Freeman",
      math: "Sup",
      eng: "Sup",
      kis: "Pass",
      phy: "Sup",
      che: "A",
      re: "A",
      comp: "Sup",
      avgPts: 33,
    };
    expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
  });
  /*  Test for grade categories */
  it("Can test for all grade categories", () => {
    const studentScore = {
      name: "Samuel Jackson",
      math: 0,
      eng: 20,
      kis: 50,
      phy: 70,
      che: 90,
      re: 60,
      comp: 10,
    };
    const expectedOutput = {
      name: "Samuel Jackson",
      math: "Sup",
      eng: "Sup",
      kis: "Pass",
      phy: "A",
      che: "A",
      re: "C",
      comp: "Sup",
      avgPts: 43,
    };
  });
  /*Test for consistency in grading */
  it("should be consistent with grade assignment logic across subjects", () => {
    const studentScore = {
      name: "Ryan Reynolds",
      math: 70,
      eng: 70,
      kis: 70,
      phy: 70,
      che: 70,
      re: 70,
      comp: 70,
    };
    const expectedOutput = {
      name: "Ryan Reynolds",
      math: "A",
      eng: "B",
      kis: "B",
      phy: "A",
      che: "A",
      re: "B",
      comp: "B",
      avgPts: 70,
    };
  });
});
