## Simple React UI

[![CircleCI](https://circleci.com/gh/Xerith89/simple-react-ui.svg?style=svg)](https://circleci.com/gh/Xerith89/simple-react-ui)

## What Is It?

Simple React UI is a collection of reusable components designed to make it easy to get started with building UIs in ReactJS
Tasks such as pagination, filtering and sorting data are abstracted away whilst still allowing custom style and functionality rules.

## How To Use

The majority of the components are kept in the core module. Simply clone the repo, do npm install for dependencies and then you are ready to go. A full release to npm with accompanying API docs will be released nearer the time.


## Core Components (Core Module)

#### Button

A standard HTML button - display props is responsible for what the button renders

`[props:- type :string, display :any , className :string, onClick :function, style :object, name :string]`

#### Card

Opens a card to place in a CardTitle, CardBody or both

`[props:- className :string, style :object, children :any]`

#### CardTitle

A bootstrap styled card title

`[props:- className :string, style :object, title :string]`

#### CardBody

A bootstrap styled card body

`[props:- className :string, style :object, children :any]`

##### Spinner

A decorated spinner to signify loading or fetching data

`[props:- style :object, className :string]`

## Forms (Form Module)

The components in this group generally expect their state to be controlled by the parent component - i.e. you have a <MyForm> Component that manages the the state for all of the form sub components.

#### Form

Opens a form and takes in a function to handle onSubmit event

`[props:- children :any, onSubmit :function]`

#### TextInput

Creates an input of type text along with an optional label and validation message

`[props:- style :object, labelStyle :object, validationStyle :object, name :string, value :string, id :string, placeholder :string, className :string, labelClassName :string, validationClassName :string, labelText :string, validationText :string, onChange :function]`

#### EmailInput

Creates an input of type email along with an optional label and validation message

`[props:- style :object, labelStyle :object, validationStyle :object, name :string, value :string, id :string, placeholder :string, className :string, labelClassName :string, validationClassName :string, labelText :string, validationText :string, onChange :function]`

#### NumberInput

Creates an input of type number along with an optional label and validation message

`[props:- style :object, labelStyle :object, validationStyle :object, name :string, value :string, id :string, placeholder :string, className :string, labelClassName :string, validationClassName :string, labelText :string, validationText :string, onChange :function, min :string, max :string, step :string]`

#### PasswordInput

Creates an input of type password along with an optional label and validation message

`[props:- style :object, labelStyle :object, validationStyle :object, name :string, value :string, id :string, placeholder :string, className :string, labelClassName :string, validationClassName :string, labelText :string, validationText :string, onChange :function]`

#### TextArea

Creates a text area input

`[props:- style :object, labelStyle :object, validationStyle :object, name :string, value :string, id :string, placeholder :string, className :string, labelClassName :string, validationClassName :string, labelText :string, validationText :string, onChange :function, rows :string, cols :string]`

#### Select

Creates a dropdown selection input - options are populated by the options prop

`[props:- style :object, labelStyle :object, validationStyle :object, name :string, value :string, id :string, placeholder :string, className :string, labelClassName :string, validationClassName :string, labelText :string, validationText :string, onChange :function, options :array]`

#### Radio

Creates a radio button input - multiple components of this type can make a button group by passing the same name

`[props:- style :object, labelStyle :object, validationStyle :object, name :string, value :string, id :string, placeholder :string, className :string, labelClassName :string, validationClassName :string, labelText :string, validationText :string, onChange :function, checked :string]`

#### Checkbox

Creates a checkbox input

`[props:- style :object, labelStyle :object, validationStyle :object, name :string, value :string, id :string, placeholder :string, className :string, labelClassName :string, validationClassName :string, labelText :string, validationText :string, onChange :function, checked :string]`


## Pagination (Pagination Module)

#### Pagination

Take in an input array of data and paginate it to a child component that will render the data

`[props:- data :array (required), className :string, recordsPerPage :number (required), range :number, style :object, children :any (required)]`


## Contributions

Pull requests with bug fixes, contributions or improvements are more than welcome.
