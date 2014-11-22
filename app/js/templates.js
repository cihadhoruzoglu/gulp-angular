(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/home.html',
    '<ion-view title="Home">\n' +
    '    <ion-nav-buttons side="left">\n' +
    '        <button menu-toggle="left"class="button button-icon icon ion-navicon"></button>\n' +
    '    </ion-nav-buttons>\n' +
    '    <ion-content class="has-header">\n' +
    '        <h2>Person List</h2>\n' +
    '        <ion-item ng-repeat="person in persons" sref="app.person">\n' +
    '            {{person.Name}} {{person.Surname}}\n' +
    '        </ion-item>\n' +
    '    </ion-content>\n' +
    '</ion-view>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/menu.html',
    '<ion-side-menus>\n' +
    '\n' +
    '    <ion-pane ion-side-menu-content>\n' +
    '        <ion-nav-bar class="bar-stable nav-title-slide-ios7">\n' +
    '            <ion-nav-back-button class="button-clear"><i class="icon ion-ios7-arrow-back"></i> Back</ion-nav-back-button>\n' +
    '        </ion-nav-bar>\n' +
    '        <ion-nav-view name="menuContent" animation="slide-left-right"></ion-nav-view>\n' +
    '    </ion-pane>\n' +
    '\n' +
    '    <ion-side-menu side="left">\n' +
    '        <header class="bar bar-header bar-stable">\n' +
    '            <h1 class="title">Left</h1>\n' +
    '        </header>\n' +
    '        <ion-content class="has-header">\n' +
    '            <ion-list>\n' +
    '                <ion-item nav-clear menu-close href="#/app/home">\n' +
    '                    Home\n' +
    '                </ion-item>\n' +
    '            </ion-list>\n' +
    '        </ion-content>\n' +
    '    </ion-side-menu>\n' +
    '</ion-side-menus>\n' +
    '');
}]);
})();
