"use strict";

// BETS INFO
const bro = {
  day: "Wednesday",
  quantity: 6,
};
const me = {
  day: "Monday",
  quantity: 7,
};
const dad = {
  day: "Thursday",
  quantity: 4,
};
const mom = {
  day: "Saturday",
  quantity: 5,
};

//DAYS INTO NUMS
const convertDay = function (weekday) {
  if (weekday === "Monday") {
    return 1;
  } else if (weekday === "Tuesday") {
    return 2;
  } else if (weekday === "Wednesday") {
    return 3;
  } else if (weekday === "Thursday") {
    return 4;
  } else if (weekday === "Friday") {
    return 5;
  } else if (weekday === "Saturday") {
    return 6;
  } else if (weekday === "Sunday") {
    return 7;
  }
};

// DAYS INTO SCORES
const scoreDay = function (numberBet, numberActual) {
  if (Math.abs(numberActual - numberBet) > 3) {
    return 7 - Math.abs(numberBet - numberActual);
  } else return Math.abs(numberActual - numberBet);
};

// CONVERTING DAYS INTO NUMS
const dayNumber = function (player) {
  return convertDay(player.day);
};

// CONVERTING DAYS INTO SCORES
const dayScore = function (player, dog) {
  return scoreDay(player.dayNumber, dog.dayNumber);
};

// COUNTING SCORES
const qScore = function (player, dog) {
  return Math.abs(player.quantity - dog.quantity);
};

document.querySelector(".btn").addEventListener("click", function () {
  // RESULT PROMPTS
  const birthday = prompt("What day is it today?");
  const puppies = prompt("How many puppies were born?");
  // RESULT OBJECT
  const puma = {
    day: birthday,
    quantity: Number(puppies),
  };

  // RESULT
  const result = `Puma gave birth to ${puma.quantity} puppies on ${puma.day}`;

  bro.dayNumber = dayNumber(bro);
  me.dayNumber = dayNumber(me);
  mom.dayNumber = dayNumber(mom);
  dad.dayNumber = dayNumber(dad);
  puma.dayNumber = dayNumber(puma);

  bro.dayScore = dayScore(bro, puma);
  me.dayScore = dayScore(me, puma);
  mom.dayScore = dayScore(mom, puma);
  dad.dayScore = dayScore(dad, puma);

  bro.qScore = qScore(bro, puma);
  me.qScore = qScore(me, puma);
  mom.qScore = qScore(mom, puma);
  dad.qScore = qScore(dad, puma);

  // BETS AND POINTS
  const broRes = `Ed's bet: ${bro.quantity} puppies, ${
    bro.day
  } \n fine points: ${bro.dayScore + bro.qScore}`;
  const meRes = `Karina's bet: ${me.quantity} puppies, ${
    me.day
  } \n fine points: ${me.dayScore + me.qScore}`;
  const dadRes = `Igor's bet: ${dad.quantity} puppies, ${
    dad.day
  } \n fine points: ${dad.dayScore + dad.qScore}`;
  const momRes = `Kira's bet: ${mom.quantity} puppies, ${
    mom.day
  } \n fine points: ${mom.dayScore + mom.qScore}`;

  // SCORES ARRAY
  const scores = [
    bro.dayScore + bro.qScore,
    me.dayScore + me.qScore,
    dad.dayScore + dad.qScore,
    mom.dayScore + mom.qScore,
  ];
  // MIN SEARCH
  let min = 10;
  for (let i = 0; i < 4; i++) {
    if (min > scores[i]) {
      min = scores[i];
    }
  }
  // MIN INDEX
  let k = [];
  for (let i = 0; i < 4; i++) {
    if (scores[i] == min) {
      k.push(i);
    }
  }
  // ALL PLAYERS ARRAY
  const winners = ["Ed", "Karina", "Igor", "Kira"];

  // WINNERS
  let resStr = "It's a win for ";
  for (let i = 0; i < k.length; i++) {
    resStr += winners[Number(k[i])];
    if (i < k.length - 1 && k.length > 1) {
      resStr += " and ";
    }
  }
  resStr += ` who scored the least fine points (${min})`;

  const resultMessage = [
    `sooooooooo... ${result}
  WHICH MEANS: ${resStr}`,
  ];
  if (me.dayNumber && puma.quantity) {
    window.alert(resultMessage);
    document.querySelector(".mom").textContent = momRes;
    document.querySelector(".dad").textContent = dadRes;
    document.querySelector(".me").textContent = meRes;
    document.querySelector(".bro").textContent = broRes;
    document.querySelector(".bro").textContent = broRes;
  } else {
    window.alert("looks like the input was funky");
  }
});
