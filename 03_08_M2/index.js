//Exercise 1 - Find top 3 students having the highest score (total = exam + quiz + homework)
 //Exercise 2 - Show them in the card with the orders (higest to lowest)

 let students = [
    {
      _id: 0,
      name: "aimee Zank",
      scores: [
        { score: 1.463179736705023, type: "exam" },
        { score: 11.78273309957772, type: "quiz" },
        { score: 35.8740349954354, type: "homework" },
      ],
    },
    {
      _id: 1,
      name: "Aurelia Jones",
      scores: [
        { score: 60.06045071030959, type: "exam" },
        { score: 52.79790691903873, type: "quiz" },
        { score: 71.76133439165544, type: "homework" },
      ],
    },
    {
      _id: 2,
      name: "Corliss Jones",
      scores: [
        { score: 67.03077096065002, type: "exam" },
        { score: 6.301851677835235, type: "quiz" },
        { score: 66.28344683278382, type: "homework" },
      ],
    },
    {
      _id: 3,
      name: "Bao Kim",
      scores: [
        { score: 71.64343899778332, type: "exam" },
        { score: 24.80221293650313, type: "quiz" },
        { score: 42.26147058804812, type: "homework" },
      ],
    },
    {
      _id: 4,
      name: "Zachary Langlais",
      scores: [
        { score: 78.68385091304332, type: "exam" },
        { score: 90.2963101368042, type: "quiz" },
        { score: 34.41620148042529, type: "homework" },
      ],
    },
    {
      _id: 5,
      name: "Wilburn Smith",
      scores: [
        { score: 44.87186330181261, type: "exam" },
        { score: 25.72395114668016, type: "quiz" },
        { score: 63.42288310628662, type: "homework" },
      ],
    },
    {
      _id: 6,
      name: "Jenette Flanders",
      scores: [
        { score: 37.32285459166097, type: "exam" },
        { score: 28.32634976913737, type: "quiz" },
        { score: 81.57115318686338, type: "homework" },
      ],
    },
    {
      _id: 7,
      name: "Salena Nguyen",
      scores: [
        { score: 90.37826509157176, type: "exam" },
        { score: 42.48780666956811, type: "quiz" },
        { score: 96.52986171633331, type: "homework" },
      ],
    },
    {
      _id: 8,
      name: "Daphne Zheng",
      scores: [
        { score: 22.13583712862635, type: "exam" },
        { score: 14.63969941335069, type: "quiz" },
        { score: 75.94123677556644, type: "homework" },
      ],
    },
    {
      _id: 9,
      name: "Sanda Nguyen",
      scores: [
        { score: 97.00509953654694, type: "exam" },
        { score: 97.80449632538915, type: "quiz" },
        { score: 25.27368532432955, type: "homework" },
      ],
    },
    {
      _id: 10,
      name: "Denisha Cast",
      scores: [
        { score: 45.61876862259409, type: "exam" },
        { score: 98.35723209418343, type: "quiz" },
        { score: 55.90835657173456, type: "homework" },
      ],
    },
    {
      _id: 11,
      name: "Marcus Blohm",
      scores: [
        { score: 78.42617835651868, type: "exam" },
        { score: 82.58372817930675, type: "quiz" },
        { score: 87.49924733328717, type: "homework" },
      ],
    },
    {
      _id: 12,
      name: "Quincy Smith",
      scores: [
        { score: 54.29841278520669, type: "exam" },
        { score: 85.61270164694737, type: "quiz" },
        { score: 80.40732356118075, type: "homework" },
      ],
    },
    {
      _id: 13,
      name: "Jessika Nguyen",
      scores: [
        { score: 90.47179954427436, type: "exam" },
        { score: 90.3001402468489, type: "quiz" },
        { score: 95.17753772405909, type: "homework" },
      ],
    },
    {
      _id: 14,
      name: "Alix Auckett",
      scores: [
        { score: 25.15924151998215, type: "exam" },
        { score: 68.64484047692098, type: "quiz" },
        { score: 24.68462152686763, type: "homework" },
      ],
    },
    {
      _id: 15,
      name: "Tambra Kim",
      scores: [
        { score: 69.1565022533158, type: "exam" },
        { score: 3.311794422000724, type: "quiz" },
        { score: 45.03178973642521, type: "homework" },
      ],
    },
    {
      _id: 16,
      name: "Dodie Zheng",
      scores: [
        { score: 7.772386442858281, type: "exam" },
        { score: 31.84300235104542, type: "quiz" },
        { score: 80.52136407989194, type: "homework" },
      ],
    },
    {
      _id: 17,
      name: "Fletcher Jones",
      scores: [
        { score: 39.41011069729274, type: "exam" },
        { score: 81.13270307809924, type: "quiz" },
        { score: 97.70116640402922, type: "homework" },
      ],
    },
    {
      _id: 18,
      name: "Verdell Auckett",
      scores: [
        { score: 62.12870233109035, type: "exam" },
        { score: 84.74586220889356, type: "quiz" },
        { score: 81.58947824932574, type: "homework" },
      ],
    },
    {
      _id: 19,
      name: "Gisela Kim",
      scores: [
        { score: 44.51211101958831, type: "exam" },
        { score: 0.6578497966368002, type: "quiz" },
        { score: 93.36341655949683, type: "homework" },
      ],
    },
    {
      _id: 20,
      name: "Tressa Smith",
      scores: [
        { score: 42.17439799514388, type: "exam" },
        { score: 71.99314840599558, type: "quiz" },
        { score: 81.23972632069464, type: "homework" },
      ],
    },
    {
      _id: 21,
      name: "Rosana Auckett",
      scores: [
        { score: 46.2289476258328, type: "exam" },
        { score: 98.34164225207036, type: "quiz" },
        { score: 36.18769746805938, type: "homework" },
      ],
    },
    {
      _id: 22,
      name: "Margart Vitello",
      scores: [
        { score: 75.04996547553947, type: "exam" },
        { score: 10.23046475899236, type: "quiz" },
        { score: 96.72520512117761, type: "homework" },
      ],
    },
    {
      _id: 23,
      name: "Tamika Nguyen",
      scores: [
        { score: 45.65432764125526, type: "exam" },
        { score: 64.32927049658846, type: "quiz" },
        { score: 83.53933351660562, type: "homework" },
      ],
    },
    {
      _id: 24,
      name: "Jesusa Smith",
      scores: [
        { score: 86.0319702155683, type: "exam" },
        { score: 1.967495200433389, type: "quiz" },
        { score: 61.10861071547914, type: "homework" },
      ],
    },
    {
      _id: 25,
      name: "Rudolph Kim",
      scores: [
        { score: 74.75289335591543, type: "exam" },
        { score: 38.5413647805495, type: "quiz" },
        { score: 35.2554340953413, type: "homework" },
      ],
    },
    {
      _id: 26,
      name: "Jonie Jones",
      scores: [
        { score: 19.17861192576963, type: "exam" },
        { score: 76.3890359749654, type: "quiz" },
        { score: 44.39605672647002, type: "homework" },
      ],
    },
    {
      _id: 27,
      name: "Edgar Jones",
      scores: [
        { score: 8.606983261043888, type: "exam" },
        { score: 58.71180464203724, type: "quiz" },
        { score: 15.33726210596508, type: "homework" },
      ],
    },
    {
      _id: 28,
      name: "Laureen Jones",
      scores: [
        { score: 3.677565278992456, type: "exam" },
        { score: 7.119462599229987, type: "quiz" },
        { score: 82.87308922617427, type: "homework" },
      ],
    },
    {
      _id: 29,
      name: "Kim Nguyen",
      scores: [
        { score: 5.677565278992456, type: "exam" },
        { score: 7.119462599229987, type: "quiz" },
        { score: 85.87308922617427, type: "homework" },
      ],
    },
    {
      _id: 30,
      name: "Kaila Deibler",
      scores: [
        { score: 15.89771199662455, type: "exam" },
        { score: 56.93965183412178, type: "quiz" },
        { score: 66.64493295066322, type: "homework" },
      ],
    },
    {
      _id: 31,
      name: "Tandra Meadows",
      scores: [
        { score: 24.90138146001744, type: "exam" },
        { score: 28.8266541837344, type: "quiz" },
        { score: 97.16831550665721, type: "homework" },
      ],
    },
    {
      _id: 32,
      name: "Gwen Honig",
      scores: [
        { score: 87.14345376886205, type: "exam" },
        { score: 99.45824441135635, type: "quiz" },
        { score: 76.66460454219344, type: "homework" },
      ],
    },
    {
      _id: 33,
      name: "Sadie Allah",
      scores: [
        { score: 73.15861249943812, type: "exam" },
        { score: 2.987718065941702, type: "quiz" },
        { score: 82.54104198590488, type: "homework" },
      ],
    },
    {
      _id: 34,
      name: "Carli Allah",
      scores: [
        { score: 7.112266875518214, type: "exam" },
        { score: 67.734668378287, type: "quiz" },
        { score: 88.99855402666871, type: "homework" },
      ],
    },
    {
      _id: 35,
      name: "Synthia Labelle",
      scores: [
        { score: 27.22049103148209, type: "exam" },
        { score: 31.28760039265919, type: "quiz" },
        { score: 79.23285425688643, type: "homework" },
      ],
    },
    {
      _id: 36,
      name: "Eugene Allah",
      scores: [
        { score: 73.055900093666, type: "exam" },
        { score: 79.85621560462026, type: "quiz" },
        { score: 66.09143669040472, type: "homework" },
      ],
    },
    {
      _id: 37,
      name: "Meagan Allah",
      scores: [
        { score: 86.06759716616264, type: "exam" },
        { score: 79.45097452834857, type: "quiz" },
        { score: 28.41090281547689, type: "homework" },
      ],
    },
    {
      _id: 38,
      name: "Luke Veron",
      scores: [
        { score: 99.989394580, type: "exam" },
        { score: 98.382382380, type: "quiz" },
        { score: 90.393939390, type: "homework" },
      ],
    }, 
  ];
    

  //Exercise 1 - Find top 3 students having the highest score (total = exam + quiz + homework)
  function getTop3Students() {
    let top3Students  = [];
    //Doing some logic
    for(let index = 0; index < students.length; index++) {
      let student = students[index];
      let studentScoreArr = student?.scores;
      //Get total score for each student (exam, quiz and homework)
      let totalScore = 0;
      for (let index2 = 0; index2 < studentScoreArr.length; index2++) {
        let score = studentScoreArr[index2].score;
        totalScore = score + totalScore;
      }
      //Assign new key and value back to the students object - total_score
      student['total_score'] = totalScore;
      top3Students.push(student);
    }
    return top3Students;
    //Sorting array based on object key JavaScript
  }
  console.log(getTop3Students());
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  