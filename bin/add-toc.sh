#!/usr/bin/env bash
# ==============================================================================
#/ This script recursively scans all markdown files in a given directory and
#/ replaces all occurrences of "<!-- toc -->" with an actual table of content.
#/
#/ Requires the markdown-toc node module to be available in the project.
# ==============================================================================
# MIT License
#
# Copyright (c) 2017 Dealerdirect B.V.
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
# IN THE SOFTWARE.
# ==============================================================================
set -o errexit  # Exit script when a command exits with non-zero status
set -o nounset  # Exit script on use of an undefined variable
set -o pipefail # Return exit status of the last command in the pipe that failed

# ==============================================================================
# GLOBALS
# ==============================================================================
readonly EX_OK=0                        # Successful termination
readonly EX_NOT_ENOUGH_PARAMETERS=65    # Successful termination

# ==============================================================================
# UTILITY
# ==============================================================================
# ------------------------------------------------------------------------------
# Displays how this script should be used
#
# Globals:
#   None
# Arguments:
#   None
# Returns:
#   None
# ------------------------------------------------------------------------------
short_usage() {
    echo ''
    echo 'Usage: '
    echo "         $0 <directory-to-scan>"
    echo ''
}

# ------------------------------------------------------------------------------
# Displays all lines in main script that start with '#/'
#
# Globals:
#   None
# Arguments:
#   None
# Returns:
#   None
# ------------------------------------------------------------------------------
full_usage() {
    grep '^#/' <"$0" | cut -c4-
}

# ==============================================================================
# SCRIPT LOGIC
# ==============================================================================

# ------------------------------------------------------------------------------
# Scans a given directory for `.md` files and replaces any `<!-- toc -->` it
# finds with an actual table of content, using the markdown-toc node module
#
# Globals:
#   None
# Arguments:
#   $1 The directory to scan
# Returns:
#   None
# ------------------------------------------------------------------------------
add_toc() {
    local aFiles sDirectory sFile

    sDirectory="${1}"

    aFiles=$(grep --recursive --files-with-matches --include='*.md' --exclude-dir={node_modules,_site} '<!-- toc -->' "${sDirectory}")

    for sFile in "${aFiles[@]}";do
        ./node_modules/.bin/markdown-toc -i "${sFile}"
    done
}

# ==============================================================================
# RUN LOGIC
# ------------------------------------------------------------------------------
# Triggers the main functionality or displays usage, depending on arguments.
#
# Globals:
#   EX_OK
#   EX_NOT_ENOUGH_PARAMETERS
# Arguments:
#   $1 The directory to scan OR `--help` to display the usage
# Returns:
#   None
# ------------------------------------------------------------------------------
main() {
    local bShowHelp

    bShowHelp=false

    if [ ! "$#" -eq 1 ];then
        echo 'This script expects one argument: the path to the folder to scan.' 1>&2
        short_usage
        exit ${EX_NOT_ENOUGH_PARAMETERS}
    fi

    for sParam in "$@";do
        if [ "${sParam}" = "--help" ];then
            bShowHelp=true
        fi
    done

    if [ "${bShowHelp}" == "true" ];then
        full_usage
        short_usage
    else
        add_toc "$@"
    fi

    exit ${EX_OK}
}
# ==============================================================================


# ==============================================================================
if [ "${0}" = "${BASH_SOURCE[0]}" ];then
    # direct call to file
    main "$@"
fi # else file is included from another script
# ==============================================================================

#EOF
