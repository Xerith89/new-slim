## Simple React UI

[![CircleCI](https://circleci.com/gh/Xerith89/simple-react-ui.svg?style=svg)](https://circleci.com/gh/Xerith89/simple-react-ui)

## What Is It?

Simple React UI is a collection of reusable components designed to make it easy to get started with building UIs in ReactJS
Tasks such as pagination, filtering and sorting data are abstracted away whilst still allowing custom style and functionality rules.

## How To Use

The majority of the components are kept in the core module. Simply clone the repo, do npm install for dependencies and then you are ready to go. A full release to npm with accompanying API docs will be released nearer the time.


## Components

##### Button
Part of Core module

`[props:- text :string (required), className :string, onClick :function, style :object, name :string]`

#### Card, CardTitle, CardBody
Part of Core module
Card `[props:- className :string, style :object, children :any]`
CardTitle `[props:- className :string, style :object, title :string]`
CardBody `[props:- className :string, style :object, children :any]`

#### Pagination
Part of Pagination module

`[props:- data :array (required), className :string, recordsPerPage :number (required), range :number, style :object, children :any (required)]`

##### Spinner
Part of Core module

`[props:- style :object, className :string]`






## Contributions

Pull requests with bug fixes, contributions or improvements are more than welcome.
