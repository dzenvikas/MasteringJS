/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/


var scoreTeamJohn = [89, 120, 103];
var scoreTeamMike = [116, 94, 123];
var scoreTeamMarry = [97, 134, 105];

function average(scores) {
    var avg = 0;
    for (var i = 0; i < scores.length; i++) {
        avg += scores[i];
    }
    return avg;
}

var avgTeamJohn = average(scoreTeamJohn);
var avgTeamMike = average(scoreTeamMike);
var avgTeamMarry = average(scoreTeamMarry);

// TIE
if ( avgTeamJohn === avgTeamMike && avgTeamJohn === avgTeamMarry) {
    console.log('TIE.' + 'Mike Team: ' + avgTeamMike +
    'John Team: ' + avgTeamJohn + 'Marry Team: ' + avgTeamMarry );
}
// John team Wins
if ( avgTeamJohn > avgTeamMike && avgTeamJohn > avgTeamMarry) {
    console.log('John team wins!' + 'Mike Team: ' + avgTeamMike +
    'John Team: ' + avgTeamJohn + 'Marry Team: ' + avgTeamMarry );
}
// Mike team Wins
if ( avgTeamMike > avgTeamJohn && avgTeamMike > avgTeamMarry) {
    console.log('Mike team wins!' + 'Mike Team: ' + avgTeamMike +
    'John Team: ' + avgTeamJohn + 'Marry Team: ' + avgTeamMarry );
}
// Mike team Wins
if ( avgTeamMarry > avgTeamJohn && avgTeamMarry > avgTeamMike) {
    console.log('Marry team wins!' + 'Mike Team: ' + avgTeamMike +
    'John Team: ' + avgTeamJohn + 'Marry Team: ' + avgTeamMarry );
}