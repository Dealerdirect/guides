(function (Root, $) {

    // @NOTE: This file only adds functions used by both user- and developer-pain pages.

    'use strict';

    function createHelpElement(p_$Summary, p_sMessage) {
        var $Help;

        $Help = $('<p class="criteria__help">' +
            '<span class="octicon octicon-info criteria__help-icon"></span>' +
            p_sMessage +
            '</p>'
        );
        $Help.insertAfter(p_$Summary);

        return $Help;
    }

    function createScoreElement(p_$Table) {
        var $Score;

        $Score = $('<input type="text" class="criteria__score" data-score="{}" readonly />');
        $Score.insertBefore(p_$Table.parent());

        return $Score;
    }

    function createSummaryElement(g_$Score) {
        var $Summary;

        $Summary = $('<textarea class="criteria__summary" data-summary="{}" readonly />');
        $Summary.insertAfter(g_$Score);

        return $Summary;
    }

    function updateScore(g_$Score, p_oPoints, p_sSubject, p_iCriteriaIndex) {
        var iScoreIndex, iTotalScore, oScores, sScoreJson;

        iTotalScore = 0;

        sScoreJson = g_$Score.attr('data-score');
        oScores = JSON.parse(sScoreJson);
        console.log(oScores);
        oScores[p_iCriteriaIndex] = p_oPoints[p_sSubject];
        g_$Score.attr('data-score', JSON.stringify(oScores));

        for (iScoreIndex in oScores) {
            if (oScores.hasOwnProperty(iScoreIndex)) {
                iTotalScore += oScores[iScoreIndex];
            }
        }

        g_$Score.val(Math.floor(iTotalScore) + '%');
    }

    Root.Dealerdirect = Root.Dealerdirect|| {};

    Root.Dealerdirect.Pain = {
        createHelpElement: createHelpElement,
        createScoreElement: createScoreElement,
        createSummaryElement: createSummaryElement,
        updateScore: updateScore
    };
})(document, jQuery);
