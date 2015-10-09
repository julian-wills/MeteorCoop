numGames = 20;
numRounds = 10;
basePayment = 10;

numPlayers = 50;

roundWait = 1;

payoffs = {};
payoffs.CC = 5;
payoffs.DC = 6;
payoffs.CD = 0;
payoffs.DD = 1;
conversion = 0.005;

payoffMap = {1: {1: [payoffs.CC, payoffs.CC],
		 2: [payoffs.CD, payoffs.DC]},
	     2: {1: [payoffs.DC, payoffs.CD],
		 2: [payoffs.DD, payoffs.DD]}};

hitTypeTitle1pm = 'Session for Month-Long Research Study (1 PM ET)'
hitTypeTitle3pm = 'Session for Month-Long Research Study (3 PM ET)'

treatmentMap = {
    main: {lobbyRoute: '/lobby',
	   experimentRoute: '/experiment',
	   surveyRoute: '/survey',
	   homeTemplate: 'landingMain'},
    recruiting: {lobbyRoute: '/blank',
		 experimentRoute: '/mainRecruiting',
		 surveyRoute: '/surveyRecruiting',
		 homeTemplate: '/landingRecruiting'},
    exitsurvey: {lobbyRoute: '/blank',
		 experimentRoute: '/blank',
		 surveyRoute: '/exitsurvey',
		 homeTemplate: 'landingExitSurvey'}
}