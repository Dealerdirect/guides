---
permalink: /code-styling/mysql/
---

# Dealerdirect style guide: MySQL

This guide defines the MySQL coding standards we use at Dealerdirect. The intent
of this guide is to help developers create MySQL queries that are readable,
portable, easy to maintain and bug-free.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119][rfc2119].

## Table of Content

- [Files](#files)

- [Inline queries](#inline-queries)

  - [Queries in PHP files](#queries-in-php-files)

- [Database design](#database-design)

  - [Tables](#tables)
  - [Columns](#columns)
  - [Foreign keys](#foreign-keys)

- [Formatting](#formatting)

  - [Select queries](#select-queries)
  
    - [Subqueries](#subqueries)
  
  - [Joins](#joins)

  - [Delete queries](#delete-queries)

  - [Insert queries](#insert-queries)

  - [Update queries](#update-queries)

  - [Other select criteria](#other-select-criteria)

  - [Grouping](#grouping)

  - [Ordering](#ordering)

  - [Limit](#limit)

<!-- ======================================================================= -->

## Files

This section only applies to files that only contain MySQL statements. Files
that contain queries as part of programming code in another language SHOULD
adhere to the naming conventions for that language.

- All MySQL filenames MUST have the `.sql` extension.

- File names MAY NOT contain characters other than letters (a to z), numbers (0
  to 9), hyphen, `-` and dot `.`.

- File names MUST NOT start or end with a hyphen or dot.

- File names MUST NOT have consecutive hyphens or dots.

## Inline queries

Inline queries are sql queries in a file of another programming language, such
as a PHP file with sql queries.

### Queries in php files

Queries SHOULD be in [Nowdoc][php nowdoc format] format and MAY use
[Heredoc][php heredoc format]. The opening tag SHOULD be `<<<'SQL'` for Nowdoc 
or `<<<SQL` for Heredoc.

The query itself SHOULD NOT be indented. 

Good example

```php
<?php
class Foo
{
    public function bar()
    {
        $query = <<<'SQL'
SELECT id
FROM my_table
WHERE id > 10;
SQL;
    }
}
```

Bad example:

```php
<?php
class Foo
{
    public function bar()
    {
        $query = <<<'SQL'
        SELECT id
        FROM my_table
        WHERE id > 10;
SQL;

        $query = "SELECT id
        FROM my_table
        WHERE id > 10;";

        $query = '
SELECT id
FROM my_table
WHERE id > 10;';
    }
}
```

## Database design

### Tables

Table names

- MUST be in United States English
- MUST be in lower snake case
- MUST be singular
- MUST NOT match [reserved words][mysql reserved words]

Tables

- MUST use the `utf8` character set.
- MUST have an `id` column
- whose sole purpose is to link two (or more) other tables MUST NOT have an `id` column
- SHOULD have a `name` column

It is RECOMMENDED to have tables for all entities. This includes entities like
`color`. Queries SHOULD return the name, which can then be used in translations.

Good table names:

```txt
model
vehicle_type
color
```

Bad table names:

```txt
voertuig_type
models
vehicleType
```

### Columns

- Column names MUST be in United States English

- Column names MUST be in lower snake case

- Column names MUST be singular

- Column names SHOULD NOT match [reserved words][mysql reserved words]

- Columns for possibly undefined values MUST be nullable

- Columns for required values MUST NOT be nullable

- Columns MUST use the correct type for the information they need to store

- Columns MAY have a default value. If a nullable column has a default value,
  this default value SHOULD be `null`.

The `id` column

- MUST be named `id`
- MUST be unsigned
- SHOULD be of type integer
- SHOULD be the first column in a table definition

Good column names:

```txt
id
vehicle_type_id
```

Bad column names:

```txt
ID
vehicleTypeId
```

### Foreign keys

Columns that reference other tables MUST have a foreign key relation to that
other table. The name of the column SHOULD be of the form `<referenced_table_name>_id`

## Formatting

- Keywords MUST be written in upper case
- MySQL function names are considered keywords
- Table names and column names MUST be written as they are defined, in lower case
- Indents MUST be two spaces
- Keywords MUST be followed by exactly one space
- Keywords that consist of multiple words MUST be written on one line
- Queries SHOULD be parametrized statements
- Parameters SHOULD be specified by name
- Operators MUST be surrounded by one space
- Table names, column names and database names SHOULD NOT be surrounded with backticks
- If a column name matches a keyword, the use of backticks is REQUIRED.

### Select queries

- If a `SELECT` query consists of more than one table, the most important one
  SHOULD be used in the `FROM` clause

- Table names and column names related to keywords MUST be on the same line,
  except for the `SELECT` keyword (see below)

- If a `SELECT` query selects one column, this column name MAY be written
  on the same line as the `SELECT` keyword

- If a `SELECT` query selects more than one column, the column name MUST be
  written on separate lines with one indent level

- If `AND` and `OR` keywords are used in a `WHERE` clause or `ON` clause,
  brackets `()` are REQUIRED to specify precedence.

- You SHOULD NOT format fields that are returned. You MAY use functions to
  retrieve only a part of a `DATE/TIME/DATETIME` field if you are only
  interested in that part.

- You SHOULD avoid filtering (in `WHERE` or `ON` clauses) on potentially large
  data sets using column values as function inputs 

Good select queries:

```sql
SELECT column_a
FROM my_table
WHERE id = 5;

SELECT
  column_a,
  column_b,
  column_c
FROM my_table
WHERE id < 100
AND created_at >= '2017-01-01';

SELECT
  column_a,
  column_b,
  column_c
FROM my_table
WHERE (
  id < 100
  AND created_at >= '2017-01-01'
) OR (
  id < 50
  AND created_at > '2016-06-30 12:34:56'
);

SELECT
  YEAR(created_at) AS year_created
FROM my_table
WHERE id = 5;
```

Bad select queries:

```sql
SELECT column_a
FROM
  my_table
WHERE id = 5;

SELECT column_a
FROM my_table
WHERE
  id = 5;

SELECT column_a, column_b, column_c
FROM my_table
WHERE id < 100 AND created_at >= '2017-01-01';

-- SHA1 is calculated only once here
SELECT *
FROM my_table
WHERE column_a = SHA1('some text');

-- Missing brackets
SELECT
  column_a,
  column_b,
  column_c
FROM my_table
WHERE id < 100
AND created_at >= '2017-01-01'
OR id < 50
AND created_at > '2016-06-30 12:34:56';

-- created_at MUST be stored in a DATETIME column; use `DATE(created_at)`
-- if only the date is important in a specific case.
-- Also, `DATE_FORMAT()` is output formatting that SHOULD be done when
-- displaying the data, not when retrieving it. 
SELECT
  CONCAT(
    DATE_FORMAT(created_date,'%d-%m-%Y'),
    ' ',
    DATE_FORMAT(created_time,'%H:%i')
  ) AS created_at
FROM my_table;

-- Using a SHA1() function on each row of a potentially large data set
SELECT *
FROM my_table
WHERE SHA1(column_a) = 'da39a3ee5e6b4b0d3255bfef95601890afd80709';
```

#### Subqueries

Subqueries MUST be wrapped in parentheses and their result MUST be aliased.

If a subquery is used in a `SELECT` statement, the opening parenthesis MUST be
followed by a single space, the `SELECT` keyword, and the column name from which
data will be selected in the subquery. This way the `SELECT` keyword is indented
one level from the fields in the original query. Indenting levels for other
lines MUST be based on the indenting level of the `SELECT` keyword.

If a subquery is used in a `WHERE` clause, the opening parenthesis MUST be on
the same line as the line in which the subquery belongs. It MUST be followed by
a newline character and the subquery MUST be indented one level from the parent
at that location.

In both cases the closing parenthesis MUST be on a separate line and indented
one level less than the subquery. In a `SELECT` statement it MUST be followed by
a space, the keyword `AS`, another space, and an alias name. In a `WHERE` clause
the `AS` keyword results in an invalid query.

Good examples:

```sql
SELECT
  pt.id,
  pt.name,
  ( SELECT COUNT(*)
    FROM other_table AS ot
    WHERE ot.parent_table_id = pt.id
  ) AS sub
FROM parent_table AS pt;

-- Although this is valid, a JOIN would be more appropriate here.
SELECT
  pt.id,
  pt.name
FROM parent_table AS pt
WHERE pt.other_table_id IN (
  SELECT ot.id
  FROM other_table AS ot
  WHERE ot.id < 5
);
```

Bad examples:

```sql
SELECT
  pt.id,
  pt.name, (
  SELECT COUNT(*)
  FROM other_table AS ot
  WHERE ot.parent_table_id = pt.id
  ) AS sub
FROM parent_table AS pt;

SELECT
  pt.id,
  pt.name,
  ( SELECT COUNT(*)
    FROM other_table AS ot
    WHERE ot.parent_table_id = pt.id
  )
  AS sub
FROM parent_table AS pt;

SELECT
  pt.id,
  pt.name
FROM parent_table AS pt
WHERE pt.other_table_id IN ( SELECT ot.id
  FROM other_table AS ot
  WHERE ot.id < 5
);

SELECT
  pt.id,
  pt.name
FROM parent_table AS pt
WHERE pt.other_table_id IN (
  SELECT ot.id
  FROM other_table AS ot
  WHERE ot.id < 5);
```

### Joins

- The `JOIN` keyword MUST NOT be used without specifying the join type

- The preferred join type is `INNER JOIN`

- `LEFT JOIN` SHOULD only be used if the results may contain null values
  for the joined table

- `RIGHT JOIN` SHOULD be avoided

- The `ON` clause MUST be written on the next line with one indent level

Good join queries:

```sql
SELECT
  t1.id,
  t1.column_a,
  t2.column_b
FROM table1 AS t1
INNER JOIN table2 AS t2
  ON t1.id = t2.table1_id;

SELECT
  t1.id,
  t1.column_a
FROM table1 AS t1
LEFT JOIN table2 AS t2
  ON t1.id = t2.table1_id
  AND t2.table1_id IS NULL;

SELECT
  t1.id,
  t1.column_a
FROM table1 AS t1
LEFT JOIN table2 AS t2
  ON t1.id = t2.table1_id
  AND t2.updated_at IS NULL;
```

Bad join queries:

```sql
SELECT
  t1.id,
  t1.column_a,
  t2.column_b
FROM table1 AS t1
INNER JOIN table2 AS t2 ON t1.id = t2.table1_id;

SELECT
  t1.id,
  t1.column_a
FROM table1 AS t1
LEFT JOIN table2 AS t2
ON t1.id = t2.table1_id
AND t2.table1_id IS NULL;

SELECT
  t1.id,
  t1.column_a
FROM table1 AS t1
LEFT JOIN table2 AS t2
  ON t1.id = t2.table1_id AND t2.table1_id IS NULL;
```

### Delete queries

Delete queries should be used with care. The data model SHOULD prevent delete
actions that would result in data inconsistency. You MAY want to flag items for
deletion and perform the actual delete some time later using an automated
script. This allows users to restore data marked for deletion.

If a delete query is required, the table from which the rows are deleted MUST be
specified on the same line as the `DELETE FROM` keyword. Delete queries MUST
specify a `WHERE` clause.

Good delete queries:

```sql
DELETE FROM my_table
WHERE id = 5;
```

Bad delete queries:

```sql
-- Invalid: `FROM` must be on same line as `DELETE`
DELETE
FROM my_table
WHERE id = 5;

-- Invalid: table name must be on same line as `FROM`
DELETE FROM
my_table
WHERE id = 5;

-- Where clause should follow `WHERE` keyword
DELETE FROM my_table
WHERE
  id = 5;

-- Missing `WHERE` clause
DELETE FROM my_table;
```

### Insert queries

Insert queries MUST specify all columns in which data will be inserted. Omitted
columns MUST have a default value. The `id` column MUST NOT be specified in
insert queries unless those queries are used in some kind of data replication.

If an insert query specifies more than five columns, the `SET` syntax is
RECOMMENDED. In that case the `SET` keyword MUST follow the table name and the
column names MUST be indented one level.

Insert queries MAY specify more than one row.

Good insert queries:

```sql
INSERT INTO my_table (column_a, column_b)
VALUES ('A', 'B');

INSERT INTO my_table SET
  column_a = 'A',
  column_with_long_name = 'B',
  column_with_even_longer_name = 'C',
  column_d = 'D';

INSERT INTO my_table (
  column_a,
  column_b
) VALUES (
  'A',
  'B'
);

INSERT INTO my_table (column_a, column_b)
VALUES
  ('A', 'B'),
  ('C', 'D');
```

Bad insert queries:

```sql
INSERT INTO my_table (column_a, column_b) VALUES ('A', 'B');

INSERT INTO my_table (column_a, column_b) VALUES ('A', 'B'), ('C', 'D');
```

### Update queries

Update queries MUST have a `WHERE` clause that limits the number of rows that
will be updated. The where clause MUST NOT be indented.

The `UPDATE` keyword MUST be followed by the table name that will be affected.
The `SET` keyword MUST be on the next line and and MUST NOT be indented. Column
names SHOULD be on separate lines, followed by an equals sign and the new value
(all on the same line). If only one column will be updated, this MAY be on the
same line as the `SET` keyword.

Good update queries:

```sql
UPDATE my_table
SET column_a = 'new_value'
WHERE id = 5;

UPDATE my_table
SET
  column_a = 'new_value'
WHERE id = 5;

UPDATE my_table
SET
  column_a = 'new_value',
  column_b = 'other_value'
WHERE id = 5;
```

Bad update queries:

```sql
UPDATE my_table
SET column_a = 'new_value', column_b = 'other_value'
WHERE id = 5;
```

### Other select criteria

The `BETWEEN ... AND ...` keywords MUST be given on one line.

Good usage of `BETWEEN ... AND ...`

```sql
SELECT
  id
FROM my_table
WHERE id BETWEEN 10 AND 20;
```

Bad usage of `BETWEEN ... AND ...`

```sql
SELECT
  id
FROM my_table
WHERE id BETWEEN 10
AND 20;

SELECT
  id
FROM my_table
WHERE id BETWEEN
10 AND 20;
```

### Grouping

A `GROUP BY` clause MUST be used when aggregation functions are used. The
`SELECT` fields SHOULD contain all columns of the `GROUP BY` clause and
aggregated columns. Columns that are not part of the `GROUP BY` clause and not
aggregated, SHOULD NOT appear in the field list.

If aggregation functions are not used, `GROUP BY` also SHOULD NOT be used.
Instead use `SELECT DISTINCT`.

Good `GROUP BY` usage:

```sql
SELECT
  t1.column_a,
  MAX(t1.column_b)
FROM table1 AS t1
GROUP BY t1.column_a;

SELECT DISTINCT
  t1.column_a,
  t1.column_b
FROM table1 AS t1;
```

Bad `GROUP BY` usage:

```sql
SELECT
  t1.column_a,
  t1.column_b
FROM table1 AS t1
GROUP BY t1.column_a;
```

### Ordering

Every column name in an `ORDER BY` clause MUST be followed by either `ASC` or
`DESC` to specify the order direction.

The `ORDER BY` keyword SHOULD be followed by the column name or column names on
which to sort. If the line gets too long, column names MAY be given in a
multiline sequence with one column per line.

Good `ORDER BY` clauses:

```sql
ORDER BY table_alias.column_a DESC

ORDER BY table_alias.column_a DESC, table_alias.column_b ASC

ORDER BY
  table_alias.column_a DESC,
  table_alias.column_b ASC,
  other_table_alias.column_c ASC
```

Bad `ORDER BY` clauses:

```sql
ORDER BY table_alias.column_a

ORDER BY table_alias.column_a DESC, table_alias.column_b ASC, other_table_alias.column_c ASC
```

### Limit

A `LIMIT` clause SHOULD only be used together with an `ORDER BY` clause.
If an offset is given, it MUST follow directly behind the `LIMIT` keyword.

A `LIMIT` clause MUST be in either of the two following formats:

- `LIMIT 10`
- `LIMIT 10 OFFSET 20`

[rfc2119]: http://www.ietf.org/rfc/rfc2119.txt
[mysql reserved words]: https://dev.mysql.com/doc/refman/5.7/en/keywords.html
[php heredoc format]: http://php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc
[php nowdoc format]: http://php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc
