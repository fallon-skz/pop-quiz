let score = 0;
let questA = prompt(
  "Does pineapple belond on pizza? Enter 0 for No, 1 for Yes",
);
if (questA !== null) {
  questA = questA * 1;

  if (questA !== 0 && questA !== 1) {
    console.log("Please enter a 0 or 1 for the answer for question 1");
  } else if (questA === 0) {
    score++;
  } else {
    console.log(
      "Sorry the correct answer for Question 1 is No. Pineapple does not belong on pizza",
    );
  }
} else console.log("You did not answer question 1");

let questB = prompt(
  "What city is in New York. Enter 0 for NYC or Enter 1 for Boston",
);
if (questB !== null) {
  questB = questB * 1;

  if (questB !== 0 && questB !== 1) {
    alert(
      "Please enter a 0 or 1 for the answer for question 2. Restarting the pop quiz",
    );
    console.log("Please enter a 0 or 1 for the answer for question 2");
  } else if (questB === 0) {
    score++;
  } else {
    console.log(
      "Sorry the correct answer for Question 2 is NYC. Boston is in Massachusetts",
    );
  }
} else console.log("You did not answer question 2");

if (questB !== null) {
  let questC = prompt(
    "Which is the best NY baseball team? Enter 0 for The Yankees, enter 1 for The Mets",
  );
  questC = questC * 1;

  if (questC !== 0 && questC !== 1) {
    console.log("Please enter a 0 or 1 for the answer for question 3");
  } else if (questC === 0) {
    score++;
  } else {
    console.log(
      "Sorry the correct answer for Question 3 is The Yankees. The Mets haven't won since 1986",
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
