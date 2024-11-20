const myArray = [
    (firstProductPrice = 100),
    (secondPoductPrice = 200),
    (thirdProductPrice = 300),
    (fourProductPrice = 400),
    (fiveProductPrice = 500),
  ];
  
  const sumPrices =
    firstProductPrice +
    secondPoductPrice +
    thirdProductPrice +
    fourProductPrice +
    fiveProductPrice;
  textSumPrices = "რიცხვების ჯამი =";
  
  const Arithmetic = sumPrices / 5;
  textArithmatic = "საშუალო არითმეტიკული = ";
  
  console.log(myArray, textSumPrices, sumPrices, textArithmatic, Arithmetic);
  
  const dateUse = {
    title: ["დანაშაული და სასჯელი"],
    author: ["ფიოდორ დოსტოევსკი"],
    yearPublishedd: ["1 იანვაი 188"],
  };
  const Description =
    "The 48 Laws of Power by Robert Greene was published in September 1, 2000.";
  console.table(dateUse);
  console.log(Description);
  
  // 1.17
  
  const propertyObjeq = [
    { firstName: "name" },
    { allAgeis: "age" },
    { firstScore: "score" },
  ];
  console.log(propertyObjeq);