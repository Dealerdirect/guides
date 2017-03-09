(function (Root, $) {

    'use strict';

    function addEventHandler(p_sSubject, p_oPoints, p_oCriteria, p_iCriteriaIndex) {
        var sOpposite;

        switch (p_sSubject) {
            case 'upper':
                sOpposite = 'lower';
                break;
            case 'lower':
                sOpposite = 'upper';
                break;
        }

        p_oCriteria[p_sSubject].addClass('criteria__selector criteria__selector--' + p_sSubject);

        p_oCriteria[p_sSubject].on('click', function (/*p_oEvent*/) {
            var iScoreIndex, iTotalScore, oScores, sScoreJson;

            p_oCriteria[p_sSubject].addClass('criteria__selector--selected');
            p_oCriteria[sOpposite].removeClass('criteria__selector--selected');

            sScoreJson = $Score.attr('data-score');
            oScores = JSON.parse(sScoreJson);

            oScores[p_iCriteriaIndex] = p_oPoints[p_sSubject];

            $Score.attr('data-score', JSON.stringify(oScores));

            iTotalScore = 0;

            for (iScoreIndex in oScores) {
                if( oScores.hasOwnProperty(iScoreIndex)) {
                    iTotalScore += oScores[iScoreIndex];
                }
            }

            $Score.val(Math.floor(iTotalScore) + '%');
        });
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

        aCriteria.push(oCriteria);
    }

    function main (p_sTableSelector) {
        var aCriteria = [], oPoints, $Help, $Score, $Table;

        $Table = $(p_sTableSelector);

        $Table.find('tbody tr').each(retrieveRows);

        $Score = $('<input type="text" class="criteria__score" data-score="{}" readonly />');

        $Help = $('<p class="criteria__help">' +
            '<span class="octicon octicon-info criteria__help-icon"></span>' +
            'To calculate the developer pain for a given issue, ' +
            'please select the most appropriate cells in the table below.' +
            '</p>'
        );

        $Score.insertBefore($Table.parent());
        $Help.insertAfter($Score);

        oPoints = {'lower': 10 / aCriteria.length, 'upper': 100 / aCriteria.length};

        $.each(aCriteria, function (p_iCriteriaIndex, p_oCriteria) {
            addEventHandler('lower', oPoints, p_oCriteria, p_iCriteriaIndex);
            addEventHandler('upper', oPoints, p_oCriteria, p_iCriteriaIndex);

        });
    }

    $('.criteria sup').addClass('hidden');

    main('.protocols-estimating-developer-pain-criteria table');

})(document, jQuery);
