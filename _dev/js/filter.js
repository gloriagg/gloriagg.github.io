
/*
var App = angular.module('myApp', 'ngResource', 'App.filters');
App.controller('worksCtrl', '$scope', function ($scope) {

    $scope.labelList =
        [{
            id: 1,
            name: 'UX design'
        },

        {
            id: 2,
            name: 'UI design'
        },

        {
            id: 3,
            name: 'Front-end'
        },

        {
            id: 4,
            name: 'Others'
        }]
    ;

    $scope.works =
        [{
          name: 'AEIP Client Dashboard and CRM',
          URL:'https://www.behance.net/gallery/29997331/A-comprehensive-web-platform-UX-design',
          img_src:'images/works/aeip/1.jpg',
          title:'View details',
          label:'UX design, UI design'
        },

        {
          name: 'Canadian Citizenship Exam App',
          URL:'https://www.behance.net/gallery/29997331/A-comprehensive-web-platform-UX-design',
          img_src:'images/works/vcrc/1.jpg',
          title:'View details',
          label:'UX design, UI design'
        },

        {
          name:'Dramatic Chipmunk Mobile Game',
          URL:'https://www.behance.net/gallery/29989937/Mobile-Game-UI-Design-Dramatic-Chipmunk',
          class:'dramaticchipmunk',
          title:'View details',
          label:'UI design, UX design',
          img_src:'images/works/dramaticchipmunk/1.jpg'

        },

        {
          name:'Chef Tony Seafood Restaurant Website',
          URL:'https://www.behance.net/gallery/30554337/%08One-Page-Responsive-Website-For-A-Restaurant',
          class:'cheftony',
          title:'View details',
          label:'UX design, UI design, Front-end',
          img_src:'images/works/cheftony/1.jpg'

        },

        {
          name:'VBCE Online Website',
          URL:'http://online.vbce.ca/',
          class:'vbceonline',
          title:'Visit website',
          label:'UX design, UI design, Front-end',
          img_src:'images/works/vbceonline/1.jpg'

        },

        {
          name:'Sick Flower Mobile App Prototype',
          URL:'https://www.behance.net/gallery/30759973/Sick-Flower-A-mobile-app-prototype',
          class:'sickflower',
          title:'Visit website',
          label:'UX design, UI design',
          img_src:'images/works/sickflower/1.jpg'

        },

        {
          name:'VBCE Online Web Campain',
          URL:'https://www.behance.net/gallery/30091449/Online-Campaign-Design-Refer-a-Friend',
          class:'vbce',
          title:'View details',
          label:'UI design, Front-end',
          img_src:'images/works/vbce/1.jpg'

        },

        {
          name:'AYCO Chartered Accountants Firm Website',
          URL:'http://ayco.ca/',
          class:'ayco',
          title:'Visit website',
          label:'UX design, Front-end',
          img_src:'images/works/ayco/1.jpg'

        },

        {
          name:'Love for Lashes Shopify Site',
          URL:'http://loveforlashes.ca/',
          class:'loveforlashes',
          title:'Visit website',
          label:'Front-end, UX design',
          img_src:'images/works/loveforlashes/1.jpg'
        },

        {
          name:'Let it be.Health Site',
          URL:'http://letitbehealth.com/',
          class:'letitbe',
          title:'Visit website',
          label:'UX design, UI design, Front-end',
          img_src:'images/works/letitbe/1.jpg'

        },

        {
          name:'Speak English in 10 Days Book & Website',
          URL:'http://speakenglishin10days.com/ch.html',
          class:'speakEnglishin10Days',
          title:'Visit website',
          label:'UI design, Front-end',
          img_src:'images/works/speakEnglishin10Days/1.jpg'

        }]
    ;

    $scope.setSelectedClient = function () {
        var id = this.company.id;
        if (_.contains($scope.selectedCompany, id)) {
            $scope.selectedCompany = _.without($scope.selectedCompany, id);
        } else {
            $scope.selectedCompany.push(id);
        }
        return false;
    };

    $scope.isChecked = function (id) {
        if (_.contains($scope.selectedCompany, id)) {
            return 'icon-ok pull-right';
        }
        return false;
    };

    $scope.checkAll = function () {
        $scope.selectedCompany = _.pluck($scope.companyList, 'id');
    };
});

angular.module('App.filters', ).filter('companyFilter', function () {
    return function (clients, selectedCompany) {
        if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCompany) && selectedCompany.length > 0) {
            var tempClients = ;
            angular.forEach(selectedCompany, function (id) {
                angular.forEach(clients, function (client) {
                    if (angular.equals(client.company.id, id)) {
                        tempClients.push(client);
                    }
                });
            });
            return tempClients;
        } else {
            return clients;
        }
    };
});
*/


// var App = angular.module('myApp.controllers', )
//   .controller('worksCtrl', '$scope', '$http', function($scope, $http) {
//     $http.get('works.json').success(function(data) {
//         $scope.works = data;
//     });
// });
