/**
 * Created by Aisha on 1/14/2015.
 */

four51.app.directive('listcarousel', function(){
    var obj = {
        restrict: 'E',
        template: '<style>.kc-wrap{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-ms-touch-action:none;overflow:hidden;position:relative;background-position:center;width:100%;padding-bottom:35%}.kc-horizon{visibility:hidden}.kc-item{position:absolute;width:188px;height:250px;-webkit-tap-highlight-color:transparent;visibility:hidden}.kc-shadow-bottom{position:absolute!important;top:100%!important;width:100%!important;height:10%!important;background-image:url(images/shadow-bottom.png);left:0!important}.kc-shadow-left,.kc-shadow-right{position:absolute!important;top:0!important;width:10%!important;height:100%!important;left:-10%!important;background-image:url(images/shadow-left.png)}.kc-shadow-right{left:100%!important;background-image:url(images/shadow-right.png)}.kc-reflection{position:absolute;left:0;top:0;width:100%;height:0}.kc-nav-wrap{display:inline-block;position:absolute;z-index:1000}.kc-nav-button,.kc-nav-button-active{width:16px;height:16px;background-color:#888;float:left;margin-right:10px;cursor:pointer;border-radius:16px;border:1px solid rgba(0,0,0,.5)}.kc-nav-button.active{background-color:#fff}.kc-nav-button.last{margin-right:0}#wrapper{padding:10px}.kc-item img{position:relative;pointer-events:none;width:100%}</style>'+
            '<div id="carousel" class="kc-wrap">'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin2.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin3.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin4.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin5.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin2.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin3.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin4.jpg"></a>'+
            '</div>'+
            '<div class="kc-item">'+
            '<a ng-href="" ><img ng-src="css/images/buyerStandin5.jpg"></a>'+
            '</div>'+

            '</div>',
        link: function($scope) {
            $scope.$watch('tree', function() {
                $('#carousel').KillerCarousel({
// Default natural width of carousel.
                    width: 1104,
                    height: 300,
// Item spacing in 3d (has CSS3 3d) mode.
                    spacing3d: 120,
// Item spacing in 2d (no CSS3 3d) mode.
                    spacing2d: 220,
                    showShadow: false,
                    showReflection: false,
// Looping mode.
                    infiniteLoop: false,
// Scale at 75% of parent element.
                    autoScale: 80,
                    useMouseWheel: false,
                    showNavigation: true,
                    horizon: 'top:35%',
                    itemAlign: 'middle',
                    frontItemIndex: 4,
                    renderer3d: null,
                    renderer2d: 'render2dBasic'
                });
            });
        }
    };
    return obj;
});
