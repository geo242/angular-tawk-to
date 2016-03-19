(function () {
  'use strict';
  function tawkToDirective($log, $document, TAWKTO_ID) {
    return {
      restrict: 'AE',
      scope: {
        id: '@tawkTo'
      },
      link: function (scope) {
        var id = scope.id || TAWKTO_ID;
        if (!!id && id.length) {
          var s1 = $document[0].createElement("script"),
            s0 = $document[0].getElementsByTagName("script")[0];

          s1.async = true;
          s1.src = 'https://embed.tawk.to/' + id + '/default';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode.insertBefore(s1, s0);
        } else {
          $log.error('Missing TawkTo id.');
        }
      }
    };
  }

  tawkToDirective.$inject = ['$log', '$document', 'TAWKTO_ID'];

  angular.module('ngTawkTo')
    .directive('tawkTo', tawkToDirective);
}());
