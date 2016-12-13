# Dealerdirect style guide: Markdown

> _“Life moves so fast. You gotta document the good times, man.”_ ~ Big Boi

This guide defines the Markdown coding standards we use at Dealerdirect. The intent of this guide is to reduce cognitive
friction when scanning the Markdown source from different author, gain documentation of higher quality and gain more
compatibility across different Markdown renders.

For almost every language a style guide exists, somehow Markdown is an exception. There are several attempts,
but none of the guides seems to be complete or they just simply cover (almost) every single option Markdown
has to offer. As a result, the Dealerdirect Markdown style guide was born.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119][rfc2119].

## Table of contents

- [1. Basics](#1-basics)

  - [1.1. Filenames](#11-filenames)
  - [1.2. Files](#12-files)
  - [1.3. Language](#13-language)

- [2. Headings](#2-headings)

- [3. Emphasis](#3-emphasis)

- [4. Blockquotes](#4-blockquotes)

- [5. Lists](#5-lists)

  - [5.1. Unordered lists](#51-unordered-lists)
  - [5.2. Ordered lists](#52-ordered-lists)
  - [5.3. Task lists](#53-task-lists)

- [6. Horizontal rules](#6-horizontal-rules)

- [7. Code](#7-code)

  - [7.1. Inline code](#71-inline-code)
  - [7.2. Code blocks](#72-code-blocks)

- [8. Links](#8-links)

  - [8.1. Inline links](#81-inline-links)
  - [8.2. Reference links](#82-reference-links)
  - [8.3. Automatic links](#83-automatic-links)
  - [8.4. Linking to books, blog and other external documents](#84-linking-to-books-blogs-and-other-external-documents)

- [9. Images](#9-images)

- [10. Tables](#10-tables)

- [11. Emoji](#11-emoji)

- [12. HTML](#12-html)

## 1. Basics

## 1.1. Filenames

- All Markdown files MUST have the `.md` file extension.

- It is RECOMMENDED to base filenames on the top-header level title.

- Filenames MUST be lowercase, unless it is one of the following:
  - `README.md`
  - `LICENSE.md`
  - `CONTRIBUTING.md`
  - `CHANGELOG.md`

- Filenames MUST NOT start with articles (e.g. `the`, `a`, `an`).

- Filenames MUST NOT contain special characters, it is RECOMMENDED to replace them with hyphens.

- Filenames MUST NOT contain spaces and/or punctuation characters, it is RECOMMENDED to replace them with hyphens.

- Filenames MUST NOT start or end with a hyphen.

- Filenames MUST NOT have consecutive hyphens.

Good filenames:

```
markdown-style-guide.md
introduction-into-coding.md
hello-world.md
```

Bad filenames:

```
.markdown-style.guide.md
-introduction-into-coding.md
the-hello-world-example.md
double--hypens.md
```

### 1.2 Files

- Files MUST use the Unix LF (line feed) line ending.

- Files MUST only use UTF-8 encoding without BOM.

- Files MUST end with a single blank line. [^1](#references)

- Lines SHOULD NOT be longer than 120 characters; lines longer SHOULD be split into multiple subsequent lines.

- It is RECOMMENDED to break large paragraphs logically when trying to keep lines under 120 characters:
  <!--alex ignore period-->
  - _sentences_: after a period (`.`), question (`?`) or exclamation mark (`!`)
  - _clauses_: after words like `and`, `which`, `if` ... `then`, commas (`,`)

- Lines SHOULD NOT be split into multiple line using word-breaks.

- Consecutive blank lines MUST NOT exists, with the exception of code blocks where the code style guide for the coding 
  language applies.

- There MUST NOT be trailing whitespace at the end of non-blank lines unless
  it has a function such as indicating a line break.

- In the rare case a line break is absolutely needed, one SHALL end the line with exactly two spaces.

- There MUST NOT be trailing whitespace at the end of blank lines.

- Lines MUST use an indent of 2 spaces and MUST NOT use tabs for indenting.

- A single space MUST be used after sentences, when followed by another sentence.

- A file MUST start with a first level header on the first line.

### 1.3 Language

<!--alex ignore american-->
- The language MUST be English, and in particular American English.

- Spelling and grammar MUST be correct.

- Files SHOULD NOT contain gender favoring, polarizing, race related, religion inconsiderate, or
  other unequal phrasing in its text.

## 2. Headings

- Headers MUST be in `atx` style, and MUST NOT contain a closing hash (`#`) character.

- There MUST be a single space between the hash (`#`) character and the header text.

  _Correct example_:
  
  ```Markdown
  # This is a correct header
  ```
  
  _Incorrect examples_:
  
  ```Markdown
  #This one is not correct
  
  # This one if also not correct #
  
  Neither is this header
  ----------------------
  ```

- Headers MUST NOT be longer then 60 characters. Longer headers MUST be re-evaluated.

- Headers MUST be preceded and followed by a newline. There is on exception,
  the header at the start of the document MUST NOT be preceded by a newline.

- Headers MUST NOT increase by more than one "level" from one header to the next.

  _Correct example_:
  
  ```Markdown
  # First level header
  
  ## Next level header
  ```
  
  _Incorrect example_:
  
  ```Markdown
  # First level header
  
  ### Next level header
  ```

- The first letter of a header MUST be upper case, unless it is a word that always starts with lowercase letters.

- The other letters SHOULD have the same case they would have in the middle of a sentence.

  _Correct examples_:
  
  ```Markdown
  # This is a correct example of a header text
  ```
  
  ```Markdown
  # int main
  ```
  
  _Incorrect example_:
  
  ```Markdown
  # This is an Incorrect Example
  ```

- Headers MUST NOT end with a punctuation character (`.`, `,`, `!`, `?`, `:`, `;`)

  _Correct example_:
  
  ```Markdown
  # How to install this software
  ```

  _Incorrect examples_:
  
  ```Markdown
  # How to install this software:
  ```

  ```Markdown
  # Hello world!
  ```

- Numbered headers MUST be followed by a point (`.`) character after the number.

  _Correct example_:
  
  ```Markdown
  ### 3.2.1. This header is numbered correctly
  ```
  
  _Incorrect example_:
  
  ```Markdown
  ### 3.2.1 This header is missing a point
  ```

- Headers define sections. A section MUST NOT be empty.

  _Correct example_:
  
  ```Markdown
  ### 3.2.1. This it the first section
  
  Lorem ipsum is great for this purpose!
  
  ### 3.2.2. The start of the second section
  ```

  _Incorrect example_:
  
  ```Markdown
  ### 3.2.1. This it the first section

  ### 3.2.2. The start of the second section
  ```
  
## 3. Emphasis

- Bold text MUST use the double asterisk (`**`) format.
  
  _Correct example_:

  ```Markdown
  **This text is printed in bold!**
  ```
  
  _Incorrect example_:
  
  ```Markdown
  __This text is also printed in bold...__
  ```

- Italic text MUST use the underscore (`_`) format.
  
  _Correct example_:

  ```Markdown
  _This text is printed in italic!_
  ```
  
  _Incorrect example_:
  
  ```Markdown
  *This text is also printed in italic...*
  ```

- Striketrough MUST NOT be used. [^2](#references)

- Uppercase text for emphasis SHOULD NOT be used, use emphasis constructs like **bold** or _italic_ instead.
  The following keywords are excepted from this rule (as defined in [RFC 2119][rfc2119]):
  > "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
  > "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL"

  _Correct example_:
  
  ```Markdown
  **Note**: One SHALL NOT emphasis in uppercase.
  ```
  
  _Incorrect example_:
  
  ```Markdown
  NOTE: IT IS NOT RECOMMENDED TO DO THIS!
  ```

- Emphasis constructs SHOULD NOT be used to introduce a multi line named section: use headers instead.

## 4. Blockquotes

- Blockquotes MUST use the greater-than (`>`) character.

- The greater-than character MUST be followed by a single space.

  _Correct example_:
  
  ```Markdown
  > This is a pretty nice blockquote :)
  ```
  _Incorrect example_:
  
  ```Markdown
  >This blockquote is lacking some space.
  ```

- Consecutive lines within a blockquote MUST also start with the greather-than (`>`) character.

  _Correct example_:
  
  ```Markdown
  > I told my wife she was drawing her eyebrows too high.
  > She looked surprised.
  ```
  _Incorrect example_:
  
  ```Markdown
  > I tried to catch fog yesterday.
  Mist.
  ```

- Empty lines within a blockquote MUST use the greater-than (`>`) characater.

  _Correct example_:
  
  ```Markdown
  > Parallel lines have so much in common.
  >
  > It's a shame they'll never meet.
  ```
  
  _Incorrect example_:
  
  ```Markdown
  > You're not completely useless...
  
  > You can always serve as a bad example.
  ```

## 5. Lists

- Lists MUST be preceded and followed by a newline.

  _Correct example_:
  
  ```Markdown
  Shopping list:
  
  - Milk
  - Bread
  - Cheese
  ```
  
  _Incorrect example_:
  
  ```Markdown
  Shopping list:
  - Milk
  - Bread
  - Cheese
  ```

- The first level of items in a list MUST NOT be indented.

  _Correct example_:
  
  ```Markdown
  Shopping list:
  
  - Milk
  - Bread
  - Cheese
  ```

  _Incorrect example_:
  
  ```Markdown
  Shopping list:
  
    - Milk
    - Bread
    - Cheese
  ```

- Subitems of a list MUST be indented by 2 spaces and MUST be preceded and followed by a newline.

  _Correct example_:
  
  ```Markdown
  - First level
  
    - First subitem
    - Second subitem
    
  - Second level
  ```
  
  _Incorrect example_:
  
  ```Markdown
  - First level
    - First subitem
    - Second subitem
  - Second level
  ```

- When one or more items in a list spans more than one line, the list is REQUIRED to have newlines between each item. 

  _Correct example_:
  
  ```Markdown
  - First item
  
  - This second item spans two lines
    Not because this is needed, but hey, we need an example.
    
  - Third item
  ```
  
  _Incorrect example_:
  
  ```Markdown
  - First item
  - This second item spans two lines
    Not because this is needed, but hey, we need an example.
  - Third item
  ```

- The indentation what comes inside list MUST be same as the item it is in.

  _Correct example_:
  
  ```Markdown
  - This item spans two lines
    This is the second line
  ```
  
  _Incorrect example_:
  
  ```Markdown
  - This item spans two lines
   This is the second line
  ```

- Each list item MUST have the same case as it would have if
  it were concatenated with the sentence that comes before the list.

  _Examples_:
  
  ```Markdown
  I want to eat:

  - apples
  - bananas
  - grapes
  
  This is because one would say: "I want to eat apples.".
  ```
  
  ```Markdown
  # How to ride a bike

  - Get on top of the bike.
  - Put your feet on the pedal.
  - Make the pedal turn.
  
  This is because one would say: "How to ride a bike. Get on top of the bike."
  ```

- A list item MUST be punctuated if either it contains multiple sentences, paragraphs or
  <!--alex ignore period-->
  starts with an upper case letter. The punctuation MUST BE omitted if it would be a period (`.`).

  _Correct examples_:
  
  ```Markdown
  - apples
  - bananas
  - grapes
  ```
  
  ```Markdown
  - type in some code
  - Type in some more.
  - does it compile?
  - ship it!
  - goto first item. Start all over again.
  ```

### 5.1. Unordered lists

- Items in an ordered list MUST be created using a hyphen (`-`) character.

- The hyphen (`-`) character MUST be followed by a space.

  _Correct example_:
  
  ```Markdown
  - First item
  - Second item
  - Third item
  ```
  
  _Incorrect examples_:
  
  ```Markdown
  -First item
  -Second item
  -  Third item
  ```
  
  ```Markdown
  * First item
  * Second item
  * Third item
  ```
  
  ```Markdown
  + First item
  + Second item
  + Third item
  ```

### 5.2. Ordered lists

- It is RECOMMENDED to use unordered lists unless you intent to refer to items by their number.

- Ordered list MUST increment by one, relative to the starting point.

- Ordered list markers MUST be followed by a point (`.`) character and a space character.

  _Correct example_:
  
  ```Markdown
  1. First item
  2. Second item
  3. Third item
  ```
  
  _Incorrect examples_:
  
  ```Markdown
  1 First item
  2 Second item
  3 Third item
  ```

  ```Markdown
  1. First item
  1. Second item
  1. Third item
  ```

  ```Markdown
  1.First item
  3.Second item
  4.Third item
  ```

### 5.3. Task lists

- It is RECOMMENDED to use unordered lists for tasks list unless you intent to refer to items by their number.

- Task checkbox MUST use the opening bracket (`[`) and closing bracket (`]`) characters.

- Uncompleted tasks MUST use the space character.

- Completed tasks MUST use the lower case x character.

- The task checkbox MUST be followed by a space character.

  _Correct example_:
  
  ```Markdown
  Todo:
  
  - [x] Create plan.
  - [ ] Rule the world!
  ```
  
  _Incorrect example_:
  ```Markdown
  Todo:
  
  - [X]Create plan.
  - []Rule the world!
  ```

## 6. Horizontal rules

- Hyphens (`-`) MUST be used for creating horizontal rules.
- A horizontal rule MUST be 80 characters wide and MUST NOT contain spaces.
- Horizontal rules MUST NOT be used to indicate the end of a header.
- Horizontal rules MUST be preceded and followed by a newline

```Markdown
This is an example of a horizontal rule.

-------------------------------------------------------------------------------

80 Hyphens, preceded and followed by a newline.
```

## 7. Code

### 7.1. Inline code

- Inline code MUST use a backtick (`` ` ``) character.

- Inline code SHOULD use a single backtick (`` ` ``) character.

- There MUST NOT be any spaces between the backticks (`` ` ``) and the code.

  _Correct example_:
  
  ```Markdown
  Please use `apt-get` to install packages on your Debian system.
  ```
  
  _Incorrect example_:
  
  ```Markdown
  Please use ` apt-get ` to install packages on your Debian system.
  ```

- Inline code containing backticks MAY use double backticks (``` `` ```) and in really rare cases the inline code
  contains double backticks, triple backticks (```` ``` ````) MAY be used.

  _Example_:
  
  ```Markdown
  Displaying a single backtick (`` ` ``) is actually a very special and rare case.
  ```

- Shell code MUST NOT be prefixed with a dollar character (`$`).

  _Correct example_:
  
  ```Markdown
  Please use `apt-get` to install packages on your Debian system.
  ```
  
  _Incorrect example_:
  
  ```Markdown
  Please use `$ apt-get` to install packages on your Debian system.
  ```

- It is RECOMMENDED to use inline code for:

  - executables
  - file paths
  - version numbers
  - capitalized explanation of abbreviations
  - specific computer and programming terms not found in the dictionary

### 7.2. Code blocks

- Code blocks MUST NOT be indent, unless the code block is placed inside a list.

- Code blocks MUST be preceded and followed by a newline.

- Code blocks MUST be fenced using three backtick characters (```` ``` ````).

  _Correct example_:
  
  ```Markdown
      To generate a PHP info page use this code:
  
      ```PHP
      <?php
        phpinfo();
      ```
  ```

  _Incorrect example_:
  
  ```Markdown
  To generate a PHP info page use this code:
  
    <?php
      phpinfo();
  ```

- Every code block MUST have a language flag specified.

- There MUST NOT be spacing between the backticks and the language flag.

- When the code block is used to display monospaced text, `txt` MUST be used as the language flag.

  _Correct example_:
  
  ```Markdown
      ```txt
      This is monospaced text.
      ```
  ```

- Shell code MUST NOT be prefixed with a dollar character (`$`), unless you will be showing the command output on
  the same code block.

  _Correct example_:
  
  ```Markdown
      ```txt
      $ rubocop .
      
      Inspecting 16 files
      ................
    
      16 files inspected, no offenses detected
      ```
  ```

  _Incorrect example_:
  
  ```Markdown
      ```txt
      $ gem install rubocop
      $ rubocop .
      ```
  ```

- Code inside a code block MUST NOT be indented.

_Note_: Code blocks shown inside the above code block examples are indented. Even tough this is against the rules in
this guide, it is the only way of displaying a Markdown fenced code block inside a Markdown fenced code block.

## 8. Links

- The text that needs to be a link MUST be delimited by square brackets (`[`, `]`).

- Links to internal pages MUST use relative paths.

- Links MUST NOT have an extra trailing slash (`/`)

  _Correct example_:
  
  ```Markdown
  <http://www.example.com>
  ```
  
  _Incorrect example_:
  
  ```Markdown
  <http://www.example.com/>
  ```

- All links, internal and external, MUST work.

### 8.1. Inline links

- Inline links SHOULD only be used for internal links and SHOULD NOT be used for external links, unless you are trying
  to represent a list of links (e.g. A book list).

- The link itself MUST be wrapped into parentheses (`(`, `)`).

  _Example_:
  
  ```Markdown
  [See the contributing guide for more info](/CONTRIBUTING.md)
  ```

- There MUST NOT be spacing between brackets of the link text and the parentheses containing the link.

  _Correct example_:
  
  ```Markdown
  [See the contributing guide for more info](/CONTRIBUTING.md)
  ```
  
  _Incorrect example_:
  
  ```Markdown
  [See the contributing guide for more info] (/CONTRIBUTING.md)
  ```

- Link titles MUST be surrounded double quotes (`"`), with a space between the link and the link title.

  _Correct example_:
  
  ```Markdown
  [See the contributing guide for more info](/CONTRIBUTING.md "Contributing guide")
  ```
  
  _Incorrect example_:
  
  ```Markdown
  [See the contributing guide for more info](/CONTRIBUTING.md 'Contributing guide')
  ```

### 8.2. Reference links

- Reference links SHOULD only be used for external links and SHOULD NOT be used for internal links.

- The reference label MUST be delimited by square brackets and MUST NOT be omitted.

  _Correct example_:
  
  ```Markdown
  [Visit Google][google]
  ```
  
  _Incorrect example_:
  
  ```Markdown
  [google]
  ```

- There MUST NOT be spacing between the link and reference label brackets.

  _Correct example_:
  
  ```Markdown
  [Visit Google][google]
  ```
  
  _Incorrect example_:
  
  ```Markdown
  [Visit Google] [google]
  ```

- In case the link text equals the reference label, the contents of the reference label SHOULD be omitted.

  _Correct example_:
  
  ```Markdown
  [google][]
  ```
  
  _Incorrect example_:
  
  ```Markdown
  [google][google]
  ```

- Reference labels MUST be specified in lower case.

  _Correct example_:
  
  ```Markdown
  [Visit Google][google]
  ```
  
  _Incorrect examples_:
  
  ```Markdown
  [Visit Google][]
  [Visit Google][Google]
  ```

- A reference link label MUST match a reference link definition. Undefined references are not allowed.

  _Correct example_:
  
  ```Markdown
  [Google][google]
  
  [google]: http://www.google.com
  ```
  
  _Incorrect example_:
  
  ```Markdown
  [Google][google]
  ```

- The reference link definition MUST be delimited by square brackets, followed by semicolon (`:`) and a space.

  _Correct example_:
  
  ```Markdown
  [google]: http://www.google.com
  ```
  
  _Incorrect examples_:
  
  ```Markdown
  [google]:http://www.google.com
  [google] :http://www.google.com
  [google] : http://www.google.com
  ```

- Link titles MUST be surrounded double quotes (`"`), with a space between the link and the link title.

  _Correct example_:
  
  ```Markdown
  [google]: http://www.google.com "Google Search"
  ```
  
  _Incorrect example_:
  
  ```Markdown
  [google]: http://www.google.com 'Google Search'
  ```

- Reference link definitions MUST be placed at the end of the file.

- There MUST NOT be any unused link definitions in the file.

- Each link definition MUST be unique, duplicates are not allowed.

  _Incorrect example_:
  
  ```Markdown
  [google]: http://www.google.com "Google Search"
  [google]: http://www.google.nl "Google Search (Dutch)"
  ```

### 8.3. Automatic links

- Automatic links MUST be enclosed inside less-than (`<`) and greater-than (`>`) characters.

  _Example_:
  
  ```Markdown
  <http://www.google.com>
  ```

- Automatic links MUST start with a protocol.

  _Correct examples_:
  
  ```Markdown
  <http://www.google.com>
  <mailto:opensource@dealerdirect.nl>
  ```
  
  _Incorrect examples_:
  ```Markdown
  <www.google.com>
  <opensource@dealerdirect.nl>
  ```

- Email addresses MUST use automatic links.

  _Correct example_:
  
  ```Markdown
  Please mail us for questions at <mailto:opensource@dealerdirect.nl>
  ```
  
  _Incorrect example_:
  
  ```Markdown
  Please mail us for questions at opensource@dealerdirect.nl
  ```

- Links to websites SHOULD NOT use automatic links, unless the full link is displayed.

### 8.4. Linking to books, blogs and other external documents

- The actual book/blog/document title MUST be linked.

  _Correct example_:
  
  ```Markdown
  [A Small Book of Random Numbers: Volume 1](https://www.amazon.co.uk/dp/1452818363)
  ```
  
  _Incorrect example_:
  
  ```Markdown
  Read [this](https://www.amazon.co.uk/dp/1452818363) book.
  ```

- The author MUST not be part of the link, is optional and MUST be separated using a dash (`-`) surrounded by spaces.

  _Correct example_:
  
  ```Markdown
  [A Small Book of Random Numbers: Volume 1](https://www.amazon.co.uk/dp/1452818363) - James McNalley
  ```

  _Incorrect examples_:
  
  ```Markdown
  [A Small Book of Random Numbers: Volume 1 by James McNally](https://www.amazon.co.uk/dp/1452818363)
  [A Small Book of Random Numbers: Volume 1 - James McNally](https://www.amazon.co.uk/dp/1452818363)
  [A Small Book of Random Numbers: Volume 1](https://www.amazon.co.uk/dp/1452818363)-James McNalley
  [A Small Book of Random Numbers: Volume 1](https://www.amazon.co.uk/dp/1452818363) James McNalley
  ```

- In case the link points to a binary version of the book or document, the format MUST be specified between 
  parentheses (`(`, `)`).
  
  _Correct examples_:
  
  ```Markdown
  [Barcode Overview](http://www.tec-it.com/download/PDF/Barcode_Reference_EN.pdf) (PDF)
  [Code Connected Volume 1](http://hintjens.wdfiles.com/local--files/main:files/cc1pe.pdf) - Pieter Hintjens (PDF)
  ```

  _Incorrect examples_:
  
  ```Markdown
  [Barcode Overview](http://www.tec-it.com/download/PDF/Barcode_Reference_EN.pdf)
  [Code Connected Volume 1](http://hintjens.wdfiles.com/local--files/main:files/cc1pe.pdf) - Pieter Hintjens(PDF)
  ```

- If the book or document is available in multiple formats, it is RECOMMENDED to add linked additional formats in the
  format specification.
  
  _Correct example_:
  
  ```Markdown
  [A Unix Person's Guide to PowerShell][powershellpdf] - Matt Penny (PDF, [ePub][powershellepub])
  ```
  
  _Incorrect example_:
  
  ```Markdown
  [A Unix Person's Guide to PowerShell][powershellpdf] - Matt Penny (PDF)
  [A Unix Person's Guide to PowerShell][powershellepub] - Matt Penny (ePub)
  ```
  
## 9. Images

- Images MUST follow the same syntax as links, but preceded with an exclamation (`!`) character.
- Images MUST follow all same rules as links.
- Links to internal images MUST use the inline link style and use relative paths.
- Links to external images MUST use the reference link style.

_Examples_:

```Markdown
![alt text](image.png "Image title")

[![Google][first google logo]][google]

[google]: http://www.google.com "Google Search"
[first google logo]: https://en.wikipedia.org/wiki/Google_logo#/media/File:First-google-logo.gif "Google Logo"
```

## 10. Tables

- Tables MUST NOT be indent, unless the table is placed inside a list.
- Tables MUST be preceded and followed by a newline.
- Tables MUST be fenced with pipes (`|`).
- The table opening pipe (`|`) MUST be followed by a space character.
- The table closing pipe (`|`) MUST be preceded by a space character.
- Table header and body MUST be separated using at least three hyphens (`---`), wider column MUST match column width.
- Pipe characters, delimiting columns, MUST be preceded and followed by a space character.
- All pipe characters in a table MUST be align vertically.
- Column width SHALL be determined by the longest cell in the column.

_Correct example_:

```Markdown
| Tables  | Are     | Cool  |
| ------- | ------- | ----- |
| apples  | a lot   | $1600 |
| bananas | a dozen | $12   |
| grapes  | one     | $1    |
```

_Incorrect example_:

```Markdown
Tables | Are | Cool
--- | --- | ---
apples | a lot | $1600
bananas | a dozen | $12
grapes | one | $1
```

- Tables column contents MAY be aligned using the semicolon (`:`) in the body and header separator.

  _Example_:
  
  ```Markdown
  | Left    | Centered | Right |
  | :------ | :------: | ----: |
  | apples  | a lot    | $1600 |
  | bananas | a dozen  | $12   |
  | grapes  | one      | $1    |
  ```

## 11. Emoji

- It is RECOMMENDED to use emoji, they help convey tone and intent, both of which are frequently lost in translation
  when communicating online.

- In order to maintain maximum compatibility with different platform, used emoji MUST be listed on the emoji cheat 
  sheet, found on the following URL:

  <http://www.emoji-cheat-sheet.com>

## 12. HTML

- One SHOULD NOT not to use HTML, unless this is absolutely necessary.
- The HTML code MUST be preceded and followed by a newline.
- Markdown MUST NOT be used inside the HTML, use plain HTML instead.

_Example_:

```Markdown
This text is normal **Markdown**.

<p align="center">
  This text is centered using <b>HTML</b>.
</p>

This text is normal **Markdown** again.
```

## References

^1: [No newline at end of file][nonewline] - Mike Burns

^2: [MARKDOWN, STRIKETHROUGH, AND SLACK][strikethrough] - John Gruber

## License

The MIT License (MIT)

Copyright (c) 2016 Dealerdirect B.V.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[rfc2119]: http://www.ietf.org/rfc/rfc2119.txt
[nonewline]: https://robots.thoughtbot.com/no-newline-at-end-of-file
[strikethrough]: https://daringfireball.net/linked/2015/11/05/markdown-strikethrough-slack
