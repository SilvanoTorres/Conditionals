const myMark = 7;

if (myMark < 6) {
    console.log('onvoldoende');

} else if (myMark >= 6 && myMark < 7) {
    console.log('voldoende');

} else if (myMark >= 7 && myMark < 9) {
    console.log('goed');

} else if (myMark >= 9) {
    console.log('uitmuntend!');

} else {
    console.error('something went wrong');
}

// 2. Maak opdracht 1 nu met behulp van het switch statement.

switch (myMark) {
    case 1:
        console.log('onvoldoende');
        break;
    case 2:
        console.log('onvoldoende');
        break;
    case 3:
        console.log('onvoldoende');
        break;
    case 4:
        console.log('onvoldoende');
        break;
    case 5:
        console.log('onvoldoende');
        break;
    case 6:
        console.log('voldoende');
        break;
    case 7:
        console.log('goed gedaan');
        break;
    case 8:
        console.log('goed gedaan');
        break;
    case 9:
        console.log('uitmuntend!');
        break;
    case 10:
        console.log('uitmuntend!');
    default:
        console.error('something went wrong')
        break;
}




/*
3. Gegeven is de bovenstaande codesnippet.
Maak een if-else statement die de waarden van de variabelen checkt.
Als de 2 boolean variabelen ‘waar’ zijn en de job is ‘teacher’ dan moet in de console het volgende bericht worden getoond: ‘finally i can enjoy my book!’.
Voor alle andere mogelijkheden in de if-else structuur moet je ook een nette oplossing bedenken.

*/

purchasedBook = true;
job = `teacher`;
inTrain = false;

if(purchasedBook == true && job ==`teacher` && inTrain == true){
    console.log('Finally i can enjoy my book!')
}
else {
    console.log('Go get a job, purchase a book or get in the train!')
}
