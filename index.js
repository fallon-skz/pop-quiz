let score = 0;
let questA = prompt(
  "Does pineapple belond on pizza? Enter A for No, B for Yes",
);
if (questA !== null) {
  if (questA !== "A" && questA !== "B" && questA !== "a" && questA !== "b") {
    console.log("Please enter an A or B for the answer for question 1");
  } else if (questA === "A" || questA === "a") {
    score++;
  } else {
    console.log(
      "Sorry the correct answer for Question 1 is A (No). Pineapple does not belong on pizza",
    );
  }
} else console.log("You did not answer question 1");

let questB = prompt(
  "Should Morgan go to Vegas? Enter A for Yes or Enter B for No",
);
if (questB !== null) {
  if (questB !== "A" && questB !== "B" && questB !== "a" && questB !== "b") {
    console.log("Please enter an A or B for the answer for question 2");
  } else if (questB === "B" || questB === "b") {
    score++;
  } else {
    console.log(
      "Sorry the correct answer for Question 2 is B (No). Haven't you seen him with the coin flips?",
    );
  }
} else console.log("You did not answer question 2");

let questC = prompt(
  "Which is the best NY baseball team? Enter A for The Yankees, enter B for The Mets",
);
if (questB !== null) {
  if (questC !== "A" && questC !== "B" && questC !== "a" && questC !== "b") {
    console.log("Please enter an A or B for the answer for question 3");
  } else if (questC === "A" || questC === "a") {
    score++;
  } else {
    console.log(
      "Sorry the correct answer for Question 3 is A (The Yankees). The Mets haven't won since 1986",
    );
  }
} else console.log("You did not answer question 3");
if (score === 3) {
  console.log(
    `Congratulations! You answered all three questions correctly. Your score for this pop quiz is ${score}`,
  );
} else if (score === 0) {
  console.log(
    `All answers were incorrect or you left them blank. Try again! Your score for this pop quiz is ${score}`,
  );
} else if (score < 3 && score > 0) {
  console.log(
    `You had some questions incorrect or you left them blank. Try again! Your score for this pop quiz is ${score}`,
  );
}
