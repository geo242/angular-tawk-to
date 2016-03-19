(function () {
  'use strict';

  function tawkToService(TAWKTO, $rootScope, $log, $q) {
    var isLoaded = false;

    TAWKTO.onLoad = function () {
      $log.info('TAWKTO:onLoad');
      $rootScope.$broadcast('TAWKTO:onLoad');
    };
    TAWKTO.onStatusChange = function (status) {
      $log.info('TAWKTO:Status:' + status);
    };
    //function invoked right when Tawk_API is ready to be used and before the widget is rendered.
    TAWKTO.onBeforeLoad = function () {
      isLoaded = true;
      $log.info('TAWKTO:onBeforeLoad');
      $rootScope.$broadcast('TAWKTO:onBeforeLoad');
    };
    TAWKTO.onChatMaximized = function () {
      $log.info('TAWKTO:onChatMaximized');
      $rootScope.$broadcast('TAWKTO:onChatMaximized');
    };
    TAWKTO.onChatMinimized = function () {
      $log.info('TAWKTO:onChatMinimized');
      $rootScope.$broadcast('TAWKTO:onChatMinimized');
    };
    TAWKTO.onChatHidden = function () {
      $log.info('TAWKTO:onChatHidden');
      $rootScope.$broadcast('TAWKTO:onChatHidden');
    };
    TAWKTO.onChatStarted = function () {
      $log.info('TAWKTO:onChatStarted');
      $rootScope.$broadcast('TAWKTO:onChatStarted');
    };
    TAWKTO.onChatEnded = function () {
      $log.info('TAWKTO:onChatEnded');
      $rootScope.$broadcast('TAWKTO:onChatEnded');
    };
    TAWKTO.onPrechatSubmit = function (data) {
      $log.info('TAWKTO:onPrechatSubmit:' + data);
      $rootScope.$broadcast('TAWKTO:onPrechatSubmit', data);
    };
    TAWKTO.onOfflineSubmit = function (data) {
      $log.info('TAWKTO:onOfflineSubmit:' + data);
      $rootScope.$broadcast('TAWKTO:onOfflineSubmit', data);
    };

    function setVisitor(name, email) {
      if (isLoaded) {
        return TAWKTO.visitor = { name: name, email: email };
      }
      return isLoaded;
    }

    function maximize() {
      if (isLoaded) {
        return TAWKTO.maximize();
      }
      return isLoaded;
    }

    function minimize() {
      if (isLoaded) {
        return TAWKTO.minimize();
      }
      return isLoaded;
    }

    function toggle() {
      if (isLoaded) {
        return TAWKTO.toggle();
      }
      return isLoaded;
    }

    function popup() {
      if (isLoaded) {
        return TAWKTO.popup();
      }
      return isLoaded;
    }

    function getWindowType() {
      if (isLoaded) {
        return TAWKTO.getWindowType();
      }
      return isLoaded;
    }

    function showWidget() {
      if (isLoaded) {
        return TAWKTO.showWidget();
      }
      return isLoaded;
    }

    function hideWidget() {
      if (isLoaded) {
        return TAWKTO.hideWidget();
      }
      return isLoaded;
    }

    function toggleVisibility() {
      if (isLoaded) {
        return TAWKTO.toggleVisibility();
      }
      return isLoaded;
    }

    function getStatus() {
      if (isLoaded) {
        return TAWKTO.getStatus();
      }
      return isLoaded;
    }

    function isChatMaximized() {
      if (isLoaded) {
        return TAWKTO.isChatMaximized();
      }
      return isLoaded;
    }

    function isChatMinimized() {
      if (isLoaded) {
        return TAWKTO.isChatMinimized();
      }
      return isLoaded;
    }

    function isChatHidden() {
      if (isLoaded) {
        return TAWKTO.isChatHidden();
      }
      return isLoaded;
    }

    function isChatOngoing() {
      if (isLoaded) {
        return TAWKTO.isChatOngoing();
      }
      return isLoaded;
    }

    function isVisitorEngaged() {
      if (isLoaded) {
        return TAWKTO.isVisitorEngaged();
      }
      return isLoaded;
    }

    function endChat() {
      if (isLoaded) {
        return TAWKTO.endChat();
      }
      return isLoaded;
    }

    function setAttributes(attributes, callback) {
      if (isLoaded) {
        return TAWKTO.setAttributes(attributes, callback);
      }
      if (angular.isFunction(callback)) {
        callback(isLoaded);
      } else {
        return isLoaded;
      }
    }

    function setAttributesAsync(attributes) {
      var deferred = $q.defer();
      setAttributes(attributes, function (result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }

    function addEvent(name, metadata, callback) {
      if (isLoaded) {
        return TAWKTO.addEvent(name, metadata, callback);
      }
      if (angular.isFunction(callback)) {
        callback(isLoaded);
      } else {
        return isLoaded;
      }
    }

    function addEventAsync(name, metadata) {
      var deferred = $q.defer();
      addEvent(name, metadata, function (result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }

    function addTags(tags, callback) {
      if (isLoaded) {
        return TAWKTO.addTags(tags, callback);
      }
      if (angular.isFunction(callback)) {
        callback(isLoaded);
      } else {
        return isLoaded;
      }
    }

    function addTagsAsync(tags) {
      var deferred = $q.defer();
      addTags(tags, function (result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }

    function removeTags(tags, callback) {
      if (isLoaded) {
        return TAWKTO.removeTags(tags, callback);
      }
      if (angular.isFunction(callback)) {
        callback(isLoaded);
      } else {
        return isLoaded;
      }
    }

    function removeTagsAsync(tags) {
      var deferred = $q.defer();
      removeTags(tags, function (result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }

    return {
      setVisitor: setVisitor,
      maximize: maximize,
      minimize: minimize,
      toggle: toggle,
      popup: popup,
      getWindowType: getWindowType,
      showWidget: showWidget,
      hideWidget: hideWidget,
      toggleVisibility: toggleVisibility,
      getStatus: getStatus,
      isChatMaximized: isChatMaximized,
      isChatMinimized: isChatMinimized,
      isChatHidden: isChatHidden,
      isChatOngoing: isChatOngoing,
      isVisitorEngaged: isVisitorEngaged,
      endChat: endChat,
      setAttributes: setAttributes,
      setAttributesAsync: setAttributesAsync,
      addEvent: addEvent,
      addEventAsync: addEventAsync,
      addTags: addTags,
      addTagsAsync: addTagsAsync,
      removeTagsAsync: removeTagsAsync
    };
  }

  tawkToService.$inject = ['TAWKTO', '$rootScope', '$log', '$q'];

  angular.module('ngTawkTo', [])
    .value('TAWKTO_ID', window.TAWKTO_ID || '')
    .value('TAWKTO', window.Tawk_API = window.Tawk_API || {})
    .factory('tawkToService', tawkToService);
}());
