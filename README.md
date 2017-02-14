# leaflet-control-fa-button
>


## Description
Simple Leaflet control containing a FontAwesome button.

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-control-fa-button.git --save`

## Demo
http://FCOO.github.io/leaflet-control-fa-button/demo/ 

## Usage

	var myFaButton =  L.control.fontAwesomeButton( options );

### Options
| Id | Default | Description |
| :--: |  :--: |  :--- |
| `position` | `"topleft"` | Leaflet position |
| `containerClassName` | `""` | Extra class-name(s) for the container |
| `defaultIconClassName` | `"fa fa-lg"` | Standard FontAwesome classes |
| `iconClassName` | `""` | The class defining the icon |
| `data` | `"{}"` | data-attributes for the button |
| `title` | `""` | The `title` for the button |
| `href` | `undefined` | Link to page |
| `onClick` | `null` | `function (evt, $button, options)` The function to be called |



## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-control-fa-button/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Jesper Larsen jla@fcoo.dk
Niels Holt nho@fcoo.dk

