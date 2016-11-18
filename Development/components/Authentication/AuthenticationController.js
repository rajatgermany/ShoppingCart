/**
 * Authentication Controller
 * Login and Register Functions are defined in the Register and Login Factory
 * After Login is Successful url  is reloaded and User is Redirected to the Home Page
 *
 */
angular.module('AuthenticationApp', [])
    .controller('AuthenticationController', function($scope,$state,$rootScope ,RegisterFactory,LoginFactory, $localStorage,GetTokenFactory,$window, $modal,$alert,userFactory, $q)

    {
        var modal = $modal({scope: $scope, templateUrl: '/components/Authentication/registerView.html', show: false});
        $scope.$on('$stateChangeSuccess', function (event,nextUrl) {
            if (nextUrl.name == 'Register') {
                RegisterFactory.register().then(function(value){
                    $alert({title: 'User Registered!', content: 'Please Login Now',
                        animation: 'am-fade-and-slide-top', placement: 'top', type: 'info', keyboard: false, container:'body', show: true});
                    $state.go('Login')
                }, function(error){

                })
            }
        });

        /**
         *
         * @param user
         * user -> Data fromthe Login Form
         * Using Resource Factory it is sent to the Server
         * On Succssful  user is presnted with alert message
         */
        $scope.LoginUser = function(user) {
            $scope.newUser = new LoginFactory();
            $scope.newUser.LoginData = user;
            LoginFactory.save($scope.newUser, function (value) {
                if (value.success == false) {
                    alert(value.message)
                }
                else {

                    $localStorage.newToken = value.token;
                    $window.location.reload();
                    $state.go('home');
                }
            }, function (httpResponse) {
                $rootScope.message = 'Something went wrong ! Please Try again'
            })
        }

        /**
         *
         * @param User
         * User-> Register Form Data filled by the user
         * User data is then fed to the Register Function in the Register Factory
         */

        $scope.RegisterUser = function(User) {
            RegisterFactory.register(User);
        }

        $scope.ShowModalRegister = function(){
            modal.$promise.then(modal.show);
        }
    });
