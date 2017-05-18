(function (Root, $, Pain) {

    'use strict';

    var g_$Score, g_$Summary, g_iTotal = 1;

    function retrieveCriteria(p_$Tables) {
        var oCriteria;

        oCriteria = {};

        p_$Tables.each(function (p_iTableIndex, p_oTableElement) {
            var $Table, iScore, sFactor;

            $Table = $(p_oTableElement);
            sFactor = $Table.prevAll('h3').first().text();
            oCriteria[sFactor] = [];

            $Table.find('tbody tr').each(function (p_iRowIndex, p_oRowElement) {
                var $Row;

                $Row = $(p_oRowElement);
                iScore = p_iRowIndex+1;

                $Row.addClass('criteria__selector');

                $Row.attr('data-description', $Row.find('td').last().text());
                $Row.attr('data-factor', sFactor);
                $Row.attr('data-score', iScore);

                oCriteria[sFactor].push($Row);
            });

            g_iTotal = g_iTotal * iScore;
        });

        return oCriteria;
    }

    function updateClasses(p_$Criterion) {
        p_$Criterion.parents('table').find('.criteria__selector--selected').removeClass('criteria__selector--selected');

        p_$Criterion.addClass('criteria__selector--selected');
    }

    function updateSummary(p_$Criterion) {
        var oSummary, sFactor, sSummaryJson;

        sFactor = p_$Criterion.attr('data-factor');

        sSummaryJson = g_$Summary.attr('data-summary');
        oSummary = JSON.parse(sSummaryJson);
        delete oSummary[sFactor];

        oSummary[sFactor] = {
            score: p_$Criterion.attr('data-score'),
            description: p_$Criterion.attr('data-description')
        };

        g_$Summary.attr('data-summary', JSON.stringify(oSummary));
        g_$Summary.val(JSON.stringify(oSummary));
    }

    function addEventHandler(p_iCriterionIndex, p_$Criterion) {
        p_$Criterion.on('click', function (/*p_oEvent*/) {
            updateClasses(p_$Criterion);
            updateSummary(p_$Criterion);

            function updateScore(p_$Criterion){
                var oScore, iScore, sFactor, sScoreJson, iScoreIndex, iTotalScore;

                sFactor = p_$Criterion.attr('data-factor');
                iScore = p_$Criterion.attr('data-score');

                sScoreJson = g_$Score.attr('data-score');
                oScore = JSON.parse(sScoreJson);
                delete oScore[sFactor];
                oScore[sFactor] = iScore;

                g_$Score.attr('data-score', JSON.stringify(oScore));

                iTotalScore = 1;

                for (iScoreIndex in oScore) {
                    if (oScore.hasOwnProperty(iScoreIndex)) {
                        iTotalScore = iTotalScore * oScore[iScoreIndex];
                    }
                }

                g_$Score.val(Math.floor(iTotalScore / g_iTotal * 100) + '%');
            }
            updateScore(p_$Criterion);
        });
    }

    function main (p_sTableSelector) {
        var $Tables, oCriteria, sMessage;

        sMessage = 'To calculate the user pain for a given issue, ' +
            'please select the most appropriate cells in the tables below.'
        ;

        $Tables = $(p_sTableSelector);

        oCriteria = retrieveCriteria($Tables);

        g_$Score = Pain.createScoreElement($Tables.first());
        g_$Summary = Pain.createSummaryElement(g_$Score);
        Pain.createHelpElement(g_$Summary, sMessage);

        $.each(oCriteria, function (p_sCriteria, p_$Criterion) {
            $.each(p_$Criterion, addEventHandler);
        });
    }

    $('.criteria sup').addClass('hidden');

    main('.protocols-estimating-user-pain-criteria table');

})(document, jQuery, document.Dealerdirect.Pain);
