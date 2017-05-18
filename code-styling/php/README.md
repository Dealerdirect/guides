---
permalink: /code-styling/php/
---

# Dealerdirect Style Guide: PHP

> _"Any fool can write code that a computer can understand.
> Good programmers write code humans can understand."_

## Table of Contents

1. [Introduction](#1-introduction)

    1.1. [PSR compatibility](#11-psr-compatibility)

    1.2. [Levels](#12-levels)

    1.3. [Icons used in this guide](#13-icons-used-in-this-guide)

    1.4. [Conventions used in this guide](#14-conventions-used-in-this-guide)

    1.5. [Terminology](#15-terminology)

    1.6. [Notes](#16-notes)

2. [Source file basics](#2-source-file-basics)

3. [Basic formatting](#3-basic-formatting)

4. [File structure](#4-file-structure)

5. [PHP build-in functions, keywords and types](#5-php-build-in-functions-keywords-and-types)

6. [Global variables and constants](#6-global-variables-and-constants)

7. [Operators and assignment](#7-operators-and-assignment)

8. [Inter-line assignment](#8-inter-line-assignment)

9. [Control structures](#9-control-structures)

10. [Functions](#10-functions)

11. [Closures](#11-closures)

12. [Classes, properties and methods](#12-classes-properties-and-methods)

13. [Namespaces and use statements](#13-namespaces-and-use-statements)

14. [Anonymous Classes](#14-anonymous-classes)

15. [PHPDoc](#15-phpdoc)

16. [Best practices](#16-best-practices)

## 1. Introduction

This guide defines the PHP coding standards we use at Dealerdirect. The intent
of this guide is to reduce cognitive friction when scanning code from different
authors, gain a higher code quality and reduce the risk of security issue's
and errors.

### 1.1. PSR compatibility

This specification is based on PHP standards created by the
[PHP Framework Interop Group][php-fig] and is completely compatible with the
following specifications:

- [PSR-1: Basic Coding Standard][psr-1]
- [PSR-2: Coding Style Guide][psr-2]
- [PSR-4: Autoloader][psr-4]
- [PSR-5: PHPDoc][psr-5] (proposed)
- [PSR-12: Extended Coding Style Guide][psr-12] (proposed)

These standards form a pretty good base for a styling guide, nevertheless,
they do not cover every aspect of a code style. For example: the use of alias
and deprecated functions in PHP is perfectly fine in the PSR standards.

### 1.2. Levels

![Levels](images/levels.jpg)  

This guide uses different levels of code style compliances. This in order to
support new and legacy code. This gives us the ability to slowly upgrade the
level on each code base.

![bronze] **Bronze**

> This is the lowest level possible to which at least every single piece of code
> MUST comply with.
>
> - The code MUST be runnable!
> - Detections for obvious bugs.

![silver] **Silver**

> This level only contains styling rules that SHALL NOT require any refactoring
> of code and SHOULD NOT break any code. Therefor every code base SHOULD be able
> to comply with this level.
>
> - Whitespace / new line related sniffs.

![gold] **Gold**

> All code SHOULD be able to reach this level with some refactoring effort.
>
> - Deprecation & compatibility detections.
> - Detection of use of forbidden function.
> - Some basic code documentation checks.
> - Best practices.

![platinum] **Platinum**

> Not all code MAY be able to reach this level, especially older code bases.
> Newly created codebases MUST comply at least to this level.
>
> - Full compliance with PSR-1, 2, 5 & 12.
> - Micro optimisations.
> - More extensive best practices.

![diamond] **Diamond**

> All newer created code bases SHOULD be able to comply with this level.
>
> - Code analysis
> - Metrics

Bronze is the lowest code style compliance level, Diamond the highest.

Every level inherits the rules from all lower levels. This means that ![gold]
Gold inherits all rules from ![silver] Silver and ![bronze] Bronze.

The main goal is to achieve the highest level of code style compliancy on a
code base. Some code bases however, will probably never reach the Diamond
level, especially those older and legacy applications.

### 1.3. Icons used in this guide

Throughout this guide, the following icons will be used:

- ![bronze] Rule is part of the Bronze level  
- ![silver] Rule is part of the Silver level  
- ![gold] Rule is part of the Gold level  
- ![platinum] Rule is part of the Platinum level  
- ![diamond] Rule is part of the Diamond level  
- :passport_control: Checked by the Dealerdirect PHP CodeSniffer rulesets  
- :tada: Can be automatically fixed by our PHP CodeSniffer rulesets  
- :umbrella: Checked by our PHP Storm configuration  
- :satellite: Checked by our [PHP Mess Detector][phpmd] rulset  
- :books: [PHP Framework Interop Group][php-fig] standard

### 1.4. Conventions used in this guide

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119][rfc-2119].

### 1.5. Terminology

- The term "class" refers to all classes, interfaces, traits,
and other similar structures.

- The terms "import statement", "import declaration" and "use declaration"
is synonymous with "use statement".

- The terms "compound namespaces", "group namespaces"
and "compound declarations" are synonymous with "group declarations"

- A "structural element" or "structure" is a collection of programming
constructs which may be preceded by a comment or DocBlock. All of the following
is part of this collection:

    - file
    - require(_once)
    - include(_once)
    - class
    - interface
    - trait
    - function
    - method
    - property
    - constant
    - variables, both local and global scope.

Other terminology notes may appear occasionally throughout the guide.

### 1.6. Notes

Throughout this document, any instructions MAY be ignored if they do not exist
in versions of PHP supported by the specific project.

There may be elements of style and practice intentionally being omitted by this
guide. Unintentionally missing parts will probably be caused by new features
introduced by newer releases of the PHP language. Future recommendations MAY
revise and extend this guide to address those elements of style and practice.

## 2. Source file basics

### 2.1. Valid syntax

![bronze] &#11034; &#11034; &#11034; &#11034;

PHP code MUST be in valid PHP Syntax and MUST be able to pass the `php -l`
command.

### 2.1. Character encoding

![bronze] &#11034; &#11034; &#11034; &#11034;

PHP code MUST use only UTF-8 file encoding without BOM.

_:books: [PSR-1][psr-1]: 2.2. Character Encoding_

## 3. Basic formatting

### 3.1. PHP tag types

![bronze] &#11034; &#11034; &#11034; &#11034;

PHP code MUST use the long `<?php ?>` tags or the short-echo `<?= ?>` tags;
it MUST NOT use the other tag variations.

_:books: [PSR-1][psr-1]: 2.1. PHP Tags_

### 3.1. PHP opening tag

![silver] &#11034; &#11034; &#11034; &#11034;

When the opening `<?php` tag is on the first line of the file,
it MUST be on its own line with no other statements unless it is a file
containing markup outside of PHP opening and closing tags.

_:books: [PSR-12][psr-12]: 3. Declare Statements, Namespaces, and
Import Statements_

### 3.1. Omit PHP closing tag

![silver] &#11034; &#11034; &#11034; &#11034;

The closing `?>` tag MUST be omitted from files containing only PHP.

_:books: [PSR-2][psr-2]: 2.2. Files_  
_:books: [PSR-12][psr-12]: 2.2. Files_

### 3.1. Line endings

![silver] &#11034; &#11034; &#11034; &#11034;

All PHP files MUST use the Unix LF (linefeed) line ending only.

_:books: [PSR-2][psr-2]: 2.2. Files_  
_:books: [PSR-12][psr-12]: 2.2. Files_

### 3.1. End of file

![silver] &#11034; &#11034; &#11034; &#11034;

All PHP files MUST end with a non-blank line, terminated with a single LF.

_:books: [PSR-12][psr-12]: 2.2. Files_

### 3.1. Line length

![silver] &#11034; &#11034; &#11034; &#11034;

There MUST NOT be a hard limit on line length.

The soft limit on line length MUST be 120 characters; automated style checkers
MUST warn but MUST NOT error at the soft limit.

Lines SHOULD NOT be longer than 80 characters; lines longer than that SHOULD
be split into multiple subsequent lines of no more than 80 characters each.

_:books: [PSR-2][psr-2]: 2.3. Lines_  
_:books: [PSR-12][psr-12]: 2.3. Lines_

### 3.1. Trailing whitespaces

![silver] &#11034; &#11034; &#11034; &#11034;

The MUST NOT be trailing whitespaces at the end of lines.

_:books: [PSR-2][psr-2]: 2.3. Lines_  
_:books: [PSR-12][psr-12]: 2.3. Lines_

### 3.1. Blank lines

![silver] &#11034; &#11034; &#11034; &#11034;

Blank lines MAY be added to improve readability and to indicate related blocks
of code except where explicitly forbidden.

_:books: [PSR-2][psr-2]: 2.3. Lines_  
_:books: [PSR-12][psr-12]: 2.3. Lines_

### 3.1. One statement per line

![gold] &#11034; &#11034; &#11034; &#11034;

There MUST NOT be more than one statement per line.

_:books: [PSR-2][psr-2]: 2.3. Lines_  
_:books: [PSR-12][psr-12]: 2.3. Lines_

### 3.1. Indenting character

![silver] &#11034; &#11034; &#11034; &#11034;

Code MUST use an indent of 4 spaces, and MUST NOT use tabs for indenting.

> N.b.: Using only spaces, and not mixing spaces with tabs, helps to avoid
> problems with diffs, patches, history, and annotations. The use of spaces
> also makes it easy to insert fine-grained sub-indentation for inter-line
> alignment.

_:books: [PSR-2][psr-2]: 2.4. Indenting_  
_:books: [PSR-12][psr-12]: 2.4. Indenting_

### 3.1. Indenting elements

![silver] &#11034; &#11034; &#11034; &#11034;

The body contents of a structural element MUST be indented once.

_:books: [PSR-2][psr-2]: 5. Control Structures
_:books: [PSR-12][psr-12]: 5. Control Structures

### 3.1. Opening braces

![silver] &#11034; &#11034; &#11034; &#11034;

Opening braces MUST be on their own line and MUST NOT be preceded or followed
by a blank line, unless explicitly mentioned differently.

Any opening brace MUST NOT be followed by any comment or statement on the
same line.

_:books: [PSR-2][psr-2]: 4.1. Extends and Implements_
_:books: [PSR-12][psr-12]: 4.1. Extends and Implements_

### 3.1. Closing braces

![silver] &#11034; &#11034; &#11034; &#11034;

Closing branced MUST be on their own line and MUST NOT be preceded by
a blank line, except where explicitly mentioned differently.

Any closing brace MUST NOT be followed by any comment or statement on the same
line, except where explicitly mentioned differently.

_:books: [PSR-2][psr-2]: 4.1. Extends and Implements_
_:books: [PSR-12][psr-12]: 4. Classes, Properties, and Methods_
_:books: [PSR-12][psr-12]: 4.1. Extends and Implements_


## 4. File structure

![silver] &#11034; &#11034; &#11034; &#11034;

A PHP file may consist of a number of different blocks of code and comments.
If present, each of the blocks below MUST be separated by a single blank line,
and MUST NOT contain a blank line. Each block MUST be in the order listed below,
although blocks that are not relevant may be omitted.

- File-level docblock.
- One or more declare statements.
- The namespace declaration of the file.
- One or more class-based use import statements.
- One or more function-based use import statements.
- One or more constant-based use import statements.
- The remainder of the code in the file.

When a file contains a mix of HTML and PHP, any of the above sections MAY
still be used. If so, they MUST be present at the top of the file,
even if the remainder of the code consists a closing PHP tag and
then a mixture of HTML and PHP.

_:books: [PSR-12][psr-12]: 3. Declare Statements, Namespaces,
and Import Statements_

## 5. PHP build-in functions, keywords and types

### 5.1. Lowercase PHP keywords

![silver] &#11034; &#11034; &#11034; &#11034;

[PHP keywords][php-keywords] MUST be in lower case.

This also includes `true`, `false`.

_:books: [PSR-2][psr-2]: 2.5. Keywords and True/False/Null_  
_:books: [PSR-12][psr-12]: 2.5. Keywords and Types_

### 5.1. Lowercase types

![silver] &#11034; &#11034; &#11034; &#11034;

The [PHP types][php-types] (scalar types, compound types, special types and
pseudo-types) MUST be in lower case.

This also includes `numeric` and the short form notation of types
(`int`, `bool`).

_:books: [PSR-2][psr-2]: 2.5. Keywords and True/False/Null_  
_:books: [PSR-12][psr-12]: 2.5. Keywords and Types_

### 5.1. Short types

![silver] &#11034; &#11034; &#11034; &#11034;

Short form of type keywords MUST be used i.e. `bool` instead of `boolean`,
`int` instead of `integer`, etc.

_:books: [PSR-12][psr-12]: 2.5. Keywords and Types_

## 6. Global variables and constants

## 7. Operators and assignment

> TODO: improve and extend.

![silver] &#11034; &#11034; &#11034; &#11034;

All binary and ternary (but not unary) operators MUST be preceded and followed
by at least one space. This includes all:

  - [Arithmetic operators][php-arithmetic-operators]
  - [Assignment operators][php-assignment-operators]
  - [Bitwise operators][php-bitwise-operators]
  - [Comparison operators][php-comparison-operators]
  - [Logical operators][php-logical-operators] (excluding `!` which is unary)
  - [String operators][php-string-operators]
  - [Type operators][php-type-operators]
  - trait operators (`insteadof` and `as`)
  - single pipe operator (e.g.`ExceptionType1 | ExceptionType2 $e`).

For example:

```php
if ($a === $b) {
    $foo = $bar ?? $a ?? $b;
} elseif ($a > $b) {
    $variable = $foo ? 'foo' : 'bar';
}
```

## 8. Inter-line assignment

## 9. Control structures

## 10. Functions

## 11. Closures

## 12. Classes, properties and methods

## 13. Namespaces and use statements

### 13.1.

&#11034; &#11034; &#11034; &#11034; &#11034;

A fully qualified class name has the following form:
`\<NamespaceName>(\<SubNamespaceNames>)*\<ClassName>`.

   - The fully qualified class name MUST have a top-level namespace name,
   also known as a "vendor namespace".

   - The fully qualified class name MAY have one or more sub-namespace
   names.

   - The fully qualified class name MUST have a terminating class name.

   - Underscores have no special meaning in any portion of the fully
   qualified class name.

   - Alphabetic characters in the fully qualified class name MAY be any
      combination of lower case and upper case.

   - All class names MUST be referenced in a case-sensitive fashion.

_:books: [PSR-4][psr-4]: 2. Specification_

### 13.1. Fully qualified use statements

![gold] &#11034; &#11034; &#11034; &#11034;

Use statements MUST always be written using a
[fully qualified name][php-name-resolution-rules].

_:books: [PSR-12][psr-12]: 3. Declare Statements, Namespaces, and
Import Statements_

### 13.1. No leading backslash

![gold] &#11034; &#11034; &#11034; &#11034;

Use statements MUST never begin with a leading backslash as they MUST always
be fully qualified.

_:books: [PSR-12][psr-12]: 3. Declare Statements, Namespaces, and
Import Statements_

### 13.1. Compound namespaces depth

![gold] &#11034; &#11034; &#11034; &#11034;

Compound namespaces with a depth of more than two MUST NOT be used. Therefore the
following is the maximum compounding depth allowed:

```php
use Vendor\Package\Namespace\{
    SubnamespaceOne\ClassA,
    SubnamespaceOne\ClassB,
    SubnamespaceTwo\ClassY,
    ClassZ,
};
```

And the following would not be allowed:
```php
use Vendor\Package\Namespace\{
    SubnamespaceOne\AnotherNamespace\ClassA,
    SubnamespaceOne\ClassB,
    ClassZ,
};
```

_:books: [PSR-12][psr-12]: 3. Declare Statements, Namespaces, and
Import Statements_

## 14. Anonymous Classes

## 15. PHPDoc

## 16. Best practices

-------------------------------------------------------------------------------

## Stuff that has not been placed into the outline yet

### Side effects

![gold] &#11034; &#11034; &#11034; &#11034;

A file SHOULD declare new symbols (classes, functions, constants,
etc.) and cause no other side effects, or it SHOULD execute logic with side
effects, but SHOULD NOT do both.

The phrase "side effects" means execution of logic not directly related to
declaring classes, functions, constants, etc., _merely from including the
file_.

"Side effects" include but are not limited to: generating output, explicit
use of `require` or `include`, connecting to external services, modifying ini
settings, emitting errors or exceptions, modifying global or static variables,
reading from or writing to a file, and so on.

The following is an example of a file with both declarations and side effects;
i.e, an example of what to avoid:

```php
// side effect: change ini settings
ini_set('error_reporting', E_ALL);

// side effect: loads a file
include "file.php";

// side effect: generates output
echo "<html>\n";

// declaration
function foo()
{
    // function body
}
```

The following example is of a file that contains declarations without side
effects; i.e., an example of what to emulate:

```php
// declaration
function foo()
{
    // function body
}

// conditional declaration is *not* a side effect
if (! function_exists('bar')) {
    function bar()
    {
        // function body
    }
}
```

_:books: [PSR-1][psr-1]: 2.3. Side Effects_

### Namespaces and class names

&#11034; &#11034; &#11034; &#11034; &#11034;

Namespaces and classes MUST follow an "autoloading" PSR: [[PSR-0][psr-0],
[PSR-4][psr-4]].

This means each class is in a file by itself, and is in a namespace of at
least one level: a top-level vendor name.

Class names MUST be declared in `PascalCase`.

Code written for PHP 5.3 and after MUST use formal namespaces.

For example:

```php
// PHP 5.3 and later:
namespace Vendor\Model;

class Foo
{
}
```

Code written for 5.2.x and before SHOULD use the pseudo-namespacing convention
of `Vendor_` prefixes on class names.

```php
// PHP 5.2.x and earlier:
class Vendor_Model_Foo
{
}
```

_:books: [PSR-1][psr-1]: 3. Namespace and Class Names_

### Class Constants, Properties, and Methods

The term "class" refers to all classes, interfaces, and traits.

#### Constants

&#11034; &#11034; &#11034; &#11034; &#11034;

Class constants MUST be declared in all upper case with underscore separators.
For example:

```php
namespace Vendor\Model;

class Foo
{
    const VERSION = '1.0';
    const DATE_APPROVED = '2012-06-01';
}
```

_:books: [PSR-1][psr-1]: 4.1. Constants_

#### Properties

&#11034; &#11034; &#11034; &#11034; &#11034;

> TODO: Drop this?

This guide intentionally avoids any recommendation regarding the use of
`$  StudlyCaps`, `$camelCase`, or `$under_score` property names.

Whatever naming convention is used SHOULD be applied consistently within a
reasonable scope. That scope may be vendor-level, package-level, class-level,
or method-level.

_:books: [PSR-1][psr-1]: 4.2. Properties_

#### ?.?.?. Methods

&#11034; &#11034; &#11034; &#11034; &#11034;

Method names MUST be declared in `camelCase()`.

_:books: [PSR-1][psr-1]: 4.2. Methods_

[bronze]: images/bronze-emoji.png "Bronze"
[silver]: images/silver-emoji.png "Silver"
[gold]: images/gold-emoji.png "Gold"
[platinum]: images/platinum-emoji.png "Platinum"
[diamond]: images/diamond-emoji.png "Diamond"
[php-keywords]: http://php.net/manual/en/reserved.keywords.php
[php-name-resolution-rules]: http://php.net/manual/en/language.namespaces.rules.php
[php-types]: http://php.net/manual/en/language.types.intro.php
[phpmd]: https://phpmd.org/
[psr-0]: http://www.php-fig.org/psr/psr-0/
[psr-1]: http://www.php-fig.org/psr/psr-1/
[psr-2]: http://www.php-fig.org/psr/psr-2/
[psr-4]: http://www.php-fig.org/psr/psr-4/
[psr-5]: https://github.com/php-fig/fig-standards/blob/master/proposed/phpdoc.md
[psr-12]: https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md
[php-fig]: http://www.php-fig.org/
[rfc-2119]: http://www.ietf.org/rfc/rfc2119.txt
