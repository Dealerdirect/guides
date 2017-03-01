#!/usr/bin/env bash

# ==============================================================================
#/ This script recursively scans all markdown files in a given directory and
#/ replaces all occurrences of "<!-- toc -->" with an actual table of content.
#/
#/ Requires the markdown-toc node module to be available in the project.
# ------------------------------------------------------------------------------

set -o errexit
set -o nounset
set -o pipefail

shortUsage() {
        echo ''
        echo 'Usage: '
        echo "         $0 <directory-to-scan>"
        echo ''
}

fullUsage() {
    grep '^#/' <"$0" | cut -c4-
}

add-toc() {
    local aFiles sDirectory sFile
     sDirectory="${1}"

    aFiles=$(grep --recursive --files-with-matches --include='*.md' --exclude-dir={node_modules,_site} '<!-- toc -->' "${sDirectory}")


    for sFile in "${aFiles[@]}";do
        ./node_modules/.bin/markdown-toc -i "${sFile}"
    done
}

main() {
    local bShowHelp

    bShowHelp=false

    if [ ! "$#" -eq 1 ];then
        echo 'This script expects one argument: the path to the folder to scan.' 1>&2
        shortUsage
        exit 65
    fi

    for sParam in "$@";do
        if [ "${sParam}" = "--help" ];then
            bShowHelp=true
        fi
    done

    if [ "${bShowHelp}" == "true" ];then
        fullUsage
        shortUsage
    else
        add-toc "$@"
    fi
}
# ==============================================================================


# ==============================================================================
if [ "${0}" = "${BASH_SOURCE[0]}" ];then
    # direct call to file
    main "$@"
fi # else file is included from another script
# ==============================================================================

#EOF
