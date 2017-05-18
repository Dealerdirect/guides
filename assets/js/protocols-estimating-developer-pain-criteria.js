(function (Root, $) {

    'use strict';

    var g_aCriteria = [], g_oPoints, g_$Score, g_$Summary;


    function getOpposite(p_sSubject) {
        var sOpposite;

        switch (p_sSubject) {
            case 'upper':
                sOpposite = 'lower';
                break;
            case 'lower':
                sOpposite = 'upper';
                break;
            default:
                throw new Error('Could not get opposite. Key "' + p_sSubject + '" not recognized');
                break;
        }

        return sOpposite;
    }

    function retrieveRows(p_iRowIndex, p_oRowElement) {

        var oCriteria = {};

        $(p_oRowElement).find('td').each(function (p_iCellIndex, p_oCellElement) {

            var sKey;

            switch (p_iCellIndex) {
                case 0:
                    sKey = 'lower';
                    break;
                case 1:
                    sKey = 'upper';
                    break;
                case 2:
                    sKey = 'info';
                    break;
            }

            oCriteria[sKey] = $(p_oCellElement);
        });

        g_aCriteria.push(oCriteria);
    }

    function updateClasses(p_sSubject, p_oCriteria) {
        var sOpposite;

        sOpposite = getOpposite(p_sSubject);

        p_oCriteria[sOpposite].removeClass('criteria__selector--selected');
        p_oCriteria[p_sSubject].addClass('criteria__selector--selected');
    }

    function updateScore(p_oPoints, p_sSubject, p_iCriteriaIndex) {
        var iScoreIndex, iTotalScore, oScores, sScoreJson;

        iTotalScore = 0;

        sScoreJson = g_$Score.attr('data-score');
        oScores = JSON.parse(sScoreJson);
        oScores[p_iCriteriaIndex] = p_oPoints[p_sSubject];
        g_$Score.attr('data-score', JSON.stringify(oScores));

        for (iScoreIndex in oScores) {
            if (oScores.hasOwnProperty(iScoreIndex)) {
                iTotalScore += oScores[iScoreIndex];
            }
        }

        g_$Score.val(Math.floor(iTotalScore) + '%');
    }

    function updateSummary(p_oPoints, p_sSubject, p_oCriteria) {
        var oSummary, sOpposite, sSummaryJson;

        sOpposite = getOpposite(p_sSubject);

        sSummaryJson = g_$Summary.attr('data-summary');
        oSummary = JSON.parse(sSummaryJson);
        delete oSummary[p_oCriteria[sOpposite].text()];
        oSummary[p_oCriteria[p_sSubject].text()] = p_oPoints[p_sSubject];

        g_$Summary.attr('data-summary', JSON.stringify(oSummary));
        g_$Summary.val(JSON.stringify(oSummary));
    }

    function addEventHandler(p_sSubject, p_oPoints, p_oCriteria, p_iCriteriaIndex) {

        p_oCriteria[p_sSubject].addClass('criteria__selector criteria__selector--' + p_sSubject);

        p_oCriteria[p_sSubject].on('click', function (/*p_oEvent*/) {

            updateClasses(p_sSubject, p_oCriteria);
            updateSummary(p_oPoints, p_sSubject, p_oCriteria);
            updateScore(p_oPoints, p_sSubject, p_iCriteriaIndex);
        });
    }

    function main (p_sTableSelector) {
        var $Help, $Table;

        $Table = $(p_sTableSelector);

        $Table.find('tbody tr').each(retrieveRows);

        g_$Score = $('<input type="text" class="criteria__score" data-score="{}" readonly />');
        g_$Score.Stickyfill();

        g_$Summary= $('<textarea class="criteria__summary" data-summary="{}" readonly />');
        g_$Summary.Stickyfill();

        $Help = $('<p class="criteria__help">' +
            '<span class="octicon octicon-info criteria__help-icon"></span>' +
            'To calculate the developer pain for a given issue, ' +
            'please select the most appropriate cells in the table below.' +
            '</p>'
        );

        g_$Score.insertBefore($Table.parent());
        g_$Summary.insertAfter(g_$Score);
        $Help.insertAfter(g_$Summary);

        g_oPoints = {'lower': 10 / g_aCriteria.length, 'upper': 100 / g_aCriteria.length};

        $.each(g_aCriteria, function (p_iCriteriaIndex, p_oCriteria) {
            addEventHandler('lower', g_oPoints, p_oCriteria, p_iCriteriaIndex);
            addEventHandler('upper', g_oPoints, p_oCriteria, p_iCriteriaIndex);

        });
    }

    $('.criteria sup').addClass('hidden');

    main('.protocols-estimating-developer-pain-criteria table');

})(document, jQuery);
