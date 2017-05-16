---
permalink: /code-styling/php/
---

# Dealerdirect Style Guide: PHP

> _"Any fool can write code that a computer can understand.
> Good programmers write code humans can understand."_

This guide defines the PHP coding standards we use at Dealerdirect. The intent
of this guide is to reduce cognitive friction when scanning code from different
authors, gain a higher code quality and reduce the risk of security issue's
and errors.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119][rfc-2119].

## Table of Contents

- 1. [Introduction](#1-introduction)

## 1. Introduction

This specification is based on PHP standards created by the
[PHP Framework Interop Group][php-fig] and is completely compatible with the
following specifications:

- [PSR-1: Basic Coding Standard][psr-1]
- [PSR-2: Coding Style Guide][psr-2]
- [PSR-5: PHPDoc][psr-5] (proposed)
- [PSR-12: Extended Coding Style Guide][psr-12] (proposed)

These standards form a pretty good base for an styling guide, nevertheless,
they do not cover every aspect of a code style. For example: the use of alias
and deprecated functions in PHP is perfectly fine in the PSR standards.

Dealerdirect also has a lot of existing code bases. Especially older code
simply cannot fully comply with the PSR standards. This is why this guide has
been developed.

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

Throughout this document, any instructions MAY be ignored if they do not exist
in versions of PHP supported by the specific project.

**Icons used in this guide**:  

- ![bronze] Checked by our Bronze PHP CodeSniffer ruleset  
- ![silver] Checked by our Silver PHP CodeSniffer ruleset  
- ![gold] Checked by our Gold PHP CodeSniffer ruleset  
- ![platinum] Checked by our Platinum PHP CodeSniffer ruleset  
- ![diamond] Checked by our Diamond PHP CodeSniffer ruleset  
- :tada: Can be automatically fixed by our PHP CodeSniffer rulesets  
- :passport_control: Checked by our PHP Storm configuration  
- :satellite: Checked by our [PHP Mess Detector][phpmd] rulset  
- :books: [PHP Framework Interop Group][php-fig] standard

## 2. Basics

### 2.1. Files

#### 2.1.1. Valid syntax

&#11034; &#11034; &#11034; &#11034;

PHP code MUST be in valid PHP Syntax and MUST be able to pass the `php -l`
command.

#### 2.1.2. Character encoding

&#11034; &#11034; &#11034; &#11034;

PHP code MUST use only UTF-8 file encoding without BOM.

_:books: [PSR-1][psr-1] 2.2. Character Encoding_

#### 2.1.3. PHP tags

&#11034; &#11034; &#11034; &#11034;

PHP code MUST use the long `<?php ?>` tags or the short-echo `<?= ?>` tags;
it MUST NOT use the other tag variations.

_:books: [PSR-1][psr-1] 2.1. PHP Tags_

#### 2.1.4. Omit PHP closing tag

&#11034; &#11034; &#11034; &#11034;

The closing `?>` tag MUST be omitted from files containing only PHP.

#### 2.1.5 Side effects

&#11034; &#11034; &#11034; &#11034;

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
<?php
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
<?php
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

_:books: [PSR-1][psr-1] 2.3. Side Effects_

#### ?.?.?. Namespaces and class names

&#11034; &#11034; &#11034; &#11034;

Namespaces and classes MUST follow an "autoloading" PSR: [[PSR-0][psr-0],
[PSR-4][psr-4]].

This means each class is in a file by itself, and is in a namespace of at
least one level: a top-level vendor name.

Class names MUST be declared in `StudlyCaps`.

Code written for PHP 5.3 and after MUST use formal namespaces.

For example:

```php
<?php
// PHP 5.3 and later:
namespace Vendor\Model;

class Foo
{
}
```

Code written for 5.2.x and before SHOULD use the pseudo-namespacing convention
of `Vendor_` prefixes on class names.

```php
<?php
// PHP 5.2.x and earlier:
class Vendor_Model_Foo
{
}
```

_:books: [PSR-1][psr-1] 3. Namespace and Class Names_

### ?.?.?. Class Constants, Properties, and Methods

The term "class" refers to all classes, interfaces, and traits.

#### ?.?.?. Constants

&#11034; &#11034; &#11034; &#11034;

Class constants MUST be declared in all upper case with underscore separators.
For example:

```php
<?php
namespace Vendor\Model;
24
class Foo
{
    const VERSION = '1.0';
    const DATE_APPROVED = '2012-06-01';
}
```

_:books: [PSR-1][psr-1] 4.1. Constants_

#### ?.?.?. Properties

&#11034; &#11034; &#11034; &#11034;

This guide intentionally avoids any recommendation regarding the use of
`$StudlyCaps`, `$camelCase`, or `$under_score` property names.

Whatever naming convention is used SHOULD be applied consistently within a
reasonable scope. That scope may be vendor-level, package-level, class-level,
or method-level.

_:books: [PSR-1][psr-1] 4.2. Properties_

#### ?.?.?. Methods

&#11034; &#11034; &#11034; &#11034;

Method names MUST be declared in `camelCase()`.

_:books: [PSR-1][psr-1] 4.2. Methods_

[bronze]: images/bronze-emoji.png
[silver]: images/silver-emoji.png
[gold]: images/gold-emoji.png
[platinum]: images/platinum-emoji.png
[diamond]: images/diamond-emoji.png
[phpmd]: https://phpmd.org/
[psr-0]: http://www.php-fig.org/psr/psr-0/
[psr-1]: http://www.php-fig.org/psr/psr-1/
[psr-2]: http://www.php-fig.org/psr/psr-2/
[psr-4]: http://www.php-fig.org/psr/psr-4/
[psr-5]: https://github.com/php-fig/fig-standards/blob/master/proposed/phpdoc.md
[psr-12]: https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md
[php-fig]: http://www.php-fig.org/
[rfc-2119]: http://www.ietf.org/rfc/rfc2119.txt
