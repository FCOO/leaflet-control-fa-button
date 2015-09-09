(function () {
  /* global L */
  'use strict';
  L.Control.FontAwesomeButton = L.Control.extend({
    options: {
      position: 'topleft',
      title: '',
      href: undefined,
      message: 'Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to save current map state in a bookmark.',
      onclick: function (evt) {
        evt.preventDefault(); // Prevent link from being processed
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;
        var triggerDefault = false;
        if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorite
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else {
            // WebKit - Safari/Chrome - Mozilla Firefox
            alert(this.options.message);
        }
        return triggerDefault;
      },
      className: 'leaflet-control-bolt-button',
      fontAwesomeIcon: "fa-bolt",
    },
    onAdd: function (map) {
      this._map = map;
      return this._initLayout();
    },
    _initLayout: function () {
      var container = L.DomUtil.create('div',
        'leaflet-bar leaflet-control-fa-button ' + this.options.className);
      this._container = container;
      this._button = this._createButton(container);

      L.DomEvent.disableClickPropagation(container);
      if (this.options.href === undefined) {
        L.DomEvent.addListener(container, 'click', this.options.onclick, this);
      }
      return this._container;
    },
    _createButton: function () {
      var link = L.DomUtil.create('a', 'fa ' + this.options.fontAwesomeIcon,
        this._container);
      if (this.options.href !== undefined) {
        link.href = this.options.href;
      }
      link.title = this.options.title;

      L.DomEvent
        .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
        //.on(link, 'click', L.DomEvent.stop)
      return link;
    },
  });

  L.control.fontAwesomeButton = function (options) {
    return new L.Control.FontAwesomeButton(options);
  };

  return L.Control.FontAwesomeButton;

}());

