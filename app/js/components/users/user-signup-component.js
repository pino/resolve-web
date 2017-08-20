"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var user_1 = require("../../models/user");
var user_service_1 = require("../../services/user-service");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var permission_1 = require("../../models/permission");
var UserSignupComponent = (function () {
    function UserSignupComponent(_location, router, userService, snackBar) {
        this._location = _location;
        this.router = router;
        this.userService = userService;
        this.snackBar = snackBar;
    }
    UserSignupComponent.prototype.goBack = function () {
        this._location.back();
    };
    UserSignupComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        this.usernameTaken = false;
        this.permissions = [
            new permission_1.Permission(1, "standard"),
            new permission_1.Permission(2, "professional"),
        ];
    };
    UserSignupComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.insert(this.user).subscribe(function (data) {
            _this.snackBar.open("Usuario cadastrado com suceso", "OK");
            _this.router.navigate(['/user-list']);
        }, function (error) { return _this.snackBar.open("Erro: " + error._body, "OK"); });
    };
    UserSignupComponent.prototype.onBlur = function () {
        var _this = this;
        this.userService.findByUsername(this.user.username).subscribe(function (data) {
            _this.usernameTaken = true;
        }, function (error) {
            _this.usernameTaken = false;
        });
    };
    return UserSignupComponent;
}());
UserSignupComponent = __decorate([
    core_1.Component({
        selector: 'user-signup',
        templateUrl: 'app/views/users/signup.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        user_service_1.UserService,
        material_1.MdSnackBar])
], UserSignupComponent);
exports.UserSignupComponent = UserSignupComponent;
//# sourceMappingURL=user-signup-component.js.map