# Project Mini-Mek

## Table of Contents

* [Description](Description)
* [Features](#Features)
* [Technologies](#Technologies)
* [Installation](#Installation)
<!-- * [Demo](#Demo) -->

## Description

This is a miniature version of the [MekHQ](http://megamek.info/mekhq) Battletech campaign force manager tool.

A sample application based on  **[Practical Redux](http://blog.isquaredsoftware.com/series/practical-redux)** blog series by Mark Erikson, demonstrating various useful Redux techniques.

## Features

* Load JSON data describing the pilots and Battlemechs in a combat force
* For both pilots and Battlemechs:
  * Show a list of all items
  * Allow selection of an item in the list, and show details of the selected item
* Edit the details for a pilot
* Organize the pilots and their mechs into "lances" of four mechs, and the "lances" into a "company" of three lances.
* Add and remove pilots and mechs from the force
* Save the force back out to JSON

## Technologies

* [**React**](reactjs.org) - A JavaScript library for building user interfaces
* [**Redux**](edux.js.org/) - A Predictable State Container for JS Apps
* [**Redux-ORM**](https://redux-orm.github.io/redux-orm/) - A simple and immutable ORM to manage relational data in your Redux store
* [**Semantic-ui**](https://semantic-ui.com/) - A user interface library  

## Installation

```bash
$ git clone https://github.com/damigreen/project-minimek.git
$ cd project-minimek && npm install
$ npm start
```

<!-- ## Demo -->
