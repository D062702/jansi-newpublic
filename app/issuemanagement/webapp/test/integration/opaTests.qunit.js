sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/issuemanagement/test/integration/FirstJourney',
		'ns/issuemanagement/test/integration/pages/IncidentsList',
		'ns/issuemanagement/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/issuemanagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);