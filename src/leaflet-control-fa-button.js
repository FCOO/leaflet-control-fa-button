/****************************************************************************
    leaflet-control-fa-button.js, 

    (c) 2015, FCOO

    https://github.com/FCOO/leaflet-control-fa-button
    https://github.com/FCOO

****************************************************************************/
(function ($, L, window, document, undefined) {
    "use strict";


    function onClick( e ){
        var $button = $(e.currentTarget),
            options = $button.data('fontawesomebutton');

        e.preventDefault(); // Prevent link from being processed

        if (options && options.onClick)
            return options.onClick( e, $button, options ); 
        return false;
    }

    L.Control.FontAwesomeButton = L.Control.extend({
        options: {
            VERSION             : "{VERSION}",
            position            : 'topleft',
            containerClassName  : '',
            defaultIconClassName: 'fa fa-lg',
            iconClassName       : '',
            data                : {},
            title               : '',
            href                : undefined,
            onClick             : null, //function (evt, $button, options) {...}
        },
        onAdd: function (map) {
            this._map = map;

            this._container = L.DomUtil.create('div', 'leaflet-bar leaflet-control-fa-button ' + this.options.containerClassName);

            this._button = L.DomUtil.create('a', '', this._container);

            this._button.title = this.options.title;
            
            var $button = $(this._button);
            $button.data('fontawesomebutton', this.options );

            //Adding 'data-'. Using $.attr() to make 'data-XX' avaiable for search
            $.each( this.options.data, function( key, value ){
                $button.attr('data-' + key, value );
                $button.data( key, value );
            });

            //Add events
            L.DomEvent.on(this._button, 'mousedown dblclick', L.DomEvent.stopPropagation);
            L.DomEvent.disableClickPropagation( this._container );
            if (this.options.href !== undefined)
                this._button.href = this.options.href;
            else 
                $(this._button).on( 'click', onClick );

            //Add the icon
            L.DomUtil.create('i', this.options.defaultIconClassName + ' ' + this.options.iconClassName, this._button);
           
            return this._container;
        },
    });

    L.control.fontAwesomeButton = function (options) {
        return new L.Control.FontAwesomeButton(options);
    };

    return L.Control.FontAwesomeButton;

}(jQuery, L, this, document));