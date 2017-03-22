---
permalink: /code-styling/bash/
---

# Dealerdirect style guide: BASH

> _“We must all suffer one of two things: the pain of discipline or the pain of regret or disappointment.”_ 
> ~ Jim Rohn

This guide defines the BASH coding standards we use at Dealerdirect. The intent of 
this guide is to help developers create BASH scripts that are readable, portable 
easy to maintain and bug-free.

Although there are a few style guide for BASH, none of them seems to be exhaustive
or detailed enough.
 
As a result, the Dealerdirect BASH style guide was born.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119][rfc2119].

<!-- ======================================================================= -->

## Table of Content

<!-- toc -->

- [Files](#files)

  - [Basics](#basics)
  - [File names](#file-names)
  - [File properties](#file-properties)

- [BASH options](#bash-options)

- [Comments / Documentation](#comments--documentation)

- [Exit codes and Errors](#exit-codes-and-errors)

- [Formatting](#formatting)

  - [Line length](#line-length)

  - [Whitespace](#whitespace)

    - [Lines](#lines)

- [Declaration](#declaration)

  - [Arrays](#arrays)
  
  - [Checks](#checks)
  
  - [Command options](#command-options)
  
  - [Command substitution](#command-substitution)
  
  - [Functions](#functions)

    - [Function packaging](#function-packaging)

  - [Strings](#strings)

  - [User messaging](#user-messaging)

  - [Variables](#variables)

- [Common pitfalls](#common-pitfalls)

  - [Files and folders](#files-and-folders)
  - [Internal (or "builtin") commands](#internal-or-builtin-commands)
  - [General notes](#general-notes)

- [Sources](#sources)

- [References](#references)

<!-- tocstop -->

<!-- ======================================================================= -->

## Files

### Basics

- Files MUST only use UTF-8 encoding without BOM.
- Files MUST end with a single blank line. [^1](#references).
- Files MUST use the Unix LF (line feed) line ending.

### File names

- File names MAY NOT contain characters other than letters (a to z), numbers (0 
  to 9), hyphen, `-` and dot `.`.

- File names MUST NOT start or end with a hyphen or dot.

- File names MUST NOT have consecutive hyphens or dots.

- Files that are meant to be call directly MUST NOT have a file extension.

- Files that are meant to be _sourced_ (included from other files) MUST have the 
  `.sh` file extension.

### File properties

- Files that are meant to be call directly MUST be made executable (with `chmod a+x`).

- Files that are meant to be _sourced_ (included from other files) MUST NOT be 
  executable.

## BASH options

- A BASH script MUST use `#!/usr/bin/env bash` as [shebang][shebang]. The less 
  portable `#!/bin/bash` MUST NOT be used. 

- Always enable the following options (using `set -o option`):

  - `errexit` Exit script when a command exits with non-zero status.   
  - `errtrace` Exit on error inside any functions or sub-shells.
  - `nounset` Exit script on use of an undefined variable.
  - `pipefail` Return exit status of the last command in the pipe that exited with a non-zero exit code

<!-- ======================================================================= -->

## Comments / Documentation 

- Usage documentation SHOULD always be provided, no matter how short the script.

- Every functions MUST preceded by a comment explaining it's usage.

- The license MUST be either `proprietary` (for internal company scripts) or 
  `MIT` (for generic scripts that are open-sourced).

- If the `proprietary` license is used the following header MUST be used:
  
  ```txt
  # ==============================================================================
  # Proprietary License -- All Rights Reserved
  #
  # Copyright (c) 2017 Dealerdirect B.V.
  # ==============================================================================
  ```

- If the `MIT` license is used the following header MUST be used:
  
  ```txt  
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
  ```

<!-- ======================================================================= -->

## Exit codes and Errors

- Separate exit codes MUST be declared for different errors.

- Exit codes MUST be defined as individual read-only global variables, 
  like this:
  
  ```bash
  readonly EX_OK=0                        # Successful termination
  readonly EX_NOT_ENOUGH_PARAMETERS=65    # Not enough parameters given
  ```

- An exit code MUST always be set regardless if errors occurred. 
  Zero `0` means no error occurred.

- An error message describing the error SHOULD be displayed before exiting on error.

- Error messages MUST be redirected to STDERR. 
  This makes it easier to separate normal status from actual issues.)

- The following exit codes MUST NOT be used as they already have a specific 
  meaning:
  
  - `1` Catchall for general errors
  - `2` Misuse of shell builtins
  - `126` Invoked command is not executable
  - `127` "command not found"
  - `128` Invalid argument to exit
  - `128+n` Fatal error signal "`n`"
  - `130` Script terminated by <kbd>Control</kbd>-<kbd>C</kbd>
  - `255*` Numbers above `255` loop round from `0`

- To distinguish them from system errors, exit codes other than `0` SHOULD start
  from `64`

- Exit code `64` is RECOMMENDED to be used as generic/unspecified error code.

<!-- ======================================================================= -->

## Formatting

### Line length

- Lines SHOULD be less than 80 characters and MUST be less than 120 characters;
  longer lines SHOULD be split into multiple subsequent lines.

### Whitespace 

#### Lines

- Lines MUST use an indentation of 4 spaces and MUST NOT use tabs for indenting.

- There SHOULD NOT be trailing whitespace at the end of any line.

- Consecutive blank lines MAY be added to improve readability and to indicate 
  related blocks of code.

- If a pipeline fits on one line, it SHOULD be on one line. To improve
  readability it MAY be split across several lines.

- If a pipeline does not fit on one line it MUST be split across several lines.

- When splitting, a line MUST be indented and begin with a pipe '|' or logical 
  compound ('||' and '&&').  Example:
  
  ```bash
  command \
      | pipe \
      && other
  ```

- The `; do` and `; then` keywords MUST be on the same line as the `while`, `for` 
  or `if` it belongs to.

<!-- ======================================================================= -->

## Declaration 

### Arrays

- For arrays, either use `"$@"` or `$*` MUST be used .
  An unquoted `$@` MUST NOT be used.

### Checks

- The new BASH double square bracket builtin test operator (`[[ ... ]]`) MUST be
  used. The old single square bracket test operator `[` or explicit call
  to `test` MUST NOT be used.

- To avoid confusion about what is being tested for `-z` or `-n` MUST be used.
  Use `[[ -z $variable ]]`  or `[[ -n $variable ]]` rather than just `[[ $variable ]]`.

- A single equal sign SHOULD be used when checking values. Double or triple 
  signs SHOULD NOT be used.
  Example: `[[ "${NAME}" = "John" ]]` 

- When referring to the current file `${BASH_SOURCE[0]}` SHOULD be used, even if 
  it is sourced from a parent script. In other cases, `${0}` SHOULD be used.

- As the `errexit` flag is used, `|| true` MUST be appended to commands that 
  might cause an error which should not halt the script. (For instance when the
  command output is assigned to a variable).

### Command options

- Long options MUST be used if they are available, 
  for instance, use  `logger --priority --verbose` instead of `logger -p -v`. 

### Command substitution

- Sub-shell syntax `$(command)` MUST be used for command substitution rather
  than backticks  <code>\`command`</code>.

### Functions

- Except for function packaging code (see below) all code MUST go in a function. 
  Even if it's just one `main` function.

- Functions MUST be defined without the `function` keyword, with round brackets, 
  like this: `myfunc() { ... }`

- All functions MUST be located together in the file just below constants. 
  Executable code MUST NOT exists between functions.

- Complex one-liners MUST be placed in standalone functions with an appropriate 
  name and description.

#### Function packaging

- If it should be possible to call certain code both directly _and_ sourced from 
  other scripts, it MUST be wrapped in a "self" check, like this: 
  
  ```bash
  if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
      # direct call to file
      main "${@}"
  fi  # else file is included from another script
  ```

### Strings

- For strings, single quotes `'` MUST be used when substitution is not required.
- For strings, double quotes `"` MUST be used when substitution is required.

### User messaging

- User output SHOULD be formatted to follow the Heroku output format[^2](#references).
- Warnings and errors MUST go to `STDERR`, anything than could be parsed SHOULD go to `STDOUT`.

### Variables

- Unless they are single character shell specials or arrays, variables MUST be 
  "brace-quoted" (surrounded with curly braces `{` and `}`), 
  like this: `${variable}`.  
  Specials are `$!`, `$-`, `$_`, `$?`, `$#` `$*` `$@` `$$`.

- Global variables SHOULD be avoided. When global variables _are_ used they MUST
  be declared as `readonly` as much as possible.

- Variables that are function-specific MUST be declared as `local`, unless `local` 
  can not be used. (For instance when declaring as an associative array). For 
  such cases `declare` MUST be used.
 
- For the sake of clarity, read-only variables MUSt be declared using `readonly`.
  Read-only variables MUST NOT be declared using `declare -r`.

- Declaration and assignment SHOULD be placed on different lines.

- To test variables that could be undeclared dot-slash `:-` MUST be used
  (like this: `${variable:-}`)

<!-- ======================================================================= -->

## Common pitfalls

Some more common problems and bugs in BASH can be avoided by adhering to the 
following conventions:

### Files and folders

- Prefer absolute paths (leverage `$PWD`), always qualify relative paths with `./`.

- When using `rm $directory/` make sure to add `:?` to ensure this never expands
  to `rm /`, like this: `rm "${sPath:?}/${sTarget}"`

- Use `mktemp` for temporary files, always cleanup with a `trap`.

- Use `pushd /path/to/directory ` and `popd` (optionally redirected to `/dev/null`)
  rather than `cd /path/to/directory` and `cd -`

### Internal (or "builtin") commands

- Shell builtin functions and BASH variable substitution SHOULD be used rather
  than invoking a separate process (like `awk` or `sed`).

- For complex string formatting `printf` SHOULD be used rather than `echo`.

- the `eval` command SHOULD be avoided.

### General notes

- Use `shellcheck` to lint BASH scripts (either locally or [online][shellcheck])

- When in doubt, reference the BASH Guide for Beginners, the Advanced 
  BASH-Scripting Guide the manual, the BASH FAQ, and/or the BASH Pitfalls pages:
  
  - [BASH Beginners Guide][bash-beginners-guide]
  - [BASH Advanced Guide][bash-advanced-guide]
  - [BASH Manual][bash-manual]
  - [BASH FAQ][bash-faq]
  - [BASH Pitfalls][bash-pitfalls]

<!-- ======================================================================= -->

## Sources

The following sources were consulted whilst making this guide:

- [bash3boilerplate][bash3-boilerplate]
- [BashGuide/Practices][bash-guide-practices]
- [BASH exit codes][bash-exitcodes]
- [obsolete scripting in the bash-hackers wiki][bash-obsolete]
- [BASH style][bash-style]
- [BASH Style Guide][bash-style-guide]

<!-- ======================================================================= -->

## References

^1: [No newline at end of file][no-newline] - Mike Burns

^2: [Heroku output format in BASH scripts][heroku-output-format]

[bash-advanced-guide]: http://tldp.org/LDP/abs/html/abs-guide.html
[bash-beginners-guide]: http://tldp.org/LDP/Bash-Beginners-Guide/html/Bash-Beginners-Guide.html
[bash-exitcodes]: http://tldp.org/LDP/abs/html/exitcodes.html
[bash-faq]: http://mywiki.wooledge.org/BashFAQ
[bash-guide-practices]: http://mywiki.wooledge.org/BashGuide/Practices
[bash-manual]: https://gnu.org/software/bash/manual/bash.html
[bash-obsolete]: http://wiki.bash-hackers.org/scripting/obsolete
[bash-pitfalls]: http://mywiki.wooledge.org/BashPitfalls
[bash-style-guide]: https://lug.fh-swf.de/vim/vim-bash/StyleGuideShell.en.pdf
[bash-style]: https://github.com/progrium/bashstyle
[bash3-boilerplate]: http://bash3boilerplate.sh/
[heroku-output-format]: https://github.com/heroku/heroku-buildpack-php/blob/v120/bin/util/common.sh#L1-L30
[no-newline]: https://robots.thoughtbot.com/no-newline-at-end-of-file
[rfc2119]: http://www.ietf.org/rfc/rfc2119.txt
[shebang]: https://en.wikipedia.org/wiki/Hashbang
[shellcheck]: https://www.shellcheck.net/
