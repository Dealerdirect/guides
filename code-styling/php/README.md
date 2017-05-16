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

<p align="center">
  <br>
  ![Levels](images/levels.jpg)  
  <br>
</p>

This guide uses different levels of code style compliances. This in order to
support new and legacy code. This gives us the ability to slowly upgrade the
level on each code base.

![bronze] **Bronze**

> This is the lowest level possible to which at least every single piece of code
> MUST comply with.

> - The code MUST be runnable!
> - Detections for obvious bugs.

![silver] **Silver**

> This level only contains styling rules that SHALL NOT require any refactoring
> of code and SHOULD NOT break any code. Therefor every code base SHOULD be able
> to comply with this level.

> - Whitespace / new line related sniffs.

![gold] **Gold**

> All code SHOULD be able to reach this level with some refactoring effort.

> - Deprecation & compatibility detections.
> - Detection of use of forbidden function.
> - Some basic code documentation checks.
> - Best practices.

![platinum] **Platinum**

> Not all code MAY be able to reach this level, especially older code bases.
> Newly created codebases MUST comply at least to this level.

> - Full compliance with PSR-1, 2, 5 & 12.
> - Micro optimisations.
> - More extensive best practices.

![diamond] **Diamond**

> All newer created code bases SHOULD be able to comply with this level.

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
![bronze] Checked by our Bronze PHP CodeSniffer ruleset  
![silver] Checked by our Silver PHP CodeSniffer ruleset  
![gold] Checked by our Gold PHP CodeSniffer ruleset  
![platinum] Checked by our Platinum PHP CodeSniffer ruleset  
![diamond] Checked by our Diamond PHP CodeSniffer ruleset  
:tada: Can be automatically fixed by our PHP CodeSniffer rulesets  
:passport_control: Checked by our PHP Storm configuration  
:satellite: Checked by our [PHP Mess Detector][phpmd] rulset  
:books: [PHP Framework Interop Group][php-fig] standard

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

_:books: [PSR-1] 2.1 PHP Tags_

#### 2.1.4. Omit PHP closing tag

&#11034; &#11034; &#11034; &#11034;

The closing `?>` tag MUST be omitted from files containing only PHP.

[bronze]: images/bronze-emoji.png
[silver]: images/silver-emoji.png
[gold]: images/gold-emoji.png
[platinum]: images/platinum-emoji.png
[diamond]: images/diamond-emoji.png
[phpmd]: https://phpmd.org/
[psr-1]: http://www.php-fig.org/psr/psr-1/
[psr-2]: http://www.php-fig.org/psr/psr-2/
[psr-5]: https://github.com/php-fig/fig-standards/blob/master/proposed/phpdoc.md
[psr-12]: https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md
[php-fig]: http://www.php-fig.org/
[rfc-2119]: http://www.ietf.org/rfc/rfc2119.txt
