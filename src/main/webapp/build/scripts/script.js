
function getExtension(e) {
    var t = e.split(".");
    return t[t.length - 1]
}

function isImage(e) {
    var t = getExtension(e);
    switch (t.toLowerCase()) {
        case "jpg":
        case "gif":
        case "bmp":
        case "png":
            return !0
    }
    return !1
}

function isVideo(e) {
    var t = getExtension(e);
    switch (t.toLowerCase()) {
        case "m4v":
        case "avi":
        case "mpg":
        case "mp4":
            return !0
    }
    return !1
}

function bytesToSize(e, t) {
    return e < 1048576 * t
}

function getSingleSetting(e, t) {
    return "PUBLIC" == e.settingValue || "PRIVATE" != e.settingValue && (!("NETWORK" != e.settingValue || !t) || void 0)
}

function convertToString(e, t, r) {
    e = void 0 == e ? "" : e, t = void 0 == t ? "" : t, r = void 0 == r ? "" : r;
    var o = e + " " + r + " ," + t;
    return o
}
google.load("visualization", "1", {
    packages: ["orgchart"]
}), angular.module("appFilters", []).filter("startFrom", function() {
    return function(e, t) {
        return t = +t, e.slice(t)
    }
}), angular.module("numbersOnly", []).directive("numbersOnly", function() {
    return {
        require: "ngModel",
        link: function(e, t, r, o) {
            function i(e) {
                if (e) {
                    var t = e.replace(/[^0-9-+]/g, "");
                    return t !== e && (o.$setViewValue(t), o.$render()), t
                }
            }
            o.$parsers.push(i)
        }
    }
}), angular.module("orgChart", []).directive("orgChart", function() {
    function e(e, t, r) {
        var o = new google.visualization.OrgChart(t[0]);
        e.$watch("chartData", function(e, t) {
            if (e) {
                for (var r = google.visualization.arrayToDataTable(e), i = {
                        title: "",
                        allowHtml: !0
                    }, n = 0; n < r.getNumberOfRows(); n++) o.collapse(n, !0);
                o.draw(r, i)
            }
        })
    }
    return {
        link: e
    }
}), angular.module("fupApp", []).directive("fileModel", ["$parse", function(e) {
    return {
        restrict: "A",
        link: function(t, r, o) {
            var i = e(o.fileModel),
                n = i.assign;
            r.bind("change", function() {
                t.$apply(function() {
                    n(t, r[0].files[0])
                })
            })
        }
    }
}]), angular.module("CKEditorExample", []).directive("ckEditor", function() {
    return {
        require: "?ngModel",
        link: function(e, t, r, o) {
            function i() {
                e.$apply(function() {
                    o.$setViewValue(n.getData())
                })
            }
            var n = CKEDITOR.replace(t[0]);
            o && (n.on("instanceReady", function() {
                n.setData(o.$viewValue)
            }), n.on("change", i), n.on("key", i), n.on("dataReady", i), o.$render = function(e) {
                n.setData(o.$viewValue)
            })
        }
    }
}), angular.module("dateParser", []).directive("moDateInput", function(e) {
    return {
        require: "^ngModel",
        restrict: "A",
        link: function(t, r, o, i) {
            var n = e.moment,
                s = o.moMediumDate;
            o.$observe("moDateInput", function(e) {
                s != e && i.$modelValue && (s = e, i.$modelValue = new Date(i.$setViewValue))
            }), i.$formatters.unshift(function(e) {
                if (t = t, !s || !e) return "";
                var r = n(e).format(s);
                return r
            }), i.$parsers.unshift(function(e) {
                return t = t, new Date(e)
            })
        }
    }
}), angular.module("HIGHERTHAN", []).directive("higherThan", [function() {
    var e = function(e, t, r, o) {
        var i = function(e) {
            var t = r.higherThan;
            return e && t || o.$setValidity("higherThan", !0), o.$setValidity("higherThan", parseInt(e, 10) > parseInt(t, 10)), e
        };
        o.$parsers.unshift(i), o.$formatters.push(i), r.$observe("higherThan", function(e) {
            return i(o.$viewValue)
        })
    };
    return {
        require: "ngModel",
        link: e
    }
}]), angular.module("YEARDROPDOWN", []).directive("yearDrop", function() {
    function e(e, t) {
        for (var r = parseInt(e, 10), o = [], i = (new Date).getFullYear(), n = r; n < i + t; n++) o.unshift(n);
        return o
    }
    return {
        restrict: "A",
        scope: {
            bindModel: "=ngModel"
        },
        link: function(t, r, o) {
            t.years = e(+o.startingYear, +o.range), t.selected = t.years[0]
        },
        template: '<option value="">Years</option><option ng-selected="y==bindModel" ng-repeat="y in years">{{y}}</option>'
    }
});
var common_save_msg = "Updated successfully.",
    common_error_msg = "Required Fields  cannot Be Empty.",
    common_end_date_error = "End date cannot be before start date.",
    exp_success_msg = "Experience has been successfully updated.",
    edu_success_msg = "Education has been successfully updated.",
    certification_success_msg = "Certification has been successfully updated.",
    about_success_msg = "About has been successfully updated.",
    message_success_msg = "Message sent successfully.",
    specialities_success_msg = "Specialities has been added successfully.",
    team_success_msg = "Team has been added successfully.",
    invalid_date_error = "is not a valid date",
    invalid_mobile_error = "Enter valid mobile number",
    no_space_in_mobile = "No space is allowed.",
    activity_error = "This post appears to be blank. Please write something or photo to post.",
    location_error = "You can not add more than 5 locations",
    specialization_remove_success_msg = "Specialization removed successfully.",
    team_remove_success_msg = "Team removed successfully.",
    remove_button_msg = "Are you sure you want to remove?",
    generic_remove_message = "Removed Succesfully",
    photo_type_error = "Please choose a valid photo",
    special_character_not_allowed = "Special character Except Comma are not allowed",
    password_matching_error = "Password and confirm Password must be same",
    verify_captcha = "Please Verify the Captcha";
! function() {
    "use strict";

    function e(e, t, r, o, i, n) {
        o.latencyThreshold = 100, n.setDefaultTag("og:url", "www.aylaconnect.com/home"), n.setDefaultTag("og:image", "http://www.aylaconnect.com/img/shareImage.png"), n.setDefaultTag("og:description", "Building the ecosystem for players in Healthcare Delivery"), n.setDefaultTag("og:title", "kritical health"), e.when("/", {
            templateUrl: "home.html?v=1.5",
            data: {
                meta: {
                    "og:image": "http://www.aylaconnect.com/img/kh_logo_new.png",
                    "og:description": "Building the ecosystem for Education Domain",
                    "og:title": "aylaconnect"
                }
            }
        }).when("/home", {
            templateUrl: "home.html?v=1.5",
            data: {
                meta: {
                    "og:image": "http://www.aylaconnect.com/img/kh_logo_new.png",
                    "og:description": "Building the ecosystem for players in Education Domain",
                    "og:title": "aylaconnect"
                }
            }
        }).when("/schoolprofile", {
            templateUrl: "schoolprofile.html"
        }).when("/regsuccess", {
            templateUrl: "regsuccess.html"
        }).when("/forgotPassword", {
            templateUrl: "forgotPassword.html"
        }).when("/confirmEmail", {
            templateUrl: "confirmEmail.html"
        }).when("/resetPassword", {
            templateUrl: "resetPassword.html"
        }).when("/changePassword", {
            templateUrl: "changePassword.html"
        }).when("/download-app", {
            templateUrl: "download-app.html"
        }).when("/network", {
            templateUrl: "network.html?v=1.1"
        }).when("/activity", {
            templateUrl: "activity.html?v=1.0",
            isUserName: !1
        }).when("/activity/:userId", {
            templateUrl: "activity.html",
            isUserName: !0
        }).when("/postedJobs", {
            templateUrl: "postedJobs.html"
        }).when("/blog-author/:userId", {
            isBlog: !0,
            templateUrl: "blog-author.html?v=1.2"
        }).when("/blog-author", {
            isBlog: !0,
            templateUrl: "blog-author.html?v=1.3"
        }).when("/blog", {
            isBlog: !0,
            templateUrl: "blog.html?v=1.0"
        }).when("/blog-create", {
            isBlog: !0,
            templateUrl: "postBlog.html?v=1.1"
        }).when("/blog-edit/:blogId", {
            isBlog: !0,
            templateUrl: "postBlog.html?v=1.3"
        }).when("/blog-inner/:id", {
            isBlog: !0,
            templateUrl: "blog-inner.html?v=1.3"
        }).when("/home", {
            templateUrl: "home.html?v=1.4"
        }).when("/eavAttribute/:id", {
            templateUrl: "eavAttribute.html"
        }).when("/eavAttribute", {
            templateUrl: "eavAttribute.html"
        }).when("/group", {
            templateUrl: "group.html"
        }).when("/persona", {
            templateUrl: "persona.html"
        }).when("/updateProfile", {
            templateUrl: "updateProfile.html"
        }).when("/eavAttributeSearch", {
            templateUrl: "eavAttributeSearch.html"
        }).when("/groupSearch", {
            templateUrl: "groupSearch.html"
        }).when("/eavAttributeSetSearch", {
            templateUrl: "eavAttributeSetSearch.html"
        }).when("/eavAttributeSet", {
            templateUrl: "eavAttributeSet.html"
        }).when("/eavAttributeSet/:id", {
            templateUrl: "eavAttributeSet.html"
        }).when("/eavAttributeGroupNew/:id", {
            templateUrl: "eavAttributeGroup.html"
        }).when("/eavAttributeGroup/:id", {
            templateUrl: "eavAttributeGroup.html"
        }).when("/eavEntityAttributeNew/:id", {
            templateUrl: "eavEntityAttribute.html"
        }).when("/eavEntityAttribute/:id", {
            templateUrl: "eavEntityAttribute.html"
        }).when("/eavAttributeOptionNew/:id", {
            templateUrl: "eavAttributeOption.html"
        }).when("/eavAttributeOption/:id", {
            templateUrl: "eavAttributeOption.html"
        }).when("/jobs", {
            templateUrl: "jobs.html"
        }).when("/jobs/:userId", {
            templateUrl: "jobs.html"
        }).when("job-view", {
            templateUrl: "job-view.html"
        }).when("/job-view/:id", {
            templateUrl: "job-view.html"
        }).when("/postJob", {
            templateUrl: "postJob.html"
        }).when("/company-careers", {
            templateUrl: "company-careers.html"
        }).when("/company", {
            templateUrl: "company.html"
        }).when("/groups-profile", {
            templateUrl: "groups-profile.html"
        }).when("/groups-profile/:groupId", {
            templateUrl: "groups-profile.html"
        }).when("/groups-my", {
            templateUrl: "groups-my.html"
        }).when("/groups-jobs", {
            templateUrl: "groups-jobs.html"
        }).when("/groups-discover", {
            templateUrl: "groups-discover.html"
        }).when("/groups", {
            templateUrl: "  groups.html"
        }).when("/groups-members/:groupId", {
            templateUrl: "groups-members.html"
        }).when("/network-import", {
            templateUrl: "network-import.html"
        }).when("/messaging", {
            templateUrl: "messaging.html"
        }).when("/messaging/:messangerId", {
            templateUrl: "messaging.html"
        }).when("/jobs-search", {
            templateUrl: "messaging.html"
        }).when("/lookUpCodes", {
            templateUrl: " lookUpCodes.html"
        }).when("/lookUpCodes/:id", {
            templateUrl: "lookUpCodes.html"
        }).when("/profileSearch", {
            templateUrl: "profileSearch.html?v=1.0"
        }).when("/appliedJobs", {
            templateUrl: "appliedJobs.html"
        }).when("/settings", {
            templateUrl: "settings.html"
        }).when("/lookUpType", {
            templateUrl: "lookUpType.html"
        }).when("/profile", {
            templateUrl: "CommonProfile.html?v=1.3"
        }).when("/IndividualProfile", {
            templateUrl: "profile.html"
        }).when("/IndividualProfile/:userId", {
            templateUrl: "profile.html"
        }).when("/NurseProfile/:userId", {
            templateUrl: "profile.html"
        }).when("/NurseProfile", {
            templateUrl: "profile-nurse.html"
        }).when("/success", {
            templateUrl: "success.html"
        }).when("/failure", {
            templateUrl: "failure.html"
        }).when("/view-app", {
            templateUrl: "view-app.html"
        }).when("/suggestion", {
            templateUrl: "suggestion.html"
        }).when("/publicProfile/:userName", {
            templateUrl: "company-edit.html?v=123"
        }).when("/lookUpType/:id", {
            templateUrl: "lookUpType.html"
        }).when("/lookUpTypesSearch", {
            templateUrl: "lookUpTypesSearch.html"
        }).when("/lookUpCodesNew/:id", {
            templateUrl: " lookUpCodes.html"
        }).when("/lookUpCodes/:id", {
            templateUrl: "lookUpCodes.html"
        }).when("/userSearch", {
            templateUrl: "userSearch.html"
        }).when("/userEdit/:id", {
            templateUrl: "userEdit.html"
        }).when("/userRoleNew/:id", {
            templateUrl: "userRole.html"
        }).when("/userRole/:id", {
            templateUrl: "userRole.html"
        }).when("/roleSave", {
            templateUrl: "roleSave.html"
        }).when("/roleSave/:id", {
            templateUrl: "roleSave.html"
        }).when("/roleFunctionJoinNew/:id", {
            templateUrl: "roleFunctionJoin.html"
        }).when("/roleFunctionJoin/:id", {
            templateUrl: "roleFunctionJoin.html"
        }).when("/notifications", {
            templateUrl: "notifications.html",
            isNotification: !0
        }).when("/friendrequests", {
            templateUrl: "notifications.html",
            isFriendRequest: !0
        }).when("/singleActivity/:activityId", {
            templateUrl: "singleActivity.html"
        }).when("/myAppointments", {
            templateUrl: "myAppointments.html"
        }).when("/myAppointments/:appointmentId", {
            templateUrl: "myAppointments.html"
        }).when("/publicProfile/:userId", {
            templateUrl: "publicProfile.html"
        }).when("/invitation", {
            templateUrl: "invitation.html"
        }).when("/login", {
            templateUrl: "login.html"
        }).when("/aboutus", {
            templateUrl: "AboutUs.html"
        }).when("/pageNotFound", {
            templateUrl: "pageNotFound.html"
        }).when("/pageInDevelopment", {
            templateUrl: "pageInDevelopment.html"
        }).when("/about", {
            templateUrl: "about.html"
        }).when("/team", {
            templateUrl: "team.html"
        }).when("/recruitment", {
            templateUrl: "recruitment.html"
        }).when("/community", {
            templateUrl: "community-guide.html"
        }).when("/postJob", {
            templateUrl: "postJob.html"
        }).when("/searchJob", {
            templateUrl: "searchJob.html"
        }).when("/jobDetail/:id", {
            templateUrl: "jobDetail.html"
        })
        
        .when("/candidates", {
            templateUrl: "myCandidates.html"
        })
         .when("/candidates/:id", {
            templateUrl: "myCandidates.html"
        })
        
        .when("/deactivated", {
            templateUrl: "deactivated.html"
        }).when("/p/:userId", {
            templateUrl: "CommonProfile.html?v=1.0",
            isUserId: !0
        }).when("/:userId", {
            templateUrl: "CommonProfile.html?v=1.0",
            isUserName: !0,
            profilePage: !0,
            data: {
                meta: {
                    title: "Home page",
                    description: "This is the description shown in Google search results"
                }
            }
        }).when("/facebook", {
            templateUrl: "facebook.html"
        }).otherwise({
            redirectTo: "/home"
        }), t.html5Mode({
            enabled: !0
        }), i.facebook({
            clientId: facebook_client_id
        }), i.google({
            clientId: google_client_id
        })
    }

    function t(e) {
        var t = [],
            r = document.cookie;
        r && (t = r.split("; "));
        for (var o = {}, i = !1, n = 0; n < t.length; ++n)
            if (t[n]) {
                var s = t[n],
                    a = s.indexOf("="),
                    c = s.substring(0, a),
                    u = s.substring(a + 1);
                if (angular.isUndefined(u)) continue;
                if (void 0 === e || e === c) {
                    try {
                        o[c] = JSON.parse(u)
                    } catch (l) {
                        o[c] = u
                    }
                    if (e === c) return o[c];
                    i = !0
                }
            }
        if (i && void 0 === e) return o
    }

    function r(e, r, o, i, n, s, a, c, u) {
        n.theme = "bs3", a.ga("create", "UA-XXXXXXXX-X", "auto");
        var l = t("access_token");
        l ? localStorage.setItem("access_token", t("access_token")) : l = localStorage.access_token, e.globals = t("globals") || {}, e.profileDetails = i.get("profileDetails") || {}, !l || "/home" != r.path() && "/" != r.path() || r.path("/schoolprofile"), e.$on("$locationChangeStart", function(o, i, n) {
            a.ga("send", "pageview", r.path()), l = t("access_token") && t("globals");
            var u = !0;
            $.each(["/changePassword", "/schoolprofile", "/activity", "/blog;postedJobs", "/blog-author", "/blog-create", "/blog-edit", "/blog-inner", "/eavAttribute", "/group", "/persona", "/updateProfile", "/eavAttributeSearch", "/groupSearch", "/eavAttributeSetSearch", "/eavAttributeSet", "/eavAttributeGroupNew", "/eavAttributeGroup", "/eavEntityAttribute", "/eavAttributeOptionNew", "/eavAttributeOption", "/jobs", "/job-view", "/postJob", "/company-careers", "/company", "/groups-profile", "/groups-my", "/groups-jobs", "/groups-discover", "/groups", "/groups-members", "/network-import", "/messaging", "/jobs-search", "/lookUpCodes", "/appliedJobs", "/settings", "/lookUpType", "/profile", "/IndividualProfile", "/NurseProfile", "/publicProfile", "/lookUpTypesSearch", "/lookUpCodesNew", "/userSearch", "/userEdit", "/userRoleNew", "/userRole", "/roleSave", "/roleFunctionJoinNew", "/roleFunctionJoin", "/notifications", "/singleActivity", "/myAppointments", "/view-app", "/download-app", "/success"], function(e, t) {
                r.path() == t && (u = !1)
            }), $("#loginModal").modal("hide"), $("#perfdiagnomodal").modal("hide"), $(".modal-backdrop").hide(), $("body").css("overflow", "auto"), "/home" == r.path() || "/" == r.path() || "/forgotPassword" == r.path() || "/resetPassword" == r.path() || "/facebook" == r.path() || "/confirmEmail" == r.path() || r.path().toString().indexOf("/publicProfile/") > -1 || "/regsuccess" == r.path() || "/invitation" == r.path() || !l ? (e.shouldHeaderBeIncluded = !1, e.loginBodyIncluded = "startpage") : (e.shouldHeaderBeIncluded = !0, e.loginBodyIncluded = "kh"), u || l || r.path("/home"), c.init(), s.reload()
        })
    }
    var o = angular.module("app", ["ngResource", "ngMessages", "ui.router", "ngRoute", "ngSanitize", "appFilters", "ngCookies", "infinite-scroll", "fupApp", "ngMaterial", "CKEditorExample", "ngAnimate", "ui.bootstrap", "dateParser", "angular-loading-bar", "HIGHERTHAN", "YEARDROPDOWN", "satellizer", "xeditable", "toastr", "vsGoogleAutocomplete", "ngMap", "numbersOnly", "720kb.socialshare", "googlechart", "orgChart", "ngMeta"]);
    o.config(e).run(r), e.$inject = ["$routeProvider", "$locationProvider", "$mdThemingProvider", "cfpLoadingBarProvider", "$authProvider", "ngMetaProvider"], r.$inject = ["$rootScope", "$location", "$http", "$cookieStore", "editableOptions", "$route", "$window", "ngMeta", "$templateCache"]
}()
,

(function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/groupRest/save", t).then(u, l("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/groupRest/search/" + r + "/" + o, t).then(u, l("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, i(e), e
            })
        }

        function o(t, r, o, i, n) {
            var s = e.get(projectUrl + "sweb/groupRest/getGroupVos/" + r + "/" + o + "/" + i + "?q=" + t).then(u, l("Error getting user profile")).then(function(e) {
                n(e)
            });
            return s
        }

        function i(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/groupRest/getRequestsVo/" + r + "/" + o, t).then(u, l("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function n(t, r) {
            e.post(projectUrl + "sweb/groupRest/count", t).then(u, l("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function s(t, r, o) {
            e.get(projectUrl + "sweb/groupRest/get/" + r, t).then(u, l("Error")).then(function(e) {
                return o(e), e
            })
        }

        function a(t, r) {
            e.put(projectUrl + "sweb/groupRest/update", t).then(u, l("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function c(t, r) {
            var o = e.get(projectUrl + "sweb/groupRest/getGroupByGroupId/" + t).then(u, l("Error getting user blogs")).then(function(e) {
                r(e)
            });
            return o
        }

        function u(e) {
            return e.data
        }

        function l(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var p = {};
        return p.getGroupVos = o, p.getRequestVos = i, p.save = t, p.search = r, p.update = a, p.count = n, p.get = s, p.getGroupByGroupId = c, p
    }
    angular.module("app").factory("GroupService", e), e.$inject = ["$http"]
})(),
function() {
    "use strict";

    function e(e, t, r, o) {
        function i(t, r, o, i) {
            "email" == r ? t.username = t.email : "mobile" == r && (t.username = t.mobile);
            var n = projectUrl + "oauth/token?username=" + t.username + "&password=" + t.password + "&client_id=restapp&client_secret=restapp&grant_type=password&scope=read,write,trust&authtype=" + r;
            "admin" == o && (n = projectUrl + "oauth/token?username=" + t.username + "&password=" + t.password + "&client_id=restapp&client_secret=restapp&grant_type=password&scope=read,write,trust&projectname=kriticalhealthadmin&authtype=" + r), e.post(n, {}).then(function(e) {
                e = void 0 != e.data.access_token ? {
                    success: !0,
                    object: e.data
                } : "EMAIL_NOT_CONFIRMED" == e.data.error_description ? {
                    success: !1,
                    message: "Your Email is not confirmed"
                } : "YOUR_ACCOUNT_HAS_BEEN_DEACTIVATED" == e.data.error_description ? {
                    success: !1,
                    message: "Your account has been deactivated . Please contact administrator"
                } : {
                    success: !1,
                    message: "Username or password is incorrect"
                }, i(e)
            }, function(e) {
                "server_error" == e.data.error ? e = {
                    success: !1,
                    message: "Password is incorrect"
                } : "PASSWORD_NOT_CORRECT" == e.data.error_description ? e = {
                    success: !1,
                    message: "Password is incorrect"
                } : "EMAIL_NOT_CONFIRMED" == e.data.error_description ? e = {
                    success: !1,
                    message: "Your Email is not confirmed"
                } : "EMAIL_MOBILE_NOT_CONFIRMED" == e.data.error_description ? e = {
                    success: !1,
                    message: "Your Email or Mobile is not confirmed"
                } : "BAD_USER_CREDENTIALS" == e.data.error_description ? e = {
                    success: !1,
                    message: "You are not registered with us"
                } : "YOUR_ACCOUNT_HAS_BEEN_DEACTIVATED" == e.data.error_description && (e = {
                    success: !1,
                    message: "Your account has been deactivated . Please contact administrator"
                }), i(e)
            })
        }

        function n(e, t, o, i, n, s) {
            r.globals = {
                currentUser: {
                    firstName: e,
                    lastName: t,
                    id: i,
                    profilePicture: n.profilePicture,
                    profilePicture_70_70: n.profilePicture_70_70,
                    profilePicture_300_300: n.profilePicture_300_300,
                    profileType: n.profileVo.profileType,
                    personaId: n.personaId,
                    template: n.profileVo.template,
                    username: n.userName
                }
            };
            var a = new Date;
            a.setDate(a.getDate() + 1), document.cookie = "globals=" + JSON.stringify(r.globals) + "; expires=" + a + "; domain=localhost; path=/", document.cookie = "access_token=" + s + "; expires=" + a + "; domain=localhost; path=/"
        }

        function s() {
            r.globals = {}, t.remove("globals"), e.defaults.headers.common.Authorization = "Basic "
        }
        var a = {};
        return a.SetCredentials = n, a.ClearCredentials = s, a.LoginOauth = i, a
    }
    angular.module("app").factory("AuthenticationService", e), e.$inject = ["$http", "$cookieStore", "$rootScope", "$timeout"]
}(),
function() {
    "use strict";

    function e(e) {
        function t() {
            function t() {
                var t = e.flash;
                t && (t.keepAfterLocationChange ? t.keepAfterLocationChange = !1 : delete e.flash)
            }
            e.$on("$locationChangeStart", function() {
                t()
            })
        }

        function r() {
            var t = e.flash;
            t && (t.keepAfterLocationChange ? t.keepAfterLocationChange = !1 : delete e.flash)
        }

        function o(t, r) {
            e.flash = {
                message: t,
                type: "success",
                keepAfterLocationChange: r
            }
        }

        function i(t, r) {
            e.flash = {
                message: t,
                type: "error",
                keepAfterLocationChange: r
            }
        }
        var n = {};
        return n.Success = o, n.Error = i, n.clearFlashMessage = r, t(), n
    }
    angular.module("app").factory("FlashService", e), e.$inject = ["$rootScope"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            var o = e.get(projectUrl + "sweb/notificationRest/getNotificationCount/" + t).then(p, d("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function r(t, r) {
            var o = e.get(projectUrl + "sweb/notificationRest/getTotalNoOfNotifications/" + t).then(p, d("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function o(t, r) {
            var o = e.get(projectUrl + "sweb/notificationRest/getFriendRequestCount/" + t).then(p, d("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function i(t, r, o, i) {
            var n = e.get(projectUrl + "sweb/notificationRest/getNotificationVos/" + t + "/" + r + "/" + o).then(p, d("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function n(t, r, o, i) {
            var n = e.get(projectUrl + "sweb/notificationRest/getFriendRequestNotification/" + t + "/" + r + "/" + o).then(p, d("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function s(t, r, o, i) {
            var n = e.get(projectUrl + "sweb/messagesRest/getMessagesByUserId/" + t + "/" + r + "/" + o).then(p, d("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function a(t, r) {
            var o = e.get(projectUrl + "sweb/notificationRest/updateNotification/" + t).then(p, d("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function c(t, r) {
            var o = e.get(projectUrl + "sweb/notificationRest/updateFriendRequests/" + t).then(p, d("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function u(t, r) {
            var o = e.get(projectUrl + "sweb/messagesRest/updateMessages/" + t).then(p, d("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function l(t, r) {
            var o = e.get(projectUrl + "sweb/messagesRest/getNoOfMessageNotificationUsers/" + t).then(p, d("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function p(e) {
            return e.data
        }

        function d(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var f = {};
        return f.getNotificationByUserId = t, f.getAllNotificationsByUserId = i, f.updateNotification = a, f.getTotalNoOfNotifications = r, f.updateMessages = u, f.getNoOfMessageNotificationUsers = l, f.getMessagesByUserId = s, f.getFriendRequestCount = o, f.updateFriendRequests = c, f.getFriendRequestNotification = n, f
    }
    angular.module("app").factory("NotificationService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function r() {
            return e.get(t + "user/getAllUsers").then(I, U("Error getting all users"))
        }

        function o(e) {
            var t = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/userRest/getUserDetails/" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    t = e
                }
            }), t
        }

        function i(e, t) {
            var r = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/userRest/getUserDetailsByUserName/" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    r = e
                }
            }), r
        }

        function n(t) {
            return e.get("/api/users/" + t).then(I, U("Error getting user by id"))
        }

        function s(t) {
            return e.get("http://localhost:8889/canishop/restapi/user/getUserById/" + t).then(I, U("Error getting user by username"))
        }

        function a(t) {
            return e.post(projectUrl + "sweb/userRest/login", t).then(I, U("Error getting user by username"))
        }

        function c(t) {
            return t.username = t.email, e.post(projectUrl + "oauth/token?client_id=restapp&client_secret=restapp&grant_type=password&scope=read,write,trust", t, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                transformRequest: function(e) {
                    return $.param(e)
                }
            }).then(I, I)
        }

        function u(t, r, o) {
            e.get(projectUrl + "sweb/userRest/get/" + r, t).then(I, U("Error")).then(function(e) {
                return o(e), e
            })
        }

        function l(t, r, o) {
            e.get(projectUrl + "sweb/userRest/usernameValidate/" + t + "/-1").then(I, U("Error")).then(function(e) {
                return o(e), e
            })
        }

        function p(t, r) {
            var o = e.post(projectUrl + "sweb/userRest/register", t).then(I, U).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Registered Successfully"
                } : {
                    success: !1,
                    message: e.messages[1]
                }, r(t)
            });
            return o
        }

        function d(t) {
            return e.post("http://localhost:8889/canishop/restapi/user/getAllUsers", t).then(I, U("Error creating user"))
        }

        function f(t, r, o) {
            var i = e.post("https://www.google.com/recaptcha/api/siteverify?secret=" + t + "&response=" + r).then(I, U("Error creating user")).then(function(e) {
                o(i)
            })
        }

        function g(t) {
            var r = e.put(projectUrl + "sweb/userRest/update/", t).then(I, U("Error Updating User")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0
                } : {
                    success: !1,
                    message: ""
                }, callback(t)
            });
            return r
        }

        function m(t, r) {
            var o = e.put(projectUrl + "sweb/userRest/updatePersonaId/", t).then(I, U("Error Updating User")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            });
            return o
        }

        function h(t) {
            return e.put("/api/users/" + t).then(I, U("Error deleting user"))
        }

        function v(t, r) {
            var o = e.post(projectUrl + "sweb/userRest/sendForgotPasswordMail", '{"email":"' + t.email + '"}').then(I, U("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function y(t, r) {
            var o = e.post(projectUrl + "sweb/userRest/confirmEmail", '{"email":"' + t.email + '","oneTimeKey":"' + t.link + '"}').then(I, U("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function b(t, r) {
            var o = e.post(projectUrl + "sweb/userRest/linkValid", '{"email":"' + t.email + '","oneTimeKey":"' + t.link + '"}').then(I, U("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function w(t, r) {
            var o = e.post(projectUrl + "sweb/userRest/changeForgotPassword", '{"email":"' + t.email + '","password":"' + t.password + '","oneTimeKey":"' + t.link + '"}').then(I, U("Error getting user profile")).then(function(e) {
                o = e.success ? {
                    success: !0,
                    message: "Password Change Succesfully"
                } : {
                    success: !1,
                    message: e.messages[0]
                }, r(o)
            });
            return o
        }

        function S(t, r) {
            var o = e.post(projectUrl + "sweb/userRest/changePassword", t).then(I, U("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function P(t, r, o, i) {
            var n = e.get(projectUrl + "sweb/userRest/getUserSearchVos/" + r + "/" + o + "?q=" + t).then(I, U("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function I(e) {
            return e.data
        }

        function U(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var E = {};
        return E.GetAll = r, E.GetById = n, E.GetByUsername = s, E.Create = d, E.Update = g, E.Delete = h, E.login = a, E.loginOauth = c, E.Save = p, E.get = u, E.getUserDetailsByUserId = o, E.sendForgotPasswordMail = v, E.confirmEmail = y, E.linkValid = b, E.changeForgotPassword = w, E.updatePersonaId = m, E.changePassword = S, E.getUserSearchVos = P, E.getUserDetailsByUserName = i, E.usernameValidate = l, E.getCaptchVerification = f, E
    }
    var t = "";
    angular.module("app").factory("UserService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/eavAttributeRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/eavAttributeRest/search/" + r + "/" + o, t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, i(e), e
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/eavAttributeRest/count", t).then(s, a("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function i(t, r, o) {
            e.get(projectUrl + "sweb/eavAttributeRest/get/" + r, t).then(s, a("Error")).then(function(e) {
                return o(e), e
            })
        }

        function n(t, r) {
            e.put(projectUrl + "sweb/eavAttributeRest/update", t).then(s, a("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.save = t, c.search = r, c.update = n, c.count = o, c.get = i, c
    }
    angular.module("app").factory("EavAttributeService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, i) {
            e.post(projectUrl + "sweb/personaRest/save", t).then(r, o("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, i(t)
            })
        }

        function r(e) {
            return e.data
        }

        function o(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var i = {};
        return i.save = t, i
    }
    angular.module("app").factory("PersonaService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.get(projectUrl + "sweb/specializationRest/getByParentId/" + t).then(P, I("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Error"
                }, r(e), e
            })
        }

        function r(t, r) {
            e.post(projectUrl + "sweb/teamRest/deleteTeamMember/" + t).then(P, I("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: ""
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function o(t, r, o, i, n, s) {
            var a = e.post(projectUrl + "sweb/profileRest/updateByColumn/" + t + "/" + o + "/" + r + "/" + i + "/" + n).then(P, I("Error getting user profile")).then(function(e) {
                s(e)
            });
            return a
        }

        function i(t, r) {
            e.put(projectUrl + "sweb/certificationRest/update", t).then(P, I("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function n(t) {
            return e.get(projectUrl + "sweb/profileRest/get/" + t).then(P, I("Error getting all users"))
        }

        function s(t, r) {
            e.get("http://maps.google.com/maps/api/geocode/json?address=" + t + "&sensor=false").success(function(e) {
                r(e)
            })
        }

        function a(t, r) {
            var o = e.get(projectUrl + "sweb/profileRest/getProfile/" + t).then(P, I("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function c(t, r, o) {
            var i = e.post(projectUrl + "sweb/pictureRest/getEavPicturesWithType/" + t + "/" + r).then(P, I("Error getting user profile")).then(function(e) {
                o(e)
            });
            return i
        }

        function u(t, r) {
            var o = e.post(projectUrl + "sweb/profileRest/getProfileByEmailId", '{"email":"' + t + '"}').then(P, I("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function l(e) {
            var t = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/profileRest/getProfileByUserName/" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    t = e
                }
            }), t
        }

        function p(t, r) {
            var o = e.get(projectUrl + "sweb/profileRest/getProfileUpdateVo/" + t).then(P, I("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function d(t, r, o) {
            var i = e.post(projectUrl + "sweb/pictureRest/getPictureByType/" + r, t).then(P, I("Error getting user profile")).then(function(e) {
                o(e)
            });
            return i
        }

        function f(e) {
            var t = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/companyAutosugestRest/getAllCompanies/0/20?q=" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    t = e
                }
            }), t
        }

        function g(e) {
            var t = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/countryRest/getAllCountries/" + -1 + "/0?q=" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    t = e
                }
            }), t
        }

        function m(e) {
            var t = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/specializationRest/getAllSpecializations/" + -1 + "/0?q=" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    t = e
                }
            }), t
        }

        function h(t, r) {
            var o = e.get(projectUrl + "sweb/pictureRest/getPath/" + t).then(P, I("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function v(t, r) {
            var o = e.put(projectUrl + "sweb/profileRest/update/", t).then(P, I("Error Updating User")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            });
            return o
        }

        function y(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/eavAttributeSetRest/update/" + t + "/" + r, o).then(P, I("Error Updating User")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0
                } : {
                    success: !1,
                    message: ""
                }, i(t)
            });
            return n
        }

        function b(t, r) {
            var o = e.post(projectUrl + "sweb/pictureRest/updateDesc/", t).then(P, I("Error Updating User")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            });
            return o
        }

        function w(t, r, o, i, n, s) {
            var a = e.get(projectUrl + "sweb/profileRest/getProfileVos/" + o + "/" + i + "/" + n + "?q=" + t + "&type=" + r).then(P, I("Error getting user profile")).then(function(e) {
                s(e)
            });
            return a
        }

        function S(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/pictureRest/getGalleryPictureIds/" + t + "/" + r + "/" + o).then(P, I("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function P(e) {
            return e.data
        }

        function I(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var U = {};
        return U.get = n, U.updateByColumn = o, U.getProfileByUserId = a, U.getProfileByEmailId = u, U.getPath = h, U.getProfileUpdateVo = p, U.companyAutosuggest = f, U.countryAutoSuggest = g, U.getGalleryPictureIds = S, U.specializationAutoSuggest = m, U.searchSpecialization = t, U.getPictureByType = d, U.updateDesc = b, U.updateCertification = i, U.deleteTeamMember = r, U.updateEavAttributes = y, U.getProfileVos = w, U.getEavPicturesWithType = c, U.update = v, U.getProfileByUserName = l, U.getMapGeoCoardinates = s, U
    }
    angular.module("app").factory("ProfileService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/profileExpRest/save", t).then(n, s("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function r(t, r) {
            e.put(projectUrl + "sweb/profileExpRest/update", t).then(n, s("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function o(t, r, o) {
            e.get(projectUrl + "sweb/profileExpRest/get/" + r, t).then(n, s("Error")).then(function(e) {
                return o(e), e
            })
        }

        function i(t, r) {
            var o = e.get(projectUrl + "sweb/profileExpRest/getProfileExpVo/" + t).then(n, s("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function n(e) {
            return e.data
        }

        function s(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var a = {};
        return a.save = t, a.getProfileExpByUserId = i, a.get = o, a.update = r, a
    }
    angular.module("app").factory("ProfileExpService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/activityStreamRest/secured/save", t).then(l, p("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            var n = e.get(projectUrl + "sweb/activityStreamRest/getActivityVo/" + t + "/" + r + "/" + o).then(l, p("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function o(t, r, o, i) {
            var n = e.get(projectUrl + "sweb/activityStreamRest/getActivityVoOther/" + t + "/" + r + "/" + o).then(l, p("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function i(t, r) {
            var o = e.get(projectUrl + "sweb/activityStreamRest/getTotalPosts/" + t).then(l, p("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function n(t, r) {
            var o = e.get(projectUrl + "sweb/activityStreamRest/getActivityCountByUserId/" + t).then(l, p("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function s(t, r, o, i, n) {
            var s = e.get(projectUrl + "sweb/activityStreamRest/getMyActivityVos/" + t + "/" + r + "/" + o + "/" + i).then(l, p("Error getting user profile")).then(function(e) {
                n(e)
            });
            return s
        }

        function a(t, r, o, i, n) {
            var s = e.get(projectUrl + "sweb/activityStreamRest/getGroupPostVos/" + t + "/" + r + "/" + o + "/" + i).then(l, p("Error getting user profile")).then(function(e) {
                n(e)
            });
            return s
        }

        function c(t, r, o) {
            var i = e.get(projectUrl + "sweb/activityStreamRest/getSingleActivityByActivityId/" + t + "/" + r).then(l, p("Error getting user profile")).then(function(e) {
                o(e)
            });
            return i
        }

        function u(t, r) {
            e.post(projectUrl + "sweb/activityStreamRest/deleteActivity/" + t).then(l, p("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function l(e) {
            return e.data
        }

        function p(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var d = {};
        return d.save = t, d.getActivityVoByUserId = r, d.getActivityVoOfOtherByUserId = o, d.getNoOfPostsByUserId = i, d.getActivityCountByUserId = n, d.getMyActivityVos = s, d.getGroupPostVos = a, d.getActivityById = c, d.deleteActivity = u, d
    }
    angular.module("app").factory("ActivityStreamService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r, o) {
            e.post(projectUrl + "sweb/activityStreamLikeRest/like/" + t + "/" + r).then(i, n("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function r(t, r, o) {
            e.post(projectUrl + "sweb/activityStreamLikeRest/unlike/" + t + "/" + r).then(i, n("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function o(t, r, o, s) {
            var a = e.get(projectUrl + "sweb/activityStreamLikeRest/likedBy/" + t + "/" + r + "/" + o).then(i, n("Error getting user profile")).then(function(e) {
                s(e)
            });
            return a
        }

        function i(e) {
            return e.data
        }

        function n(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var s = {};
        return s.like = t, s.unlike = r, s.likedBy = o, s
    }
    angular.module("app").factory("ActivityStreamLikeService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/activityStreamCommentRest/comment", t).then(c, u("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(e)
            })
        }

        function r(t, r, o) {
            e.post(projectUrl + "sweb/activityStreamCommentRest/deleteActivityComment/" + t + "/" + r).then(c, u("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(t)
            })
        }

        function o(t, r, o) {
            e.post(projectUrl + "sweb/activityStreamCommentRest/deleteCommentReply/" + t + "/" + r).then(c, u("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(t)
            })
        }

        function i(t, r, o) {
            e.post(projectUrl + "sweb/activityStreamCommentRest/reply/" + r, t).then(c, u("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function n(t, r) {
            var o = e.get(projectUrl + "sweb/activityStreamCommentRest/getActivityCommentVo/" + t).then(c, u("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function s(t, r, o, i, n) {
            var s = e.get(projectUrl + "sweb/activityStreamCommentRest/getActivityCommentVo1/" + t + "/" + r + "/" + o + "/" + i).then(c, u("Error getting user profile")).then(function(e) {
                n(e)
            });
            return s
        }

        function a(t, r, o, i, n) {
            var s = e.get(projectUrl + "sweb/activityStreamCommentRest/getRepliesVo/" + t + "/" + r + "/" + o + "/" + i).then(c, u("Error getting user profile")).then(function(e) {
                n(e)
            });
            return s
        }

        function c(e) {
            return e.data
        }

        function u(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var l = {};
        return l.comment = t, l.getActivityCommentVo = n, l.reply = i, l.getRepliesVo = a, l.getActivityCommentVo1 = s, l.deleteActivityComment = r, l.deleteCommentReply = o, l
    }
    angular.module("app").factory("ActivityStreamCommentService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/blogRest/saveBlog", t).then(c, u("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "message required"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/blogRest/getMyBlogs/" + t + "/" + r + "/" + o).then(c, u("Error getting user blogs")).then(function(e) {
                i(e)
            });
            return n
        }

        function o(t, r, o, i, n) {
            var s = e.get(projectUrl + "sweb/blogRest/getAllBlogs/" + t + "/" + r + "/" + o + "/" + i).then(c, u("Error getting user blogs")).then(function(e) {
                n(e)
            });
            return s
        }

        function i(t, r, o) {
            var i = e.get(projectUrl + "sweb/blogRest/getSingleBlog/" + t + "/" + r).then(c, u("Error getting user blogs")).then(function(e) {
                o(e)
            });
            return i
        }

        function n(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/blogRest/getMyBlogs/" + t + "/" + r + "/" + o).then(c, u("Error getting user blogs")).then(function(e) {
                i(e)
            });
            return n
        }

        function s(t, r) {
            e.put(projectUrl + "sweb/blogRest/update", t).then(c, u("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function a(t, r) {
            e.post(projectUrl + "sweb/blogRest/deleteBlog/" + t).then(c, u("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function c(e) {
            return e.data
        }

        function u(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var l = {};
        return l.save = t, l.getBlogsByUserId = r, l.getBlogByBlogId = i, l.getRecentBlogsByUserId = o, l.getMyBlogs = n, l.update = s, l.deleteBlog = a, l
    }
    angular.module("app").factory("BlogService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r, o) {
            var i = new FormData;
            i.append("file", t), e.post(r, i, {
                transformRequest: angular.identity,
                headers: {
                    "Content-Type": void 0
                }
            }).success(function(e) {
                o(e)
            }).error(function() {})
        }

        function r(t, r, o, i) {
            var n = new FormData;
            n.append("file", t), e.post(r, n, {
                transformRequest: angular.identity,
                headers: {
                    "Content-Type": void 0
                }
            }).success(function(e) {
                i(e, o)
            }).error(function() {})
        }

        function o(t, r, o) {
            var i = new FormData;
            i.append("pictureId", r.pictureId), i.append("pictureName", r.pictureName), i.append("x", r.x), i.append("y", r.y), i.append("width", r.width), i.append("height", r.height), e.post(t, i, {
                transformRequest: angular.identity,
                headers: {
                    "Content-Type": void 0
                }
            }).success(function(e) {
                o(e)
            }).error(function() {})
        }

        function i(t, r, o, i) {
            var n = new FormData;
            n.append("file", t), n.append("fileName", r), e.post(o, n, {
                transformRequest: angular.identity,
                headers: {
                    "Content-Type": void 0
                }
            }).success(function(e) {
                i(e)
            }).error(function() {})
        }
        var n = {};
        return n.uploadFileToUrl = t, n.uploadFileToUrlWithIndex = r, n.uploadBase64FileToUrl = i, n.uploadProfilePic = o, n
    }
    angular.module("app").factory("fileUpload", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/eavAttributeOptionRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/eavAttributeOptionRest/search/" + r + "/" + o, t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, i(e), e
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/eavAttributeOptionRest/count", t).then(s, a("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function i(t, r, o) {
            e.get(projectUrl + "sweb/eavAttributeOptionRest/get/" + r, t).then(s, a("Error")).then(function(e) {
                return o(e), e
            })
        }

        function n(t, r) {
            e.put(projectUrl + "sweb/eavAttributeOptionRest/update", t).then(s, a("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.save = t, c.search = r, c.update = n, c.count = o, c.get = i, c
    }
    angular.module("app").factory("EavAttributeOptionService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/eavAttributeSetRest/save", t).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/eavAttributeSetRest/search/" + r + "/" + o, t).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, i(e), e
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/eavAttributeSetRest/count", t).then(a, c("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function i(t, r, o) {
            e.get(projectUrl + "sweb/eavAttributeSetRest/get/" + r, t).then(a, c("Error")).then(function(e) {
                return o(e), e
            })
        }

        function n(t, r) {
            e.get(projectUrl + "sweb/eavAttributeSetRest/getCompleteTree/" + t).then(a, c("Error")).then(function(e) {
                return r(e), e
            })
        }

        function s(t, r) {
            e.put(projectUrl + "sweb/eavAttributeSetRest/update", t).then(a, c("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function a(e) {
            return e.data
        }

        function c(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var u = {};
        return u.save = t, u.search = r, u.update = s, u.count = o, u.get = i, u.getCompleteTree = n, u
    }
    angular.module("app").factory("EavAttributeSetService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/lookUpCodesRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/lookUpCodesRest/search/" + r + "/" + o, t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, i(e), e
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/lookUpCodesRest/count", t).then(s, a("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function i(t, r, o) {
            e.get(projectUrl + "sweb/lookUpCodesRest/get/" + r, t).then(s, a("Error")).then(function(e) {
                return o(e), e
            })
        }

        function n(t, r) {
            e.put(projectUrl + "sweb/lookUpCodesRest/update", t).then(s, a("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.save = t, c.search = r, c.update = n, c.count = o, c.get = i, c
    }
    angular.module("app").factory("LookUpCodesService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/lookUpTypesRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/lookUpTypesRest/search/" + r + "/" + o, t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, i(e), e
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/lookUpTypesRest/count", t).then(s, a("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function i(t, r, o) {
            e.get(projectUrl + "sweb/lookUpTypesRest/getByCode/" + r, t).then(s, a("Error")).then(function(e) {
                return o(e), e
            })
        }

        function n(t, r) {
            e.put(projectUrl + "sweb/lookUpTypesRest/update", t).then(s, a("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.save = t, c.search = r, c.update = n, c.count = o, c.get = i, c
    }
    angular.module("app").factory("LookUpTypeService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/eavAttributeGroupRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/eavAttributeGroupRest/search/" + r + "/" + o, t).then(s, a("Error getting user by username")).then(function(e) {
                return i(e), e
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/eavAttributeGroupRest/count", t).then(s, a("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function i(t, r, o) {
            e.get(projectUrl + "sweb/eavAttributeGroupRest/get/" + r, t).then(s, a("Error")).then(function(e) {
                return o(e), e
            })
        }

        function n(t, r) {
            e.put(projectUrl + "sweb/eavAttributeGroupRest/update", t).then(s, a("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.save = t, c.search = r, c.update = n, c.count = o, c.get = i, c
    }
    angular.module("app").factory("EavAttributeGroupService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/eavEntityAttributeRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/eavEntityAttributeRest/search/" + r + "/" + o, t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, i(e), e
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/eavEntityAttributeRest/count", t).then(s, a("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function i(t, r, o) {
            e.get(projectUrl + "sweb/eavEntityAttributeRest/get/" + r, t).then(s, a("Error")).then(function(e) {
                return o(e), e
            })
        }

        function n(t, r) {
            e.put(projectUrl + "sweb/eavEntityAttributeRest/update", t).then(s, a("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.save = t, c.search = r, c.update = n, c.count = o, c.get = i, c
    }
    angular.module("app").factory("EavEntityAttributeService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r, o) {
            e.post(projectUrl + "sweb/jobApplicationRest/apply/" + t + "/" + r).then(n, s("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function r(t, r, o) {
            e.post(projectUrl + "sweb/jobApplicationRest/isApplied/" + t + "/" + r).then(n, s("Error getting user by username")).then(function(e) {
                o(e)
            })
        }

        function o(t, r, o, i) {
            var a = e.post(projectUrl + "sweb/jobApplicationRest/getJobApplicationVos/" + r + "/" + o, t).then(n, s("Error getting user profile")).then(function(e) {
                i(e)
            });
            return a
        }

        function i(t, r, o, i) {
            var a = e.post(projectUrl + "sweb/jobApplicationRest/getAppliedJobApplicationVos/" + r + "/" + o, t).then(n, s("Error getting user profile")).then(function(e) {
                i(e)
            });
            return a
        }

        function n(e) {
            return e.data
        }

        function s(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var a = {};
        return a.apply = t, a.isApplied = r, a.getJobApplicationVos = o, a.getAppliedJobApplicationVos = i, a
    }
    angular.module("app").factory("JobApplicationService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/jobsRest/save", t).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/jobsRest/getJobVos/" + r + "/" + o, t).then(a, c("Error getting jobs")).then(function(e) {
                i(e)
            });
            return n
        }

        function o(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/jobsRest/getPostedJobs/" + r + "/" + o, t).then(a, c("Error getting jobs")).then(function(e) {
                i(e)
            });
            return n
        }

        function i(t, r) {
            var o = e.get(projectUrl + "sweb/jobsRest/getJobVoByJobId/" + t).then(a, c("Error getting single job")).then(function(e) {
                r(e)
            });
            return o
        }

        function n(t, r) {
            e.post(projectUrl + "sweb/jobsRest/makeActive/" + t).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function s(t, r) {
            e.post(projectUrl + "sweb/jobsRest/removeActive/" + t).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function a(e) {
            return e.data
        }

        function c(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var u = {};
        return u.save = t, u.getAllJobs = r, u.getJobByJobId = i, u.getPostedJobs = o, u.makeActive = n, u.removeActive = s, u
    }
    angular.module("app").factory("JobsService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/groupMembersRest/getMyGroups/" + r + "/" + o, t).then(l, p("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function r(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/groupMembersRest/groupMembers/" + r + "/" + o, t).then(l, p("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function o(t, r, o) {
            e.post(projectUrl + "sweb/groupMembersRest/isAdmin/" + t + "/" + r).then(l, p("Error getting user by username")).then(function(e) {
                o(e)
            })
        }

        function i(t, r, o) {
            e.post(projectUrl + "sweb/groupMembersRest/acceptRequest/" + t + "/" + r).then(l, p("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function n(t, r, o) {
            e.post(projectUrl + "sweb/groupMembersRest/acceptAdminRequest/" + t + "/" + r).then(l, p("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function s(t, r, o) {
            e.post(projectUrl + "sweb/groupMembersRest/leaveGroup/" + t + "/" + r).then(l, p("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function a(t, r, o) {
            e.post(projectUrl + "sweb/groupMembersRest/removeMember/" + t + "/" + r).then(l, p("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(t)
            })
        }

        function c(t, r) {
            e.post(projectUrl + "sweb/groupMembersRest/makeGroupAdmin/" + t).then(l, p("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function u(t, r) {
            e.post(projectUrl + "sweb/groupMembersRest/removeAdmin/" + t).then(l, p("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function l(e) {
            return e.data
        }

        function p(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var d = {};
        return d.getMyGroupMembersVo = t, d.leaveGroup = s, d.removeAdmin = u, d.acceptAdminRequest = n, d.makeGroupAdmin = c, d.groupMembers = r, d.acceptRequest = i, d.removeMember = a, d.isAdmin = o, d
    }
    angular.module("app").factory("GroupMemberService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(e, t) {
            var r = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/groupMembersRest/getProfileGroupVos/" + t + "/0/20?q=" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    r = e
                }
            }), r
        }

        function r(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/groupRequestRest/getMyPendingGroupRequestVo/" + r + "/" + o, t).then(a, c("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function o(t, r, o) {
            e.post(projectUrl + "sweb/groupRequestRest/sendRequest/" + t + "/" + r).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function i(t, r, o) {
            e.post(projectUrl + "sweb/groupRequestRest/askToJoin/" + t + "/" + r).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function n(t, r, o) {
            e.post(projectUrl + "sweb/groupRequestRest/deleteRequest/" + t + "/" + r).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "deleted Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function s(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/groupRequestRest/groupRequest/" + r + "/" + o, t).then(a, c("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function a(e) {
            return e.data
        }

        function c(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var u = {};
        return u.getMyPendingGroupRequestVo = r, u.sendRequest = o, u.deleteRequest = n, u.searchUsers = t, u.askToJoin = i, u.getRequestUser = s, u
    }
    angular.module("app").factory("GroupRequestService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.put(projectUrl + "sweb/privacySettingsRest/updateSetting", t).then(i, n("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function r(t, r, o, s) {
            var a = e.post(projectUrl + "sweb/privacySettingsRest/getSettings/" + r + "/" + o, t).then(i, n("Error getting jobs")).then(function(e) {
                s(e)
            });
            return a
        }

        function o(e, t) {
            return "PUBLIC" == e.settingValue || "PRIVATE" != e.settingValue && (!("NETWORK" != e.settingValue || !t) || void 0)
        }

        function i(e) {
            return e.data
        }

        function n(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var s = {};
        return s.updateSettings = t, s.getAllSettings = r, s.getSingleSetting = o, s
    }
    angular.module("app").factory("PrivacySettingsService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/qualificationRest/save", t).then(u, l("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function r(t, r) {
            e.put(projectUrl + "sweb/qualificationRest/update", t).then(u, l("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function o(t, r, o) {
            e.get(projectUrl + "sweb/qualificationRest/get/" + r, t).then(u, l("Error")).then(function(e) {
                return o(e), e
            })
        }

        function i(t, r) {
            var o = e.get(projectUrl + "sweb/qualificationRest/getQualificationVo/" + t).then(u, l("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function n(e) {
            var t = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/schoolRest/getAllSchools/0/20?q=" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    t = e
                }
            }), t
        }

        function s(t, r, o, i) {
            e.post(projectUrl + "sweb/degreeRest/getAllDegrees/" + r + "/" + o, t).then(u, l("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, i(e), e
            })
        }

        function a(e) {
            var t = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/fieldOfStudyRest/getAllFields/0/20?q=" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    t = e
                }
            }), t
        }

        function c(e) {
            var t = {};
            return jQuery.ajax({
                url: projectUrl + "sweb/universityRest/getAllUniversity/0/20?q=" + e,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    t = e
                }
            }), t
        }

        function u(e) {
            return e.data
        }

        function l(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var p = {};
        return p.save = t, p.getQualificationByUserId = i, p.get = o, p.update = r, p.schoolAutosuggest = n, p.degreeSearch = s, p.fieldAutosuggest = a, p.universityAutosuggest = c, p
    }
    angular.module("app").factory("QualificationService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.get(projectUrl + "sweb/personaMasterRest/getByParentId/" + t).then(o, i("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(e), e
            })
        }

        function r(t, r) {
            e.get(projectUrl + "sweb/personaMasterRest/get/" + t).then(o, i("Error")).then(function(e) {
                return r(e), e
            })
        }

        function o(e) {
            return e.data
        }

        function i(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var n = {};
        return n.search = t, n.get = r, n
    }
    angular.module("app").factory("PersonaMasterService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/roleRest/search/" + r + "/" + o, t).then(s, a("Error getting jobs")).then(function(e) {
                i(e)
            });
            return n
        }

        function r(t, r) {
            e.post(projectUrl + "sweb/roleRest/count", t).then(s, a("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/roleRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function i(t, r, o) {
            e.get(projectUrl + "roleRest/getById/" + r, t).then(s, a("Error")).then(function(e) {
                return o(e), e
            })
        }

        function n(t, r) {
            e.put(projectUrl + "sweb/roleRest/update", t).then(s, a("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.searchRoles = t, c.save = o, c.get = i, c.count = r, c.update = n, c
    }
    angular.module("app").factory("RoleService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/roleFunctionJoinRest/save", t).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            e.post(projectUrl + "sweb/roleFunctionJoinRest/search/" + r + "/" + o, t).then(a, c("Error getting user by username")).then(function(e) {
                return i(e), e
            })
        }

        function o(t, r, o) {
            e.get(projectUrl + "sweb/functionRest/getAllFunction/" + t + "/" + r).then(a, c("Error getting user by username")).then(function(e) {
                return o(e), e
            })
        }

        function i(t, r) {
            e.post(projectUrl + "sweb/roleFunctionJoinRest/count", t).then(a, c("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function n(t, r, o) {
            e.get(projectUrl + "sweb/roleFunctionJoinRest/getById/" + r, t).then(a, c("Error")).then(function(e) {
                return o(e), e
            })
        }

        function s(t, r) {
            e.put(projectUrl + "sweb/roleFunctionJoinRest/update", t).then(a, c("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function a(e) {
            return e.data
        }

        function c(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var u = {};
        return u.save = t, u.search = r, u.update = s, u.count = i, u.get = n, u.getAllFunctions = o, u
    }
    angular.module("app").factory("RoleFunctionJoinService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r, o, i) {
            e.post(projectUrl + "sweb/roleFunctionJoinRest/search/" + r + "/" + o, t).then(a, c("Error getting user by username")).then(function(e) {
                return i(e), e
            })
        }

        function r(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/userRoleJoinRest/searchRoleByUserIdVo/" + r + "/" + o, t).then(a, c("Error getting jobs")).then(function(e) {
                i(e)
            });
            return n
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/userRoleJoinRest/count", t).then(a, c("Error getting user by username")).then(function(e) {
                r(e)
            })
        }

        function i(t, r) {
            e.post(projectUrl + "sweb/userRoleJoinRest/save", t).then(a, c("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function n(t, r, o) {
            e.get(projectUrl + "userRoleJoinRest/getById/" + r, t).then(a, c("Error")).then(function(e) {
                return o(e), e
            })
        }

        function s(t, r) {
            e.put(projectUrl + "sweb/userRoleJoinRest/update", t).then(a, c("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function a(e) {
            return e.data
        }

        function c(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var u = {};
        return u.searchRoleByUserId = r, u.save = i, u.get = n, u.count = o, u.update = s, u.search = t, u
    }
    angular.module("app").factory("UserRoleJoinService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/appointmentsRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/appointmentsRest/companyAppointments/" + r + "/" + o, t).then(s, a("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function o(t, r, o, i) {
            var n = e.post(projectUrl + "sweb/appointmentsRest/consultantAppointments/" + r + "/" + o, t).then(s, a("Error getting user profile")).then(function(e) {
                i(e)
            });
            return n
        }

        function i(t, r) {
            var o = e.get(projectUrl + "sweb/appointmentsRest/get/" + t).then(s, a("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function n(t, r) {
            var o = e.put(projectUrl + "sweb/appointmentsRest/update/", t).then(s, a("Error Updating User")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            });
            return o
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.save = t, c.consultantAppointments = o, c.companyAppointments = r, c.getAppointmentById = i, c.update = n, c
    }
    angular.module("app").factory("AppointmentsService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r, o) {
            e.post(projectUrl + "sweb/commentLikeRest/like/" + t + "/" + r).then(i, n("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function r(t, r, o) {
            e.post(projectUrl + "sweb/commentLikeRest/unlike/" + t + "/" + r).then(i, n("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, o(e)
            })
        }

        function o(t, r, o, s) {
            var a = e.get(projectUrl + "sweb/commentLikeRest/likedBy/" + t + "/" + r + "/" + o).then(i, n("Error getting user profile")).then(function(e) {
                s(e)
            });
            return a
        }

        function i(e) {
            return e.data
        }

        function n(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var s = {};
        return s.like = t, s.unlike = r, s.likedBy = o, s
    }
    angular.module("app").factory("CommentLikeService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/messagesRest/save", t).then(n, s("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                        success: !0,
                        message: "Saved Succesfully"
                    } : {
                        success: !1,
                        message: "message required"
                    },
                    r(e), t
            })
        }

        function r(t, r, o) {
            var i = e.get(projectUrl + "sweb/messagesRest/getNoOfMessages/" + t + "/" + r).then(n, s("Error getting user profile")).then(function(e) {
                o(e)
            });
            return i
        }

        function o(t, r, o, i) {
            var a = e.get(projectUrl + "sweb/messagesRest/getMessangersVoByUserId/" + t + "/" + r + "/" + o).then(n, s("Error getting user profile")).then(function(e) {
                i(e)
            });
            return a
        }

        function i(t, r, o, i, a) {
            var c = e.get(projectUrl + "sweb/messagesRest/getConversations/" + t + "/" + r + "/" + o + "/" + i).then(n, s("Error getting user profile")).then(function(e) {
                a(e)
            });
            return c
        }

        function n(e) {
            return e.data
        }

        function s(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var a = {};
        return a.save = t, a.getAllMessageUsers = o, a.getConversations = i, a.getNoOfMessages = r, a
    }
    angular.module("app").factory("MessagesService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/awardsRest/save", t).then(s, a("Error getting user by username")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: ""
                }, r(t)
            })
        }

        function r(t, r) {
            e.put(projectUrl + "sweb/awardsRest/update", t).then(s, a("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " Edit Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function o(t, r) {
            e.get(projectUrl + "sweb/awardsRest/getAwardsWithPictureId/" + t).then(s, a("Error")).then(function(e) {
                return r(e), e
            })
        }

        function i(t, r) {
            var o = e.get(projectUrl + "sweb/awardsRest/getAwardVos/" + t).then(s, a("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function n(t, r) {
            var o = e.post(projectUrl + "sweb/awardsRest/deleteAwards/" + t).then(s, a("Error getting user profile")).then(function(e) {
                r(e)
            });
            return o
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.save = t, c.getAwardsByUserId = i, c.get = o, c.update = r, c.deleteAwards = n, c.get = o, c
    }
    angular.module("app").factory("AwardsService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/companySpecializationRest/save", t).then(o, i("Specialization already exists")).then(function(e) {
                var t;
                t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Specialization already exists"
                }, r(t)
            })
        }

        function r(t, r, n, s) {
            var a = e.get(projectUrl + "sweb/companySpecializationRest/getSpecializationByCompanyId/" + t + "/" + r + "/" + n).then(o, i("Error getting user profile")).then(function(e) {
                s(e)
            });
            return a
        }

        function o(e) {
            return e.data
        }

        function i(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var n = {};
        return n.save = t, n.getSpecializationByCompanyId = r, n
    }
    angular.module("app").factory("CompanySpecializationService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/invitationRest/sendInvitationDefaultMail", t).then(s, a("Please enter Email Id")).then(function(e) {
                return r(e), e
            })
        }

        function r(t, r) {
            e.post(projectUrl + "sweb/invitationRest/sendInvitation", t).then(s, a("Please enter Email Id")).then(function(e) {
                return r(e), e
            })
        }

        function o(t, r) {
            e.post(projectUrl + "sweb/invitationRest/sendInvitationWithText", t).then(s, a("Please enter Email Id")).then(function(e) {
                return r(e), e
            })
        }

        function i(t, r) {
            e.post(projectUrl + "sweb/invitationRest/getInvitationLink", t).then(s, a("Please enter Email Id")).then(function(e) {
                return r(e), e
            })
        }

        function n(t, r, o) {
            e.post(projectUrl + "sweb/invitationRest/isRegistrationAllowed/", '{"email":"' + (void 0 == t ? "" : t) + '","invitationKey":"' + r + '"}').then(s, a("Please enter Email Id")).then(function(e) {
                return o(e), e
            })
        }

        function s(e) {
            return e.data
        }

        function a(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var c = {};
        return c.sendInvitationDefaultMail = t, c.getInvitationLink = i, c.sendInvitation = r, c.sendInvitationWithText = o, c.isRegistrationAllowed = n, c
    }
    angular.module("app").factory("InvitationService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e) {
        function t(t, r) {
            e.post(projectUrl + "sweb/miscellaneousDataRest/save", t).then(i, n("Error getting user by username")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: "Saved Succesfully"
                } : {
                    success: !1,
                    message: "Attribute Code Should be Between Min-3 and Max-30"
                }, r(t), t
            })
        }

        function r(t, r) {
            e.put(projectUrl + "sweb/miscellaneousDataRest/update", t).then(i, n("Error")).then(function(e) {
                var t;
                return t = e.success ? {
                    success: !0,
                    message: " updated Succesfully"
                } : {
                    success: !1,
                    message: " Error Editing"
                }, r(e), e
            })
        }

        function o(t, r, o) {
            var s = e.post(projectUrl + "sweb/miscellaneousDataRest/getMiscellaneousDataByType/" + r, t).then(i, n("Error getting user profile")).then(function(e) {
                o(e)
            });
            return s
        }

        function i(e) {
            return e.data
        }

        function n(e) {
            return function() {
                return {
                    success: !1,
                    message: e
                }
            }
        }
        var s = {};
        return s.save = t, s.update = r, s.getMiscellaneousDataByType = o, s
    }
    angular.module("app").factory("MiscellaneousDataService", e), e.$inject = ["$http"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n) {
        function s() {
            return {
                headers: {
                    Authorization: "Bearer " + localStorage.access_token,
                    Accept: "application/json,text/plain, text/html;odata=verbose"
                }
            }
        }
        return {
            getData: function(n, a, c) {
                var u = t.defer(),
                    c = $.param(c);
                return n ? e.get(projectUrl + a + c, s()).success(function(e) {
                    u.resolve(e)
                }).error(function(e, t) {
                    401 == t ? (i.error("Invalid access token"), document.cookie = "globals=" + JSON.stringify(r.globals) + "; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=localhost; path=/", o.path("/")) : 500 == t && i.error("Some Error Occured. Please try after sometime"), u.reject("An error has occurred :(")
                }) : e.get(projectUrl + a + c).success(function(e) {
                    u.resolve(e)
                }).error(function(e, t) {
                    500 == t && i.error("Some Error Occured. Please try after sometime"), u.reject("An error has occurred :(")
                }), u.promise
            },
            postData: function(n, a, c) {
                var u = t.defer();
                return n ? e.post(projectUrl + a, c, s(), {}).success(function(e) {
                    u.resolve(e)
                }).error(function(e, t) {
                    401 == t ? (i.error("Invalid access token"), document.cookie = "globals=" + JSON.stringify(r.globals) + "; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=localhost; path=/", o.path("/")) : 500 == t && i.error("Some Error Occured. Please try after sometime"), u.reject("An error has occurred :(")
                }) : e.post(projectUrl + a, c, {}).success(function(e) {
                    u.resolve(e)
                }).error(function(e, t) {
                    500 == t && i.error("Some Error Occured. Please try after sometime"), u.reject("An error has occurred :(")
                }), u.promise
            },
            updateData: function(n, a, c) {
                var u = t.defer();
                return n ? e.put(projectUrl + a, c, s(), {}).success(function(e) {
                    u.resolve(e)
                }).error(function(e, t) {
                    401 == t ? (i.error("Invalid access token"), document.cookie = "globals=" + JSON.stringify(r.globals) + "; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=localhost; path=/", o.path("/")) : 500 == t && i.error("Some Error Occured. Please try after sometime"), u.reject("An error has occurred :(")
                }) : e.put(projectUrl + a, c, s, {}).success(function(e) {
                    u.resolve(e)
                }).error(function(e, t) {
                    500 == t && i.error("Some Error Occured. Please try after sometime"), u.reject("An error has occurred :(")
                }), u.promise
            },
            deleteData: function(n, a, c) {
                var u = t.defer();
                return c = $.param(c), n ? e["delete"](projectUrl + a, s()).success(function(e) {
                    u.resolve(e)
                }).error(function(e, t) {
                    401 == t ? (i.error("Invalid access token"), document.cookie = "globals=" + JSON.stringify(r.globals) + "; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=localhost; path=/", o.path("/")) : 500 == t && i.error("Some Error Occured. Please try after sometime"), u.reject("Cannot delete data from the server :(")
                }) : e["delete"](projectUrl + a).success(function(e) {
                    u.resolve(e)
                }).error(function(e, t) {
                    500 == t && i.error("Some Error Occured. Please try after sometime"), u.reject("Cannot delete data from the server :(")
                }), u.promise
            }
        }
    }
    angular.module("app").factory("CommonService", e), e.$inject = ["$http", "$q", "$rootScope", "$location", "toastr", "$cookieStore"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n, s) {
        function a() {
            o.jobsearchshow = "true", u.jobsearchmodel.companyId = u.userId, t.getPostedJobs(u.jobsearchmodel, 0, 10, function(e) {
                u.allJobSearch = e, u.allJobSearch.forEach(function(e) {
                    null != e.currentProfilePictureId ? e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentProfilePictureId : e.picture = "img/defaultprofile.png"
                })
            })
        }

        function c(e) {
            t.removeActive(e, function(e) {
                e && a()
            })
        }
        var u = this;
        u.jobsearch = a, u.removeActive = c, n.userId ? u.userId = n.userId : u.userId = i.globals.currentUser.id, o.jobsearchshow = "false",
            function() {
                u.jobsearchmodel = {}
            }()
    }
    angular.module("app").controller("PostedJobsController", e), e.$inject = ["$location", "JobsService", "FlashService", "$scope", "$rootScope", "$routeParams", "JobApplicationService"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n) {
        function s(e) {
            a.dataLoading = !0, "getLink" == e ? n.postData(!0, "sweb/invitationRest/getInvitationLink", a.invitation).then(function(e) {
                a.invitationLink = e.object, e.success ? (a.invitation = {}, r.message = !0, e = {
                    success: !0
                }, t.Success(e.message)) : (t.Error(e.message), a.dataLoading = !1)
            }) : "defaultMail" == e ? n.postData(!0, "sweb/invitationRest/sendInvitationDefaultMail", a.invitation).then(function(e) {
                e.success ? (e = {
                    success: !0,
                    message: "Invitation send successfully"
                }, a.invitation = {}, t.Success(e.message)) : (e = {
                    success: !1,
                    message: "Some Error Accured Try Get Link Button To Generate Link !!"
                }, t.Error(e.message), a.dataLoading = !1)
            }) : "getText" == e ? ($("#invitation-text-blk").show(), n.postData(!0, "sweb/invitationRest/sendInvitation", a.invitation).then(function(e) {
                a.invitation = e.object, e.success || (t.Error(e.message), a.dataLoading = !1)
            })) : "textMail" == e && n.postData(!0, "sweb/invitationRest/sendInvitationWithText", a.invitation).then(function(e) {
                a.invitation = e.object, e.success ? (e = {
                    success: !0,
                    message: "Invitation send successfully"
                }, $("#invitation-text-blk").hide()) : (t.Error(e.message), a.dataLoading = !1)
            })
        }
        var a = this;
        a.sendInvitation = s, a.invitation = {}
    }
    angular.module("app").controller("InvitationController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n, s, a) {
        function c() {
            o.globals.currentUser && (a.getData(!1, "sweb/notificationRest/getNotificationVos/" + o.globals.currentUser.id + "/0/5", {}).then(function(e) {
                w.notification = e, w.notification.forEach(function(e) {
                    e.notificationTime = convertUtcToLocalTime(e.notificationTime), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, e.type, e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                })
            }), a.getData(!1, "sweb/notificationRest/getFriendRequestNotification/" + o.globals.currentUser.id + "/0/5", {}).then(function(e) {
                w.friendRequests = e, w.friendRequests.forEach(function(e) {
                    e.notificationTime = convertUtcToLocalTime(e.notificationTime), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, e.type, e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                })
            }), a.getData(!1, "sweb/messagesRest/getMessagesByUserId/" + o.globals.currentUser.id + "/0/5", {}).then(function(e) {
                w.messagesAll = e, w.messagesAll.forEach(function(e) {
                    e.sentDate = convertUtcToLocalTime(e.sentDate), null != e.senderCurrentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.senderCurrentProfilePictureId, e.type, e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                })
            }))
        }

        function u() {
            o.globals.currentUser && (a.getData(!1, "sweb/notificationRest/getNotificationCount/" + o.globals.currentUser.id, {}).then(function(e) {
                w.notifications = e, 0 == w.notifications && (w.notifications = "")
            }), a.getData(!1, "sweb/messagesRest/getNoOfMessageNotificationUsers/" + o.globals.currentUser.id, {}).then(function(e) {
                w.messages = e, 0 == w.messages && (w.messages = "")
            }), a.getData(!1, "sweb/notificationRest/getFriendRequestCount/" + o.globals.currentUser.id, {}).then(function(e) {
                w.friends = e, 0 == w.friends && (w.friends = "")
            }))
        }

        function l() {
            document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=localhost; path=/", localStorage.setItem("access_token", ""), document.cookie = "globals=" + JSON.stringify(o.globals) + "; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=localhost; path=/", $("#profile-top-menu").toggle(), location.reload(), e.path("/")
        }

        function p() {
            $("#profile-top-menu").toggle(), e.path("/" + o.globals.currentUser.username)
        }

        function d() {
            $("#profile-top-menu").toggle(), e.path("/postJob")
        }

        function f() {
            $("#profile-top-menu").toggle(), e.path("/appliedJobs")
        }

        function g(t, r, o) {
            $(".notifications> div").toggle(), "0" == r ? e.path("/" + o) : "1" == r ? e.path("/" + o) : "2" == r ? e.path("/groups-my") : "3" == r ? e.path("/singleActivity/" + t) : "4" == r ? e.path("/singleActivity/" + t) : "5" == r ? e.path("/singleActivity/" + t) : "6" == r ? e.path("/singleActivity/" + t) : "7" == r ? e.path("/groups-my") : "8" == r ? e.path("/groups-profile/" + t) : "9" == r ? e.path("/" + o) : "10" == r ? e.path("/blog-inner/" + t) : "11" == r ? e.path("/blog-inner/" + t) : "12" == r ? e.path("/blog-inner/" + t) : "13" == r ? e.path("/blog-inner/" + t) : "14" == r && e.path("/blog-inner/" + t), $("#profile-top-menu").hide()
        }

        function m(t) {
            $(".messages> div").toggle(), e.path("/messaging/" + t), $("#profile-top-menu").hide()
        }

        function h() {
            $("#profile-top-menu").toggle(), e.path("/changePassword")
        }

        function v() {
            $("#profile-top-menu").toggle(), e.path("/settings")
        }

        function y() {
            $(".notifications> div").toggle(), e.path("/notifications"), $("#profile-top-menu").hide()
        }

        function b() {
            $(".notifications> div").hide(), e.path("/messaging"), $("#profile-top-menu").hide(), $(".messages> div").toggle()
        }
        var w = this;
        w.logout = l, w.messageNotifyToggle = m, w.getAllNotificationsByUserId = c, w.getNotificationByUserId = u, w.profileNameToggle = p, w.jobToggle = d, w.jobAppliedToggle = f, w.notificationNotifyToggle = g, w.friendRequests = [], w.notification = [], w.settingsToggle = v, w.showAllToggle = y, w.showAllMessageToggle = b, w.changePasswordToggle = h;
        var S = {
            getAllNotificationsByUserId: function() {
                return c()
            },
            getNotificationByUserId: function(e) {
                return u()
            }
        };
        ! function() {
            c(), u()
        }(), r.showAll = function(t) {
            o.notificationType = t, e.path("/notifications"), e.path().indexOf("/notifications") > -1 && location.reload()
        }, r.updateNotification = function() {
            $(".notifications> div").toggle(), $(".messages> div").hide(), $("#profile-top-menu").hide(), $(".users> div").hide(), a.getData(!1, "sweb/notificationRest/updateNotification/" + o.globals.currentUser.id, {}).then(function(e) {
                w.notificationsUpdate = e, w.notifications = ""
            })
        }, r.updateMessages = function() {
            $(".messages> div").toggle(), $(".notifications> div").hide(), $(".users> div").hide(), $("#profile-top-menu").hide(), a.getData(!1, "sweb/messagesRest/updateMessages/" + o.globals.currentUser.id, {}).then(function(e) {
                w.messagesUpdate = e, w.messages = ""
            })
        }, r.updateFriendRequest = function() {
            $(".users> div").toggle(), $(".notifications> div").hide(), $(".messages> div").hide(), $("#profile-top-menu").hide(), a.getData(!1, "sweb/notificationRest/updateFriendRequests/" + o.globals.currentUser.id, {}).then(function(e) {
                w.friendUpdate = e, w.friends = ""
            })
        }, r.profilemenu = function() {
            $(".messages> div").hide(), $(".notifications> div").hide(), $(".users> div").hide(), $("#profile-top-menu").toggle()
        }, o.$on("$routeChangeSuccess", function(e, t, o) {
            t.$$route.isBlog ? r.searchPlaceholder = "Search Blogs" : r.searchPlaceholder = "Search Profiles"
        }), $(document).on("click", function() {
            $("#profile-top-menu").hide(), $(".messages> div").hide(), $(".notifications> div").hide(), $(".users> div").hide()
        }), r.search = function() {
            s.current.isBlog ? e.url("/blog?q=" + (void 0 == w.q ? "" : w.q)) : e.url("/profileSearch?q=" + (void 0 == w.q ? "" : w.q))
        }, o.$on("$locationChangeSuccess", function(e, t, o) {
            S.getNotificationByUserId.call(), S.getAllNotificationsByUserId.call(), s.current.isBlog ? r.isBlog = !0 : r.isBlog = !1
        }), r.appStoreUrlReload = function() {
            window.location.href = projectWebUrl + "/download-app"
        }
    }
    angular.module("app").controller("HeaderController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "$cookieStore", "$route", "CommonService"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n, s) {
        function a() {
            v.groupMember.userId = i.globals.currentUser.id, s.postData(!0, "sweb/groupMembersRest/getMyGroups/-1/0", v.groupMember).then(function(e) {
                v.myGroups = e, v.myGroups.forEach(function(e) {
                    null != e.currentGroupPictureId ? e.picture = getPictureUrlWithExtension(e.currentGroupPictureId, "group", e.groupPictureName, "thumnail_300_300") : e.picture = "img/kh_icons/group-logo.png"
                })
            })
        }

        function c() {
            v.group.userId = v.userId, s.postData(!0, "sweb/groupRequestRest/groupRequest/-1/0", v.group).then(function(e) {
                v.requestedByUsers = e
            })
        }

        function u() {
            v.group.createdBy = v.userId, s.postData(!0, "sweb/groupRest/getRequestsVo/-1/0", v.group).then(function(e) {
                v.requestedByAdmin = e
            })
        }

        function l() {
            v.groupRequest.userId = v.userId, s.postData(!0, "sweb/groupRequestRest/getMyPendingGroupRequestVo/-1/0", v.groupRequest).then(function(e) {
                v.myPendingGroups = e
            })
        }

        function p() {
            v.group.createdBy = v.userId, s.postData(!0, "sweb/groupRest/save", v.group).then(function(e) {
                e.success ? (v.group = {}, a(), e = {
                    success: !0,
                    message: "Saved succesfully"
                }, t.alerts.groupPost = [], t.alerts.groupPost.push({
                    type: "success",
                    createdAt: Date.now(),
                    msg: e.message
                }), d(t.alerts.groupPost), r.Success(e.message)) : r.Error(e.message)
            })
        }

        function d(e) {
            var r = 5e3,
                o = setInterval(function() {
                    e.forEach(function(i) {
                        var n = convertUtcToLocalTime(Date.now()),
                            s = convertUtcToLocalTime(i.createdAt),
                            a = Math.abs(n - s);
                        a > r && (e.shift(), t.$apply(), clearInterval(o))
                    })
                }, 1e3)
        }

        function f(e, t) {
            s.postData(!0, "sweb/groupMembersRest/acceptRequest/" + e + "/" + t).then(function(e) {
                e.success ? (c(), u(), a(), e = {
                    success: !0,
                    message: "Saved succesfully"
                }, r.Success(e.message)) : (r.Error(e.message), v.dataLoading = !1)
            })
        }

        function g(e, t) {
            s.postData(!0, "sweb/groupMembersRest/acceptAdminRequest/" + e + "/" + t).then(function(e) {
                e.success ? (c(), u(), a(), e = {
                    success: !0,
                    message: "Saved succesfully"
                }, r.Success(e.message)) : (r.Error(e.message), v.dataLoading = !1)
            })
        }

        function m(e) {
            s.postData(!0, "sweb/groupMembersRest/leaveGroup/" + e + "/" + i.globals.currentUser.id, {}).then(function(e) {
                e.success ? a() : (r.Error(e.message), v.dataLoading = !1)
            })
        }

        function h(e) {
            s.postData(!0, "sweb/groupRequestRest/deleteRequest/" + i.globals.currentUser.id + "/" + e, {}).then(function(e) {
                e.success ? (l(), e = {
                    success: !0,
                    message: "Saved succesfully"
                }, r.Success(e.message)) : (r.Error(e.message), v.dataLoading = !1)
            })
        }
        var v = this;
        v.save = p, v.userId = i.globals.currentUser.id, v.groupRequestfromUsers = c, v.myPendingRequest = l, v.groupRequestFromAdmin = u, t.alerts = {}, v.membersInGroup = {}, v.groupMember = {}, v.groupRequest = {}, v.group = {}, v.acceptRequest = f, v.acceptAdminRequest = g, v.deleteRequest = h, v.groupThatIAmIn = a, v.leaveGroup = m, v.groupId = o.groupId,
            function() {
                a(), l(), c(), u()
            }(), t.search = function() {
                e.url("/groups-discover?q=" + (void 0 == v.q ? "" : v.q))
            }
    }
    angular.module("app").controller("GroupController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "FlashService", "$routeParams", "$rootScope", "fileUpload", "CommonService"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n, s, a) {
        function c() {
            t.postData(!1, "sweb/invitationRest/isRegistrationAllowed/", '{"email":"' + (void 0 == e.search().email ? "" : e.search().email) + '","invitationKey":"' + e.search().link + '"}', {}).then(function(e) {
                m.isRegistrationAllowed = e;
                var t = window.location.href,
                    r = t.indexOf("=") + 1,
                    o = t.indexOf("&") + 1,
                    i = t.slice(r, o - 1);
                r > 0 && o > 0 ? (m.user.email = i, m.disabled = !0) : 0 == r && (m.disabled = !1)
            })
        }

        function u(e, r) {
            if (r != -1)
                for (var o = r + 1; o < Object.keys(m.personaMastersMap).length; o++) delete m.personaMastersMap[o];
            else m.personaMastersMap = {};
            var i = void 0 != e ? e.id : void 0;
            void 0 != i && 1 != e.leaf && t.getData(!1, "sweb/personaMasterRest/getByParentId/" + i, {}).then(function(e) {
                0 == Object.keys(m.personaMastersMap).length ? m.personaMastersMap[0] = e : m.personaMastersMap[Object.keys(m.personaMastersMap).length] = e
            })
        }

        function l() {
            $(".tab-paned").removeClass("active");
            var e = $('input[name="optradio"]:checked').val();
            return 1 == e ? (m.firstName = "COMPANY NAME", m.showLastName = !1, $("#secondtab").delay(500).addClass("active")) : (m.firstName = "FIRST NAME", m.showLastName = !0, $("#secondtab").addClass("active")), $(".social-contn").show("1000"), !1
        }

        function p() {
            var r = f();
            return 1 != r ? (n.alerts.passwordError = [], n.alerts.passwordError = [{
                type: "danger",
                createdAt: Date.now(),
                msg: verify_captcha
            }], d(n.alerts.passwordError), grecaptcha.reset(), !1) : m.user.confirmPassword != m.user.password ? (n.alerts.passwordError = [], n.alerts.passwordError = [{
                type: "danger",
                createdAt: Date.now(),
                msg: password_matching_error
            }], d(n.alerts.passwordError), grecaptcha.reset(), !1) : (m.dataLoading = !0, void 0 != m.user.lastName && null != m.user.lastName || (m.user.lastName = ""), Object.keys(m.personaMastersMap).length > 0 ? m.user.personaId = m.personaValue[Object.keys(m.personaMastersMap).length - 1].id : m.user.personaId = m.user.basePersonaId, m.user.registrationDate = new Date, t.postData(!1, "sweb/userRest/register", m.user).then(function(t) {
                t.success ? (t = {
                    success: !0,
                    message: "Registered Successfully"
                }, e.path("/login"), o.Success("Registered Successfully", !0), m.user = {}, e.path("/regsuccess")) : (t.messages.forEach(function(e) {
                    n.alerts.passwordError = [], n.alerts.passwordError = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: e.message
                    }], d(n.alerts.passwordError), grecaptcha.reset()
                }), m.dataLoading = !1)
            }), void 0)
        }

        function d(e) {
            var t = 5e3,
                r = setInterval(function() {
                    e.forEach(function(o) {
                        var i = convertUtcToLocalTime(Date.now()),
                            s = convertUtcToLocalTime(o.createdAt),
                            a = Math.abs(i - s);
                        a > t && (e.shift(), n.$apply(), clearInterval(r))
                    })
                }, 1e3)
        }

        function f() {
            var e = $("textarea#g-recaptcha-response").val();
            return null != e && void 0 != e && "" != e
        }

        function g(r) {
            m.personaId = m.personaValue[Object.keys(m.personaMastersMap).length - 1].id, s.authenticate(r, {
                personaId: m.personaId
            }).then(function(r) {
                localStorage.setItem("access_token", r.data.tokenObject.access_token), t.postData(!0, "sweb/profileRest/getProfileByEmailId", '{"email":"' + r.data.id + '"}', {}).then(function(t) {
                    var r = t,
                        o = new Date(r.dob);
                    r.dob = o, null != r.profileVo.currentProfilePictureId ? (r.profilePicture = projectUrl + "sweb/pictureRest/viewPicture/" + r.profileVo.currentProfilePictureId, r.profilePicture_70_70 = getPictureUrlWithExtension(r.profileVo.currentProfilePictureId, r.picType, r.picName, "thumnail_70_70"), r.profilePicture_300_300 = getPictureUrlWithExtension(r.profileVo.currentProfilePictureId, r.picType, r.picName, "thumnail_300_300")) : r.profilePicture = "img/defaultprofile.png", e.path("/" + r.userName)
                })
            })["catch"](function(e) {
                "unauthorized" == e.data.error ? (n.alerts.passwordError = [], n.alerts.passwordError = [{
                    type: "danger",
                    createdAt: Date.now(),
                    msg: e.data.error_description
                }], d(n.alerts.passwordError)) : e.data ? (n.alerts.passwordError = [], n.alerts.passwordError = [{
                    type: "danger",
                    createdAt: Date.now(),
                    msg: e.data.error_description
                }], d(n.alerts.passwordError)) : o.Error(e)
            })
        }
        var m = this;
        n.alerts = {}, i.globals.currentUser && (m.userId = i.globals.currentUser.id, m.firstName = i.globals.currentUser.firstName, m.lastName = i.globals.currentUser.lastName), m.Save = p, m.flashsetinterval = d, m.verifyCaptcha = f, m.user = {}, m.onPersonaChange = u, m.allowRegistration = c, m.authenticate = g, m.openSecondTab = l, m.isRegistrationAllowed = !1, m.disabled = !1, m.datasiteKey = data_site_key, m.secretKey = secret_key;
        var h = document.getElementById("first-name");
        document.getElementById("last-name");
        ! function() {
            m.personaMastersMap = {}, m.personaValue = {}, t.getData(!1, "sweb/personaMasterRest/getByParentId/-1", {}).then(function(e) {
                m.personaMasters = e, m.user.selectedPersonaId = m.personaMasters[0].id, u(m.personaMasters[0], -1)
            }), c()
        }(), n.changePlaceholder = function() {
            1 == m.user.basePersonaId ? h.placeholder = "COMPANY NAME" : h.placeholder = "FIRST NAME"
        }
    }
    angular.module("app").controller("UserController", e), e.$inject = ["$location", "CommonService", "AuthenticationService", "FlashService", "$rootScope", "$scope", "$auth", "$http"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n, s, a, c) {
        function u() {
            if (isNaN(o.emailOrMobile) ? (p.user.email = o.emailOrMobile, p.user.mobile = void 0) : (p.user.mobile = o.emailOrMobile, p.user.email = void 0), p.dataLoading = !0, null != p.user.email || void 0 != p.user.email) var i = "email";
            else if (null != p.user.mobile || void 0 != p.user.mobile) var i = "mobile";
            t.LoginOauth(p.user, i, d, function(o) {
                o.success ? (localStorage.setItem("access_token", o.object.access_token), a.postData(!0, "sweb/profileRest/getProfileByEmailId", p.user, {}).then(function(r) {
                    var i = r,
                        n = new Date(i.dob);
                    i.dob = n, null != i.profileVo.currentProfilePictureId ? (i.profilePicture_70_70 = getPictureUrlWithExtension(i.profileVo.currentProfilePictureId, "profile", i.profileVo.profilePictureFileName, "thumnail_70_70"), i.profilePicture_300_300 = getPictureUrlWithExtension(i.profileVo.currentProfilePictureId, "profile", i.profileVo.profilePictureFileName, "thumnail_300_300")) : "company" == i.profileVo.template ? (i.profilePicture = "img/CompanyDefaultPic.png", i.profilePicture_70_70 = "img/CompanyDefaultPic.png", i.profilePicture_300_300 = "img/CompanyDefaultPic.png") : (i.profilePicture = "img/defaultprofile.png", i.profilePicture_70_70 = "img/CompanyDefaultPic.png", i.profilePicture_300_300 = "img/CompanyDefaultPic.png"), t.SetCredentials(i.firstName, i.lastName, i.password, i.id, i, o.object.access_token), p.user = {}, e.path("/schoolprofile")
                })) : (r.Error(o.message), p.dataLoading = !1)
            })
        }

        function l(o) {
            s.authenticate(o, []).then(function(r) {
                localStorage.setItem("access_token", r.data.tokenObject.access_token), r.data.isMyApiLogin && !r.data.hasRefreshToken ? l("google_api_login") : a.postData(!0, "sweb/profileRest/getProfileByEmailId", '{"email":"' + r.data.id + '"}', {}).then(function(o) {
                    var i = o,
                        n = new Date(i.dob);
                    i.dob = n, null != i.profileVo.currentProfilePictureId ? (i.profilePicture_70_70 = getPictureUrlWithExtension(i.profileVo.currentProfilePictureId, "profile", i.profileVo.profilePictureFileName, "thumnail_70_70"), i.profilePicture_300_300 = getPictureUrlWithExtension(i.profileVo.currentProfilePictureId, "profile", i.profileVo.profilePictureFileName, "thumnail_300_300")) : "company" == i.profileVo.template ? (i.profilePicture = "img/CompanyDefaultPic.png", i.profilePicture_70_70 = "img/CompanyDefaultPic.png", i.profilePicture_300_300 = "img/CompanyDefaultPic.png") : (i.profilePicture = "img/defaultprofile.png", i.profilePicture_70_70 = "img/CompanyDefaultPic.png", i.profilePicture_300_300 = "img/CompanyDefaultPic.png"), t.SetCredentials(i.firstName, i.lastName, i.password, i.id, i, r.data.tokenObject.access_token), e.path("/schoolprofile")
                })
            })["catch"](function(e) {
                "USER_IS_NOT_REGISTERED" == e.data.error_description ? r.Error("You are not Registered with us") : "USER_IS_REGISTERED" == e.data.error_description ? r.Error("You already have an account") : "YOUR_ACCOUNT_HAS_BEEN_DEACTIVATED" == e.data.error_description ? r.Error("Your Account Has Been Deactivated Contact Administrator for Help") : e.data ? r.Error(e.data.message, e.status) : r.Error(e)
            })
        }
        var p = this;
        n.resetPasswordInfo = {}, p.user = {}, p.login = login, p.loginOauth = u, p.authenticate = l;
        var d = "";
        e.search().hasOwnProperty("rootapp") && (d = e.search().rootapp), o.status = function() {
            isNaN(o.emailOrMobile) ? (p.user.email = o.emailOrMobile, p.user.mobile = void 0) : (p.user.mobile = o.emailOrMobile, p.user.email = void 0), a.postData(!1, "sweb/userRest/userStatus", p.user).then(function(e) {
                e.success ? 1 == e.object ? (o.showOtpBox = !0, o.showPasswordBox = !1, o.showUserNullBox = !1, o.showOtpResetBox = !1) : 2 == e.object ? (o.showPasswordBox = !1, o.showUserNullBox = !1, o.showOtpBox = !1, o.showOtpResetBox = !0) : 3 == e.object ? (o.showPasswordBox = !0, o.showUserNullBox = !1, o.showOtpBox = !1, o.showOtpResetBox = !1) : 0 == e.object && (o.showUserNullBox = !0, o.showOtpBox = !1, o.showPasswordBox = !1, o.showOtpResetBox = !1) : r.Error("You are not Registered with us")
            })
        }, o.confirmOTP = function() {
            a.postData(!1, "sweb/userRest/confirmEmail", p.user).then(function(t) {
                t && (1 == o.showOtpResetBox && (n.resetPasswordInfo = p.user, e.path("/resetPassword")), o.status(), r.Success("OTP is Comfirm..!! Ready To Go"))
            })
        }
    }
    angular.module("app").controller("LoginController", e), e.$inject = ["$location", "AuthenticationService", "FlashService", "$scope", "$cookieStore", "$rootScope", "$auth", "CommonService", "$window"]
}(),
function() {
    "use strict";

    function e(e, t, r) {
        function o() {
            i.dataLoading = !0, t.save(i.follow, function(t) {
                t.success ? (t = {
                    success: !0
                }, e.path("/")) : (e.path("/"), r.Error(t.message), i.dataLoading = !1)
            })
        }
        var i = this;
        i.save = o
    }
    angular.module("app").controller("FollowController", e), e.$inject = ["$location", "FollowService", "FlashService"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n) {
        function s() {
            a.dataLoading = !0, t.save(a.userId, i.userId, function(e) {
                a.button = "FRIENDS"
            })
        }
        var a = this;
        a.save = s, a.userId = o.globals.currentUser.id, a.isFriend = !1,
            function() {
                null != i.userId ? t.isFriend(a.userId, i.userId, function(e) {
                    a.isFriend = e, "true" == a.isFriend ? a.button = "FRIENDS" : a.button = "ADD FRIEND"
                }) : $("#friend").hide()
            }()
    }
    angular.module("app").controller("FriendController", e), e.$inject = ["$location", "FriendService", "FlashService", "$rootScope", "$routeParams", "$scope"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n) {
        function s() {
            c.dataLoading = !0, null != n.id && e.path().toString().includes("/eavAttribute") ? r.update(c.eavAttribute, function(t) {
                t.success ? (e.path("/eavAttributeSearch"), t = {
                    success: !0,
                    message: "Saved succesfully"
                }, e.path("/eavAttributeSearch"), i.Success(t.message)) : (i.Error(t.message), c.dataLoading = !1)
            }) : r.save(c.eavAttribute, function(t) {
                t.success ? (t = {
                    success: !0,
                    message: "Saved succesfully"
                }, e.path("/eavAttributeSearch"), i.Success(t.message)) : (i.Error(t.message), c.dataLoading = !1)
            })
        }

        function a() {
            c.dataLoading = !0, null != c.eavAttributeOption.id ? o.update(c.eavAttributeOption, function(t) {
                t.success ? (t = {
                    success: !0,
                    message: "Saved succesfully"
                }, e.path("/eavAttribute/" + c.eavAttributeOption.eavAttributeId), i.Success(t.message)) : (i.Error(t.message), c.dataLoading = !1)
            }) : (c.eavAttributeOption.eavAttributeId = n.id, o.save(c.eavAttributeOption, function(t) {
                t.success ? (t = {
                    success: !0,
                    message: "Saved succesfully"
                }, e.path("/eavAttribute/" + c.eavAttributeOption.eavAttributeId), i.Success(t.message)) : (i.Error(t.message), c.dataLoading = !1)
            }))
        }
        var c = this;
        c.updateEavAttribute = s, c.updateOption = a;
        var u = 0,
            l = 0;
        ! function() {
            r.count("{}", function(e) {
                u = e
            }), o.count("{}", function(e) {
                l = e
            })
        }(), null != n.id && e.path().toString().includes("/eavAttribute") && r.get(c.eavAttribute, n.id, function(e, t, r) {
            c.eavAttribute = e
        }), null != n.id && e.path().toString().includes("/eavAttributeOption") && (t.message = "true", o.get(c.eavAttributeOption, n.id, function(e, t, r) {
            c.eavAttributeOption = e
        })), null != n.id && e.path().toString().includes("/eavAttributeOptionNew") && (c.eavAttributeOption = {}, c.eavAttributeOption.eavAttributeId = n.id), t.currentPage = 0, t.pageSize = 5, t.filteredEavAttributes = [], r.search("{}", t.currentPage * t.pageSize, t.pageSize, function(e) {
            t.filteredEavAttributes = e
        }), t.numberOfPages = function() {
            return Math.ceil(u / t.pageSize)
        }, t.count = function() {
            return r.count(c.eavAttribute)
        };
        for (var p = 0; p < 45; p++) t.filteredEavAttributes.push("Item " + p);
        t.currentOptionPage = 0, t.pageOptionSize = 5, t.filteredEavAttributesOption = [];
        var d = n.id;
        null != d && o.search('{ "eavAttributeId" :' + d + "}", t.currentOptionPage * t.pageOptionSize, t.pageOptionSize, function(e) {
            t.filteredEavAttributesOption = e
        }), t.numberOfOptionPages = function() {
            return Math.ceil(l / t.pageOptionSize)
        }, t.count = function() {
            return o.count(c.eavAttributeOption)
        }
    }
    angular.module("app").controller("EavAttributeController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "EavAttributeService", "EavAttributeOptionService", "FlashService", "$routeParams"]
}(),
function() {
    "use strict";

    function e(e, t, r) {
        function o() {
            i.dataLoading = !0, t.save(i.persona, function(t) {
                t.success ? (t = {
                    success: !0
                }, e.path("/")) : (e.path("/"), r.Error(t.message), i.dataLoading = !1)
            })
        }
        var i = this;
        i.save = o
    }
    angular.module("app").controller("PersonaController", e), e.$inject = ["$location", "PersonaService", "FlashService"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n, s, a, c, u, l, p, d, f, g, m, h, v, y, b, w) {
        function S() {
            le.dataLoading = !0, le.singleMessage.fromUser = g.globals.currentUser.id, le.singleMessage.toUser = m.userId, le.singleMessage.sentDate = new Date, s.save(le.singleMessage, function(e) {
                $("#contact-message-blk").toggle(), e.success ? e = {
                    success: !0
                } : (p.Error(e.message), le.dataLoading = !1)
            })
        }

        function P() {
            h.save(g.globals.currentUser.id, m.userId, function(e) {
                e.success ? ("Follow" == le.followbutton ? (le.userDetails.noOfFollowers++, le.followbutton = "Unfollow") : (le.userDetails.noOfFollowers--, le.followbutton = "Follow"), e = {
                    success: !0
                }) : (p.Error(e.message), le.dataLoading = !1)
            })
        }

        function I(e) {
            void 0 == e && (e = 0), y.save(g.globals.currentUser.id, m.userId, e, function(e) {
                r.getUserDetailsByUserId(le.userId, function(e) {
                    le.userDetails = e
                }), e.success ? (le.isFriendRequestSent = !1, le.FriendButton = "Friends", "Follow" == le.followbutton && (le.followbutton = "Unfollow")) : (p.Error(e.message), le.dataLoading = !1)
            })
        }

        function U() {
            y.rejectRequest(g.globals.currentUser.id, m.userId, function(e) {
                e.success ? (le.isFriendRequestSent = !1, le.FriendButton = "Send Request") : (p.Error(e.message), le.dataLoading = !1)
            })
        }

        function E(e) {
            void 0 == e && (e = 0), "Send Request" == le.FriendButton && y.sendRequest(g.globals.currentUser.id, m.userId, e, function(e) {
                e.success ? ("Follow" == le.followbutton && (le.userDetails.noOfFollowers++, le.followbutton = "Unfollow"), le.FriendButton = "Request Sent", e = {
                    success: !0
                }) : (p.Error(e.message), le.dataLoading = !1)
            })
        }

        function R() {
            le.dataLoading = !0, le.profile.aboutUs = $("#summercontent").summernote("code"), le.profile.userId = le.userId, null !== le.profile.selectedCountryItem ? (le.profile.countryId = le.profile.selectedCountryItem.id, le.profile.country = le.profile.selectedCountryItem.countryName) : le.profile.countryName = le.searchCountryText, t.update(le.profile, function(e) {
                $("#profile-like-blk").toggle(), e.success ? e = {
                    success: !0
                } : (p.Error(e.message), le.dataLoading = !1)
            })
        }

        function A() {
            le.dataLoading = !0, null != le.profileExp.id ? (le.profileExp.userId = le.userId, void 0 != le.profileExp.selectedItem && null !== le.profileExp.selectedItem ? (le.profileExp.companyId = le.profileExp.selectedItem.userId, le.profileExp.company = le.profileExp.selectedItem.name) : le.profileExp.company = le.searchText, o.update(le.profileExp, function(t) {
                o.getProfileExpByUserId(le.userId, function(e) {
                    le.profileExp = {}, le.profileExps = e, le.profileExps.forEach(function(e) {
                        null != e.currentProfilePictureId && (e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentProfilePictureId)
                    }), $("#exp-pos-blk").toggle(), $("#exp-pos").show()
                }), t.success ? (t = {
                    success: !0
                }, e.path("/profile")) : (e.path("/"), p.Error(t.message), le.dataLoading = !1)
            })) : (le.profileExp.userId = le.userId, null !== le.profileExp.selectedItem ? (le.profileExp.companyId = le.profileExp.selectedItem.userId, le.profileExp.company = le.profileExp.selectedItem.name) : le.profileExp.company = le.searchText, o.save(le.profileExp, function(t) {
                o.getProfileExpByUserId(le.userId, function(e) {
                    le.profileExp = {}, le.profileExps = e, le.profileExps.forEach(function(e) {
                        null != e.currentProfilePictureId && (e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentProfilePictureId)
                    }), $("#exp-pos-blk").toggle(), $("#exp-pos").show()
                }), t.success ? (t = {
                    success: !0
                }, e.path("/profile")) : (e.path("/"), p.Error(t.message), le.dataLoading = !1)
            }))
        }

        function C() {
            le.dataLoading = !0, null != le.qualification.id ? (le.qualification.userId = le.userId, void 0 != le.profileExp.selectedItem && null !== le.qualification.selectedSchoolItem ? (le.qualification.schoolId = le.qualification.selectedSchoolItem.id, le.qualification.schoolName = le.qualification.selectedSchoolItem.name) : le.qualification.schoolName = le.searchSchoolText, void 0 != le.profileExp.selectedItem && null !== le.qualification.selectedFieldItem ? (le.qualification.fieldId = le.qualification.selectedFieldtem.id, le.qualification.fieldName = le.qualification.selectedFieldItem.fieldName) : le.qualification.fieldName = le.searchFieldText, void 0 != le.profileExp.selectedItem && null !== le.qualification.selectedUniversityItem ? (le.qualification.universityId = le.qualification.selectedUniversityItem.id, le.qualification.universityName = le.qualification.selectedUniversityItem.name) : le.qualification.universityName = le.searchUniversityText, n.update(le.qualification, function(t) {
                n.getQualificationByUserId(le.userId, function(e) {
                    le.qualification = {}, le.allQualifications = e, $("#qual-pos-blk").toggle(), $("#qual-pos").show()
                }), t.success ? (t = {
                    success: !0
                }, e.path("/profile")) : (e.path("/"), p.Error(t.message), le.dataLoading = !1)
            })) : (le.qualification.userId = le.userId, null !== le.qualification.selectedSchoolItem ? (le.qualification.schoolId = le.qualification.selectedSchoolItem.id, le.qualification.schoolName = le.qualification.selectedSchoolItem.name) : le.qualification.schoolName = le.searchSchoolText, null !== le.qualification.selectedFieldItem ? (le.qualification.fieldId = le.qualification.selectedFieldItem.id, le.qualification.fieldName = le.qualification.selectedFieldItem.fieldName) : le.qualification.fieldName = le.searchFieldText, null !== le.qualification.selectedUniversityItem ? (le.qualification.universityId = le.qualification.selectedUniversityItem.id, le.qualification.universityName = le.qualification.selectedUniversityItem.name) : le.qualification.universityName = le.searchUniversityText, n.save(le.qualification, function(t) {
                n.getQualificationByUserId(le.userId, function(e) {
                    le.qualification = {}, le.allQualifications = e, $("#qual-pos-blk").toggle(), $("#qual-pos").show()
                }), t.success ? (t = {
                    success: !0
                }, e.path("/profile")) : (e.path("/"), p.Error(t.message), le.dataLoading = !1)
            }))
        }

        function D(e) {
            var t = e,
                r = projectUrl + "sweb/pictureRest/myUploadWithoutRef/award";
            b.uploadFileToUrl(t, r, function(e) {
                return e != -1 ? (le.awardPictureId = e, "uploadSuccesFully") : "uploadFail"
            })
        }

        function T() {
            le.awards.dataLoading = !0, null != le.award.id ? (le.award.userId = le.userId, a.update(le.award, function(t) {
                a.getAwardsByUserId(le.userId, function(e) {
                    le.award = {}, le.allAwards = e, $("#award-pos").show(), $("#award-pos-blk").toggle()
                }), t.success ? (t = {
                    success: !0
                }, e.path("/profile")) : (e.path("/"), p.Error(t.message), le.awards.dataLoading = !1)
            })) : (le.award.userId = le.userId, le.award.pictureId = le.awardPictureId, a.save(le.award, function(t) {
                a.getAwardsByUserId(le.userId, function(e) {
                    le.allAwards = e, e && le.allAwards.forEach(function(e) {
                        null != e.currentAwardPictureId && (e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentAwardPictureId)
                    }), $("#award-pos").show(), $("#award-pos-blk").toggle()
                }), t.success ? (t = {
                    success: !0
                }, e.path("/profile")) : (e.path("/"), p.Error(t.message), le.awards.dataLoading = !1)
            }))
        }

        function k() {
            le.companySpecialization.dataLoading = !0, le.companySpecialization.companyId = g.globals.currentUser.id, null !== le.companySpecialization.selectedSpecializationItem && (le.companySpecialization.specializationId = le.companySpecialization.selectedSpecializationItem.id), c.save(le.companySpecialization, function(t) {
                t.success ? (M(), t = {
                    success: !0
                }, e.path("/profile")) : (e.path("/"), p.Error(t.message), le.companySpecialization.dataLoading = !1)
            })
        }

        function j() {
            d.search(g.globals.currentUser.personaId, function(e) {
                le.personaMaster = e
            })
        }

        function _() {
            d.get(g.globals.currentUser.personaId, function(e) {
                le.singlePersonaMaster = e, x(e, -1)
            })
        }

        function x(e, t) {
            if (t != -1)
                for (var r = t + 1; r < Object.keys(le.personaMastersMap).length; r++) delete le.personaMastersMap[r];
            else le.personaMastersMap = {};
            var o = void 0 != e ? e.id : void 0;
            void 0 != o && 1 != e.leaf && d.search(o, function(e) {
                0 == Object.keys(le.personaMastersMap).length ? le.personaMastersMap[0] = e : le.personaMastersMap[Object.keys(le.personaMastersMap).length] = e
            })
        }

        function L() {
            le.dataLoading = !0, Object.keys(le.personaMastersMap).length > 0 ? le.user.personaId = le.personaValue[Object.keys(le.personaMastersMap).length - 1].id : le.user.personaId = le.user.basePersonaId.id, le.user.id = g.globals.currentUser.id, r.updatePersonaId(le.user, function(e) {
                e.success ? p.Success("Saved Successfully", !0) : (p.Error(e.message), le.dataLoading = !1)
            })
        }

        function M() {
            c.getSpecializationByCompanyId(g.globals.currentUser.id, -1, 0, function(e) {
                le.specializations = e
            })
        }

        function F(e) {}

        function B(e) {
            return t.companyAutosuggest(e)
        }

        function O(e) {}

        function N(e) {}

        function q(e) {}

        function G(e) {
            t.countryAutoSuggest(e)
        }

        function V(e) {}

        function Y(e) {}

        function z(e) {}

        function W(e) {
            return n.schoolAutosuggest(e)
        }

        function J(e) {}

        function Q(e) {}

        function H(e) {}

        function K(e, t) {
            return n.fieldAutosuggest(e, t)
        }

        function X(e) {}

        function Z(e) {}

        function ee(e) {}

        function te(e) {
            return n.universityAutosuggest(e)
        }

        function re(e) {}

        function oe(e) {}

        function ie(e) {}

        function ne(e) {
            return t.specializationAutoSuggest(e)
        }

        function se(e) {}

        function ae(e) {}

        function ce() {
            t.getGalleryPictureIds(g.globals.currentUser.id, -1, 0, function(e) {
                le.galleryPictureIds = e, le.galleryPictureIds.pictures = [], le.galleryPictureIds.forEach(function(e) {
                    null != e.galleryPictureId && (e.pictures = projectUrl + "sweb/pictureRest/viewPicture/" + e.galleryPictureId)
                })
            })
        }

        function ue(e, t, r) {
            var o = e,
                i = projectUrl + "sweb/pictureRest/myUpload/gallery/" + g.globals.currentUser.id;
            b.uploadFileToUrl(o, i, function(e) {
                return e == -1 ? "uploadFail" : (t == r && (f.message = "Uploaded Successfully", ce()), void(e = {
                    success: !0,
                    message: "Uploaded Successfully"
                }))
            })
        }
        var le = this;
        le.acceptRequest = I, le.update = R, le.follow = P, le.galleryPictureIds = {}, le.sendRequest = E, le.rejectRequest = U, le.galleryUploadFile = ue, le.multipartFilesYouAreUploading = [], le.getGalleryPictures = ce, le.user = {}, le.updateUserPersonaId = L, le.getPersonaByPersonaId = _, le.getSpecializationByCompanyId = M, le.specializations = {}, le.personaMasters = {}, le.updateExp = A, le.updateAwards = T, le.updateQualification = C, le.updateSpecialization = k, le.getPersona = j, le.onPersonaChange = x, le.uploadAwardFile = D, le.isFollowing = !1, le.saveMessage = S, le.profile = {}, le.awards = {}, le.profileExp = {}, null != m.userId && m.userId != g.globals.currentUser.id ? (le.userId = m.userId, $("#profile-like").hide(), f.edit = "false", $(".pichide").hide(), $(".imgbtn").hide(), f.update_profile = "false", $("#contact-message").show()) : (le.userId = g.globals.currentUser.id, f.update_profile = "true", $("#contact-message").hide(), f.edit = "true"),
            function() {
                function s() {
                    t.getProfileUpdateVo(le.userId, function(e) {
                        le.profile = e;
                        var t = new Date(le.profile.dob);
                        le.profile.dob = t.toLocaleString(), "1/1/1970, 5:30:00 AM" == le.profile.dob ? le.profile.dob = "" : le.profile.dob = t, le.searchCountryText = le.profile.country, $(".note-editable").html(le.profile.aboutUs), null != le.profile.currentProfilePictureId ? le.profile.profilePicture = projectUrl + "sweb/pictureRest/viewPicture/" + le.profile.currentProfilePictureId : le.profile.profilePicture = "img/defaultprofile.png"
                    })
                }
                ce(), M(), j(), _(), o.getProfileExpByUserId(le.userId, function(e) {
                    le.profileExps = e, e && le.profileExps.forEach(function(e) {
                        null != e.currentProfilePictureId && (e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentProfilePictureId)
                    })
                }), n.getQualificationByUserId(le.userId, function(e) {
                    le.allQualifications = e
                }), a.getAwardsByUserId(le.userId, function(e) {
                    le.allAwards = e, e && le.allAwards.forEach(function(e) {
                        null != e.currentAwardPictureId && (e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentAwardPictureId)
                    })
                }), s();
                var c = e.search();
                t.getProfileVos(c.q, -1, 0, function(e) {
                    le.profiles = e, le.profiles.forEach(function(e) {
                        null != e.currentPictureId ? e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentPictureId : e.picture = "img/defaultprofile.png"
                    })
                }), l.getNoOfPostsByUserId(le.userId, function(e) {
                    le.userPosts = e
                }), null != m.userId && m.userId != g.globals.currentUser.id ? h.isFollowing(g.globals.currentUser.id, m.userId, function(e) {
                    le.isFollowing = e, le.isFollowing ? le.followbutton = "Unfollow" : le.followbutton = "Follow"
                }) : ($("#follow").hide(), $(".follow_container").hide()), null != m.userId && m.userId != g.globals.currentUser.id ? y.isFriend(g.globals.currentUser.id, m.userId, function(e) {
                    le.isFriend = e, le.isFriend ? le.FriendButton = "Friends" : le.FriendButton = "Send Request"
                }) : $(".friendbutton").hide(), null != m.userId && m.userId != g.globals.currentUser.id ? y.isFriendRequestSent(m.userId, g.globals.currentUser.id, function(e) {
                    le.isFriendRequestSent = e, le.isFriendRequestSent && (le.acceptButton = "Accept Request ", le.rejectButton = "Reject Request")
                }) : $("#friend").hide(), r.getUserDetailsByUserId(le.userId, function(e) {
                    le.userDetails = e
                }), le.privacySettingSearch = {}, le.privacySettingSearch.userId = m.userId, null != m.userId ? i.getAllSettings(le.privacySettingSearch, -1, 0, function(e) {
                    le.allSettings = e, le.allSettings.forEach(function(e) {
                        "EMAIL" == e.settingType ? f.showEmail = i.getSingleSetting(e, le.isFriend) : "MOBILE" == e.settingType ? f.showMobile = i.getSingleSetting(e, le.isFriend) : "DOB" == e.settingType && (f.showDob = i.getSingleSetting(e, le.isFriend))
                    })
                }) : (f.showEmail = !0, f.showMobile = !0, f.showDob = !0)
            }(), f.uploadFile = function() {
                var e = f.myFile,
                    t = projectUrl + "sweb/pictureRest/myUpload/profile/" + le.profile.id;
                b.uploadFileToUrl(e, t, function(e) {
                    var t = "";
                    t = e != -1 ? projectUrl + "sweb/pictureRest/viewPicture/" + e : "img/defaultprofile.png", g.globals.currentUser.profilePicture = t, w.put("globals", g.globals), le.profile.currentProfilePictureId = e
                })
            }, f.profileEdit = function(e) {
                $("#exp-pos").hide(), $("#exp-pos-blk").toggle(), o.get(le.profileExp, e, function(e) {
                    le.profileExp = e;
                    var t = new Date(le.profileExp.fromDate);
                    le.profileExp.fromDate = t;
                    var r = new Date(le.profileExp.toDate);
                    le.profileExp.toDate = r, le.searchText = le.profileExp.company
                })
            }, f.qualificationEdit = function(e) {
                $("#qual-pos").hide(), $("#qual-pos-blk").toggle(), n.get(le.qualification, e, function(e) {
                    le.qualification = e;
                    var t = new Date(le.qualification.startDate);
                    le.qualification.startDate = t;
                    var r = new Date(le.qualification.endDate);
                    le.qualification.endDate = r, le.searchSchoolText = le.qualification.schoolName, le.searchFieldText = le.qualification.fieldName, le.searchUniversityText = le.qualification.universityName
                })
            }, f.fileOnChange = function(e) {
                if (e.files && e.files[0]) {
                    var t = new FileReader;
                    t.onload = function(e) {
                        return function(t) {
                            $("#awardPic").attr("src", t.target.result), D(e)
                        }
                    }(e.files[0]), t.readAsDataURL(e.files[0])
                }
            }, le.simulateQuery = !1, le.isDisabled = !1, le.querySearch = B, le.selectedItemChange = N, le.searchTextChange = O, le.newState = F, le.response123 = {}, le.simulateCountryQuery = !1, le.isCountryDisabled = !1, le.queryCountrySearch = G, le.selectedCountryItemChange = Y, le.searchCountryTextChange = V, le.newCountryState = q, le.response456 = {}, le.simulateSchoolQuery = !1, le.isSchoolDisabled = !1, le.querySchoolSearch = W, le.selectedSchoolItemChange = Q, le.searchSchoolTextChange = J, le.newSchoolState = z, le.response23 = {}, n.degreeSearch("{}", -1, 0, function(e) {
                le.allDegrees = e
            }), le.simulateFieldQuery = !1, le.isFieldDisabled = !1, le.queryFieldSearch = K, le.selectedFieldItemChange = Z, le.searchFieldTextChange = X, le.newFieldState = H, le.response34 = {}, le.simulateUniversityQuery = !1, le.isUniversityDisabled = !1, le.queryUniversitySearch = te, le.selectedUniversityItemChange = oe, le.searchUniversityTextChange = re, le.newUniversityState = ee, le.response34 = {}, le.simulateSpecializationQuery = !1, le.isSpecializationDisabled = !1, le.querySpecializationSearch = ne, le.selectedSpecializationItemChange = ae, le.searchSpecializationTextChange = se, le.newSpecializationState = ie, le.response123 = {}, f.galleryFileOnChange = function(e) {
                var t = le.multipartFilesYouAreUploading.length,
                    r = t;
                if (e.files)
                    for (var o = 0; o < e.files.length; o++) {
                        le.multipartFilesYouAreUploading[r + o] = {}, le.multipartFilesYouAreUploading[r + o].src = "", le.multipartFilesYouAreUploading[r + o].file = "";
                        var i = new FileReader;
                        i.onload = function(e, t, r, o) {
                            return t.abc = "",
                                function(e) {
                                    t.src = e.target.result, ue(t.file, r, o), le.multipartFilesYouAreUploading = []
                                }
                        }(e.files[o], le.multipartFilesYouAreUploading[r + o], o, e.files.length - 1), le.multipartFilesYouAreUploading[r + o].file = e.files[o], i.readAsDataURL(e.files[o])
                    }
            }
    }
    angular.module("app").controller("ProfileController", e), e.$inject = ["$location", "ProfileService", "UserService", "ProfileExpService", "PrivacySettingsService", "QualificationService", "MessagesService", "AwardsService", "CompanySpecializationService", "EavAttributeSetService", "ActivityStreamService", "FlashService", "PersonaMasterService", "$scope", "$rootScope", "$routeParams", "FollowService", "$http", "FriendService", "fileUpload", "$cookieStore"]
}(),
function() {
    "use strict";

    function e(e, t, r, o) {
        var i = this;
        i.profileExps = "", i.userId = o.globals.currentUser.id
    }
    angular.module("app").controller("ProfileExpController", e), e.$inject = ["$location", "ProfileExpService", "FlashService", "$rootScope"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n) {
        function s() {
            a.dataLoading = !0, null != i.id && e.path().toString().includes("/lookUpCodes") ? (a.lookUpCodes.lastUpdatedBy = n.globals.currentUser.id, r.update(a.lookUpCodes, function(t) {
                t.success ? (t = {
                    success: !0,
                    message: "Saved succesfully"
                }, e.path("/lookUpType/" + a.lookUpCodes.lookUpType), o.Success(t.message, !0)) : (o.Error(t.message), a.dataLoading = !1)
            })) : (a.lookUpCodes.lastUpdatedBy = n.globals.currentUser.id, a.lookUpCodes.createdBy = n.globals.currentUser.id, r.save(a.lookUpCodes, function(t) {
                t.success ? (t = {
                    success: !0,
                    message: "Saved succesfully"
                }, e.path("/lookUpType/" + a.lookUpCodes.lookUpType), o.Success(t.message, !0)) : (o.Error(t.message), a.dataLoading = !1)
            }))
        }
        var a = this;
        a.updateLookUpCodes = s,
            function() {
                null != i.id && e.path().toString().includes("/lookUpCodes/") && r.get(a.lookUpCodes, i.id, function(e) {
                    a.lookUpCodes = e
                }), null != i.id && e.path().toString().includes("/lookUpCodesNew/") && (t.message = "false", a.lookUpCodes = {}, a.lookUpCodes.lookUpType = i.id)
            }()
    }
    angular.module("app").controller("LookUpCodesController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "LookUpCodesService", "FlashService", "$routeParams", "$rootScope"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i) {
        function n() {
            r.count(s.lookUpTypesSearch, function(e) {
                a = e
            }), r.search(s.lookUpTypesSearch, t.currentPage * t.pageSize, t.pageSize, function(e) {
                t.filteredLookUpType = e
            })
        }
        var s = this;
        s.search = n;
        var a = 0;
        ! function() {
            s.lookUpTypesSearch = {}
        }(), t.message = "false", null != i.id && e.path().toString().includes("/lookUpType/") && (t.message = "true", r.get(s.lookUpTypes, i.id, function(e, t, r) {
            s.lookUpTypes = e
        })), t.currentPage = 0, t.pageSize = 5, t.filteredLookUpType = [], t.numberOfPages = function() {
            return Math.ceil(a / t.pageSize)
        }, t.count = function() {
            return r.count(s.lookUpTypes)
        }
    }
    angular.module("app").controller("LookUpTypeController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "LookUpTypeService", "FlashService", "$routeParams"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n) {
        var s = this;
        s.search = search;
        var a = 0;
        ! function() {
            s.lookUpCodesSearch = {}
        }(), t.message = "false", null != n.id && e.path().toString().includes("/lookUpType/") && (t.message = "true", r.get(s.lookUpTypes, n.id, function(e, t, r) {
            s.lookUpTypes = e
        })), t.currentPage = 0, t.pageSize = 5, t.filteredLookUpCodes = [];
        var c = n.id;
        o.count(s.lookUpCodesSearch, function(e) {
            a = e
        }), o.search('{"lookUpType":"' + c + '"}', t.currentPage * t.pageSize, t.pageSize, function(e) {
            t.filteredLookUpCodes = e
        }), t.numberOfPages = function() {
            return Math.ceil(a / t.pageSize)
        }, t.count = function() {
            return o.count(s.lookUpCodesSearch)
        }
    }
    angular.module("app").controller("LookUpTypeEditController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "LookUpTypeService", "LookUpCodesService", "FlashService", "$routeParams"]
}(),
function() {
    "use strict";

    function e(e, t, r, o, i, n, s, a, c) {
        function u() {
            a.getData(!0, "sweb/activityStreamRest/getMyActivityVos/" + E.userIdForRecentActivity + "/" + o.globals.currentUser.id + "/0/5", {}).then(function(e) {
                E.recentActivityStreams = e, E.recentActivityStreams.forEach(function(e) {
                    e.time = convertUtcToLocalTime(e.time), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, e.type, e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png", null != e.picturesId && (e.pictures = [], e.picturesId.forEach(function(t) {
                        var r = {};
                        r.id = t.id, r.pictureType = t.type, r.pictureName = t.pictureName, r.isVideo = t.video, r.isVideo ? (r.videoProcessing = I(e.time), r.url = c.trustAsResourceUrl("https://www.youtube.com/embed/" + t.pictureName)) : r.url = getPictureUrlWithExtension(t.id, t.type, t.pictureName, "thumnail_300_300"), e.pictures.push(r)
                    }))
                })
            })
        }

        function l() {
            E.activityId = i.activityId, E.userIdForRecentActivity = o.globals.currentUser.id, a.getData(!0, "sweb/activityStreamRest/getSingleActivityByActivityId/" + E.activityId + "/" + E.userId, {}).then(function(t) {
                E.singleActivity = t, "" == t ? e.path("/pageNotFound") : E.singleActivity.forEach(function(e) {
                    e.time = convertUtcToLocalTime(e.time), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.profilePictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png", null != e.picturesId && (e.pictures = [], e.picturesId.forEach(function(t) {
                        var r = {};
                        r.id = t.id, r.pictureType = t.type, r.pictureName = t.pictureName, r.isVideo = t.video, r.isVideo ? (r.videoProcessing = I(e.time), r.url = c.trustAsResourceUrl("https://www.youtube.com/embed/" + t.pictureName)) : r.url = getPictureUrlWithExtension(t.id, t.type, t.pictureName, "thumnail_300_300"), e.pictures.push(r)
                    }))
                })
            })
        }

        function p() {
            E.loadingActivity = !0, r.isBusy !== !0 && (r.isBusy = !0, null != i.userId || void 0 != i.userId ? a.getData(!0, "sweb/activityStreamRest/getActivityVoOther/" + E.userId + "/" + R + "/10", {}).then(function(e) {
                var t = 0;
                e.forEach(function(e) {
                    e.time = convertUtcToLocalTime(e.time), E.activityStreams.push(e), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, e.type, e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png", null != e.picturesId && (e.pictures = [], e.picturesId.forEach(function(t) {
                        var r = {};
                        r.id = t.id, r.pictureName = t.pictureName, r.pictureType = t.type, r.isVideo = t.video, r.isVideo ? (r.videoProcessing = I(e.time), r.url = c.trustAsResourceUrl("https://www.youtube.com/embed/" + t.pictureName)) : r.url = getPictureUrlWithExtension(t.id, t.type, t.pictureName, "thumnail_300_300"), e.pictures.push(r)
                    })), t++
                })
            })["finally"](function() {
                R += 10, r.infiniteScoll = !1, r.isBusy = !1, E.loadingActivity = !1
            }) : a.getData(!0, "sweb/activityStreamRest/getActivityVo/" + E.userId + "/" + R + "/10", {}).then(function(e) {
                var t = 0;
                e.forEach(function(e) {
                    e.time = convertUtcToLocalTime(e.time), E.activityStreams.push(e), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, e.type, e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png", null != e.picturesId && (e.pictures = [], e.picturesId.forEach(function(t) {
                        var r = {};
                        r.id = t.id, r.pictureName = t.pictureName, r.pictureType = t.type, r.isVideo = t.video, r.isVideo ? (r.url = c.trustAsResourceUrl("https://www.youtube.com/embed/" + t.pictureName), r.videoProcessing = I(e.time)) : r.url = getPictureUrlWithExtension(t.id, t.type, t.pictureName, "thumnail_300_300"), e.pictures.push(r)
                    })), t++
                })
            })["finally"](function() {
                R += 10, r.infiniteScoll = !1, r.isBusy = !1, E.loadingActivity = !1
            }))
        }

        function d() {
            if (E.save.dataLoading = !1, E.activityStream.userId = o.globals.currentUser.id, !(void 0 != E.pictureIds && null != E.pictureIds && 0 != E.pictureIds.length || null != E.activityStream.content && "" != E.activityStream.content)) return r.alerts.activities = [], r.alerts.activities = [{
                type: "danger",
                createdAt: Date.now(),
                msg: activity_error
            }], void P(r.alerts.activities);
            void 0 != E.pictureIds && (E.activityStream.pictureIds = E.pictureIds), E.activityStream.createdDate = new Date, E.activityStream.createdDate = convertLocalToUTC(E.activityStream.createdDate);
            var e = E.activityStream.content,
                i = "";
            if (null != e) {
                var n = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
                i = E.activityStream.content.replace(n, function(e) {
                    return '<a href="' + e + '" target="_blank">' + e + "</a>"
                })
            }
            E.activityStream.content = i, a.postData(!0, "sweb/activityStreamRest/secured/save", E.activityStream).then(function(e) {
                e.success ? location.reload() : (t.Error(e.message), E.save.dataLoading = !0)
            })
        }

        function f(e, t, r) {
            a.postData(!1, "sweb/activityStreamCommentRest/deleteActivityComment/" + e + "/" + t, {}).then(function(e) {
                E.comments[t].splice(r, 1)
            })
        }

        function g(e, t, r) {
            a.postData(!1, "sweb/activityStreamCommentRest/deleteCommentReply/" + e + "/" + t, {}).then(function(e) {
                E.replies[t].splice(r, 1)
            })
        }

        function m(e, t) {
            a.postData(!0, "sweb/activityStreamRest/secured/deleteActivity/" + e, {}).then(function(e) {
                location.reload(), e.success && E.activityStreams.splice(t, 1)
            })
        }

        function h(e, t, o) {
            1 == o && (E.commentStartRecord = {}, E.commentCount = {}, E.comments[e] = []), void 0 == E.commentStartRecord[e] && (E.commentStartRecord[e] = 0), void 0 == E.commentCount[e] && (E.commentCount[e] = t), a.getData(!1, "sweb/activityStreamCommentRest/getActivityCommentVo1/" + e + "/" + E.loggedInUserId + "/" + E.commentStartRecord[e] + "/3", {}).then(function(t) {
                0 == E.commentStartRecord[e] ? t.forEach(function(t) {
                    t.commentedOn = convertUtcToLocalTime(t.commentedOn), E.comments[e].unshift(t), null != t.currentProfilePictureId ? t.picture = getPictureUrlWithExtension(t.currentProfilePictureId, "profile", t.pictureName, "thumnail_70_70") : t.picture = "img/defaultprofile.png"
                }) : t.length > 0 && t.forEach(function(t) {
                    t.commentedOn = convertUtcToLocalTime(t.commentedOn), E.comments[e].unshift(t), null != t.currentProfilePictureId ? t.picture = getPictureUrlWithExtension(t.currentProfilePictureId, "profile", t.pictureName, "thumnail_70_70") : t.picture = "img/defaultprofile.png"
                }), E.commentStartRecord[e] = E.commentStartRecord[e] + 3, E.remaining = E.commentCount[e] - E.comments[e].length, E.comments[e].length < E.commentCount[e] ? r.noMoreRecordsToShow = !0 : r.noMoreRecordsToShow = !1
            })
        }

        function v(e, t, o) {
            1 == o && (E.replyStartRecord = {}, E.replytCount = {}, E.replies[e] = []), void 0 == E.replyStartRecord[e] && (E.replyStartRecord[e] = 0), void 0 == E.replytCount[e] && (E.replytCount[e] = t), a.getData(!1, "sweb/activityStreamCommentRest/getRepliesVo/" + e + "/" + E.loggedInUserId + "/" + E.replyStartRecord[e] + "/3", {}).then(function(t) {
                t.forEach(function(t) {
                    E.replies[e].unshift(t), t.commentedOn = convertUtcToLocalTime(t.commentedOn), null != t.currentProfilePictureId ? t.picture = getPictureUrlWithExtension(t.currentProfilePictureId, "profile", t.pictureName, "thumnail_70_70") : t.picture = "img/defaultprofile.png"
                }), E.replyStartRecord[e] = E.replyStartRecord[e] + 3, E.replies[e].length < E.replytCount[e] ? r.noMoreReply = !1 : r.noMoreReply = !0
            })
        }

        function y(t, r, o) {
            e.path("/" + o), $(".modal-backdrop").hide(), $("body").css("overflow", "auto")
        }

        function b(e, t, r) {
            E.fullImageUrl = getPictureUrlWithExtension(e, t, r, "thumnail_600_600"), $("#bigPicture").modal("toggle")
        }

        function w() {
            a.getData(!1, "sweb/friendRest/peapleYouMayKnow/" + o.globals.currentUser.id, {}).then(function(e) {
                E.peapleYouMayKnow = e, E.peapleYouMayKnow.forEach(function(e) {
                    null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                })
            })
        }

        function S(t, r, o) {
            e.path("/" + o), $(".modal-backdrop").hide(), $("body").css("overflow", "auto")
        }

        function P(e) {
            var t = 5e3,
                o = setInterval(function() {
                    e.forEach(function(i) {
                        var n = convertUtcToLocalTime(Date.now()),
                            s = convertUtcToLocalTime(i.createdAt),
                            a = Math.abs(n - s);
                        a > t && (e.shift(), r.$apply(), clearInterval(o))
                    })
                }, 1e3)
        }

        function I(e) {
            var t = 6e5,
                r = convertUtcToLocalTime(Date.now()),
                o = Math.abs(r - e);
            return !(o > t)
        }

        function U(e) {
            var t = 6e5,
                o = setInterval(function() {
                    e.forEach(function(i) {
                        var n = convertUtcToLocalTime(Date.now()),
                            s = convertUtcToLocalTime(i.createdAt),
                            a = Math.abs(n - s);
                        a > t && (e.shift(), r.$apply(), clearInterval(o))
                    })
                }, 6e4)
        }
        r.alerts = {}, r.UploadingVideo = !1, i.userId == o.globals.currentUser.username ? r.isCurrentUser = !1 : r.isCurrentUser = s.current.isUserName;
        var E = this;
        E.activityStreamComment = {}, E.activityStreamCommentReply = {}, E.deleteActivityComment = f, E.deleteActivity = m, E.deleteCommentReply = g, E.recentActivityStreams = u, E.peapleYouMayKnow = w, E.getFullPicture = b, r.uploadingActivityPicture = !1, E.recentActivityStreams = {}, E.save = d, E.likedByToggle = y, E.commentLikedByToggle = S, E.multipartFilesYouAreUploading = [], E.totalNoOfFiles = 0, E.pictureIds = [], E.activityStreams = [], E.getcomment1 = h, E.getReplies = v, E.loadMore = p, r.isBusy = !1, E.activityStream = {}, E.flashsetinterval = P, E.replies = [], E.comments = [], E.replies = {}, E.likedBy = {}, E.commentLikedBy = {};
        var R = 0;
        null != i.id && e.path().indexOf("/singleActivity") > -1 && (E.singleActivityById = l), E.commentStartRecord = {}, E.commentCount = {}, E.remaining = {}, s.current.isUserName ? null != i.userId || void 0 != i.userId ? jQuery.ajax({
                url: projectUrl + "sweb/userRest/getIdByUserName/" + i.userId,
                async: !1,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    E.otherProfile = e, null != E.otherProfile.profileVo.currentProfilePictureId ? E.otherProfile.src = getPictureUrlWithExtension(E.otherProfile.profileVo.currentProfilePictureId, E.otherProfile.picType, E.otherProfile.picName, "thumnail_300_300") : E.otherProfile.src = "img/defaultprofile.png", E.userId = E.otherProfile.id
                }
            }) : E.userId = o.globals.currentUser.id : null != i.userId || void 0 != i.userId ? E.userId = i.userId : E.userId = o.globals.currentUser.id, void 0 != o.globals.currentUser.id && (E.loggedInUserId = o.globals.currentUser.id),
            function() {
                e.path().indexOf("/activity") > -1 && p(), s.current.isUserName ? E.userIdForRecentActivity = E.userId : null != i.userId ? E.userIdForRecentActivity = i.userId : E.userIdForRecentActivity = o.globals.currentUser.id, w(), s.current.profilePage && u(), null != i.activityId && e.path().indexOf("/singleActivity") > -1 && l(), E.activityStream.visibility = "PUBLIC"
            }(), r.fileOnChange = function(e) {
                var t = e.files[0],
                    o = t.type,
                    i = ["image/gif", "image/jpeg", "image/png"];
                if (!($.inArray(o, i) > -1)) return r.alerts.activities = [], r.alerts.activities = [{
                    type: "danger",
                    createdAt: Date.now(),
                    msg: photo_type_error
                }], void P(r.alerts.activities);
                var s = E.multipartFilesYouAreUploading.length,
                    a = s;
                if (e.files)
                    for (var c = 0; c < e.files.length; c++)
                        if (E.multipartFilesYouAreUploading[a + c] = {}, E.multipartFilesYouAreUploading[a + c].src = "", E.multipartFilesYouAreUploading[a + c].file = "", E.multipartFilesYouAreUploading[a + c].name = "", window.FileReader) {
                            var u = new FileReader;
                            u.onload = function(t, o) {
                                return o.abc = "",
                                    function(t) {
                                        var i = new Image;
                                        i.onload = function() {
                                            var t = document.createElement("canvas"),
                                                o = t.getContext("2d");
                                            t.width = 600, t.height = t.width * (i.height / i.width), o.drawImage(i, 0, 0, t.width, t.height), r.uploadingActivityPicture = !0;
                                            var s = t.toDataURL("image/jpeg"),
                                                a = projectUrl + "sweb/pictureRest/base64FileUploadWithoutRef/activity";
                                            n.uploadBase64FileToUrl(s, e.files[0].name, a, function(e) {
                                                return e != -1 ? (r.uploadingActivityPicture = !0, E.pictureIds.push(e), r.uploadingActivityPicture = !1, "uploadSuccesFully") : "uploadFail"
                                            })
                                        }, i.src = t.target.result, o.src = t.target.result
                                    }
                            }(e.files[c], E.multipartFilesYouAreUploading[a + c]), E.multipartFilesYouAreUploading[a + c].file = e.files[c], u.readAsDataURL(e.files[c])
                        } else {
                            E.multipartFilesYouAreUploading[a + c].file = e.files[c];
                            var l = e.files[c];
                            E.multipartFilesYouAreUploading[a + c].name = e.files[c].name;
                            var p = projectUrl + "sweb/pictureRest/myUploadWithoutRef/activity";
                            n.uploadFileToUrlWithIndex(l, p, c, function(e, t) {
                                return e != -1 ? (r.uploadingActivityPicture = !0, E.pictureIds.push(e), E.multipartFilesYouAreUploading[a + t].src = getPictureUrl(e, "activity", E.multipartFilesYouAreUploading[a + t].name), r.uploadingActivityPicture = !1, "uploadSuccesFully") : "uploadFail"
                            })
                        }
            }, r.like = function(r) {
                E.dataLoading = !0, a.postData(!0, "sweb/activityStreamLikeRest/secured/like/" + r, {}).then(function(o) {
                    o.success ? (o = {
                        success: !0,
                        message: "Saved succesfully"
                    }, E.activityStreams.forEach(function(e) {
                        e.activityId == r && (e.noOfLikes++, e.likedByYou = !0)
                    }), s.current.profilePage && u(), e.path().indexOf("/singleActivity/") > -1 && l(), t.Success(o.message)) : (t.Error(o.message), E.dataLoading = !1)
                })
            }, r.unlike = function(r) {
                E.dataLoading = !0, a.postData(!0, "sweb/activityStreamLikeRest/secured/unlike/" + r, {}).then(function(o) {
                    o.success ? (o = {
                        success: !0,
                        message: "Saved succesfully"
                    }, E.activityStreams.forEach(function(e) {
                        e.activityId == r && (e.noOfLikes--, e.likedByYou = !1)
                    }), s.current.profilePage && u(), e.path().indexOf("/singleActivity/") > -1 && l(), t.Success(o.message)) : (t.Error(o.message), E.dataLoading = !1)
                })
            }, r.comment = function(r) {
                E.dataLoading = !0;
                var o = null,
                    i = null;
                E.activityStreams.forEach(function(e) {
                    e.activityId == r && (o = e)
                }), s.current.profilePage && E.recentActivityStreams.forEach(function(e) {
                    e.activityId == r && (i = e)
                }), E.activityStreamComment.activityId = r, E.commentedOn = new Date, s.current.profilePage ? E.activityStreamComment.comment = i.com : e.path().indexOf("/activity") > -1 ? E.activityStreamComment.comment = o.com : E.activityStreamComment.comment = E.singleActivity[0].com, a.postData(!0, "sweb/activityStreamCommentRest/secured/comment", E.activityStreamComment).then(function(n) {
                    n.success ? (e.path().indexOf("/activity") > -1 ? (o.noOfComments++, o.com = "") : s.current.profilePage ? (i.noOfComments++, i.com = "", u()) : l(), e.path().indexOf("/activity") > -1 ? h(r, o.noOfComments, !0) : s.current.profilePage ? h(r, i.noOfComments, !0) : h(r, E.singleActivity[0].noOfComments, !0)) : (t.Error(n.message), E.dataLoading = !1)
                })
            }, r.commentsHide = !0, r.reply = function(e, r) {
                E.dataLoading = !0;
                var o = null;
                E.activityStreams.forEach(function(t) {
                    t.activityId == e && (o = t)
                });
                var i = null,
                    n = E.comments[e];
                n.forEach(function(e) {
                    e.commentId == r && (i = e)
                }), E.activityStreamCommentReply.comment = i.rep, E.activityStreamCommentReply.activityId = e, a.postData(!0, "sweb/activityStreamCommentRest/secured/reply/" + r, E.activityStreamCommentReply).then(function(e) {
                    e.success && (i.rep = "", i.noOfReplies++, v(r, i.noOfReplies, !0), t.Error(e.message), E.dataLoading = !1)
                })
            }, r.loadMoreForLikedBy = function(e, t, o) {
                1 == o && (E.likeStartRecord = {}, E.likeByCount = {}), void 0 == E.likeByCount[e] && (E.likeByCount[e] = t), void 0 == E.likeStartRecord[e] && (E.likeStartRecord[e] = 0), a.getData(!1, "sweb/activityStreamLikeRest/likedBy/" + e + "/" + E.likeStartRecord[e] + "/3", {}).then(function(t) {
                    0 == E.likeStartRecord[e] ? (E.likedBy[e] = t, E.likedBy[e].forEach(function(e) {
                        null != e.profilePictureId ? e.picture = getPictureUrlWithExtension(e.profilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    })) : t.length > 0 && t.forEach(function(t) {
                        E.likedBy[e].push(t), null != t.profilePictureId ? t.picture = getPictureUrlWithExtension(t.profilePictureId, "profile", t.pictureName, "thumnail_70_70") : t.picture = "img/defaultprofile.png";
                    }), E.likeStartRecord[e] = E.likeStartRecord[e] + 3, E.likedBy[e].length < E.likeByCount[e] ? r.loadMoreLikedBy = !0 : r.loadMoreLikedBy = !1
                })
            }, r.commentLike = function(e, r, o) {
                E.dataLoading = !0, void 0 == o ? a.postData(!0, "sweb/commentLikeRest/secured/like/" + e, {}).then(function(o) {
                    o.success ? (o = {
                        success: !0,
                        message: "Saved succesfully"
                    }, E.comments[r].forEach(function(t) {
                        t.commentId == e && (t.noOfLikes++, t.likedByYou = !0)
                    }), t.Success(o.message)) : (t.Error(o.message), E.dataLoading = !1)
                }) : a.postData(!0, "sweb/commentLikeRest/secured/like/" + o, {}).then(function(r) {
                    r.success ? (r = {
                        success: !0,
                        message: "Saved succesfully"
                    }, E.replies[e].forEach(function(e) {
                        e.commentId == o && (e.noOfLikes++, e.likedByYou = !0)
                    }), t.Success(r.message)) : (t.Error(r.message), E.dataLoading = !1)
                })
            }, r.commentUnlike = function(e, r, o) {
                E.dataLoading = !0, void 0 == o ? a.postData(!0, "sweb/commentLikeRest/secured/unlike/" + e, {}).then(function(o) {
                    o.success ? (o = {
                        success: !0,
                        message: "Saved succesfully"
                    }, E.comments[r].forEach(function(t) {
                        t.commentId == e && (t.noOfLikes--, t.likedByYou = !1)
                    }), t.Success(o.message)) : (t.Error(o.message), E.dataLoading = !1)
                }) : a.postData(!0, "sweb/commentLikeRest/secured/unlike/" + o, {}).then(function(r) {
                    r.success ? (r = {
                        success: !0,
                        message: "Saved succesfully"
                    }, E.replies[e].forEach(function(e) {
                        e.commentId == o && (e.noOfLikes--, e.likedByYou = !1)
                    }), t.Success(r.message)) : (t.Error(r.message), E.dataLoading = !1)
                })
            }, r.commentLikedBy = function(e, t, o, i) {
                1 == i && (E.commentLikeByCount = {}, E.commentLikeStartRecord = {}), void 0 == E.commentLikeByCount[e] && (E.commentLikeByCount[e] = t), void 0 == E.commentLikeStartRecord[e] && (E.commentLikeStartRecord[e] = 0), a.getData(!1, "sweb/commentLikeRest/likedBy/" + e + "/" + E.commentLikeStartRecord[e] + "/3", {}).then(function(t) {
                    0 == E.commentLikeStartRecord[e] ? (E.commentLikedBy[e] = t, E.commentLikedBy[e].forEach(function(e) {
                        null != e.profilePictureId ? e.picture = getPictureUrlWithExtension(e.profilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    })) : t.length > 0 && t.forEach(function(e) {
                        E.commentLikedBy[activityId].push(e), null != e.profilePictureId ? e.picture = getPictureUrlWithExtension(e.profilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    }), E.commentLikeStartRecord[e] = E.commentLikeStartRecord[e] + 3, E.commentLikedBy[e].length < E.commentLikeByCount[e] ? r.commentLikesloadMore = !0 : r.commentLikesloadMore = !1
                })
            }, r.vedioOnChange = function(e) {
                if (r.UploadingVideo = !0, e.files && e.files[0] && window.FileReader) {
                    var t = new FileReader;
                    t.onload = function(e) {
                        var t = isVideo(e.name),
                            o = bytesToSize(e.size, 27);
                        if (0 == t) r.UploadingVideo = !1, r.alerts.videos = [], r.alerts.videos = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: " Supported types .mp4,.m4v,.avi,.mpg"
                        }], P(r.alerts.videos);
                        else if (0 == o) r.UploadingVideo = !1, r.alerts.videos = [], r.alerts.videos = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: "Max Upload Limit 27 MB"
                        }], P(r.alerts.videos);
                        else {
                            var i = e,
                                s = projectUrl + "sweb/pictureRest/myYoutubeUpload/activity";
                            n.uploadFileToUrl(i, s, function(e) {
                                "" != e ? (r.alerts.videos = [], r.alerts.videos = [{
                                    type: "success",
                                    createdAt: Date.now(),
                                    msg: "The video has been uploaded. It is in the process of getting Verified.  Please view it after  10 minutes of sharing."
                                }], U(r.alerts.videos), E.pictureIds = [], E.pictureIds.push(e), r.UploadingVideo = !1) : (r.alerts.videos = [], r.alerts.videos = [{
                                    type: "danger",
                                    createdAt: Date.now(),
                                    msg: "Some Problem Occured"
                                }], P(r.alerts.videos), r.UploadingVideo = !1)
                            })
                        }
                        return function(e) {}
                    }(e.files[0]), t.readAsDataURL(e.files[0])
                }
            }
    }
    angular.module("app").controller("ActivityStreamController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "fileUpload", "$route", "CommonService", "$sce", "$cookieStore"]
}(), angular.module("app").filter("unsafe", function(e) {
        return e.trustAsHtml
    }),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s) {
            function a() {
                var t = e.search();
                t.q || (t.q = null), c.loadingBlogs = !0, r.isBusy !== !0 && (r.isBusy = !0, s.getData(!0, "sweb/blogRest/getAllBlogs/" + c.userId + "/" + t.q + "/" + u + "/9", {}).then(function(e) {
                    e.length + 1 < 10, e.forEach(function(e) {
                        c.blogs.push(e)
                    })
                })["finally"](function() {
                    r.isBusy = !1, u += 10, r.infiniteScroll = !1, c.loadingBlogs = !1
                }))
            }
            var c = this;
            c.userId = o.globals.currentUser.id, r.isBusy = !1, c.blogs = [], c.loadMore = a;
            var u = 0;
            ! function() {
                a()
            }(), n.current.isBlog
        }
        angular.module("app").controller("BlogController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "$route", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                a.dataLoading = !0, a.blogAuthor.postedOn = new Date, null != a.blogAuthor.id ? (a.blogAuthor.postedBy = a.userId, a.blogAuthor.content = $("#summercontent").summernote("code"), r.isValid = r.bytesToSize(a.blogAuthor.content), r.isValid ? n.updateData(!0, "sweb/blogRest/secured/update", a.blogAuthor).then(function(r) {
                    r.success ? (r = {
                        success: !0,
                        message: "Saved succesfully"
                    }, a.dataLoading = !1, t.Success(r.message), a.blogAuthor = {}, $(".note-editable").html(""), e.path("/blog-author")) : (t.Error(r.message), a.dataLoading = !1)
                }) : (t.Error("Please Reduce The Size Of Blog"), a.dataLoading = !1)) : (a.blogAuthor.postedBy = a.userId, a.blogAuthor.content = $("#summercontent").summernote("code"), r.isValid = r.bytesToSize(a.blogAuthor.content), r.isValid ? n.postData(!0, "sweb/blogRest/secured/save", a.blogAuthor).then(function(r) {
                    r.success ? (r = {
                        success: !0,
                        message: "Saved succesfully"
                    }, a.dataLoading = !1, t.Success(r.message), a.blogAuthor = {}, $(".note-editable").html(""), e.path("/blog-author")) : (t.Error(r.message), a.dataLoading = !1)
                }) : (t.Error("Please Reduce The Size Of Blog"), a.dataLoading = !1))
            }
            var a = this;
            a.update = s, a.userId = o.globals.currentUser.id, r.createblogAuthor = "true",
                function() {
                    a.blogAuthor = {}, a.dataLoading = !1, $(".note-editable").html("")
                }(), a.blogAuthorId = i.blogId, i.blogId && n.getData(!1, "sweb/blogRest/getSingleBlog/" + i.blogId + "/" + a.userId, {}).then(function(e) {
                    a.blogAuthor = e, a.blogAuthor.postedOn = convertUtcToLocalTime(a.blogAuthor.postedOn), $(".note-editable").html(a.blogAuthor.content)
                }), r.bytesToSize = function(e) {
                    return e.length < 5242880
                }
        }
        angular.module("app").controller("BlogCreateController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                n.postData(!1, "sweb/blogRest/getBlogsByUserId/" + u.userId + "/" + -1 + "/0", {}).then(function(e) {
                    u.blogAuthors = e, u.blogAuthors.forEach(function(e) {
                        null != e.profilePictureId ? e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.profilePictureId : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function a() {
                n.getData(!1, "sweb/blogRest/getAllBlogs/" + u.userId + "/null/0/3", {}).then(function(e) {
                    u.recentBlogAuthors = e, u.recentBlogAuthors.forEach(function(e) {
                        null != e.profilePictureId ? e.picture = getPictureUrl(e.profilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function c(e, t) {
                n.postData(!0, "sweb/blogRest/secured/deleteBlog/" + e, {}).then(function(e) {
                    u.blogAuthors.splice(t, 1)
                })
            }
            var u = this;
            u.deleteBlogAuthor = c, u.getBlogsByUserId = s, u.getRecentPosts = a, null != i.userId && i.userId != o.globals.currentUser.id ? (u.userId = i.userId, r.createblog = "false") : (u.userId = o.globals.currentUser.id, r.createblog = "true"), r.createblogAuthor = "true",
                function() {
                    u.blogAuthor = {}, $(".note-editable").html(""), s(), a()
                }()
        }
        angular.module("app").controller("BlogAuthorController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                n.getData(!1, "sweb/blogRest/getSingleBlog/" + d.blogId + "/" + d.loggedInUserId, {}).then(function(t) {
                    "" == t ? e.path("/pageNotFound") : (d.singleBlog = t, d.singleBlog.postedOn = convertUtcToLocalTime(d.singleBlog.postedOn), c(d.blogId, !0), null != d.singleBlog.profilePictureId ? d.singleBlog.picture = getPictureUrlWithExtension(d.singleBlog.profilePictureId, "profile", d.singleBlog.pictureName, "thumnail_70_70") : d.singleBlog.picture = "img/defaultprofile.png")
                })
            }

            function a() {
                n.getData(!1, "sweb/blogRest/getAllBlogs/" + d.userId + "/null/0/3", {}).then(function(e) {
                    d.recentBlogs = e, d.recentBlogs.forEach(function(e) {
                        null != e.profilePictureId ? e.picture = getPictureUrl(e.profilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function c(e, t) {
                1 == t && (d.commentStartRecord = {}, d.comments[e] = []), void 0 == d.commentStartRecord[e] && (d.commentStartRecord[e] = 0), n.getData(!1, "sweb/blogCommentRest/getBLogComments/" + d.blogId + "/" + d.loggedInUserId + "/" + d.commentStartRecord[e] + "/3", {}).then(function(t) {
                    t.length < 3 ? r.isPreviousComments = !1 : r.isPreviousComments = !0, t.forEach(function(t) {
                        t.commentedOn = convertUtcToLocalTime(t.commentedOn), d.comments[e].unshift(t), null != t.currentProfilePictureId ? t.picture = getPictureUrl(t.currentProfilePictureId, "profile", t.pictureName) : t.picture = "img/defaultprofile.png"
                    }), d.commentStartRecord[e] = d.commentStartRecord[e] + 3
                })
            }

            function u(e, t) {
                1 == t && (d.replyStartRecord = {}, d.replies[e] = []), void 0 == d.replyStartRecord[e] && (d.replyStartRecord[e] = 0), n.getData(!1, "sweb/blogCommentRest/getRepliesOnBlogComment/" + e + "/" + d.loggedInUserId + "/" + d.replyStartRecord[e] + "/3", {}).then(function(t) {
                    t.length < 3 ? r.isPreviousReplies = !1 : r.isPreviousReplies = !0, t.forEach(function(t) {
                        d.replies[e].unshift(t), t.commentedOn = convertUtcToLocalTime(t.commentedOn), null != t.currentProfilePictureId ? t.picture = getPictureUrl(t.currentProfilePictureId, "profile", t.pictureName) : t.picture = "img/defaultprofile.png"
                    }), d.replyStartRecord[e] = d.replyStartRecord[e] + 3
                })
            }

            function l(t, r, o) {
                e.path("/" + o), $(".modal-backdrop").hide(), $("body").css("overflow", "auto")
            }

            function p(t) {
                e.path("/" + t), $(".modal-backdrop").hide(), $("body").css("overflow", "auto")
            }
            var d = this;
            d.getBlogById = s, d.recentPost = s, d.getBlogsComment = c, d.getReplies = u, d.likedByToggle = l, d.commentLikedByToggle = p, d.blogComment = {}, d.blogCommentReply = {}, d.blogCommentLike = {}, d.commentLikedBy = [], d.commentLikeStartRecord = [], d.blogLike = {}, r.showReply = !1, r.isPreviousComments = !0, d.blogId = i.id, d.comments = [], d.replies = [], void 0 != o.globals.currentUser.id && (d.loggedInUserId = o.globals.currentUser.id),
                function() {
                    s(), a()
                }(), r.likeUnlike = function(e) {
                    d.dataLoading = !0, d.blogLike.blogId = e, d.blogLike.likedByYou = d.singleBlog.likedByYou, n.postData(!0, "sweb/blogLikeRest/secured/save", d.blogLike).then(function(e) {
                        e.success ? s() : d.dataLoading = !1
                    })
                }, r.comment = function(e) {
                    d.dataLoading = !0, d.blogComment.blogId = e, d.createdDate = new Date, d.blogComment.comment = d.com, n.postData(!0, "sweb/blogCommentRest/secured/save", d.blogComment).then(function(e) {
                        e.success ? (d.com = "", s()) : (t.Error(e.message), d.dataLoading = !1)
                    })
                }, r.reply = function(e, o, i) {
                    d.dataLoading = !0;
                    var s = null,
                        a = d.comments[e];
                    a.forEach(function(e) {
                        e.commentId == o && (s = e)
                    }), d.blogCommentReply.comment = r.blogInnerController.rep[i], d.blogCommentReply.blogId = e, d.blogCommentReply.parentId = o, n.postData(!0, "sweb/blogCommentRest/secured/save", d.blogCommentReply).then(function(e) {
                        e.success ? (r.blogInnerController.rep[i] = "", s.noOfReplies++, u(o, !0), r.showReply = !1, t.Success(e.message)) : (t.Error(e.message), d.dataLoading = !1)
                    })
                }, r.loadMoreForLikedBy = function(e, t, o) {
                    1 == t && (d.likedBy = [], d.likeStartRecord = 0), void 0 == d.likeStartRecord && (d.likeStartRecord = 0), n.getData(!1, "sweb/blogLikeRest/likedBy/" + e + "/" + d.likeStartRecord + "/3", {}).then(function(e) {
                        e.length < 3 ? r.isBlogLikedBy = !1 : r.isBlogLikedBy = !0, e.forEach(function(e) {
                            d.likedBy.push(e), null != e.profilePictureId ? e.picture = getPictureUrl(e.profilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                        }), $("#con-likebox-blog").modal("toggle"), d.likeStartRecord = d.likeStartRecord + 3
                    })
                }, r.commentLikeUnlike = function(e, r, o) {
                    d.dataLoading = !0;
                    var i = null,
                        s = null;
                    d.comments[r].forEach(function(t) {
                        t.commentId == e && (i = t)
                    }), o && d.replies[e].forEach(function(e) {
                        e.commentId == o && (s = e)
                    }), void 0 == o ? (d.blogCommentLike.commentId = e, d.blogCommentLike.likedByYou = i.likedByYou, n.postData(!0, "sweb/blogCommentLikeRest/secured/save", d.blogCommentLike).then(function(e) {
                        e.success ? (e.object.likedByYou ? (i.noOfLikes++, i.likedByYou = !0) : (i.noOfLikes--, i.likedByYou = !1), t.Success(e.message)) : (t.Error(e.message), d.dataLoading = !1)
                    })) : (d.blogCommentLike.commentId = o, d.blogCommentLike.likedByYou = s.likedByYou, n.postData(!0, "sweb/blogCommentLikeRest/secured/save", d.blogCommentLike).then(function(e) {
                        e.success ? (e.object.likedByYou ? (s.noOfLikes++, s.likedByYou = !0) : (s.noOfLikes--, s.likedByYou = !1), t.Success(e.message)) : (t.Error(e.message), d.dataLoading = !1)
                    }))
                }, r.commentLikedBy = function(e, t, o) {
                    1 == t && (d.commentLikedBy = [], d.commentLikeStartRecord[e] = 0), void 0 == d.commentLikeStartRecord[e] && (d.commentLikeStartRecord[e] = 0), n.getData(!1, "sweb/blogCommentLikeRest/likedBy/" + e + "/" + d.commentLikeStartRecord[e] + "/3", {}).then(function(t) {
                        t.length < 3 ? r.isCommentLikedBy = !1 : r.isCommentLikedBy = !0, d.commentLikedBy = t, d.commentLikes = o, d.commentId = e, d.commentLikedBy.forEach(function(e) {
                            null != e.profilePictureId ? e.picture = getPictureUrl(e.profilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                        }), d.commentLikeStartRecord[e] = d.commentLikeStartRecord[e] + 3, $("#con-likebox").modal("toggle")
                    })
                }, r.deleteBlogComment = function(e, t, r) {
                    n.postData(!1, "blogCommentRest/deleteBlogComment/" + e + "/" + t, {}).then(function(e) {
                        d.comments[t].splice(r, 1)
                    })
                }, r.deleteCommentReply = function(e, t, r) {
                    n.postData(!1, "blogCommentRest/deleteCommentReply/" + e + "/" + t, {}).then(function(e) {
                        d.replies[t].splice(r, 1)
                    })
                }
        }
        angular.module("app").controller("BlogInnerController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s, a) {
            function c() {
                p.dataLoading = !0, null != p.eavAttributeSet.id ? o.update(p.eavAttributeSet, function(t) {
                    t.success ? (e.path("/eavAttributeSetSearch"), t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, s.Success(t.message)) : (s.Error(t.message), p.dataLoading = !1)
                }) : o.save(p.eavAttributeSet, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, s.Success(t.message), e.path("/eavAttributeSet")) : (s.Error(t.message), p.dataLoading = !1)
                })
            }

            function u() {
                p.dataLoading = !0, null != p.eavAttributeGroup.id ? i.update(p.eavAttributeGroup, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, s.Success(t.message), e.path("/eavAttributeSet/" + p.eavAttributeGroup.eavAttributeSetId)) : (s.Error(t.message), p.dataLoading = !1)
                }) : (p.eavAttributeGroup.eavAttributeSetId = a.id, i.save(p.eavAttributeGroup, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, s.Success(t.message), e.path("/eavAttributeSet/" + p.eavAttributeGroup.eavAttributeSetId)) : (s.Error(t.message), p.dataLoading = !1)
                }))
            }

            function l() {
                p.dataLoading = !0, null != p.eavEntityAttribute.id ? n.update(p.eavEntityAttribute, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, e.path("/eavAttributeGroup/" + p.eavEntityAttribute.eavAttributeGroupId), p.eavEntityAttribute = {}, s.Success(t.message)) : (s.Error(t.message), p.dataLoading = !1)
                }) : (p.eavEntityAttribute.eavAttributeGroupId = a.id, n.save(p.eavEntityAttribute, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, e.path("/eavAttributeGroup/" + p.eavEntityAttribute.eavAttributeGroupId), p.eavEntityAttribute = {}, s.Success(t.message)) : (s.Error(t.message), p.dataLoading = !1)
                }))
            }
            var p = this;
            p.updateSet = c, p.updateGroup = u, p.updateEntity = l;
            var d = 0,
                f = 0,
                g = 0;
            ! function() {
                o.count("{}", function(e) {
                    d = e
                }), i.count("{}", function(e) {
                    f = e
                }), n.count("{}", function(e) {
                    g = e
                })
            }(), t.message = "false", null != a.id && e.path().toString().includes("/eavAttributeSet/") && (t.message = "true", o.get(p.eavAttributeSet, a.id, function(e, t, r) {
                p.eavAttributeSet = e
            })), null != a.id && e.path().toString().includes("/eavAttributeGroup/") && (t.message = "true", i.get(p.eavAttributeGroup, a.id, function(e, t, r) {
                p.eavAttributeGroup = e
            })), null != a.id && e.path().toString().includes("/eavAttributeGroupNew/") && (t.message = "false", p.eavAttributeGroup = {}, p.eavAttributeGroup.eavAttributeSetId = a.id), null != a.id && e.path().toString().includes("/eavEntityAttribute/") && (t.message = "true", n.get(p.eavEntityAttribute, a.id, function(e, t, r) {
                p.eavEntityAttribute = e
            }), r.search("{}", -1, 0, function(e) {
                p.eavAttributes = e
            })), null != a.id && e.path().toString().includes("/eavEntityAttributeNew/") && (t.message = "false", p.eavEntityAttribute = {}, p.eavEntityAttribute.eavAttributeGroupId = a.id, r.search("{}", -1, 0, function(e) {
                p.eavAttributes = e
            })), t.currentPage = 0, t.pageSize = 5, t.filteredEavAttributesSet = [], o.search("{}", t.currentPage * t.pageSize, t.pageSize, function(e) {
                t.filteredEavAttributesSet = e
            }), t.numberOfPages = function() {
                return Math.ceil(d / t.pageSize)
            }, t.count = function() {
                return o.count(p.eavAttributeSet)
            }, t.currentGroupPage = 0, t.pageGroupSize = 5, t.filteredEavAttributesGroup = [];
            var m = a.id;
            null != m && i.search('{"eavAttributeSetId":' + m + "}", t.currentGroupPage * t.pageGroupSize, t.pageGroupSize, function(e) {
                t.filteredEavAttributesGroup = e
            }), t.numberOfGroupPages = function() {
                return Math.ceil(f / t.pageGroupSize)
            }, t.countGroup = function() {
                return i.count(p.eavAttributeGroup)
            }, t.currentEntityPage = 0, t.pageEntitySize = 5, t.filteredEavAttributesEntity = [];
            var h = a.id;
            null != h && n.search('{"eavAttributeGroupId":' + h + "}", -1, -1, function(e) {
                t.filteredEavAttributesEntity = e
            }), t.numberOfEntityPages = function() {
                return Math.ceil(g / t.pageEntitySize)
            }, t.countEntity = function() {
                return n.count(p.eavEntityAttribute)
            }
        }
        angular.module("app").controller("EavAttributeSetController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "EavAttributeService", "EavAttributeSetService", "EavAttributeGroupService", "EavEntityAttributeService", "FlashService", "$routeParams"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i) {
            function n(e) {
                a.eavAttributeGroup.eavAttributeSetId = e
            }

            function s() {
                a.dataLoading = !0, null != routeParamid ? r.update(a.eavAttributeGroup, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, o.Success(t.message), e.path("/eavAttributeSet/" + a.eavAttributeGroup.eavAttributeSetId)) : (o.Error(t.message), a.dataLoading = !1)
                }) : (a.eavAttributeGroup.eavAttributeSetId, r.save(a.eavAttributeGroup, function(e) {
                    e.success ? (e = {
                        success: !0,
                        message: "Saved succesfully"
                    }, o.Success(e.message)) : (o.Error(e.message), a.dataLoading = !1)
                }))
            }
            var a = this;
            a.save = save, a.update = s, a.create = n;
            var c = 0;
            ! function() {
                r.count("{}", function(e) {
                    c = e
                })
            }(), t.message = "true", t.message_edit = "false", null != i.id && (t.message = "false", t.message_edit = "true", r.get(a.eavAttributeGroup, i.id, function(e, t, r) {
                a.eavAttributeGroup = e
            })), t.currentPage = 0, t.pageSize = 5, t.filteredEavAttributesGroup = [];
            var u = i.id;
            r.search('{"eavAttributeSetId":' + u + "}", t.currentPage * t.pageSize, t.pageSize, function(e) {
                t.filteredEavAttributesGroup = e
            }), t.numberOfPages = function() {
                return Math.ceil(c / t.pageSize)
            }, t.count = function() {
                return r.count(a.eavAttributeGroup)
            }
        }
        angular.module("app").controller("EavAttributeGroupController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "EavAttributeGroupService", "FlashService", "$routeParams"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s) {
            function a() {
                o.jobsearchshow = "true", t.getAllJobs(p.jobsearchmodel, 0, 10, function(e) {
                    p.allJobSearch = e, p.allJobSearch.forEach(function(e) {
                        null != e.currentProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function c() {
                "1" == i.globals.currentUser.profileType ? (p.jobsearchmodel.companyId = i.globals.currentUser.id, p.jobsearchmodel.userId = null, s.getJobApplicationVos(p.jobsearchmodel, 0, 10, function(e) {
                    p.filteredJobApplicationVos = e, p.filteredJobApplicationVos.forEach(function(e) {
                        1 == i.globals.currentUser.profileType ? null != e.currentProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png" : null != e.userProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                })) : (p.jobsearchmodel.userId = i.globals.currentUser.id, p.jobsearchmodel.companyId = null, s.getAppliedJobApplicationVos(p.jobsearchmodel, 0, 10, function(e) {
                    p.filteredJobApplicationVos = e, p.filteredJobApplicationVos.forEach(function(e) {
                        0 == i.globals.currentUser.profileType ? null != e.currentProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png" : null != e.userProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                }))
            }

            function u() {
                p.dataLoading = !0, p.jobs.createdDate = new Date, p.jobs.createdBy = i.globals.currentUser.id, p.jobs.companyId = i.globals.currentUser.id, p.jobs.jobDescription = $("#summercontent").summernote("code"), t.save(p.jobs, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, e.path("/jobs"), r.Success(t.message), p.jobs = {}, $(".note-editable").html("")) : (r.Error(t.message), p.dataLoading = !1)
                })
            }

            function l() {
                s.apply(i.globals.currentUser.id, p.jobsId, function(e) {
                    p.applyButton = "Applied", e.success || (r.Error(e.message), p.dataLoading = !1)
                })
            }
            var p = this;
            p.save = u, p.apply = l, p.jobsearch = a, p.myjobsearch = c, p.applyButton = "Apply", n.userId ? p.userId = n.userId : p.userId = i.globals.currentUser.id, o.jobsearchshow = "false",
                function() {
                    t.getAllJobs("{}", 0, 10, function(e) {
                        p.allJobs = e, p.allJobs.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                        })
                    }), p.jobsId = n.id, p.jobsId && (t.getJobByJobId(p.jobsId, function(e) {
                        p.singlejob = e, null != p.singlejob.currentProfilePictureId ? p.singlejob.profilePicture = getPictureUrl(p.singlejob.currentProfilePictureId, "profile", p.singlejob.pictureName) : p.singlejob.profilePicture = "img/defaultprofile.png"
                    }), s.isApplied(i.globals.currentUser.id, p.jobsId, function(e) {
                        p.isApplied = e, 1 == p.isApplied && (p.applyButton = "Applied")
                    })), p.jobsearchmodel = {}
                }()
        }
        angular.module("app").controller("JobsController", e), e.$inject = ["$location", "JobsService", "FlashService", "$scope", "$rootScope", "$routeParams", "JobApplicationService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s(e) {
                "FRIENDS" == r.networkType ? n.postData(!0, "sweb/friendRest/secured/unFriend/" + e, {}).then(function(e) {
                    e.success && n.postData(!1, "sweb/friendRest/myFriends", '{"userId":' + c.userId + "}").then(function(e) {
                        c.myFriends = e, c.myFriends.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.pictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                        })
                    })
                }) : "FOLLOWING" == r.networkType && n.postData(!0, "sweb/followRest/secured/unFollow/" + e, {}).then(function(e) {
                    n.getData(!1, "sweb/followRest/getFollowVo/" + c.userId, {}).then(function(e) {
                        c.following = e, c.following.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.currentProfilePictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                        })
                    })
                })
            }

            function a(e) {
                c.dataLoading = !0, c.appointment.sentToConsultant = e, c.appointment.sentToCompany = c.userId, n.postData(!1, "sweb/appointmentsRest/save", c.appointment).then(function(e) {
                    e.success ? (e = {
                        success: !0,
                        message: "Appointment booked succesfully"
                    }, t.Success(e.message), c.appointment = {}) : (t.Error(e.message), c.dataLoading = !1)
                })
            }
            var c = this;
            c.bookAppointment = a, c.remove = s, c.postFriendInfo = {}, c.userId = o.globals.currentUser.id,
                function() {
                    r.networkType = "FOLLOWING", n.getData(!1, "sweb/followRest/getFollowVo/" + c.userId, {}).then(function(e) {
                        c.following = e, c.following.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.currentProfilePictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                        })
                    }), n.postData(!1, "sweb/friendRest/myFriends", '{"userId":' + c.userId + "}").then(function(e) {
                        c.myFriends = e, c.myFriends.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                        })
                    }), n.getData(!1, "sweb/friendRest/peapleYouMayKnow/" + c.userId, {}).then(function(e) {
                        c.peapleYouMayKnow = e, c.peapleYouMayKnow.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                        })
                    })
                }(), r.changelist = function() {
                    "FRIENDS" == r.networkType ? n.postData(!1, "sweb/friendRest/myFriends", '{"userId":' + c.userId + "}").then(function(e) {
                        c.myFriends = e, c.myFriends.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.pictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                        })
                    }) : "FOLLOWING" == r.networkType ? n.getData(!1, "sweb/followRest/getFollowVo/" + c.userId, {}).then(function(e) {
                        c.following = e, c.following.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.currentProfilePictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                        })
                    }) : "FOLLOWERS" == r.networkType && n.getData(!1, "sweb/followRest/getFollowersVo/" + c.userId, {}).then(function(e) {
                        c.following = e, c.following.forEach(function(t) {
                            c.followers = e, c.followers.forEach(function(e) {
                                null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.currentProfilePictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                            })
                        })
                    })
                }
        }
        angular.module("app").controller("NetworkController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                a.allSettings.dataLoading = !0, n.updateData(!0, "sweb/privacySettingsRest/updateSetting", a.allSettings).then(function(e) {
                    e.success ? (e = {
                        success: !0,
                        message: "Saved succesfully"
                    }, t.Success(e.message)) : (t.Error(e.message), a.dataLoading = !1)
                })
            }
            var a = this;
            a.updateSettings = s, a.userId = o.globals.currentUser.id,
                function() {
                    a.privacySettingSearch = {}, a.privacySettingSearch.userId = a.userId, n.postData(!0, "sweb/privacySettingsRest/getSettings/-1/0", a.privacySettingSearch).then(function(e) {
                        a.allSettings = e
                    })
                }()
        }
        angular.module("app").controller("PrivacySettingsController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                var r = e.search();
                void 0 == r.q && (r.q = ""), void 0 == r.type && (r.type = ""), u.loadingProfiles = !0, t.isBusy !== !0 && (t.isBusy = !0, n.getData(!1, "sweb/profileRest/getProfileVos/" + u.userId + "/" + l + "/10?q=" + r.q + "&type=" + r.type, {}).then(function(e) {
                    0 == e.length && (t.isMoreRecords = !1), e.forEach(function(e) {
                        u.profiles.push(e), u.profiles.forEach(function(e) {
                            null != e.currentPictureId ? e.picture = getPictureUrlWithExtension(e.currentPictureId, e.type, e.pictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                        })
                    })
                })["finally"](function() {
                    l += 10, t.infiniteScoll = !1, t.isBusy = !1, u.loadingProfiles = !1
                }))
            }

            function a() {
                $(".modal-backdrop").hide(), $("body").css("overflow", "auto")
            }

            function c(e, t) {
                void 0 == e && (e = 0), void 0 == e && (e = 0), n.postData(!0, "sweb/friendRequestRest/secured/sendRequest/" + t + "/" + e, {}).then(function(e) {
                    e.success ? (e = {
                        success: !0
                    }, u.profiles.forEach(function(e) {
                        e.userId == t && (e.requestSent = !0)
                    })) : (r.Error(e.message), companyProfileController.dataLoading = !1)
                })
            }
            var u = this;
            u.sendRequest = c, u.modalTogal = a, u.loadMore = s, u.profiles = [], t.isBusy = !1, t.isMoreRecords = !0, void 0 != i.globals.currentUser ? u.userId = i.globals.currentUser.id : u.userId = -1;
            var l = 0;
            ! function() {
                s()
            }(), t.getProfileForSearch = function(r) {
                var o = e.search();
                void 0 == o.type && (o.type = ""), t.queryField = r;
                var i = jQuery.ajax({
                    url: projectUrl + "sweb/profileRest/getProfileVos/" + u.userId + "/0/10?q=" + r + "&type=" + o.type,
                    async: !1,
                    cache: !1,
                    dataType: "json",
                    success: function(e) {
                        return e
                    }
                });
                return i
            }
        }
        angular.module("app").controller("ProfileSearchController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "FlashService", "$routeParams", "$rootScope", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s(e) {
                n.postData(!0, "sweb/groupRequestRest/sendRequest/" + c.userId + "/" + e, {}).then(function(t) {
                    t.success ? (c.groups.forEach(function(t) {
                        t.groupId == e && (t.requestSent = !0)
                    }), t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, r.Success(t.message)) : (r.Error(t.message), groupController.dataLoading = !1)
                })
            }

            function a(e) {
                n.postData(!0, "sweb/groupMembersRest/acceptRequest/" + e + "/" + c.userId, {}).then(function(t) {
                    t.success ? (c.groups.forEach(function(t) {
                        t.groupId == e && (t.joined = !0, t.noOFMembers++)
                    }), t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, r.Success(t.message)) : (r.Error(t.message), groupController.dataLoading = !1)
                })
            }
            var c = this;
            c.sendRequest = s, c.joinGroup = a, c.userId = i.globals.currentUser.id,
                function() {
                    var t = e.search();
                    n.getData(!1, "sweb/groupRest/getGroupVos/" + c.userId + "/" + -1 + "/0?q=" + t.q, {}).then(function(e) {
                        c.groups = e, c.groups.forEach(function(e) {
                            null != e.groupPictureId ? e.picture = getPictureUrlWithExtension(e.groupPictureId, "group", e.groupPictureName, "thumnail_70_70") : e.picture = "img/kh_icons/group-logo.png"
                        })
                    })
                }(), t.search = function() {
                    e.url("/groups-discover?q=" + (void 0 == c.q ? "" : c.q))
                }
        }
        angular.module("app").controller("GroupSearchController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "FlashService", "$routeParams", "$rootScope", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s, a) {
            var c = this,
                u = 0;
            ! function() {
                i.searchRoles({}, -1, 0, function(e) {
                    c.roles = e
                });
                var t = e.search();
                a.getData(!1, "sweb/userRest/getUserSearchVos/-1/0?q=" + t.q, {}).then(function(e) {
                    c.users = e, c.users.forEach(function(e) {
                        null != e.profileVo.currentProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                }), null != s.id && e.path().toString().includes("/userEdit/") && jQuery.ajax({
                    url: projectUrl + "sweb/userRest/getUserDetails/" + userId,
                    async: !1,
                    cache: !1,
                    dataType: "json",
                    success: function(e) {
                        c.singleUser = e, r.searchRoleByUserId('{"userId":' + s.id + "}", -1, 0, function(e, t, r) {
                            c.userRoles = e
                        })
                    }
                })
            }(), t.search = function() {
                e.url("/userSearch?q=" + (void 0 == c.q ? "" : c.q))
            }, t.currentPage = 0, t.pageSize = 5, t.filteredRoleSet = [];
            s.id;
            r.searchRoleByUserId('{"userId":' + s.id + "}", t.currentPage * t.pageSize, t.pageSize, function(e) {
                t.filteredRoleSet = e
            }), t.numberOfPages = function() {
                return Math.ceil(u / t.pageSize)
            }, t.count = function() {
                return i.count(roleController.role)
            }
        }
        angular.module("app").controller("UserSearchController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "UserRoleJoinService", "FlashService", "RoleService", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                a.dataLoading = !0, null != a.role.id ? r.update(a.role, function(t) {
                    t.success ? (e.path("/roleSearch"), t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, i.Success(t.message)) : (i.Error(t.message), a.dataLoading = !1)
                }) : r.save(a.role, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, i.Success(t.message), e.path("/roleSearch")) : (i.Error(t.message), a.dataLoading = !1)
                })
            }
            var a = this;
            a.updateRole = s;
            var c = 0,
                u = 0;
            ! function() {
                r.count("{}", function(e) {
                    c = e
                }), o.count("{}", function(e) {
                    u = e
                }), t.message = "false", null != n.id && e.path().toString().includes("/roleSave/") && (t.message = "true", r.get(a.role, n.id, function(e, t, r) {
                    a.role = e
                }))
            }(), t.currentPage = 0, t.pageSize = 5, t.filteredRoleSet = [], r.searchRoles("{}", t.currentPage * t.pageSize, t.pageSize, function(e) {
                t.filteredRoleSet = e
            }), t.numberOfPages = function() {
                return Math.ceil(c / t.pageSize)
            }, t.count = function() {
                return r.count(a.role)
            }, t.currentGroupPage = 0, t.pageGroupSize = 5, t.filteredRoleFunction = [];
            var l = n.id;
            null != l && o.search('{"roleId":' + l + "}", t.currentGroupPage * t.pageGroupSize, t.pageGroupSize, function(e) {
                t.filteredRoleFunctionJoin = e
            }), t.numberOfGroupPages = function() {
                return Math.ceil(u / t.pageGroupSize)
            }, t.countGroup = function() {
                return o.count(a.roleFunctionJoin)
            }
        }
        angular.module("app").controller("RoleController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "RoleService", "RoleFunctionJoinService", "FlashService", "$routeParams"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                a.dataLoading = !0, null != a.roleFunctionJoin.id ? o.update(a.roleFunctionJoin, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, i.Success(t.message), e.path("/roleSave/" + a.roleFunctionJoin.roleId)) : (i.Error(t.message), a.dataLoading = !1)
                }) : (a.roleFunctionJoin.roleId = n.id, o.save(a.roleFunctionJoin, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, i.Success(t.message), e.path("/roleSave/" + a.roleFunctionJoin.roleId)) : (i.Error(t.message), a.dataLoading = !1)
                }))
            }
            var a = this;
            a.updateRoleFunctionJoin = s,
                function() {
                    o.getAllFunctions(-1, 0, function(e) {
                        a.allFunctions = e
                    }), null != n.id && e.path().toString().includes("/roleFunctionJoin/") && (t.message = "true", o.get(a.roleFunctionJoin, n.id, function(e, t, r) {
                        a.roleFunctionJoin = e
                    })), null != n.id && e.path().toString().includes("/roleFunctionJoinNew/") && (t.message = "false", a.roleFunctionJoin = {}, a.roleFunctionJoin.roleId = n.id)
                }()
        }
        angular.module("app").controller("RoleFunctionJoinController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "RoleService", "RoleFunctionJoinService", "FlashService", "$routeParams"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                isNaN(r.emailOrMobile) ? (a.forgotPassword.email = r.emailOrMobile, a.forgotPassword.mobile = void 0) : (a.forgotPassword.mobile = r.emailOrMobile, a.forgotPassword.email = void 0), r.dataLoading = !0, void 0 != a.forgotPassword.email || void 0 != a.forgotPassword.mobile ? (n.postData(!1, "sweb/userRest/sendForgotPasswordMail", a.forgotPassword).then(function(e) {
                    e.success ? (r.otpSuccess = !0, r.otpInputButton = !0, e = isNaN(r.emailOrMobile) ? {
                        success: !0,
                        message: "Reset Password OTP has been sent to your Email..!! Enter Your OTP to reset"
                    } : {
                        success: !0,
                        message: "Reset Password OTP has been sent to your Mobile..!! Enter Your OTP to reset"
                    }, t.Success(e.message), a.success = !0, r.dataLoading = !1) : t.Error(e.message)
                }), a.dataLoading = !1) : (t.Error("Enter your Email Address or Mobile Number"), r.dataLoading = !1)
            }
            var a = this;
            o.resetPasswordInfo = {}, a.forgotPasswordRequest = s, a.forgotPassword = {}, r.dataLoading = !1, a.success = !1, r.otpInputButton = !1, r.confirmOTP = function() {
                n.postData(!1, "sweb/userRest/confirmEmail", a.forgotPassword).then(function(t) {
                    t && (o.resetPasswordInfo = a.forgotPassword, e.path("/resetPassword"))
                })
            }
        }
        angular.module("app").controller("ForgotPasswordController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            var s = this;
            ! function() {
                var t = e.search();
                s.user = {}, s.user.link = t.link, s.user.email = t.email
            }()
        }
        angular.module("app").controller("ConfirmEmailController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                return a.dataLoading = !0, a.user.password != a.user.confirmPassword ? void t.Error("Passwords doesnt match") : void n.postData(!1, "sweb/userRest/changeForgotPassword", a.user).then(function(e) {
                    e.success ? (e = {
                        success: !0,
                        message: "Password has been changed successfully!!!"
                    }, t.Success(e.message), a.user = {}, r.isSuccefull = !0) : ("ERROR_OCCURED_PLEASE_CONTACT_ADMINISTRATOR" == e.messages[0] ? e = {
                        message: "Error Occured Please Contact Administrator!!!"
                    } : "PASSWORD_SHOULD_BE_ALPHA_NUMERIC" == e.messages[0] && (e = {
                        message: "Password  should be minimum 8 character and  alpha numeric!!!"
                    }), t.Error(e.message), a.dataLoading = !1)
                })
            }
            var a = this;
            a.user = {}, a.resetPassword = s,
                function() {
                    r.isSuccefull = !1, void 0 == o.resetPasswordInfo && null == o.resetPasswordInfo || (a.user.email = o.resetPasswordInfo.email, a.user.mobile = o.resetPasswordInfo.mobile, a.user.oneTimeKey = o.resetPasswordInfo.oneTimeKey)
                }(), r.redirectToLogin = function() {
                    e.path("/")
                }
        }
        angular.module("app").controller("ResetPasswordController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s) {
            function a() {
                return c.dataLoading = !0, c.user.id = o.globals.currentUser.id, c.user.password != c.user.confirmPassword ? void t.Error("Passwords doesn't match") : void s.postData(!1, "sweb/userRest/changePassword", c.user).then(function(r) {
                    r ? (r = {
                        success: !0,
                        message: "Password has been changed successfully!!!"
                    }, t.Success(r.message, !0), document.cookie = "globals=" + JSON.stringify(o.globals) + "; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=localhost; path=/", $("#profile-top-menu").toggle(), e.path("/login")) : (t.Error("Password should be alphanumeric"), c.dataLoading = !1)
                })
            }
            var c = this;
            c.changePassword = a
        }
        angular.module("app").controller("ChangePasswordController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "$cookieStore", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                a.dataLoading = !0, null != a.userRole.id ? r.update(a.userRole, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, i.Success(t.message), e.path("/userEdit/" + a.userRole.userId)) : (i.Error(t.message), a.dataLoading = !1)
                }) : (a.userRole.userId = n.id, r.save(a.userRole, function(t) {
                    t.success ? (t = {
                        success: !0,
                        message: "Saved succesfully"
                    }, i.Success(t.message), e.path("/userEdit/" + a.userRole.userId)) : (i.Error(t.message), a.dataLoading = !1)
                }))
            }
            var a = this;
            a.updateRole = s,
                function() {
                    o.searchRoles("{}", -1, 0, function(e) {
                        a.allRoles = e
                    }), null != n.id && e.path().toString().includes("/userRole/") && r.get(a.userRole, n.id, function(e, t, r) {
                        a.userRole = e
                    }), null != n.id && e.path().toString().includes("/userRoleNew/") && (r.userRole = {}, r.userRole.userId = n.id)
                }()
        }
        angular.module("app").controller("UserRoleJoinController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "UserRoleJoinService", "RoleService", "FlashService", "$routeParams"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s, a) {
            function c() {
                o.globals.currentUser && (s.current.isNotification ? a.getData(!1, "sweb/notificationRest/getNotificationVos/" + o.globals.currentUser.id + "/" + p + "/10", {}).then(function(e) {
                    e.length + 1 < 10 && (document.getElementById("loadmorenotification").innerHTML = "No More Record To Show"), e.forEach(function(e) {
                        l.notificationsAll.push(e)
                    }), l.notificationsAll.forEach(function(e) {
                        e.notificationTime = convertUtcToLocalTime(e.notificationTime), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, e.type, e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    }), p += 10
                }) : a.getData(!1, "sweb/notificationRest/getFriendRequestNotification/" + o.globals.currentUser.id + "/" + p + "/10", {}).then(function(e) {
                    e.length + 1 < 10 && (document.getElementById("loadmorenotification").innerHTML = "No More Record To Show"), e.forEach(function(e) {
                        l.notificationsAll.push(e)
                    }), l.notificationsAll.forEach(function(e) {
                        e.notificationTime = convertUtcToLocalTime(e.notificationTime), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, e.type, e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    }), p += 10
                }))
            }

            function u(t, r, o) {
                "0" == r ? e.path("/" + o) : "1" == r ? e.path("/" + o) : "2" == r ? e.path("/groups-my") : "3" == r ? e.path("/singleActivity/" + t) : "4" == r ? e.path("/singleActivity/" + t) : "5" == r ? e.path("/singleActivity/" + t) : "6" == r ? e.path("/singleActivity/" + t) : "7" == r ? e.path("/groups-my") : "8" == r ? e.path("/groups-profile/" + t) : "9" == r ? e.path("/" + o) : "10" == r ? e.path("/blog-inner/" + t) : "11" == r ? e.path("/blog-inner/" + t) : "12" == r ? e.path("/blog-inner/" + t) : "13" == r ? e.path("/blog-inner/" + t) : "14" == r && e.path("/blog-inner/" + t), $("#profile-top-menu").hide()
            }
            var l = this;
            l.loadMoreNotifications = c, l.notifyToggle = u, l.notificationsAll = [];
            var p = 0;
            ! function() {
                c()
            }()
        }
        angular.module("app").controller("NotificationController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "$cookieStore", "$route", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s) {
            function a() {
                s.getData(!1, "sweb/messagesRest/getMessangersVoByUserId/" + o.globals.currentUser.id + "/0/10", {}).then(function(e) {
                    l.messageUsersAll = e, l.messageUsersAll.forEach(function(e) {
                        null != e.senderCurrentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.senderCurrentProfilePictureId, "profile", e.senderProfilePictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    }), c(!0), setInterval(c, 5e3, !1)
                })
            }

            function c(e) {
                void 0 == i.messangerId && (i.messangerId = l.messageUsersAll[0].fromUser), 1 == e && (p = 0, d = -1, l.messageConversations = [], l.remaining = {}), d == -1 && s.getData(!1, "sweb/messagesRest/getNoOfMessages/" + o.globals.currentUser.id + "/" + i.messangerId, {}).then(function(e) {
                    d = e
                }), s.getData(!1, "sweb/messagesRest/getConversations/" + o.globals.currentUser.id + "/" + i.messangerId + "/" + p + "/10", {}).then(function(e) {
                    e.forEach(function(e) {
                        e.sentDate = convertUtcToLocalTime(e.sentDate), l.messageConversations.unshift(e), null != e.senderCurrentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.senderCurrentProfilePictureId, "profile", e.senderProfilePictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    }), p += 10, l.remaining = d - l.messageConversations.length, l.messageConversations.length < d ? r.noMoreRecordsToShow = !0 : r.noMoreRecordsToShow = !1
                })
            }

            function u() {
                l.dataLoading = !0, l.singleMessage.fromUser = o.globals.currentUser.id, l.singleMessage.toUser = i.messangerId, l.singleMessage.sentDate = new Date, l.singleMessage.sentDate = convertLocalToUTC(l.singleMessage.sentDate), s.postData(!0, "sweb/messagesRest/save", l.singleMessage, {}).then(function(e) {
                    $("#contact-message-blk").toggle(), e.success ? (e = {
                        success: !0
                    }, c(!0)) : (t.Error(e.message), l.dataLoading = !1)
                }), l.singleMessage = {}
            }
            var l = this;
            l.sendMessage = u, l.getMessangers = a, l.getConversations = c, l.messageConversations = [], l.messageUsersAll = {}, l.messageConversations = {}, l.singleMessage = {};
            var p = 0,
                d = -1;
            ! function() {
                a()
            }()
        }
        angular.module("app").controller("MessagesController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "$cookieStore", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s) {
            function a() {
                s.getData(!1, "sweb/activityStreamRest/getGroupPostVos/" + P.userId + "/" + P.groupId + "/" + -1 + "/0", {}).then(function(e) {
                    P.groupPosts = e, P.groupPosts.forEach(function(e) {
                        e.time = convertUtcToLocalTime(e.time), null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.profilePictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png", null != e.picturesId && (e.pictures = [], e.picturesId.forEach(function(t) {
                            var r = {};
                            r.id = t.id, r.pictureType = t.type, r.pictureName = t.pictureName, r.url = getPictureUrlWithExtension(t.id, t.type, t.pictureName, "thumnail_300_300"), e.pictures.push(r)
                        }))
                    })
                })
            }

            function c(e) {
                s.postData(!0, "sweb/activityStreamRest/secured/deleteActivity/" + e, {}).then(function(e) {
                    location.reload()
                })
            }

            function u(e, t) {
                s.postData(!1, "sweb/activityStreamCommentRest/deleteActivityComment/" + e + "/" + t, {}).then(function(e) {
                    location.reload()
                })
            }

            function l(e, t) {
                s.postData(!1, "sweb/activityStreamCommentRest/deleteCommentReply/" + e + "/" + t, {}).then(function(e) {
                    location.reload()
                })
            }

            function p(e) {
                null !== P.group.selectedItemChange && (P.group.userId = P.group.selectedItemChange.userId), s.postData(!1, "sweb/groupRequestRest/askToJoin/" + P.group.userId + "/" + e, {}).then(function(e) {
                    e.success ? (t.message1 = "Request has been sent!!!", t.message2 = !1, P.searchText = "", t.alerts.groupPost = [], t.alerts.groupPost.push({
                        type: "success",
                        createdAt: Date.now(),
                        msg: "Request has been sent!!!"
                    }), f(t.alerts.groupPost)) : (t.message2 = "Already Request Sent!!!", t.message1 = !1, P.searchText = "", t.alerts.groupPost = [], t.alerts.groupPost.push({
                        type: "success",
                        createdAt: Date.now(),
                        msg: "Already Request Sent!!!"
                    }), f(t.alerts.groupPost), P.dataLoading = !1)
                })
            }

            function d() {
                P.groupPost.dataLoading = !0, P.groupPost.userId = P.userId, P.groupPost.groupId = P.groupId, void 0 != P.pictureIds && (P.groupPost.pictureIds = P.pictureIds), P.groupPost.createdDate = new Date, P.groupPost.createdDate = convertLocalToUTC(P.groupPost.createdDate), s.postData(!0, "sweb/activityStreamRest/secured/save", P.groupPost).then(function(e) {
                    a(), P.groupPost = {}, e.success ? (e = {
                        success: !0,
                        message: "Saved succesfully"
                    }, void 0 != P.pictureIds && location.reload(), r.Success(e.message)) : (r.Error(e.message), P.groupPosts.dataLoading = !1)
                })
            }

            function f(e) {
                var r = 5e3,
                    o = setInterval(function() {
                        e.forEach(function(i) {
                            var n = convertUtcToLocalTime(Date.now()),
                                s = convertUtcToLocalTime(i.createdAt),
                                a = Math.abs(n - s);
                            a > r && (e.shift(), t.$apply(), clearInterval(o))
                        })
                    }, 1e3)
            }

            function g(e, r, o) {
                1 == o && (P.commentStartRecord = {}, P.commentCount = {}, P.comments[e] = []), void 0 == P.commentStartRecord[e] && (P.commentStartRecord[e] = 0), void 0 == P.commentCount[e] && (P.commentCount[e] = r), s.getData(!1, "sweb/activityStreamCommentRest/getActivityCommentVo1/" + e + "/" + P.loggedInUserId + "/" + P.commentStartRecord[e] + "/3", {}).then(function(r) {
                    r.forEach(function(t) {
                        t.commentedOn = convertUtcToLocalTime(t.commentedOn), P.comments[e].unshift(t), null != t.currentProfilePictureId ? t.picture = getPictureUrlWithExtension(t.currentProfilePictureId, "profile", t.pictureName, "thumnail_70_70") : t.picture = "img/defaultprofile.png"
                    }), P.commentStartRecord[e] = P.commentStartRecord[e] + 3, P.comments[e].length < P.commentCount[e] ? t.noMoreRecordsToShow = !0 : t.noMoreRecordsToShow = !1
                })
            }

            function m(e, r, o) {
                1 == o && (P.replyStartRecord = {}, P.replytCount = {}, P.replies[e] = []), void 0 == P.replyStartRecord[e] && (P.replyStartRecord[e] = 0), void 0 == P.replytCount[e] && (P.replytCount[e] = r), s.getData(!1, "sweb/activityStreamCommentRest/getRepliesVo/" + e + "/" + P.loggedInUserId + "/" + P.replyStartRecord[e] + "/3", {}).then(function(r) {
                    r.forEach(function(t) {
                        t.commentedOn = convertUtcToLocalTime(t.commentedOn), P.replies[e].unshift(t), null != t.currentProfilePictureId ? t.picture = getPictureUrlWithExtension(t.currentProfilePictureId, "profile", t.pictureName, "thumnail_70_70") : t.picture = "img/defaultprofile.png"
                    }), P.replyStartRecord[e] = P.replyStartRecord[e] + 3, P.replies[e].length < P.replytCount[e] ? t.noMoreReply = !1 : t.noMoreReply = !0
                })
            }

            function h(t, r, o) {
                e.path("/" + o), $(".modal-backdrop").hide(), $("body").css("overflow", "auto")
            }

            function v(e) {}

            function y(e) {
                var t;
                return jQuery.ajax({
                    url: projectUrl + "sweb/groupMembersRest/getProfileGroupVos/" + P.groupId + "/0/20?q=" + e,
                    async: !1,
                    cache: !1,
                    dataType: "json",
                    success: function(e) {
                        t = e
                    }
                }), t
            }

            function b(e) {}

            function w(e, t, r) {
                P.fullImageUrl = getPictureUrlWithExtension(e, t, r, "thumnail_600_600"), $("#consultroom").modal("toggle")
            }

            function S(e) {}
            var P = this;
            P.askToJoin = p, P.userId = i.globals.currentUser.id, P.activityStreamComment = {}, P.activityStreamCommentReply = {}, t.uploadingActivityPicture = !1, t.uploadingGroupPicture = !1, P.group = {}, P.membersInGroup = {}, P.getcomment1 = g, P.saveGroupPost = d, t.alerts = {}, P.groupId = o.groupId, P.multipartFilesYouAreUploading = [], P.commentLikedByToggle = h, P.getFullPicture = w, P.likeStartRecord = {}, P.likeByCount = {}, P.likedBy = {}, P.pictureIds = [], P.commentStartRecord = {}, P.commentCount = {}, P.comments = [], P.commentLikeStartRecord = {}, P.commentLikeByCount = {}, P.commentLikedBy = {}, P.replies = {}, P.getReplies = m, P.deleteActivityComment = u, P.deleteActivity = c, P.deleteCommentReply = l, void 0 != i.globals.currentUser.id && (P.loggedInUserId = i.globals.currentUser.id),
                function() {
                    function e() {
                        P.membersInGroup.groupId = P.groupId, s.postData(!1, "sweb/groupMembersRest/groupMembers/-1/0", P.membersInGroup).then(function(e) {
                            P.membersInGroup = e, P.membersInGroup.forEach(function(e) {
                                null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                            })
                        })
                    }
                    a(), P.groupId && (s.getData(!0, "sweb/groupRest/getGroupInformationByGroupId/" + P.groupId, {}).then(function(e) {
                        P.singleGroupByGroupId = e, t.isAdmin = P.singleGroupByGroupId.admin, t.isPublic = P.singleGroupByGroupId["public"], t.isPrivate = P.singleGroupByGroupId["private"], t.isMember = P.singleGroupByGroupId.member, null != P.singleGroupByGroupId.currentGroupPictureId ? (P.singleGroupByGroupId.groupPicture = getPictureUrlWithExtension(P.singleGroupByGroupId.currentGroupPictureId, "group", P.singleGroupByGroupId.pictureName, "thumnail_300_300"), P.singleGroupByGroupId.groupPicture_70_70 = getPictureUrlWithExtension(P.singleGroupByGroupId.currentGroupPictureId, "group", P.singleGroupByGroupId.pictureName, "thumnail_70_70")) : (P.singleGroupByGroupId.groupPicture = "img/kh_icons/group-logo.png", P.singleGroupByGroupId.groupPicture_70_70 = "img/kh_icons/group-logo.png")
                    }), e()), t.message = "Group Icon Uploaded successfully!!!", t.showMessage = !1, P.comments = {}
                }(), t.fileOnChange = function(e) {
                    var r = P.multipartFilesYouAreUploading.length,
                        o = r;
                    if (e.files)
                        for (var i = 0; i < e.files.length; i++)
                            if (P.multipartFilesYouAreUploading[o + i] = {}, P.multipartFilesYouAreUploading[o + i].src = "", P.multipartFilesYouAreUploading[o + i].file = "", window.FileReader) {
                                var s = new FileReader;
                                s.onload = function(r, o) {
                                    return o.abc = "",
                                        function(r) {
                                            var i = new Image;
                                            i.onload = function() {
                                                var r = document.createElement("canvas"),
                                                    o = r.getContext("2d");
                                                r.width = 600, r.height = r.width * (i.height / i.width), o.drawImage(i, 0, 0, r.width, r.height), t.uploadingActivityPicture = !0;
                                                var s = r.toDataURL("image/jpeg"),
                                                    a = projectUrl + "sweb/pictureRest/base64FileUploadWithoutRef/activity";
                                                n.uploadBase64FileToUrl(s, e.files[0].name, a, function(e) {
                                                    return e != -1 ? (t.uploadingActivityPicture = !0, P.pictureIds.push(e), t.uploadingActivityPicture = !1, "uploadSuccesFully") : "uploadFail"
                                                })
                                            }, i.src = r.target.result, o.src = r.target.result
                                        }
                                }(e.files[i], P.multipartFilesYouAreUploading[o + i]), P.multipartFilesYouAreUploading[o + i].file = e.files[i], s.readAsDataURL(e.files[i])
                            } else {
                                P.multipartFilesYouAreUploading[o + i].file = e.files[i];
                                var a = e.files[i];
                                P.multipartFilesYouAreUploading[o + i].name = e.files[i].name;
                                var c = projectUrl + "sweb/pictureRest/myUploadWithoutRef/activity";
                                n.uploadFileToUrlWithIndex(a, c, i, function(e, r) {
                                    return e != -1 ? (t.uploadingActivityPicture = !0, P.pictureIds.push(e), P.multipartFilesYouAreUploading[o + r].src = getPictureUrl(e, "activity", P.multipartFilesYouAreUploading[o + r].name), t.uploadingActivityPicture = !1, "uploadSuccesFully") : "uploadFail"
                                })
                            }
                }, t.uploadFile = function() {
                    var e = t.myFile;
                    if (void 0 != e || null != e)
                        if (window.FileReader) {
                            var r = new FileReader;
                            r.onload = function(r) {
                                return function(r) {
                                    var o = new Image;
                                    o.onload = function() {
                                        var r = document.createElement("canvas"),
                                            i = r.getContext("2d");
                                        r.width = 600, r.height = r.width * (o.height / o.width), i.drawImage(o, 0, 0, r.width, r.height), t.uploadingGroupPicture = !0;
                                        var s = r.toDataURL("image/png"),
                                            a = projectUrl + "sweb/pictureRest/base64FileUpload/group/" + P.singleGroupByGroupId.id;
                                        n.uploadBase64FileToUrl(s, e.name, a, function(r) {
                                            var o = "";
                                            r != -1 ? (t.showMessage = !0, o = projectUrl + "sweb/pictureRest/viewPicture/" + r) : o = "img/kh_icons/group-logo.png", P.singleGroupByGroupId.currentGroupPictureId = r, null != P.singleGroupByGroupId.currentGroupPictureId ? P.singleGroupByGroupId.groupPicture = getPictureUrlWithExtension(P.singleGroupByGroupId.currentGroupPictureId, "group", e.name, "thumnail_70_70") : P.singleGroupByGroupId.groupPicture = "img/kh_icons/group-logo.png", t.uploadingGroupPicture = !1
                                        })
                                    }, o.src = r.target.result
                                }
                            }(e), r.readAsDataURL(e)
                        } else {
                            var o = e,
                                i = projectUrl + "sweb/pictureRest/myUpload/group/" + P.singleGroupByGroupId.id;
                            n.uploadFileToUrl(o, i, function(r) {
                                var o = "";
                                r != -1 ? (t.showMessage = !0, o = projectUrl + "sweb/pictureRest/viewPicture/" + r) : o = "img/kh_icons/group-logo.png", P.singleGroupByGroupId.currentGroupPictureId = r, null != P.singleGroupByGroupId.currentGroupPictureId ? P.singleGroupByGroupId.groupPicture = getPictureUrlWithExtension(P.singleGroupByGroupId.currentGroupPictureId, "group", e.name, "thumnail_70_70") : P.singleGroupByGroupId.groupPicture = "img/kh_icons/group-logo.png", t.uploadingGroupPicture = !1
                            })
                        }
                }, t.like = function(e) {
                    P.dataLoading = !0, s.postData(!0, "sweb/activityStreamLikeRest/secured/like/" + e, {}).then(function(t) {
                        t.success ? (t = {
                            success: !0,
                            message: "Saved succesfully"
                        }, P.groupPosts.forEach(function(t) {
                            t.activityId == e && (t.noOfLikes++, t.likedByYou = !0)
                        }), r.Success(t.message)) : (r.Error(t.message), P.dataLoading = !1)
                    })
                }, t.unlike = function(e) {
                    P.dataLoading = !0, s.postData(!0, "sweb/activityStreamLikeRest/secured/unlike/" + e, {}).then(function(t) {
                        t.success ? (t = {
                            success: !0,
                            message: "Saved succesfully"
                        }, P.groupPosts.forEach(function(t) {
                            t.activityId == e && (t.noOfLikes--, t.likedByYou = !1)
                        }), r.Success(t.message)) : (r.Error(t.message), P.dataLoading = !1)
                    })
                }, t.commentsHide = !0, t.search = function() {
                    e.url("/groups-discover?q=" + (void 0 == P.q ? "" : P.q))
                }, t.comment = function(e) {
                    P.dataLoading = !0;
                    var t = null;
                    P.groupPosts.forEach(function(r) {
                        r.activityId == e && (t = r)
                    }), P.activityStreamComment.userId = P.userId, P.activityStreamComment.activityId = e, P.activityStreamComment.comment = t.com, s.postData(!0, "sweb/activityStreamCommentRest/secured/comment", P.activityStreamComment).then(function(o) {
                        o.success ? (t.noOfComments++, t.com = "", g(e, t.noOfComments, !0)) : (r.Error(o.message), P.dataLoading = !1)
                    })
                }, t.commentsHide = !0, t.reply = function(e, r) {
                    P.dataLoading = !0;
                    var o = null;
                    P.groupPosts.forEach(function(t) {
                        t.activityId == e && (o = t)
                    });
                    var i = null,
                        n = P.comments[e];
                    n.forEach(function(e) {
                        e.commentId == r && (i = e)
                    }), P.activityStreamCommentReply.comment = i.rep, P.activityStreamCommentReply.userId = P.userId, P.activityStreamCommentReply.activityId = e, s.postData(!0, "sweb/activityStreamCommentRest/secured/reply/" + r, P.activityStreamCommentReply).then(function(e) {
                        e.success ? (i.rep = "", i.noOfReplies++, m(r, i.noOfReplies, !0), t.com = null) : P.dataLoading = !1
                    })
                }, t.loadMoreForLikedBy = function(e, r, o) {
                    1 == o && (P.likeStartRecord = {}, P.likeByCount = {}), void 0 == P.likeByCount[e] && (P.likeByCount[e] = r), void 0 == P.likeStartRecord[e] && (P.likeStartRecord[e] = 0), s.getData(!1, "sweb/activityStreamLikeRest/likedBy/" + e + "/" + P.likeStartRecord[e] + "/3", {}).then(function(r) {
                        0 == P.likeStartRecord[e] ? (P.likedBy[e] = r, P.likedBy[e].forEach(function(e) {
                            null != e.profilePictureId ? e.picture = getPictureUrlWithExtension(e.profilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                        })) : r.length > 0 && r.forEach(function(t) {
                            P.likedBy[e].push(t), null != t.profilePictureId ? t.picture = getPictureUrlWithExtension(t.profilePictureId, "profile", t.pictureName, "thumnail_70_70") : t.picture = "img/defaultprofile.png"
                        }), P.likeStartRecord[e] = P.likeStartRecord[e] + 3, P.likedBy[e].length < P.likeByCount[e] ? t.loadMoreLikedBy = !0 : t.loadMoreLikedBy = !1
                    })
                }, t.commentLike = function(e, t, o) {
                    P.dataLoading = !0, void 0 == o ? s.postData(!0, "sweb/commentLikeRest/secured/like/" + e, {}).then(function(o) {
                        o.success ? (o = {
                            success: !0,
                            message: "Saved succesfully"
                        }, P.comments[t].forEach(function(t) {
                            t.commentId == e && (t.noOfLikes++, t.likedByYou = !0)
                        }), r.Success(o.message)) : (r.Error(o.message), P.dataLoading = !1)
                    }) : s.postData(!0, "sweb/commentLikeRest/secured/like/" + o, {}).then(function(t) {
                        t.success ? (t = {
                            success: !0,
                            message: "Saved succesfully"
                        }, P.replies[e].forEach(function(e) {
                            e.commentId == o && (e.noOfLikes++, e.likedByYou = !0)
                        }), r.Success(t.message)) : (r.Error(t.message), P.dataLoading = !1)
                    })
                }, t.commentUnlike = function(e, t, o) {
                    P.dataLoading = !0, void 0 == o ? s.postData(!0, "sweb/commentLikeRest/secured/unlike/" + e, {}).then(function(o) {
                        o.success ? (o = {
                            success: !0,
                            message: "Saved succesfully"
                        }, P.comments[t].forEach(function(t) {
                            t.commentId == e && (t.noOfLikes--, t.likedByYou = !1)
                        }), r.Success(o.message)) : (r.Error(o.message), P.dataLoading = !1)
                    }) : s.postData(!0, "sweb/commentLikeRest/secured/unlike/" + o, {}).then(function(t) {
                        t.success ? (t = {
                            success: !0,
                            message: "Saved succesfully"
                        }, P.replies[e].forEach(function(e) {
                            e.commentId == o && (e.noOfLikes--, e.likedByYou = !1)
                        }), r.Success(t.message)) : (r.Error(t.message), P.dataLoading = !1)
                    })
                }, t.commentLikedBy = function(e, r, o) {
                    1 == o && (P.commentLikeByCount = {}, P.commentLikeStartRecord = {}), void 0 == P.commentLikeByCount[e] && (P.commentLikeByCount[e] = r), void 0 == P.commentLikeStartRecord[e] && (P.commentLikeStartRecord[e] = 0), P.commentLikeByCount[e] < P.commentLikeStartRecord[e] && $("#noMoreRecordsToShow").show(), s.getData(!1, "sweb/commentLikeRest/likedBy/" + e + "/" + P.commentLikeStartRecord[e] + "/3", {}).then(function(r) {
                        0 == P.commentLikeStartRecord[e] ? (P.commentLikedBy[e] = r, P.commentLikedBy[e].forEach(function(e) {
                            null != e.profilePictureId ? e.picture = getPictureUrlWithExtension(e.profilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                        })) : r.length > 0 && r.forEach(function(t) {
                            P.commentLikedBy[e].push(t), null != t.profilePictureId ? t.picture = getPictureUrl(t.profilePictureId, "profile", t.pictureName) : t.picture = "img/defaultprofile.png"
                        }), P.commentLikeStartRecord[e] = P.commentLikeStartRecord[e] + 3, P.commentLikedBy[e].length < P.commentLikeByCount[e] ? t.commentLikedByLoadmore = !0 : t.commentLikedByLoadmore = !1
                    })
                }, P.simulateQuery = !1, P.isDisabled = !1, P.querySearch = y, P.selectedItemChange = S, P.searchTextChange = b, P.newState = v, P.response123 = {}
        }
        angular.module("app").controller("GroupProfileController", e, ["ui.bootstrap", "appFilters"]), e.$inject = ["$location", "$scope", "FlashService", "$routeParams", "$rootScope", "fileUpload", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                n.postData(!0, "sweb/groupMembersRest/groupMembers/-1/0", p.memberSearch).then(function(e) {
                    p.membersInGroup = e, p.membersInGroup.forEach(function(e) {
                        null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.pictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function a(e) {
                bootbox.confirm(remove_button_msg, function(t) {
                    1 == t && n.postData(!0, "sweb/groupMembersRest/removeMember/" + e + "/" + i.groupId, {}).then(function(e) {
                        e && s()
                    })
                })
            }

            function c(e) {
                bootbox.confirm(remove_button_msg, function(t) {
                    1 == t && n.postData(!0, "sweb/groupMembersRest/removeAdmin/" + e, {}).then(function(e) {
                        e && s()
                    })
                })
            }

            function u(e) {
                n.postData(!0, "sweb/groupMembersRest/makeGroupAdmin/" + e, {}).then(function(e) {
                    e && s()
                })
            }

            function l() {
                n.postData(!0, "sweb/groupMembersRest/isAdmin/" + o.globals.currentUser.id + "/" + i.groupId, {}).then(function(e) {
                    p.adminAccess = e
                })
            }
            var p = this;
            p.groupMemberSearch = s, p.membersInGroup = {}, p.memberSearch = {}, p.remove = a, p.makeGroupAdmin = u, p.removeAdmin = c, p.isAdmin = l, p.adminAccess, p.applyButton = "Apply", p.memberSearch.groupId = i.groupId,
                function() {
                    l(), s(), n.getData(!0, "sweb/groupRest/getGroupInformationByGroupId/" + p.memberSearch.groupId, {}).then(function(e) {
                        r.isMember = e.member, r.isPrivate = e["private"], r.isPublic = e["public"]
                    })
                }()
        }
        angular.module("app").controller("GroupMemberSearchController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s) {
            function a() {
                1 == o.globals.currentUser.profileType ? (r.head = "true", u.appointments.sentToCompany = o.globals.currentUser.id, s.postData(!0, "sweb/appointmentsRest/companyAppointments/0/10", u.appointments).then(function(e) {
                    u.appointments = e, u.appointments.forEach(function(e) {
                        e.appointmentTime = convertUtcToLocalTime(e.appointmentTime), null != e.currentProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                })) : 0 != o.globals.currentUser.profileType && null != o.globals.currentUser.profileType || (u.appointments.sentToConsultant = o.globals.currentUser.id, s.postData(!0, "sweb/appointmentsRest/consultantAppointments/0/10", u.appointments).then(function(e) {
                    u.appointments = e, u.appointments.forEach(function(e) {
                        e.appointmentTime = convertUtcToLocalTime(e.appointmentTime), null != e.currentProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                }))
            }

            function c() {
                u.dataLoading = !0, s.updateData(!0, "sweb/appointmentsRest/update/", u.singleAppointment, {}).then(function(r) {
                    r.success ? (r = {
                        success: !0
                    }, e.path("/myAppointments")) : (t.Error(r.message), u.dataLoading = !1)
                })
            }
            var u = this;
            u.appointments = {}, u.singleAppointment, u.update = c, u.getAppointment = a,
                function() {
                    a()
                }(), null != i.appointmentId && e.path().toString().indexOf("/myAppointments/") > -1 ? (r.table = "false", r.book = "true", s.getData(!1, "sweb/appointmentsRest/get/" + i.appointmentId, {}).then(function(e) {
                    u.singleAppointment = e
                })) : (r.table = "true", r.book = "false")
        }
        angular.module("app").controller("AppointmentController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "$cookieStore", "CommonService"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s, a, c, u, l, p, d, f, g, m, h, v, y) {
            function b() {
                t.getGalleryPictureIds(w.userId, -1, 0, function(e) {
                    w.galleryPictureIds = e, w.galleryPictureIds.pictures = [], w.galleryPictureIds.forEach(function(e) {
                        null != e.galleryPictureId && (e.pictures = projectUrl + "sweb/pictureRest/viewPicture/" + e.galleryPictureId)
                    })
                })
            }
            var w = this;
            w.profile = {}, w.userId = f.userId,
                function() {
                    b(), o.getProfileExpByUserId(w.userId, function(e) {
                        w.profileExps = e, e && w.profileExps.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentProfilePictureId : e.picture = "img/job-deficon.png"
                        })
                    }), n.getQualificationByUserId(w.userId, function(e) {
                        w.allQualifications = e
                    }), a.getAwardsByUserId(w.userId, function(e) {
                        w.allAwards = e, e && w.allAwards.forEach(function(e) {
                            null != e.currentAwardPictureId && (e.picture = projectUrl + "sweb/pictureRest/viewPicture/" + e.currentAwardPictureId)
                        })
                    }), t.getProfileUpdateVo(w.userId, function(e) {
                        w.profile = e;
                        var t = new Date(w.profile.dob);
                        w.profile.dob = t.toLocaleString(), "1/1/1970, 5:30:00 AM" == w.profile.dob ? w.profile.dob = "" : w.profile.dob = t, w.profile.country = w.searchCountryText, $(".note-editable").html(w.profile.aboutUs), null != w.profile.currentProfilePictureId ? w.profile.profilePicture = projectUrl + "sweb/pictureRest/viewPicture/" + w.profile.currentProfilePictureId : w.profile.profilePicture = "img/defaultprofile.png"
                    }), u.getNoOfPostsByUserId(w.userId, function(e) {
                        w.userPosts = e
                    }), r.getUserDetailsByUserId(w.userId, function(e) {
                        w.userDetails = e
                    }), w.privacySettingSearch = {}, w.privacySettingSearch.userId = f.userId, null != f.userId ? i.getAllSettings(w.privacySettingSearch, -1, 0, function(e) {
                        w.allSettings = e, w.allSettings.forEach(function(e) {
                            "EMAIL" == e.settingType ? p.showEmail = i.getSingleSetting(e, w.isFriend) : "MOBILE" == e.settingType ? p.showMobile = i.getSingleSetting(e, w.isFriend) : "DOB" == e.settingType && (p.showDob = i.getSingleSetting(e, w.isFriend))
                        })
                    }) : (p.showEmail = !0, p.showMobile = !0, p.showDob = !0)
                }()
        }
        angular.module("app").controller("PublicProfileController", e), e.$inject = ["$location", "ProfileService", "UserService", "ProfileExpService", "PrivacySettingsService", "QualificationService", "MessagesService", "AwardsService", "EavAttributeSetService", "ActivityStreamService", "FlashService", "$scope", "$rootScope", "$routeParams", "FollowService", "$http", "FriendService", "fileUpload", "$cookieStore"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            function s() {
                a.dataLoading = !0, a.bugDetail.suggestedDate = new Date, a.bugDetail.suggestionUrl = $(location).attr("href"), t.postData(!1, "sweb/bugDetailsRest/sendBug", a.bugDetail).then(function(e) {
                    e.success ? (document.getElementById("specError").innerHTML = "Your message sent succesfully", a.bugDetail = {}, a.dataLoading = !1) : (r.Error(e.message), a.dataLoading = !1)
                })
            }
            var a = this;
            a.sendBug = s,
                function() {
                    a.dataLoading = !1
                }()
        }
        angular.module("app").controller("BugDetailsController", e), e.$inject = ["$location", "CommonService", "FlashService", "$scope", "$rootScope", "$routeParams"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s, a, c, u, l, p, d, f, g, m) {
            function h() {
                s.getData(!1, "sweb/userRest/getCompanies", {}).then(function(e) {
                    Ue.companies = e
                })
            }

            function v() {
                Ue.parentUser.id = Ue.userId, s.postData(!1, "sweb/userRest/getUserChain", Ue.parentUser).then(function(e) {
                    Ue.userChain = e;
                    var t = Ue.userChain;
                    t.forEach(function(e) {
                        null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, e.picType, e.picName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    }), r.chartData = [
                        ["Name", "ReportsTo", "JobTitle"]
                    ];
                    var o = [
                        ["Name", "ReportsTo", "JobTitle"]
                    ];
                    angular.forEach(t, function(e) {
                        o.push([{
                            v: e.id.toString(),
                            f: ' <div class="parent" ><div>  <a href="' + e.userName + '"> <img src="' + e.picture + '" class="iconDetails"> </a> </div> <div class="text"><h4><b>' + e.name + "</b></h4><div >" + e.email + "</div></div></div>"
                        }, 0 === e.reportsTo ? "" : e.reportsTo.toString(), e.name])
                    }), r.chartData = o
                })
            }

            function y() {
                Ue.parentUser.id = Ue.userId, s.postData(!0, "sweb/userRest/updateParent", Ue.parentUser).then(function(e) {
                    e.success ? (g.success("Parent Company Updated"), v()) : g.error("Some Error Occured")
                })
            }

            function b() {
                void 0 != o.globals.currentUser && s.getData(!1, "sweb/friendRest/peapleYouMayKnow/" + o.globals.currentUser.id, {}).then(function(e) {
                    Ue.peapleYouMayKnow = e, Ue.peapleYouMayKnow.forEach(function(e) {
                        null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.pictureName, "thumnail_70_70") : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function w(e) {
                var t = e.split(" ");
                if (1 != t.length) return r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                    type: "danger",
                    createdAt: Date.now(),
                    msg: no_space_in_mobile
                }], I(r.alerts.profileInfo), !1;
                if (null != e || void 0 != e) {
                    var o = e.split("+");
                    if ("" != o[0] && 10 == o[0].length) {
                        if (isNaN(o[0])) return r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: invalid_mobile_error
                        }], I(r.alerts.profileInfo), !1;
                        if (1 == Ue.profile.profileType) return !0;
                        r.updateByColumn("PROFILE", "MOBILE", e, "String")
                    } else {
                        if (isNaN(o[1]) || 12 != o[1].length && 13 != o[1].length) return r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: invalid_mobile_error
                        }], I(r.alerts.profileInfo), !1;
                        if (1 == Ue.profile.profileType) return !0;
                        r.updateByColumn("PROFILE", "MOBILE", e, "String")
                    }
                }
            }

            function S(e, t, r) {
                bootbox.confirm(remove_button_msg, function(o) {
                    1 == o && te(e, t, r)
                })
            }

            function P(e, t, r) {
                bootbox.confirm(remove_button_msg, function(o) {
                    1 == o && X(e, t, r)
                })
            }

            function I(e) {
                var t = 5e3,
                    o = setInterval(function() {
                        e.forEach(function(i) {
                            var n = convertUtcToLocalTime(Date.now()),
                                s = convertUtcToLocalTime(i.createdAt),
                                a = Math.abs(n - s);
                            a > t && (e.shift(), r.$apply(), clearInterval(o))
                        })
                    }, 1e3)
            }

            function U(e, r, o) {
                Ue.updatePicture = {}, Ue.updatePicture.id = e, null != r || void 0 != r ? (Ue.updatePicture.description = r, Ue.galleryPictureIds[o].description = r) : Ue.updatePicture.description = Ue.galleryPictureIds[o].description, s.postData(!1, "sweb/pictureRest/updateDesc/", Ue.updatePicture).then(function(e) {
                    e.success ? (Ue.descEdit = !1, e = {
                        success: !0
                    }, $("#gallery").modal("toggle")) : (t.Error(e.message), Ue.dataLoading = !1)
                })
            }

            function E(e, t) {
                s.deleteData(!1, "sweb/pictureRest/delete/" + e, {}).then(function(e) {
                    e.success && (Ue.galleryPictureIds.splice(t, 1), $(".modal-backdrop").hide(), $("body").css("overflow", "auto"))
                })
            }

            function R() {
                Ue.dataLoading = !0, Ue.singleMessage.fromUser = o.globals.currentUser.id, Ue.singleMessage.toUser = Ue.userId, Ue.singleMessage.sentDate = new Date, Ue.singleMessage.sentDate = convertLocalToUTC(Ue.singleMessage.sentDate), s.postData(!1, "sweb/messagesRest/save", Ue.singleMessage).then(function(e) {
                    Ue.messageToggle(), e.success ? (r.alerts.message = [], r.alerts.message = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: message_success_msg
                    }], I(r.alerts.message), Ue.singleMessage = {}, e = {
                        success: !0
                    }) : (t.Error(e.message), Ue.dataLoading = !1)
                })
            }

            function A() {
                Ue.privacySettingSearch = {}, Ue.privacySettingSearch.userId = Ue.userId, null != Ue.userId ? s.postData(!1, "sweb/privacySettingsRest/getSettings/-1/0", Ue.privacySettingSearch).then(function(e) {
                    Ue.allSettings = e, Ue.allSettings.forEach(function(e) {
                        "EMAIL" == e.settingType ? r.showEmail = getSingleSetting(e, r.isMyConnection) : "MOBILE" == e.settingType ? r.showMobile = getSingleSetting(e, r.isMyConnection) : "DOB" == e.settingType && (r.showDob = getSingleSetting(e, r.isMyConnection))
                    })
                }) : (r.showEmail = !0, r.showMobile = !0, r.showDob = !0)
            }

            function C() {
                s.postData(!0, "sweb/followRest/secured/save/" + Ue.userId, {}).then(function(e) {
                    e.success ? ("FOLLOW" == Ue.followbutton ? (Ue.profile.noOfFollowers++, Ue.followbutton = "UNFOLLOW") : (Ue.profile.noOfFollowers--, Ue.followbutton = "FOLLOW"), e = {
                        success: !0
                    }) : (t.Error(e.message), Ue.dataLoading = !1)
                })
            }

            function D(e) {
                void 0 == e && (e = 0), s.postData(!0, "sweb/friendRest/secured/save/" + Ue.userId + "/" + e, {}).then(function(e) {
                    e.success ? (jQuery.ajax({
                        url: projectUrl + "sweb/userRest/getUserDetails/" + Ue.userId,
                        async: !1,
                        cache: !1,
                        dataType: "json",
                        success: function(e) {
                            Ue.userDetails = e
                        }
                    }), e.success ? (r.isMyConnection = !0, r.isFriendRequest = !1, "FOLLOW" == Ue.followbutton && (Ue.followbutton = "UNFOLLOW")) : (t.Error(e.message), Ue.dataLoading = !1)) : (t.Error(e.message), Ue.dataLoading = !1)
                })
            }

            function T() {
                s.postData(!0, "sweb/friendRest/secured/rejectRequest/" + Ue.userId, {}).then(function(e) {
                    e.success && e.success ? r.isFriendRequest = !1 : (t.Error(e.message), Ue.dataLoading = !1)
                })
            }

            function k(e) {
                void 0 == e && (e = 0), s.postData(!0, "sweb/friendRequestRest/secured/sendRequest/" + Ue.userId + "/" + e, {}).then(function(e) {
                    e.success ? ("FOLLOW" == Ue.followbutton && (Ue.profile.noOfFollowers++, Ue.followbutton = "UNFOLLOW", $("#follow_container").addClass("btn-red")), r.isMeRequestedHim = !0, e = {
                        success: !0
                    }) : (t.Error(e.message), Ue.dataLoading = !1)
                })
            }

            function j() {
                s.postData(!1, "sweb/pictureRest/getGalleryPictureIds/" + Ue.userId + "/0/15").then(function(e) {
                    Ue.galleryPictureIds = e, Ue.galleryPictureIds.pictures = [], Ue.galleryPictureIds.forEach(function(e) {
                        null != e.galleryPictureId && (e.pictures = getPictureUrlWithExtension(e.galleryPictureId, e.type, e.pictureName, "thumnail_300_300"))
                    })
                })
            }

            function _() {
                r.achievments = [], r.publication = [], r.testimonial = [], r.others = [], r.professionalAffiliation = [], s.getData(!1, "sweb/awardsRest/getAwardVos/" + Ue.userId, {}).then(function(e) {
                    Ue.allAwards = e, e && Ue.allAwards.forEach(function(e) {
                        null != e.currentAwardPictureId ? (e.picture = getPictureUrlWithExtension(e.currentAwardPictureId, "award", e.pictureName, "thumnail_300_300"), e.slidePicture = getPictureUrl(e.currentAwardPictureId, "award", e.pictureName)) : e.picture = ""
                    }), Ue.allAwards.forEach(function(e) {
                        0 == e.awardType ? r.achievments.push(e) : 1 == e.awardType ? r.publication.push(e) : 2 == e.awardType ? r.testimonial.push(e) : 3 == e.awardType ? r.others.push(e) : 4 == e.awardType && r.professionalAffiliation.push(e)
                    })
                })
            }

            function x() {
                Ue.inventory = [], Ue.extraServicesFacilities = [], Ue.services = [], Ue.coursesOffered = [], Ue.activityOrProject = [], s.getData(!1, "sweb/extraServicesRest/getExtraServicesVo/" + Ue.userId, {}).then(function(e) {
                    Ue.allExtraServices = e, e && Ue.allExtraServices.forEach(function(e) {
                        null != e.currentExtraServicesPictureId && (e.picture = getPictureUrlWithExtension(e.currentExtraServicesPictureId, "extraservice", e.pictureName, "thumnail_300_300"))
                    }), Ue.allExtraServices.forEach(function(e) {
                        0 == e.extraServicesType ? Ue.inventory.push(e) : 1 == e.extraServicesType ? Ue.extraServicesFacilities.push(e) : 2 == e.extraServicesType ? Ue.services.push(e) : 3 == e.extraServicesType ? Ue.coursesOffered.push(e) : 4 == e.extraServicesType && Ue.activityOrProject.push(e)
                    })
                })
            }

            function L() {
                void 0 != Ue.userName ? s.getData(void 0 != o.globals.currentUser, "sweb/profileRest/getProfileByUserName/" + Ue.userName, {}).then(function(e) {
                    Ue.profile = e, Ue.personaId = Ue.profile.personaMasterId, Ue.userPosts = Ue.profile.noOfPosts, Ue.parentUser.parent = Ue.profile.parent, W()
                }) : s.getData(void 0 != o.globals.currentUser, "sweb/profileRest/getProfileUpdateVo/" + Ue.userId).then(function(e) {
                    Ue.profile = e;
                    var t = [];
                    null != Ue.profile.eavAttributeSet && Ue.profile.eavAttributeSet.eavAttributeGroups.forEach(function(e) {
                        var o = e.attributeGroupCode;
                        e.type = o.substring(0, o.indexOf("-")), e.eavEntityAttributes.forEach(function(e) {
                            "MULTIPLE_CHECKBOX" == e.eavAttribute.frontendInput && r.toggleCheck(e.dynaEntityText, e.eavAttribute.eavAttributeOptions.eavKey), "Yes" == e.dynaEntityText.value ? e.eavAttribute.hidden = !1 : e.eavAttribute.hidden = !0
                        }), t.push(e.attributeGroupName)
                    }), null != Ue.profile.dob && (Ue.profile.dob = r.toDate(Ue.profile.dob)), $("#editor").html(Ue.profile.aboutUs), null != Ue.profile.currentProfilePictureId ? (Ue.profile.profilePicture = getPictureUrl(Ue.profile.currentProfilePictureId, "profile", Ue.profile.profilePictureFileName), Ue.showRemoveButton = !0) : Ue.profile.profilePicture = "img/defaultprofile.png", Ue.profile.profilePicture_70_70 = "img/defaultprofile.png", Ue.profile.profilePicture_300_300 = "img/defaultprofile.png", Ue.showRemoveButton = !1, null != Ue.profile.currentCoverPictureId ? Ue.profile.coverPicture = getPictureUrl(Ue.profile.currentCoverPictureId, "coverImage", Ue.profile.coverPictureFileName) : Ue.profile.coverPicture = "img/defaultprofile.png", Ue.profile.profilePicture_70_70 = "img/defaultprofile.png", Ue.profile.profilePicture_300_300 = "img/defaultprofile.png"
                })
            }

            function M() {
                Ue.userName ? (jQuery.ajax({
                    url: projectUrl + "sweb/userRest/getUserDetailsByUserName/" + Ue.userName,
                    async: !1,
                    cache: !1,
                    dataType: "json",
                    success: function(e) {
                        Ue.userDetails = e
                    }
                }), null != Ue.userName && (Ue.personaId = Ue.userDetails.personaId)) : (jQuery.ajax({
                    url: projectUrl + "sweb/userRest/getUserDetails/" + userId,
                    async: !1,
                    cache: !1,
                    dataType: "json",
                    success: function(e) {
                        Ue.userDetails = e
                    }
                }), null != Ue && (Ue.personaId = Ue.userDetails.personaId))
            }

            function F() {
                s.getData(!1, "sweb/profileExpRest/secured/getProfileExpVo/" + Ue.userId, {}).then(function(e) {
                    Ue.profileExps = e, e && Ue.profileExps.forEach(function(e) {
                        if (null != e.fromDate) {
                            var t = r.splitOfDates(e.fromDate);
                            e.fromDateDay = t[0], e.fromDateMonth = t[1], e.fromDateYear = t[2]
                        }
                        if (null != e.toDate) {
                            var t = r.splitOfDates(e.toDate);
                            e.toDateDay = t[0], e.toDateMonth = t[1], e.toDateYear = t[2]
                        }
                        var o = r.differenceOfDates(e.fromDate, e.toDate);
                        e.expMonths = o[0], e.expYears = o[1];
                        var i = e.isKriticalHealthRegisteredCompany ? "profile" : "company",
                            n = e.isKriticalHealthRegisteredCompany ? "thumnail_70_70" : "thumnail_100_100",
                            s = e.isKriticalHealthRegisteredCompany ? e.pictureName : "companyPicture";
                        null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, i, s, n) : e.picture = "img/job-deficon.png"
                    })
                })
            }

            function B() {
                s.getData(!1, "sweb/qualificationRest/getQualificationVo/" + Ue.userId, {}).then(function(e) {
                    Ue.allQualifications = e, Ue.allQualifications.forEach(function(e) {
                        null != e.pictureId ? e.collegeLogo = getPictureUrlWithExtension(e.pictureId, "school", "schoolPicture", "thumnail_100_100") : e.collegeLogo = "img/job-deficon.png";
                        var t = r.splitOfDates(e.startDate);
                        if (e.startDateMonth = t[1], e.startDateYear = t[2], null != e.endDate) {
                            var t = r.splitOfDates(e.endDate);
                            e.endDateMonth = t[1], e.endDateYear = t[2]
                        }
                    })
                })
            }

            function O(e) {
                var t = "";
                "facilities" == e ? t = "Facilities" : (t = "About", Ue.prefferedLocationsArray.length <= 5 && (Ue.profile.eavAttributeSet.prefferedLocations = Ue.prefferedLocationsArray, Ue.prefferedLocationsArray = [])), null != Ue.profile.eavAttributeSet && Ue.profile.eavAttributeSet.eavAttributeGroups.forEach(function(e) {
                    e.eavEntityAttributes.forEach(function(e) {
                        if ("MULTIPLE_CHECKBOX" == e.eavAttribute.frontendInput) {
                            var t = "";
                            e.dynaEntityText.values.forEach(function(e) {
                                t = "" == t ? e : t + "," + e
                            }), e.dynaEntityText.value = t
                        }
                    })
                }), s.postData(!0, "sweb/eavAttributeSetRest/update/" + Ue.profile.id + "/" + e, Ue.profile.eavAttributeSet).then(function(e) {
                    e.success ? (r.alerts.location = [], L(), e = {
                        success: !0
                    }, r.alerts.about = [], r.alerts.about = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: t + " " + common_save_msg
                    }], I(r.alerts.about), $("#profile-edit-about").collapse("toggle")) : (r.alerts.about = [], r.alerts.about = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: e.message
                    }], I(r.alerts.about), Ue.dataLoading = !1)
                })
            }

            function N(e, o) {
                if (t.clearFlashMessage(), Ue.dataLoading = !0, r.profileInfo.userId = Ue.userId, r.profileInfo.countryName = r.profileInfo.country, void 0 != r.profileInfo.foundedOndobMonth && void 0 != r.profileInfo.foundedOndobYear && void 0 != r.profileInfo.foundedOnDate && !r.isDateValid(r.profileInfo.foundedOndobMonth, r.profileInfo.foundedOndobYear, r.profileInfo.foundedOnDate)) return r.alerts.companyUpdate = [], r.alerts.companyUpdate = [{
                    type: "danger",
                    createdAt: Date.now(),
                    msg: " Founded on " + invalid_date_error
                }], void I(r.alerts.companyUpdate);
                if (null == Ue.profile.countryId ? r.profileInfo.countryId = null : r.profileInfo.countryId = Ue.profile.countryId, !r.profileInfo.latitude || !r.profileInfo.longitude) return void(($("#companyHome").data("bs.modal") || {}).isShown ? ($("#companyHome").modal("toggle"), g.error("Please go to contact tab and  update pin location on map")) : g.error("Please update pin location on map"));
                if (r.profileInfo.dob = r.dateParser(r.profileInfo.foundedOndobMonth, r.profileInfo.foundedOndobYear, r.profileInfo.foundedOnDate), void 0 != r.profileInfo.mobile) {
                    var i = w(r.profileInfo.mobile);
                    if (0 == i) return
                }
                s.updateData(!0, "sweb/profileRest/update/", r.profileInfo).then(function(o) {
                    o.success ? (void 0 == e && null == e || z(e), L(), o = {
                        success: !0
                    }, t.clearFlashMessage(), r.alerts.about = [], r.alerts.about = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: about_success_msg
                    }], I(r.alerts.about), ($("#profile-edit-about").data("bs.modal") || {}).isShown && $("#profile-edit-about").modal("toggle"), ($("#companyHome").data("bs.modal") || {}).isShown && $("#companyHome").modal("toggle"), $("#updateHome").is(":visible") && $("#updateHome").modal("toggle"), $("#updateContact").is(":visible") && $("#updateContact").modal("toggle")) : (r.alerts.about = [], r.alerts.about = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: common_error_msg
                    }], I(r.alerts.about), Ue.dataLoading = !1)
                })
            }

            function q(e, t) {
                if (void 0 != e || null != e)
                    if (window.FileReader) {
                        var o = new FileReader;
                        o.onload = function(o) {
                            return function(o) {
                                var i = new Image;
                                i.onload = function() {
                                    var o = document.createElement("canvas"),
                                        n = o.getContext("2d");
                                    o.width = 600, o.height = o.width * (i.height / i.width), n.drawImage(i, 0, 0, o.width, o.height);
                                    var s = o.toDataURL("image/png"),
                                        c = projectUrl + "sweb/pictureRest/base64FileUpload/" + t + "/" + Ue.profile.id;
                                    r.uploadingEavImage = !0, a.uploadBase64FileToUrl(s, e.name, c, function(e) {
                                        return e != -1 ? (Ue.setProfileDataAfterGettingByUserName(), r.uploadingEavImage = !1, "uploadSuccesFully") : "uploadFail"
                                    })
                                }, i.src = o.target.result
                            }
                        }(e), o.readAsDataURL(e)
                    } else {
                        var i = e,
                            n = projectUrl + "sweb/pictureRest/myUpload/" + t + "/" + Ue.profile.id;
                        a.uploadFileToUrl(i, n, function(e) {
                            e != -1 && (Ue.setProfileDataAfterGettingByUserName(), r.uploadingEavImage = !1)
                        })
                    }
            }

            function G(e, t) {
                if (r.galleryMessage = {}, void 0 != Ue.galleryMultipartFile)
                    if (Ue.galleryPictureIds.length < 16) {
                        if (void 0 != e || null != e)
                            if (window.FileReader) {
                                var o = new FileReader;
                                o.onload = function(o) {
                                    return function(o) {
                                        var i = new Image;
                                        i.onload = function() {
                                            var o = document.createElement("canvas"),
                                                n = o.getContext("2d");
                                            o.width = 600, o.height = o.width * (i.height / i.width), n.drawImage(i, 0, 0, o.width, o.height);
                                            var s = o.toDataURL("image/png"),
                                                c = projectUrl + "sweb/pictureRest/base64FileUpload/gallery/" + Ue.userId + "?desc=" + (void 0 == t || null == t ? "" : t);
                                            r.uploadGallery = !0, a.uploadBase64FileToUrl(s, e.name, c, function(e) {
                                                return e != -1 ? (r.uploadGallery = !1, Ue.desc = "", $("#galleryPic").attr("src", ""), Ue.galleryMultipartFile = void 0, j(), r.galleryMessage.show = !1, "uploadSuccesFully") : "uploadFail"
                                            })
                                        }, i.src = o.target.result
                                    }
                                }(e), o.readAsDataURL(e)
                            } else {
                                var i = e,
                                    n = projectUrl + "sweb/pictureRest/myUpload/gallery/" + Ue.userId + "?desc=" + (void 0 == t || null == t ? "" : t);
                                r.uploadGallery = !0, a.uploadFileToUrl(i, n, function(e) {
                                    e != -1 && (r.uploadGallery = !1, Ue.desc = "", Ue.galleryMultipartFile = void 0, j())
                                })
                            }
                    } else r.galleryMessage.show = !0, r.galleryMessage.message = "Gallery Limit Exceeds (15 Photos only)", $("#galleryPic").attr("src", "");
                else r.galleryMessage.show = !0, r.galleryMessage.message = "Image Should Be Selected"
            }

            function V(e, t) {
                if (void 0 != e || null != e) {
                    var r = e,
                        o = projectUrl + "sweb/pictureRest/myUpload/" + t + "/" + Ue.userId + "?desc=" + (void 0 == Ue.facility.description || null == Ue.facility.description ? "" : Ue.facility.description);
                    a.uploadFileToUrl(r, o, function(e) {
                        return e != -1 ? (pe(), "uploadSuccesFully") : "uploadFail"
                    })
                }
            }

            function Y(e, t) {
                V(e, t)
            }

            function z(e) {
                var t = e;
                if (void 0 != e || null != e) {
                    var r = new FileReader;
                    r.onload = function(t) {
                        return function(t) {
                            var r = new Image;
                            r.onload = function() {
                                var t = document.createElement("canvas"),
                                    o = t.getContext("2d");
                                t.width = 600, t.height = t.width * (r.height / r.width), o.drawImage(r, 0, 0, t.width, t.height);
                                var i = t.toDataURL("image/png"),
                                    n = projectUrl + "sweb/pictureRest/base64FileUpload/coverImage/" + Ue.profile.id;
                                a.uploadBase64FileToUrl(i, e.name, n, function(e) {
                                    return e != -1 ? (location.reload(), "uploadSuccesFully") : "uploadFail"
                                })
                            }, r.src = t.target.result
                        }
                    }(e), r.readAsDataURL(e)
                }
                var o = projectUrl + "sweb/pictureRest/myUpload/coverImage/" + Ue.profile.id;
                a.uploadFileToUrl(t, o, function(e) {
                    return e != -1 ? (location.reload(), "uploadSuccesFully") : "uploadFail"
                })
            }

            function W() {
                Ue.isFollowing = Ue.profile.following, Ue.isFollowing ? Ue.followbutton = "UNFOLLOW" : Ue.followbutton = "FOLLOW", Ue.profile.location.forEach(function(e) {
                    Ue.prefferedLocationsArray.push(e)
                }), r.isMyConnection = Ue.profile.friend, r.isFriendRequest = Ue.profile.friendRequestReceived, r.isMeRequestedHim = Ue.profile.friendRequestSent;
                var t = Ue.profile.dob;
                "company" == Ue.profile.template && $("#founded").val(Ue.profile.dob);
                var o = new Array;
                if (null != t && (o = t.split("-"), r.commonProfileController.profile.dobDate = o[2], r.commonProfileController.profile.dobMonth = o[1], "01" == o[1] ? r.commonProfileController.profile.dobMonth = "January" : "02" == o[1] ? r.commonProfileController.profile.dobMonth = "February" : "03" == o[1] ? r.commonProfileController.profile.dobMonth = "March" : "04" == o[1] ? r.commonProfileController.profile.dobMonth = "April" : "05" == o[1] ? r.commonProfileController.profile.dobMonth = "May" : "06" == o[1] ? r.commonProfileController.profile.dobMonth = "June" : "07" == o[1] ? r.commonProfileController.profile.dobMonth = "July" : "08" == o[1] ? r.commonProfileController.profile.dobMonth = "August" : "09" == o[1] ? r.commonProfileController.profile.dobMonth = "September" : "10" == o[1] ? r.commonProfileController.profile.dobMonth = "October" : "11" == o[1] ? r.commonProfileController.profile.dobMonth = "November" : "12" == o[1] && (r.commonProfileController.profile.dobMonth = "December"), r.commonProfileController.profile.dobYear = o[0]), Ue.userId = Ue.profile.userId, null == Ue.profile.userId && e.path("/pageNotFound"), null != Ue.profile.componentDisplay) {
                    var i = 0;
                    Ue.profile.componentDisplay.split("").forEach(function(e) {
                        0 == i && "y" == e && (r.showHome = !0), 1 == i && "y" == e && (r.showGallery = !0), 2 == i && "y" == e && (r.showConnections = !0), 3 == i && "y" == e && (r.showAchievements = !0), 4 == i && "y" == e && (r.showExperience = !0), 5 == i && "y" == e && (r.showEducation = !0), 6 == i && "y" == e && (r.showSpecialities = !0), 7 == i && "y" == e && (r.showFacilities = !0), 8 == i && "y" == e && (r.showTeam = !0), 9 == i && "y" == e && (r.showCareer = !0), 10 == i && "y" == e && (r.showServices = !0), 11 == i && "y" == e && (r.showProducts = !0), 12 == i && "y" == e && (r.showActivities = !0), 13 == i && "y" == e && (r.showCoursesOffered = !0), i++
                    })
                }
                Ue.userId = Ue.profile.userId;
                var n = [];
                null != Ue.profile.eavAttributeSet && (Ue.profile.eavAttributeSet.eavAttributeGroups.forEach(function(e) {
                    var t = e.attributeGroupCode;
                    e.type = t.substring(0, t.indexOf("-")), e.eavEntityAttributes.forEach(function(t) {
                        null != t.dynaEntityText.value && (e.showTab = !0), "MULTIPLE_CHECKBOX" == t.eavAttribute.frontendInput && (null != t.dynaEntityText && null != t.dynaEntityText.value ? (t.dynaEntityText.values = [], t.dynaEntityText.value.split(",").forEach(function(e) {
                            t.dynaEntityText.values.push(e)
                        })) : null == t.dynaEntityText ? (t.dynaEntityText = {}, t.dynaEntityText.values = []) : null == t.dynaEntityText.value && (t.dynaEntityText.values = [])), "Yes" == t.dynaEntityText.value ? t.eavAttribute.hidden = !1 : t.eavAttribute.hidden = !0
                    }), n.push(e.attributeGroupName)
                }), de(n)), $("#editor").html(Ue.profile.aboutUs), null != Ue.profile.currentProfilePictureId ? (Ue.profile.profilePicture = getPictureUrlWithExtension(Ue.profile.currentProfilePictureId, "profile", Ue.profile.profilePictureFileName, "thumnail_300_300"), Ue.showRemoveButton = !0) : "company" == Ue.profile.template ? (Ue.profile.profilePicture = "img/CompanyDefaultPic.png", Ue.profile.profilePicture_70_70 = "img/defaultprofile.png", Ue.profile.profilePicture_300_300 = "img/defaultprofile.png", Ue.showRemoveButton = !1) : (Ue.profile.profilePicture = "img/defaultprofile.png", Ue.profile.profilePicture_70_70 = "img/defaultprofile.png", Ue.profile.profilePicture_300_300 = "img/defaultprofile.png", Ue.showRemoveButton = !1), m.setTag("og:url", "www.aylaconnect.com/" + Ue.profile.userName), m.setTag("og:image", Ue.profile.profilePicture), m.setTag("og:description", Ue.profile.aboutUs), m.setTag("og:title", Ue.profile.firstName + " " + Ue.profile.lastName), null != Ue.profile.currentCoverPictureId ? Ue.profile.coverPicture = getPictureUrl(Ue.profile.currentCoverPictureId, "coverImage", Ue.profile.coverPictureFileName) : "company" == Ue.profile.coverPicture ? Ue.profile.coverPicture = "img/CompanyDefaultPic.png" : Ue.profile.coverPicture = "img/defaultprofile.png", d.getMap("map1").then(function(e) {
                    Ue.map1 = e, google.maps.event.trigger(Ue.map1, "resize")
                }), d.getMap("map2").then(function(e) {
                    Ue.map2 = e, google.maps.event.trigger(Ue.map2, "resize")
                }), d.getMap("map3").then(function(e) {
                    Ue.map3 = e, google.maps.event.trigger(Ue.map3, "resize")
                })
            }

            function J(e, t, i) {
                r.awardsEdit(t), Ue.awards.dataLoading = !0;
                var n = "";
                if (0 == Ue.award.type ? n = "Awards/Achievements" : 1 == Ue.award.type ? n = "Publication" : 2 == Ue.award.type ? n = "Testimonial" : 3 == Ue.award.type ? n = "Others" : 4 == Ue.award.type && (n = "Professional Affiliation"), null != Ue.award.id) {
                    if (e) i ? (Ue.award.status = 1, Ue.award.type = 2) : (Ue.award.status = null, Ue.award.type = 2);
                    else {
                        if (Ue.award.userId = Ue.userId, !r.isDateValid(r.commonProfileController.award.awardMonth, r.commonProfileController.award.awardYear, r.commonProfileController.award.awardDay)) return r.alerts.recognition = [], r.alerts.recognition = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: n + "  issued date " + invalid_date_error
                        }], void I(r.alerts.recognition);
                        Ue.award.issuedDate = r.dateParser(r.commonProfileController.award.awardMonth, r.commonProfileController.award.awardYear, r.commonProfileController.award.awardDay), Ue.award.issuedDateString = convertToString(r.commonProfileController.award.awardMonth, r.commonProfileController.award.awardYear, r.commonProfileController.award.awardDay)
                    }
                    void 0 != Ue.awardPictureId ? Ue.award.pictureId = Ue.awardPictureId : Ue.award.pictureId = null, s.updateData(!0, "sweb/awardsRest/secured/update", Ue.award).then(function(t) {
                        _(), $("#awardPic").attr("src", ""), r.showRemoveSign = !1, t.success ? (t = {
                            success: !0
                        }, r.alerts.recognition = [], r.alerts.recognition = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: n + " " + common_save_msg
                        }], I(r.alerts.recognition), Ue.testimonialToggle(), e || $("#profileeditrecogn").collapse("toggle"), Ue.award.pictureId = null) : (r.alerts.recognition = [], r.alerts.recognition = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: t.message
                        }], I(r.alerts.recognition), Ue.awards.dataLoading = !1, Ue.award.pictureId = null)
                    })
                } else {
                    var n = "";
                    if (0 == Ue.award.type ? n = "Awards/Achievements" : 1 == Ue.award.type ? n = "Publication" : 2 == Ue.award.type ? (n = "Testimonial", common_save_msg = "sent successfully", $("#contact-recommend-blk").collapse("toggle")) : 3 == Ue.award.type ? n = "Others" : 4 == Ue.award.type && (n = "Professional Affiliation"), Ue.award.userId = Ue.userId, e) Ue.award.createdBy = o.globals.currentUser.id, Ue.award.type = 2, Ue.award.status = 0;
                    else {
                        if (Ue.award.userId = Ue.userId, !r.isDateValid(r.commonProfileController.award.awardMonth, r.commonProfileController.award.awardYear, r.commonProfileController.award.awardDay)) return r.alerts.recognition = [], r.alerts.recognition = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: n + " date " + invalid_date_error
                        }], void I(r.alerts.recognition);
                        Ue.award.issuedDate = r.dateParser(r.commonProfileController.award.awardMonth, r.commonProfileController.award.awardYear, r.commonProfileController.award.awardDay), Ue.award.issuedDateString = convertToString(r.commonProfileController.award.awardMonth, r.commonProfileController.award.awardYear, r.commonProfileController.award.awardDay), void 0 != Ue.awardPictureId ? Ue.award.pictureId = Ue.awardPictureId : Ue.award.pictureId = null
                    }
                    s.postData(!0, "sweb/awardsRest/secured/save", Ue.award).then(function(e) {
                        $("#awardPic").attr("src", ""), r.showRemoveSign = !1, Ue.award.pictureId = null, _(), r.alerts.recognition = [], r.alerts.recognition = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: n + " " + common_save_msg
                        }], I(r.alerts.recognition), Ue.testimonialToggle(), Ue.award = {}, ($("#companyAchievements").data("bs.modal") || {}).isShown ? $("#companyAchievements").modal("toggle") : $("#profileeditrecogn").collapse("toggle")
                    })
                }
            }

            function Q(e) {
                Ue.extraServices.dataLoading = !0, Ue.extraService.type = e, null != Ue.extraService.id ? (Ue.extraService.createdBy = Ue.userId, Ue.extraService.createdBy = Ue.userId, s.putData(!0, "sweb/extraServicesRest/secured/update", Ue.extraService).then(function(t) {
                    x(), t.success ? (t = {
                        success: !0
                    }, r.alerts.extraservices = [], r.alerts.extraservices = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: e + " " + common_save_msg
                    }], I(r.alerts.extraservices)) : (r.alerts.extraservices = [], r.alerts.extraservices = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: t.message
                    }], I(r.alerts.extraservices), Ue.extraServices.dataLoading = !1)
                })) : (void 0 == Ue.uploadingExtraServicePictureId && null == Ue.uploadingExtraServicePictureId || (Ue.extraService.pictureId = Ue.uploadingExtraServicePictureId), Ue.extraService.createdBy = Ue.userId, s.postData(!0, "sweb/extraServicesRest/secured/save", Ue.extraService).then(function(t) {
                    if (Ue.extraService.pictureId = null, r.alerts.coursesOffered = [], r.alerts.inventory = [], r.alerts.service = [], r.alerts.activity = [], "COURSES_OFFERED" == e) {
                        $("#coursesOfferedPic").attr("src", ""), $("#coursesOfferedEdit").collapse("toggle");
                        var o = "Course";
                        r.alerts.coursesOffered = [], r.alerts.coursesOffered = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: o + " " + common_save_msg
                        }], I(r.alerts.coursesOffered)
                    } else if ("INVENTORY" == e) {
                        $("#inventoryPic").attr("src", ""), $("#inventoryEdit").collapse("toggle");
                        var o = "Inventory";
                        r.alerts.inventory = [], r.alerts.inventory = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: o + " " + common_save_msg
                        }], I(r.alerts.inventory)
                    } else if ("SERVICE" == e) {
                        $("#servicePic").attr("src", ""), $("#serviceEdit").collapse("toggle");
                        var o = "Service";
                        r.alerts.service = [], r.alerts.service = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: o + " " + common_save_msg
                        }], I(r.alerts.service)
                    } else if ("ACTIVITY_OR_PROJECT" == e) {
                        $("#activityPic").attr("src", ""), $("#activityEdit").collapse("toggle");
                        var o = "Activity/Project";
                        r.alerts.activity = [], r.alerts.activity = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: o + " " + common_save_msg
                        }], I(r.alerts.activity)
                    }
                    x(), Ue.extraServices.dataLoading = !1, r.alerts.extraservices = [], r.alerts.extraservices = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: e + " " + common_save_msg
                    }], I(r.alerts.extraservices), Ue.extraService = {}, Ue.extraServices.dataLoading = !1
                }))
            }

            function H() {
                s.getData(!1, "sweb/teamRest/getTeam/" + Ue.userId + "/" + -1 + "/0", {}).then(function(e) {
                    Ue.teamMembers = e, Ue.teamMembers.forEach(function(e) {
                        null != e.profileLink ? e.profileLink = projectWebUrl + "/" + e.profileLink : e.profileLink = "", null != e.pictureId ? e.picture = getPictureUrlWithExtension(e.pictureId, e.type, e.pictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function K() {
                s.getData(!1, "sweb/companySpecializationNewRest/getCompanySpecializationNew/" + Ue.userId + "/0/10", {}).then(function(e) {
                    Ue.companySpecializationNewMembers = e, Ue.companySpecializationNewMembers.forEach(function(e) {
                        e.profileLink ? e.profileLink = projectWebUrl + "/" + e.profileLink : e.profileLink = "", null != e.pictureId ? e.picture = getPictureUrlWithExtension(e.pictureId, e.type, e.pictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function X(e, o, i) {
                void 0 == i && (i = 0), s.postData(!0, "sweb/teamRest/secured/deleteTeamMember/" + e + "/" + i).then(function(e) {
                    e.success && (Ue.teamMembers.splice(o, 1), t.clearFlashMessage(), r.alerts.team = [], r.alerts.team = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: team_remove_success_msg
                    }], I(r.alerts.team))
                })
            }

            function Z(e, t, r, o) {
                bootbox.confirm("Are you sure you want to remove?", function(i) {
                    1 == i && ee(e, t, r, o)
                })
            }

            function ee(e, t, o, i) {
                void 0 == o && (o = 0), s.postData(!0, "sweb/extraServicesRest/secured/deleteExtraService/" + e + "/" + o).then(function(e) {
                    if (e.success)
                        if (r.alerts.coursesOffered = [], r.alerts.inventory = [], r.alerts.service = [], r.alerts.activity = [], "COURSES_OFFERED" == i) {
                            Ue.coursesOffered.splice(t, 1);
                            var o = "Course";
                            r.alerts.coursesOffered = [], r.alerts.coursesOffered = [{
                                type: "success",
                                createdAt: Date.now(),
                                msg: o + " " + generic_remove_message
                            }], I(r.alerts.coursesOffered)
                        } else if ("INVENTORY" == i) {
                        Ue.inventory.splice(t, 1);
                        var o = "Inventory";
                        r.alerts.inventory = [], r.alerts.inventory = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: o + " " + generic_remove_message
                        }], I(r.alerts.inventory)
                    } else if ("SERVICE" == i) {
                        Ue.services.splice(t, 1);
                        var o = "Service";
                        r.alerts.service = [], r.alerts.service = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: o + " " + generic_remove_message
                        }], I(r.alerts.service)
                    } else if ("ACTIVITY_OR_PROJECT" == i) {
                        Ue.activityOrProject.splice(t, 1);
                        var o = "Activity/Project";
                        r.alerts.activity = [], r.alerts.activity = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: o + " " + generic_remove_message
                        }], I(r.alerts.activity)
                    }
                })
            }

            function te(e, o, i) {
                void 0 == i && (i = 0), s.postData(!0, "sweb/companySpecializationNewRest/secured/deleteCompanySpecialization/" + e + "/" + i).then(function(e) {
                    e.success && (Ue.companySpecializationNewMembers.splice(o, 1), t.clearFlashMessage(), r.alerts.specialities = [], r.alerts.specialities = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: specialization_remove_success_msg
                    }], I(r.alerts.specialities))
                })
            }

            function re() {
                Ue.team.dataLoading = !0, Ue.team.companyId = Ue.userId, void 0 != Ue.teamPictureId && (Ue.team.pictureId = Ue.teamPictureId), s.postData(!0, "sweb/teamRest/secured/save", Ue.team).then(function(e) {
                    r.alerts.team = [], e.success ? (Ue.teamPictureId = null, t.clearFlashMessage(), r.alerts.team = [], r.alerts.team = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: team_success_msg
                    }], I(r.alerts.team), $("#team-persons").collapse("toggle"), Ue.team = {}, $("#blahTeam").attr("src", ""), H(), Ue.team.dataLoading = !1) : (Ue.team.profileLink = null, t.clearFlashMessage(), t.Error(e.messages[0].message, !1), Ue.team.dataLoading = !1)
                })
            }

            function oe() {
                Ue.companySpecializationNew.dataLoading = !0, Ue.companySpecializationNew.companyId = Ue.userId, void 0 != Ue.companySpecializationPicId && (Ue.companySpecializationNew.pictureId = Ue.companySpecializationPicId), s.postData(!0, "sweb/companySpecializationNewRest/secured/save", Ue.companySpecializationNew).then(function(e) {
                    e.success ? (r.alerts.specialities = [], r.alerts.specialities = [{
                        type: "success",
                        createdAt: Date.now(),
                        msg: specialities_success_msg
                    }], I(r.alerts.specialities), Ue.companySpecializationNew = {}, $("#blahCompanySpecialization").attr("src", ""), $("#speciality-persons").collapse("toggle"), Ue.companySpecializationPicId = null, K()) : (Ue.companySpecializationNew.profileLink = null, r.alerts.specialities = [], r.alerts.specialities = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: e.message
                    }], r.alerts.specialities = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: e.messages[0].message
                    }], I(r.alerts.specialities), Ue.companySpecializationNew.dataLoading = !1)
                })
            }

            function ie(e) {
                s.postData(!0, "sweb/awardsRest/secured/deleteAwards/" + e, {}).then(function(e) {
                    return "" == e ? (_(), "deleted succesfully") : "error accured"
                })
            }

            function ne(e) {
                if (Ue.certification.dataLoading = !0, e) r.alerts.certification = [], r.alerts.certification = [{
                    type: "danger",
                    createdAt: Date.now(),
                    msg: common_error_msg
                }], I(r.alerts.certification), r.showError = !0;
                else if (null != Ue.certification.id) {
                    if (Ue.certification.userId = Ue.userId, Ue.certification.date = r.dateParser(r.commonProfileController.certification.certificationFromMonth, r.commonProfileController.certification.certificationFromYear), r.commonProfileController.certification.certificationToYear) {
                        Ue.certification.endDate = r.dateParser(r.commonProfileController.certification.certificationToMonth, r.commonProfileController.certification.certificationToYear);
                        var t = r.checkErr(Ue.certification.date, Ue.certification.endDate)
                    } else Ue.certification.endDate = null, t = !0;
                    t ? s.updateData(!0, "sweb/certificationRest/secured/update", Ue.certification).then(function(e) {
                        se(), e.success ? (e = {
                            success: !0,
                            message: "Changed Succesfully"
                        }, r.newCertification(), r.alerts.certification = [], r.alerts.certification = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: certification_success_msg
                        }], I(r.alerts.certification), $("#profile-edit-certi").collapse("toggle")) : (r.alerts.certification = [], r.alerts.certification = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: e.message
                        }], I(r.alerts.certification), Ue.dataLoading = !1)
                    }) : (r.alerts.certification = [], r.alerts.certification = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: common_end_date_error
                    }], I(r.alerts.certification))
                } else {
                    if (Ue.certification.userId = Ue.userId, Ue.certification.date = r.dateParser(r.commonProfileController.certification.certificationToMonth, r.commonProfileController.certification.certificationFromYear), r.commonProfileController.certification.certificationToYear) {
                        Ue.certification.endDate = r.dateParser(r.commonProfileController.certification.certificationToMonth, r.commonProfileController.certification.certificationToYear);
                        var t = r.checkErr(Ue.certification.date, Ue.certification.endDate)
                    } else Ue.certification.endDate = null, t = !0;
                    t ? s.postData(!0, "sweb/certificationRest/secured/save", Ue.certification).then(function(e) {
                        e.success ? (e = {
                            success: !0,
                            message: "Added Succesfully"
                        }, r.newCertification(), r.alerts.certification = [], r.alerts.certification = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: certification_success_msg
                        }], I(r.alerts.certification), se(), $("#profile-edit-certi").collapse("toggle")) : (r.alerts.certification = [], r.alerts.certification = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: e.message
                        }], I(r.alerts.certification), Ue.certification.dataLoading = !1)
                    }) : (r.alerts.certification = [], r.alerts.certification = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: common_end_date_error
                    }], I(r.alerts.certification))
                }
            }

            function se() {
                s.getData(!1, "sweb/certificationRest/getCertification/" + Ue.userId + "/" + -1 + "/0", {}).then(function(e) {
                    Ue.allCertificates = e, Ue.allCertificates.forEach(function(e) {
                        var t = r.splitOfDates(e.date);
                        if (e.startDateMonth = t[1], e.startDateYear = t[2], null != e.endDate) {
                            var t = r.splitOfDates(e.endDate);
                            e.endDateMonth = t[1], e.endDateYear = t[2]
                        }
                    })
                })
            }

            function ae(e) {
                if (e) r.alerts.exp = [], r.alerts.exp = [{
                    type: "danger",
                    createdAt: Date.now(),
                    msg: common_error_msg
                }], I(r.alerts.exp), r.showError = !0;
                else if (Ue.profileExp.dataLoading = !0, null != Ue.profileExp.id) {
                    if (Ue.profileExp.userId = Ue.userId, Ue.profileExp.company = Ue.profileExp.company, Ue.profileExp.fromDate = r.dateParser(r.commonProfileController.profileExp.companyFromMonth, r.commonProfileController.profileExp.companyFromYear), r.commonProfileController.profileExp.companyToMont && r.commonProfileController.profileExp.companyToYear && !Ue.profileExp.toInf) {
                        Ue.profileExp.toDate = r.dateParser(r.commonProfileController.profileExp.companyToMont, r.commonProfileController.profileExp.companyToYear);
                        var t = r.checkErr(Ue.profileExp.fromDate, Ue.profileExp.toDate)
                    } else Ue.profileExp.toDate = null, t = !0;
                    t ? s.updateData(!0, "sweb/profileExpRest/secured/update", Ue.profileExp).then(function(e) {
                        F(), e.success ? (r.alerts.exp = [], r.alerts.exp = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: exp_success_msg
                        }], I(r.alerts.exp), r.newExp(), $("#profile-edit-exp").collapse("toggle")) : (r.alerts.exp = [], r.alerts.exp = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: e.message
                        }], I(r.alerts.exp), Ue.dataLoading = !1)
                    }) : (r.alerts.exp = [], r.alerts.exp = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: common_end_date_error
                    }], I(r.alerts.exp))
                } else {
                    if (Ue.profileExp.userId = Ue.userId, Ue.profileExp.company = Ue.profileExp.company, Ue.profileExp.fromDate = r.dateParser(r.commonProfileController.profileExp.companyFromMonth, r.commonProfileController.profileExp.companyFromYear), r.commonProfileController.profileExp.companyToMont && r.commonProfileController.profileExp.companyToYear && !Ue.profileExp.toInf) {
                        Ue.profileExp.toDate = r.dateParser(r.commonProfileController.profileExp.companyToMont, r.commonProfileController.profileExp.companyToYear);
                        var t = r.checkErr(Ue.profileExp.fromDate, Ue.profileExp.toDate)
                    } else Ue.profileExp.toDate = null, t = !0;
                    t ? s.postData(!0, "sweb/profileExpRest/secured/save", Ue.profileExp).then(function(e) {
                        F(), e.success ? (e = {
                            success: !0,
                            message: "Added Succesfully"
                        }, r.alerts.exp = [], r.alerts.exp = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: exp_success_msg
                        }], I(r.alerts.exp), r.newExp(), $("#profile-edit-exp").collapse("toggle")) : (r.alerts.exp = [], r.alerts.exp = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: e.message
                        }], I(r.alerts.exp), Ue.dataLoading = !1)
                    }) : (r.alerts.exp = [], r.alerts.exp = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: common_end_date_error
                    }], I(r.alerts.exp))
                }
            }

            function ce() {
                if (Ue.qualification.dataLoading = !0, null != Ue.qualification.id) {
                    if (Ue.qualification.userId = Ue.userId, Ue.qualification.schoolName = Ue.qualification.school, Ue.qualification.fieldName = Ue.qualification.field, Ue.qualification.universityName = Ue.qualification.university, Ue.qualification.startDate = r.dateParser(r.commonProfileController.qualification.startMonth, r.commonProfileController.qualification.startYear), r.commonProfileController.qualification.toYear) {
                        Ue.qualification.endDate = r.dateParser(r.commonProfileController.qualification.toMonth, r.commonProfileController.qualification.toYear);
                        var e = r.checkErr(Ue.qualification.startDate, Ue.qualification.endDate)
                    } else Ue.qualification.endDate = null, e = !0;
                    e ? s.updateData(!0, "sweb/qualificationRest/secured/update", Ue.qualification).then(function(e) {
                        B(), e.success ? (e = {
                            success: !0
                        }, r.alerts.edu = [], r.alerts.edu = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: edu_success_msg
                        }], I(r.alerts.edu), r.newEdu(), $("#profile-edit-edu").collapse("toggle")) : (r.alerts.edu = [], r.alerts.edu = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: e.message
                        }], I(r.alerts.edu), Ue.dataLoading = !1)
                    }) : (r.alerts.edu = [], r.alerts.edu = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: common_end_date_error
                    }], I(r.alerts.edu))
                } else {
                    if (Ue.qualification.userId = Ue.userId, Ue.qualification.schoolName = Ue.qualification.school, Ue.qualification.fieldName = Ue.qualification.field, Ue.qualification.universityName = Ue.qualification.university, Ue.qualification.startDate = r.dateParser(r.commonProfileController.qualification.startMonth, r.commonProfileController.qualification.startYear), r.commonProfileController.qualification.toYear) {
                        Ue.qualification.endDate = r.dateParser(r.commonProfileController.qualification.toMonth, r.commonProfileController.qualification.toYear);
                        var e = r.checkErr(Ue.qualification.startDate, Ue.qualification.endDate)
                    } else Ue.profileExp.toDate = null, e = !0;
                    e ? s.postData(!0, "sweb/qualificationRest/secured/save", Ue.qualification).then(function(e) {
                        B(), e.success ? (e = {
                            success: !0
                        }, r.alerts.edu = [], r.alerts.edu = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: edu_success_msg
                        }], I(r.alerts.edu), r.newEdu(), $("#profile-edit-edu").collapse("toggle")) : (r.alerts.edu = [], r.alerts.edu = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: e.message
                        }], I(r.alerts.edu), Ue.dataLoading = !1)
                    }) : (r.alerts.edu = [], r.alerts.edu = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: common_end_date_error
                    }], I(r.alerts.edu))
                }
            }

            function ue() {
                Ue.jobsearchmodel.companyId = Ue.userId, s.postData(!1, "sweb/jobsRest/getPostedJobs/0/10", Ue.jobsearchmodel).then(function(e) {
                    Ue.filteredJobApplicationVos = e, Ue.filteredJobApplicationVos.forEach(function(e) {
                        null != e.currentProfilePictureId ? e.picture = getPictureUrl(e.currentProfilePictureId, "profile", e.pictureName) : e.picture = "img/defaultprofile.png"
                    })
                })
            }

            function le() {
                Ue.miscellaneousData = ["careers", "staff", "facilities"], s.postData(!1, "sweb/miscellaneousDataRest/getMiscellaneousDataByType/" + Ue.userId, Ue.miscellaneousData).then(function(e) {
                    Ue.miscellaneousData = e
                })
            }

            function pe() {
                Ue.pictureTypes = ["careers", "staff", "facilities", "award", "staff"], s.postData(!1, "sweb/pictureRest/getPictureByType/" + Ue.userId, Ue.pictureTypes).then(function(e) {
                    Ue.pictures = e, Ue.pictureTypes.forEach(function(e) {
                        null != Ue.pictures[e] && void 0 != Ue.pictures[e] && Ue.pictures[e].forEach(function(t) {
                            t.pictureUrl = getPictureUrl(t.id, e, t.pictureName)
                        })
                    })
                })
            }

            function de(e) {
                s.postData(!1, "sweb/pictureRest/getPictureByType/" + Ue.profile.id, e).then(function(t) {
                    Ue.eavPictures = t, e.forEach(function(e) {
                        null != Ue.eavPictures[e] && void 0 != Ue.eavPictures[e] && (Ue.profile.eavAttributeSet.eavAttributeGroups.forEach(function(t) {
                            t.attributeGroupName == e && (t.showTab = !0)
                        }), Ue.eavPictures[e].forEach(function(t) {
                            t.pictureType = e, t.pictureUrl = getPictureUrlWithExtension(t.id, e, t.pictureName, "thumnail_300_300"), t.showTabByPic = !0
                        }))
                    })
                })
            }

            function fe(e, r, o, i, n) {
                null != r || void 0 != r ? (Ue.miscellaneousDataType.dataLoading = !0, Ue.miscellaneousDataType.referenceId = Ue.userId, Ue.miscellaneousDataType.type = e, Ue.miscellaneousDataType.id = r, Ue.miscellaneousDataType.content = n, s.updateData(!1, "sweb/miscellaneousDataRest/update", Ue.miscellaneousDataType).then(function(r) {
                    r.success ? (void 0 == i && null == i || Y(i, e), le(), r = {
                        success: !0
                    }) : (t.Error(r.message), Ue.miscellaneousDataType.dataLoading = !1)
                })) : (Ue.miscellaneousDataType.dataLoading = !0, Ue.miscellaneousDataType.referenceId = Ue.userId, Ue.miscellaneousDataType.type = e, s.postData(!1, "sweb/miscellaneousDataRest/save", Ue.miscellaneousDataType).then(function(r) {
                    r.success ? (void 0 == i && null == i || Y(i, e), le(), r = {
                        success: !0
                    }) : (t.Error(r.message), Ue.miscellaneousDataType.dataLoading = !1)
                }))
            }

            function ge() {
                $("#contact-message-blk").is(":visible") && ($("#contact-message-blk").toggle(), Ue.messageTog = !Ue.messageTog), $("#contact-address-blk").is(":visible") && ($("#contact-address-blk").toggle(), Ue.showContact = !Ue.showContact), $("#info-blk").is(":visible") && ($("#info-blk").toggle(), Ue.infoTog = !Ue.infoTog), Ue.testimonialTog = !Ue.testimonialTog, Ue.show = Ue.showContact || Ue.testimonialTog || Ue.messageTog || Ue.infoTog, $("#contact-recommend-blk").toggle()
            }

            function me() {
                $("#contact-recommend-blk").is(":visible") && ($("#contact-recommend-blk").toggle(), Ue.testimonialTog = !Ue.testimonialTog), $("#contact-address-blk").is(":visible") && ($("#contact-address-blk").toggle(), Ue.showContact = !Ue.showContact), $("#info-blk").is(":visible") && (Ue.infoTog = !Ue.infoTog, $("#info-blk").toggle()), Ue.messageTog = !Ue.messageTog, Ue.show = Ue.showContact || Ue.testimonialTog || Ue.messageTog || Ue.infoTog, $("#contact-message-blk").toggle()
            }

            function he(e, t, r, o) {
                Ue.galleryPictureId = e, Ue.fullImageUrl = getPictureUrlWithExtension(e, t, r, "thumnail_600_600"), Ue.pictureDescription = Ue.galleryPictureIds[o].description, Ue.index = o, $("#gallery").modal("toggle")
            }

            function ve(e, t, r) {
                Ue.fullImageUrlForFacility = getPictureUrlWithExtension(e, t, r, "thumnail_600_600"), $("#consultroom").modal("toggle")
            }

            function ye() {
                $("#contact-recommend-blk").is(":visible") && ($("#contact-recommend-blk").toggle(), Ue.testimonialTog = !Ue.testimonialTog), $("#contact-message-blk").is(":visible") && ($("#contact-message-blk").toggle(), Ue.messageTog = !Ue.messageTog), $("#info-blk").is(":visible") && ($("#info-blk").toggle(), Ue.infoTog = !Ue.infoTog), Ue.showContact = !Ue.showContact, Ue.show = Ue.showContact || Ue.testimonialTog || Ue.messageTog || Ue.infoTog, $("#contact-address-blk").toggle()
            }

            function be() {
                $("#contact-recommend-blk").is(":visible") && ($("#contact-recommend-blk").toggle(), Ue.testimonialTog = !Ue.testimonialTog), $("#contact-message-blk").is(":visible") && ($("#contact-message-blk").toggle(), Ue.messageTog = !Ue.messageTog), $("#contact-address-blk").is(":visible") && ($("#contact-address-blk").toggle(), Ue.showContact = !Ue.showContact), Ue.infoTog = !Ue.infoTog, Ue.show = Ue.showContact || Ue.testimonialTog || Ue.messageTog || Ue.infoTog, $("#info-blk").toggle()
            }

            function we() {
                $("#contact-info-section .row").hide(500), window.location.href = "activity"
            }

            function Se() {
                Ue.descEdit = !Ue.descEdit
            }

            function Pe(t) {
                e.path("/" + t), $(".modal-backdrop").hide(), $("body").css("overflow", "auto")
            }
            r.alerts = {};
            var Ie = new Date;
            Ie.setDate(Ie.getDate() + 1), r.myInterval = 5e3, r.schoolAutoSuggestBusy = !1, r.safari = !1;
            var Ue = this;
            Ue.extraServices = {}, Ue.profile = {}, Ue.descEdit = !1, r.uploadingTeam = !1, r.uploadingSpecialization = !1, r.uploadingAward = !1, r.uploadGallery = !1, r.showRemoveSign = !1, r.uploadingEavImage = !1, r.uploadingExtraServicePicture = !1, Ue.showContact = !1, Ue.testimonialTog = !1, Ue.messageTog = !1, Ue.infoTog = !1, Ue.specializations = {}, Ue.filteredJobApplicationVos = {}, Ue.jobsearchmodel = {}, Ue.team = {}, Ue.companySpecializationNew = {}, Ue.companySpecializationNewMembers = {}, Ue.getAllAwards = _, Ue.extraService = {}, Ue.commentLikedByToggle = Pe, Ue.team.dataLoading = !1, Ue.companySpecializationNew.dataLoading = !1, r.profileInfo = {}, r.alert = !1, Ue.awards = {}, Ue.profileExp = {}, Ue.qualification = {}, Ue.personaMasters = {}, Ue.singlePersonaMaster = {}, Ue.miscellaneousData = {}, Ue.miscellaneousDataType = {}, Ue.facility = {}, Ue.user = {}, Ue.postFriend = {}, Ue.teamMembers = {}, Ue.certification = {}, Ue.uploadCoverPhoto = z, Ue.prefferedLocationsArray = [];
            Ue.galleryPictureIds = {}, Ue.getAllExtraServices = x, Ue.multipartFilesYouAreUploading = [], Ue.getGalleryPictures = j, Ue.uploadGalleryWithDesc = G, Ue.galleryPhotoDelete = E, Ue.specializationMap = {}, Ue.specializationValue = {}, Ue.companies = {}, Ue.updateGalleryPicture = U, Ue.updateExtraService = Q, Ue.getProfileByUserId = L, Ue.acceptRequest = D, Ue.sendRequest = k, Ue.rejectRequest = T, Ue.update = N, Ue.deleteAwards = ie, Ue.getUserDetailsByUserId = M, Ue.updateAwards = J, Ue.updateExp = ae, Ue.updateQualification = ce, Ue.updateMiscellaneousData = fe, Ue.uploadImageByTypeWithDesc = V, Ue.getPictureByType = pe, Ue.follow = C, Ue.saveMessage = R, Ue.updateEavAttributeSet = O, Ue.updateCertification = ne, Ue.updateTeam = re, Ue.getTeam = H, Ue.removeTeamMember = X, Ue.removeExtraSpecialization = ee, Ue.updateCompanySpecializationNew = oe, Ue.removeCompanySpecialization = te, Ue.getCompanySpecializationNew = K, Ue.updateEavImageWithType = q, Ue.getEavPictureByType = de, Ue.messageToggle = me, Ue.testimonialToggle = ge, Ue.activityToggle = we, Ue.contactToggle = ye, Ue.setProfileDataAfterGettingByUserName = W, Ue.descriptionEdit = Se, Ue.removeExtraSpecializationButton = Z, Ue.specializationRemoveButton = S, Ue.teamRemoveButton = P, Ue.peapleYouMayKnow = b, Ue.mobilesave = w, Ue.flashsetinterval = I, Ue.infoToggle = be, Ue.getFullPicture = he, Ue.getFullFacilityImageUrl = ve, Ue.updateParentCompany = y, Ue.parentUser = {};
            var Ee = [],
                Re = [],
                Ae = [],
                Ce = [];
            r.isPublicProfile = !0, r.isMe = !1, r.isMyConnection = !1, r.isPublicWithLogin = !1, r.isPublicWithoutLogin = !1, r.isFriendRequest = !1, r.isMeRequestedHim = !1, r.selectedCountry = [], r.selectedState = [], r.selectedCity = [], r.showHome = !1, r.showCoursesOffered = !1, r.showActivities = !1, r.showProducts = !1, r.showServices = !1, r.showCareer = !1, r.showTeam = !1, r.showFacilities = !1, r.showSpecialities = !1, r.showEducation = !1, r.showExperience = !1, r.showAchievements = !1, r.showConnections = !1, r.showGallery = !1, r.showBranches = !1, p.current.isUserName ? void 0 == o.globals.currentUser ? (r.isPublicWithoutLogin = !0, o.shouldHeaderBeIncluded = !1, Ue.userName = i.userId) : o.globals.currentUser.username == i.userId ? (r.isMe = !0, Ue.userName = o.globals.currentUser.username) : (r.isPublicWithLogin = !0, Ue.userName = i.userId) : p.current.isUserId ? void 0 == o.globals.currentUser ? (o.shouldHeaderBeIncluded = !1, r.isPublicWithoutLogin = !0) : (r.isPublicWithLogin = !0, Ue.userId = Ue.userId) : o.globals.currentUser.username == Ue.userId && (r.isMe = !0, Ue.userName = o.globals.currentUser.username),
                function() {
                    $(document).ready(function() {
                        $('[data-toggle="tooltip"]').tooltip()
                    }), s.getData(void 0 != o.globals.currentUser, "sweb/profileRest/getProfileByUserName/" + Ue.userName, {}).then(function(t) {
                        Ue.profile = t, Ue.profile ? Ue.profile.status ? (Ue.personaId = Ue.profile.personaMasterId, Ue.userPosts = Ue.profile.noOfPosts, Ue.parentUser.parent = Ue.profile.parent, Ue.setProfileDataAfterGettingByUserName(), "company" == Ue.profile.template ? (_(), H(), j(), K(), x(), pe(), ue(), le(), h(), v()) : (b(), B(), F(), se(), _(), r.isMe && s.getData(!1, "sweb/personaMasterRest/getByParentId/" + Ue.profile.personaMasterId, {}).then(function(e) {
                            Ue.personaMaster = e
                        })), A()) : e.path("/deactivated") : e.path("/pageNotFound")
                    })
                }(), r.getpos = function(e) {
                    Ue.latitude = e.latLng.lat(), Ue.longitude = e.latLng.lng()
                }, r.onAdressChange = function(e) {
                    n.get("https://maps.google.com/maps/api/geocode/json?address=" + e.name + "&sensor=false").then(function(e) {
                        r.profileInfo.latitude = e.data.results[0].geometry.location.lat, r.profileInfo.longitude = e.data.results[0].geometry.location.lng
                    })
                }, $(document).on("click", ".con-item-remove", function(e) {
                    bootbox.confirm("Are you sure you want to remove this photo?", function(e) {
                        1 == e && r.removePicture(Ue.profile.id)
                    })
                }), r.updateByColumn = function(e, t, o, i) {
                    if ("date" == i) {
                        if (!r.isDateValid(r.commonProfileController.profile.dobMonth, r.commonProfileController.profile.dobYear, r.commonProfileController.profile.dobDate)) return r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: t + " " + invalid_date_error
                        }], void I(r.alerts.profileInfo);
                        o = r.dateParser(r.commonProfileController.profile.dobMonth, r.commonProfileController.profile.dobYear, r.commonProfileController.profile.dobDate)
                    }
                    var n = Ue.profile.id;
                    if ("LANGUAGES" == t)
                        for (var a = "!@#$%^&*()+=-[]\\';./{}|\":<>?", c = 0; c < o.length; c++)
                            if (a.indexOf(o.charAt(c)) != -1) return r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                                type: "danger",
                                createdAt: Date.now(),
                                msg: special_character_not_allowed
                            }], I(r.alerts.profileInfo), !1;
                    s.postData(!1, "sweb/profileRest/updateByColumn/" + e + "/" + t + "/" + n + "/" + o + "/" + i).then(function(e) {
                        1 == e ? "DOB" == t ? (r.alerts.profileInfo = [], r.alerts.profileInfo.push({
                            type: "success",
                            createdAt: Date.now(),
                            msg: t + " " + common_save_msg
                        }), I(r.alerts.profileInfo), $("#profile-edit-dob").collapse("toggle")) : "GENDER" == t ? (r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: capitalizeFirstLetter(t) + " " + common_save_msg
                        }], I(r.alerts.profileInfo), $("#profile-edit-gender").collapse("toggle")) : "LANGUAGES" == t ? (r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: capitalizeFirstLetter(t) + " " + common_save_msg
                        }], I(r.alerts.profileInfo), $("#profile-edit-language").collapse("toggle")) : "HOBBIES" == t ? (r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: capitalizeFirstLetter(t) + " " + common_save_msg
                        }], I(r.alerts.profileInfo), $("#profile-edit-hobby").collapse("toggle")) : "MOBILE" == t ? (r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: capitalizeFirstLetter(t) + " " + common_save_msg
                        }], I(r.alerts.profileInfo), $("#profile-edit-mob").is(":visible") && $("#profile-edit-mob").collapse("toggle")) : "ADDRESS" == t ? (r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: capitalizeFirstLetter(t) + " " + common_save_msg
                        }], I(r.alerts.profileInfo), $("#profile-edit-address").collapse("toggle")) : "EMAIL" == t && (r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "success",
                            createdAt: Date.now(),
                            msg: capitalizeFirstLetter(t) + " " + common_save_msg
                        }], I(r.alerts.profileInfo), $("#profile-edit-mail").collapse("toggle")) : (r.alerts.profileInfo = [], r.alerts.profileInfo = [{
                            type: "danger",
                            createdAt: Date.now(),
                            msg: common_error_msg
                        }], I(r.alerts.profileInfo))
                    })
                }, r.removePicture = function(e) {
                    s.postData(!1, "sweb/profileRest/removePicture/" + e).then(function(e) {
                        return !!e.success && ("company" == Ue.profile.template ? ($(".profile-img").attr("src", "img/CompanyDefaultPic.png"), o.globals.currentUser.profilePicture = "img/CompanyDefaultPic.png", o.globals.currentUser.profilePicture_70_70 = "img/CompanyDefaultPic.png", o.globals.currentUser.profilePicture_300_300 = "img/CompanyDefaultPic.png", document.cookie = "globals=" + JSON.stringify(o.globals) + "; expires=" + Ie + "; domain=localhost; path=/") : ($(".profile-img").attr("src", "img/CompanyDefaultPic.png"), o.globals.currentUser.profilePicture = "img/defaultprofile.png", o.globals.currentUser.profilePicture_70_70 = "img/CompanyDefaultPic.png", o.globals.currentUser.profilePicture_300_300 = "img/CompanyDefaultPic.png", document.cookie = "globals=" + JSON.stringify(o.globals) + "; expires=" + Ie + "; domain=localhost; path=/"), void(Ue.showRemoveButton = !1))
                    })
                }, r.editProfileinfo = function() {
                    if (null != r.profileInfo && (r.profileInfo = angular.copy(Ue.profile), null != r.profileInfo.dob)) {
                        var e = r.profileInfo.dob.split("-");
                        r.profileInfo.foundedOnDate = e[2], r.profileInfo.foundedOndobYear = e[0], "01" == e[1] ? r.profileInfo.foundedOndobMonth = "January" : "02" == e[1] ? r.profileInfo.foundedOndobMonth = "February" : "03" == e[1] ? r.profileInfo.foundedOndobMonth = "March" : "04" == e[1] ? r.profileInfo.foundedOndobMonth = "April" : "05" == e[1] ? r.profileInfo.foundedOndobMonth = "May" : "06" == e[1] ? r.profileInfo.foundedOndobMonth = "June" : "07" == e[1] ? r.profileInfo.foundedOndobMonth = "July" : "08" == e[1] ? r.profileInfo.foundedOndobMonth = "August" : "09" == e[1] ? r.profileInfo.foundedOndobMonth = "September" : "10" == e[1] ? r.profileInfo.foundedOndobMonth = "October" : "11" == e[1] ? r.profileInfo.foundedOndobMonth = "November" : "12" == e[1] && (r.profileInfo.foundedOndobMonth = "December")
                    }
                }, r.subGroupVisibilityChanged = function(e, t) {
                    "Yes" == t ? e.hidden = !1 : e.hidden = !0
                }, r.newExp = function() {
                    Ue.profileExp = {}, r.companyFromYear = null, r.companyToYear = null, r.companyFromMonth = null, r.companyToMonth = null, t.clearFlashMessage()
                }, r.newCertification = function() {
                    Ue.certification = {}, t.clearFlashMessage()
                }, r.newEdu = function() {
                    Ue.qualification = {}, r.startYear = null, r.toYear = null, t.clearFlashMessage()
                }, r.newAward = function() {
                    Ue.award = {}, r.awardMonth = null, r.awardYear = null, r.awardDay = null, Ue.awardPictureId = null, $("#awardPic").attr("src", ""), r.showRemoveSign = !1, t.clearFlashMessage()
                }, r.$watch("commonProfileController.profile.title", function(e, t) {
                    if (void 0 !== t && e !== t) {
                        for (var o = "!@#$%^&*()+=-[]\\';./{}|\":<>?", i = Ue.profile.title, n = 0; n < i.length; n++)
                            if (o.indexOf(i.charAt(n)) != -1) return $("#experiencePopupnumber").modal("toggle"), Ue.experienceMsg = "Special Character except comma are not allowed ", Ue.profile.title = t, !1;
                        r.updateByColumn("PROFILE", "TITLE", Ue.profile.title, "String")
                    }
                }), r.$watch("commonProfileController.profile.city", function(e, t) {
                    if (void 0 !== t && e !== t) {
                        for (var o = "!@#$%^&*()+=-[]\\';./{}|\":<>?", i = Ue.profile.city, n = 0; n < i.length; n++)
                            if (o.indexOf(i.charAt(n)) != -1) return $("#experiencePopupnumber").modal("toggle"), Ue.experienceMsg = "Special Character except comma are not allowed ", Ue.profile.city = t, !1;
                        r.updateByColumn("PROFILE", "CITY", Ue.profile.city, "String")
                    }
                }), r.$watch("commonProfileController.profile.totalExp", function(e, t) {
                    void 0 !== t && e !== t && (e < 99 && !isNaN(e) ? r.updateByColumn("PROFILE", "TOTAL_EXP", Ue.profile.totalExp, "number") : (Ue.profile.totalExp = t, e > 99 && ($("#experiencePopupnumber").modal("toggle"), Ue.experienceMsg = "Please Enter number below 100 only"), isNaN(e) && ($("#experiencePopupnumber").modal("toggle"), Ue.experienceMsg = "Please Enter number only")))
                }), r.specialitySelected = function(e, t, o, i) {
                    return Ue.profile.speciality = e.id, r.updateByColumn("PROFILE", "SPECIALITY", Ue.profile.speciality, "number"), e
                }, r.$watch("commonProfileController.profile.specialityName", function(e, t) {
                    if (void 0 !== t && e !== t) {
                        for (var o = "!@#$%^&*()+=-[]\\';./{}|\":<>?", i = Ue.profile.specialityName, n = 0; n < i.length; n++)
                            if (o.indexOf(i.charAt(n)) != -1) return $("#experiencePopupnumber").modal("toggle"), Ue.experienceMsg = "Special Character except comma are not allowed ", Ue.profile.specialityName = t, !1;
                        r.updateByColumn("PROFILE", "SPECIALITY_NAME", Ue.profile.specialityName, "String")
                    }
                }), r.toDate = function(e) {
                    return new Date(e)
                }, r.fileOnChange = function(e) {
                    if (r.uploadingAwardPicture = !0, r.uploadingAward = !0, e.files && e.files[0])
                        if (window.FileReader) {
                            var t = new FileReader;
                            t.onload = function(t) {
                                return function(t) {
                                    var o = new Image;
                                    o.onload = function() {
                                        var t = document.createElement("canvas"),
                                            i = t.getContext("2d");
                                        1 == Ue.profile.profileType ? t.width = 600 : t.width = 600, t.height = t.width * (o.height / o.width), i.drawImage(o, 0, 0, t.width, t.height);
                                        var n = t.toDataURL("image/png"),
                                            s = projectUrl + "sweb/pictureRest/base64FileUploadWithoutRef/award";
                                        a.uploadBase64FileToUrl(n, e.files[0].name, s, function(e) {
                                            return e != -1 ? (Ue.awardPictureId = e, r.uploadingAwardPicture = !1, r.uploadingAward = !1, r.showRemoveSign = !0, "uploadSuccesFully") : "uploadFail"
                                        })
                                    }, o.src = t.target.result, $("#awardPic").attr("src", t.target.result)
                                }
                            }(e.files[0]), t.readAsDataURL(e.files[0])
                        } else {
                            var o = e.files[0],
                                i = projectUrl + "sweb/pictureRest/myUploadWithoutRef/award";
                            r.uploadingAward = !0, a.uploadFileToUrl(o, i, function(e) {
                                e != -1 && (Ue.awardPictureId = e, r.uploadingAwardPicture = !1, r.uploadingAward = !1, $("#awardPic").attr("src", getPictureUrl(e, "award", o.name)))
                            })
                        }
                }, r.extraServiceOnChange = function(e, t) {
                    if (e.files && e.files[0])
                        if (window.FileReader) {
                            var o = new FileReader;
                            o.onload = function(o) {
                                return function(o) {
                                    var i = new Image;
                                    i.onload = function() {
                                        var t = document.createElement("canvas"),
                                            o = t.getContext("2d");
                                        t.width = 250, t.height = t.width * (i.height / i.width), o.drawImage(i, 0, 0, t.width, t.height);
                                        var n = t.toDataURL("image/png"),
                                            s = projectUrl + "sweb/pictureRest/base64FileUploadWithoutRef/extraservice";
                                        r.uploadingExtraServicePicture = !0, a.uploadBase64FileToUrl(n, e.files[0].name, s, function(e) {
                                            return e != -1 ? (Ue.uploadingExtraServicePictureId = e, r.uploadingExtraServicePicture = !1, "uploadSuccesFully") : "uploadFail"
                                        })
                                    }, i.src = o.target.result, "COURSES_OFFERED" == t ? $("#coursesOfferedPic").attr("src", o.target.result) : "INVENTORY" == t ? $("#inventoryPic").attr("src", o.target.result) : "SERVICE" == t ? $("#servicePic").attr("src", o.target.result) : "ACTIVITY_OR_PROJECT" == t && $("#activityPic").attr("src", o.target.result)
                                }
                            }(e.files[0]), o.readAsDataURL(e.files[0])
                        } else {
                            var i = e.files[0],
                                n = projectUrl + "sweb/pictureRest/myUploadWithoutRef/extraservice";
                            r.uploadingExtraServicePicture = !0, a.uploadFileToUrl(i, n, function(e) {
                                e != -1 && (Ue.uploadingExtraServicePictureId = e, "COURSES_OFFERED" == t ? $("#coursesOfferedPic").attr("src", getPictureUrlWithExtension(e, "extraservice", i.name, "thumnail_300_300")) : "INVENTORY" == t ? $("#inventoryPic").attr("src", getPictureUrlWithExtension(e, "extraservice", i.name, "thumnail_300_300")) : "SERVICE" == t ? $("#servicePic").attr("src", getPictureUrlWithExtension(e, "extraservice", i.name, "thumnail_300_300")) : "ACTIVITY_OR_PROJECT" == t && $("#activityPic").attr("src", getPictureUrlWithExtension(e, "extraservice", i.name, "thumnail_300_300")), r.uploadingExtraServicePicture = !1)
                            })
                        }
                }, r.teamOnChange = function(e) {
                    if (e.files && e.files[0])
                        if (window.FileReader) {
                            var t = new FileReader;
                            t.onload = function(t) {
                                return function(t) {
                                    var o = new Image;
                                    o.onload = function() {
                                        var t = document.createElement("canvas"),
                                            i = t.getContext("2d");
                                        t.width = 600, t.height = t.width * (o.height / o.width), i.drawImage(o, 0, 0, t.width, t.height), r.uploadingTeam = !0;
                                        var n = t.toDataURL("image/png"),
                                            s = projectUrl + "sweb/pictureRest/base64FileUploadWithoutRef/team";
                                        a.uploadBase64FileToUrl(n, e.files[0].name, s, function(e) {
                                            return e != -1 ? (Ue.teamPictureId = e, r.uploadingTeam = !1, "uploadSuccesFully") : "uploadFail"
                                        })
                                    }, o.src = t.target.result, $("#blahTeam").attr("src", t.target.result)
                                }
                            }(e.files[0]), t.readAsDataURL(e.files[0])
                        } else {
                            var o = e.files[0],
                                i = projectUrl + "sweb/pictureRest/myUploadWithoutRef/team";
                            r.uploadingTeam = !0, a.uploadFileToUrl(o, i, function(e) {
                                e != -1 && (Ue.teamPictureId = e, $("#blahTeam").attr("src", getPictureUrlWithExtension(e, "team", o.name, "thumnail_300_300")), r.uploadingTeam = !1)
                            })
                        }
                }, r.companySpecializationOnChange = function(e) {
                    if (e.files && e.files[0]) {
                        var t = new FileReader;
                        t.onload = function(t) {
                            return function(t) {
                                var o = new Image;
                                o.onload = function() {
                                    var t = document.createElement("canvas"),
                                        i = t.getContext("2d");
                                    t.width = 600, t.height = t.width * (o.height / o.width), i.drawImage(o, 0, 0, t.width, t.height);
                                    var n = t.toDataURL("image/png"),
                                        s = projectUrl + "sweb/pictureRest/base64FileUploadWithoutRef/companyspecialization";
                                    r.uploadingSpecialization = !0, a.uploadBase64FileToUrl(n, e.files[0].name, s, function(e) {
                                        return e != -1 ? (Ue.companySpecializationPicId = e, r.uploadingSpecialization = !1, "uploadSuccesFully") : "uploadFail"
                                    })
                                }, o.src = t.target.result, $("#blahCompanySpecialization").attr("src", t.target.result)
                            }
                        }(e.files[0]), t.readAsDataURL(e.files[0])
                    }
                }, r.EavImageOnChange = function(e) {
                    if (e.files && e.files[0])
                        if (window.FileReader) {
                            var t = new FileReader;
                            t.onload = function(t) {
                                return function(t) {
                                    document.getElementById("" + e.attributes.name.value).src = t.target.result
                                }
                            }(e.files[0]), t.readAsDataURL(e.files[0])
                        } else {
                            var r = projectUrl + "sweb/pictureRest/myUploadWithoutRef/preview",
                                o = e.files[0];
                            a.uploadFileToUrl(o, r, function(t) {
                                t != -1 && (document.getElementById("" + e.attributes.name.value).src = getPictureUrl(t, "preview", o.name))
                            })
                        }
                }, r.galleryFileOnChange = function(e) {
                    if (e.files && e.files[0])
                        if (window.FileReader) {
                            var t = new FileReader;
                            t.onload = function(e) {
                                return function(e) {
                                    $("#galleryPic").attr("src", e.target.result)
                                }
                            }(e.files[0]), t.readAsDataURL(e.files[0])
                        } else {
                            var r = projectUrl + "sweb/pictureRest/myUploadWithoutRef/preview",
                                o = e.files[0];
                            a.uploadFileToUrl(o, r, function(e) {
                                var t = "";
                                e != -1 && (t = getPictureUrl(e, "preview", o.name), $("#galleryPic").attr("src", t))
                            })
                        }
                }, r.uploadFile = function(e) {
                    if (void 0 != e || null != e) {
                        var t = new FileReader;
                        t.onload = function(t) {
                            return function(t) {
                                var i = new Image;
                                i.onload = function() {
                                    var t = document.createElement("canvas"),
                                        n = t.getContext("2d");
                                    t.width = 600, t.height = t.width * (i.height / i.width), n.drawImage(i, 0, 0, t.width, t.height);
                                    var s = t.toDataURL("image/png"),
                                        c = projectUrl + "sweb/pictureRest/base64FileUpload/profile/" + Ue.profile.id;
                                    a.uploadBase64FileToUrl(s, e.name, c, function(t) {
                                        var i = "",
                                            n = "",
                                            s = "";
                                        t != -1 && (void 0 == e.name ? (i = getPictureUrl(t, "profile", "blob"), n = getPictureUrlWithExtension(t, "profile", "blob", "thumnail_70_70"), s = getPictureUrlWithExtension(t, "profile", "blob", "thumnail_300_300")) : (i = getPictureUrl(t, "profile", e.name), n = getPictureUrlWithExtension(t, "profile", e.name, "thumnail_70_70"), s = getPictureUrlWithExtension(t, "profile", e.name, "thumnail_300_300")), i = getPictureUrl(t, "profile", e.name), n = getPictureUrlWithExtension(t, "profile", e.name, "thumnail_70_70"), s = getPictureUrlWithExtension(t, "profile", e.name, "thumnail_300_300"), o.globals.currentUser.profilePicture = i, o.globals.currentUser.profilePicture_70_70 = n, o.globals.currentUser.profilePicture_300_300 = s, document.cookie = "globals=" + JSON.stringify(o.globals) + "; expires=" + Ie + "; domain=localhost; path=/", Ue.profile.currentProfilePictureId = t, r.alert = !1, location.reload())
                                    })
                                }, i.src = t.target.result
                            }
                        }(e), t.readAsDataURL(e)
                    }
                }, r.resizeMap1 = function() {
                    window.setTimeout(function() {
                        google.maps.event.trigger(Ue.map1, "resize")
                    }, 500)
                }, r.resizeMap2 = function() {
                    window.setTimeout(function() {
                        google.maps.event.trigger(Ue.map2, "resize")
                    }, 500)
                }, r.resizeMap3 = function() {
                    window.setTimeout(function() {
                        google.maps.event.trigger(Ue.map3, "resize");
                        var e = new google.maps.LatLng(Ue.userChain[0].latitude, Ue.userChain[0].longitude);
                        Ue.map3.setCenter(e), Ue.map3.setZoom(3)
                    }, 500)
                }, r.showCompany = function(e, t) {
                    Ue.selectedCompany = t, Ue.map3.showInfoWindow("bar", this), window.setTimeout(function() {
                        r.applyTestCss()
                    }, 500)
                }, r.applyTestCss = function() {
                    var e = $(".gm-style-iw"),
                        t = e.prev();
                    e.children(":nth-child(1)").css({
                        display: "block",
                        overflow: "hidden"
                    }), t.children(":nth-child(2)").css({
                        display: "none"
                    }), t.children(":nth-child(4)").css({
                        display: "none"
                    }), t.children(":nth-child(3)").find("div").children().css({
                        "box-shadow": "rgba(72, 181, 233, 0.6) 0px 1px 6px",
                        "z-index": "1"
                    });
                    var r = e.next();
                    r.css({
                        opacity: "1",
                        right: "38px",
                        top: "3px",
                        border: "7px solid #48b5e9",
                        "border-radius": "13px",
                        "box-shadow": "0 0 5px #3990B9"
                    }), $(".iw-content").height() < 140 && $(".iw-bottom-gradient").css({
                        display: "none"
                    }), r.mouseout(function() {
                        $(this).css({
                            opacity: "1"
                        })
                    })
                }, r.profileEdit = function(e, o, i) {
                    s.getData(!1, "sweb/profileExpRest/get/" + e, Ue.profileExp).then(function(e) {
                        Ue.profileExp = e;
                        var o = r.splitOfDates(Ue.profileExp.fromDate);
                        r.commonProfileController.profileExp.companyFromMonth = o[1], r.commonProfileController.profileExp.companyFromYear = o[2], null == Ue.profileExp.toDate && (Ue.profileExp.toInf = !0);
                        var o = r.splitOfDates(Ue.profileExp.toDate);
                        r.commonProfileController.profileExp.companyToMont = o[1], r.commonProfileController.profileExp.companyToYear = o[2], t.clearFlashMessage()
                    })
                }, r.certificationEdit = function(e) {
                    s.getData(!1, "sweb/certificationRest/get/" + e, {}).then(function(e) {
                        Ue.certification = e;
                        var o = r.splitOfDates(Ue.certification.date);
                        r.commonProfileController.certification.certificationFromYear = o[2], r.commonProfileController.certification.certificationFromMonth = o[1];
                        var i = r.splitOfDates(Ue.certification.endDate);
                        r.commonProfileController.certification.certificationToYear = i[2], r.commonProfileController.certification.certificationToMonth = i[1], t.clearFlashMessage()
                    })
                }, r.dateParser = function(e, t, r) {
                    if (void 0 == t) return null;
                    if (void 0 != e && "" != e || "" != r && void 0 != r)
                        if (void 0 == r) var o = e + " 01, " + t;
                        else var o = e + " " + r + " ," + t;
                    else var o = "January 01," + t;
                    var i = Date.parse(o + " 00:00:00 GMT");
                    return i
                }, r.checkErr = function(e, t) {
                    r.errMessage = "";
                    new Date;
                    return !(new Date(e) > new Date(t)) || (r.errMessage = common_end_date_error, !1)
                }, r.isDateValid = function(e, t, r) {
                    void 0 != r && "" != r || (r = "01"), void 0 != e && "" != e || (e = "January");
                    var o = e + " " + r + " ," + t,
                        i = new Date(Date.parse(o)),
                        n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    return i.getDate() == r && i.getFullYear() == t && n[i.getMonth()] == e
                }, r.splitOfDates = function(e) {
                    var t = new Array;
                    if (null != e) {
                        var r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            o = new Date(e);
                        t[0] = o.getDate(), t[1] = r[o.getMonth()], t[2] = o.getFullYear(), t[3] = o.getMonth() + 1
                    }
                    return t
                }, r.differenceOfDates = function(e, t) {
                    var o = r.splitOfDates(e);
                    if (null != t) var i = r.splitOfDates(t);
                    else {
                        var n = new Date,
                            s = n.getDate(),
                            a = n.getMonth() + 1,
                            c = n.getFullYear();
                        s < 10 && (s = "0" + s), a < 10 && (a = "0" + a);
                        var i = new Array;
                        i[2] = c, i[3] = a
                    }
                    var u = parseInt(i[2]) - parseInt(o[2]),
                        l = parseInt(i[3]) - parseInt(o[3]);
                    l < 0 ? (u = parseInt(parseInt(u) - 1), l = 12 + parseInt(l)) : (u = parseInt(u), l = parseInt(l));
                    var p = new Array;
                    return p[0] = l, p[1] = u, p
                }, r.qualificationEdit = function(e) {
                    s.getData(!1, "sweb/qualificationRest/get/" + e, {}).then(function(e) {
                        Ue.qualification = e;
                        var o = r.splitOfDates(Ue.qualification.startDate);
                        r.commonProfileController.qualification.startMonth = o[1], r.commonProfileController.qualification.startYear = o[2], null == Ue.qualification.endDate && (Ue.qualification.toInfoShow = !0);
                        var i = r.splitOfDates(Ue.qualification.endDate);
                        r.commonProfileController.qualification.toMonth = i[1], r.commonProfileController.qualification.toYear = i[2], Ue.qualification.school = Ue.qualification.schoolName, Ue.qualification.field = Ue.qualification.fieldName, Ue.qualification.university = Ue.qualification.universityName, t.clearFlashMessage()
                    })
                }, r.awardsEdit = function(e) {
                    jQuery.ajax({
                        url: projectUrl + "sweb/awardsRest/getAwardsWithPictureId/" + e,
                        async: !1,
                        cache: !1,
                        dataType: "json",
                        success: function(e) {
                            Ue.award = e, Ue.award.type = Ue.award.awardType;
                            var o = r.splitOfDates(Ue.award.issuedDate);
                            r.commonProfileController.award.awardDay = o[0], r.commonProfileController.award.awardMonth = o[1], r.commonProfileController.award.awardYear = o[2], Ue.award.currentAwardPictureId ? ($("#awardPic").attr("src", getPictureUrlWithExtension(Ue.award.currentAwardPictureId, "award", Ue.award.pictureName, "thumnail_300_300")), r.showRemoveSign = !0) : ($("#awardPic").attr("src", ""), r.showRemoveSign = !1), t.clearFlashMessage()
                        }
                    })
                }, r.previewFile = function() {
                    var e = document.querySelector("input[type=file]").files[0],
                        t = e.type,
                        o = ["image/gif", "image/jpeg", "image/png"];
                    if (!($.inArray(t, o) > -1)) return r.alerts.pictureProfileInfo = [], r.alerts.pictureProfileInfo = [{
                        type: "danger",
                        createdAt: Date.now(),
                        msg: photo_type_error
                    }], void I(r.alerts.pictureProfileInfo);
                    $(".current-pic").hide();
                    var i = document.createElement("canvas");
                    if (!window.FileReader || void 0 === i.toBlob && void 0 === i.msToBlob) {
                        r.safari = !0;
                        var e = document.querySelector("input[type=file]").files[0],
                            n = projectUrl + "sweb/pictureRest/myUploadWithoutRef/preview",
                            s = e;
                        a.uploadFileToUrl(s, n, function(t) {
                            var r = "";
                            t != -1 && void 0 != e.name && (r = getPictureUrl(t, "preview", e.name), Ue.profilePictureId = t, Ue.pictureName = e.name, $("img").show(), recorte.cropper("replace", r))
                        })
                    } else {
                        var e = document.querySelector("input[type=file]").files[0];
                        r.safari = !1;
                        var c = new FileReader;
                        c.onloadend = function() {
                            $("img").show(), recorte.cropper("replace", c.result)
                        }, e ? c.readAsDataURL(e) : recorte.cropper("replace", "")
                    }
                }, r.imageCropperInitialize = function() {
                    if (window.FileReader && !r.safari) {
                        var e = recorte.cropper("getCroppedCanvas").toDataURL();
                        recorte.cropper("getCroppedCanvas").toBlob(function(e) {
                            recorte.cropper("getData");
                            r.uploadFile(e)
                        })
                    } else {
                        var t = recorte.cropper("getData");
                        r.uploadProfilePicforSafariBroWser(t)
                    }
                    $(".current-pic").attr("src", e), $(".profile-img").attr("src", e), $(".close").click(), $("#imagecrop").modal("hide")
                }, r.uploadProfilePicforSafariBroWser = function(e) {
                    r.picture = {}, r.picture.pictureId = Ue.profilePictureId, r.picture.pictureName = Ue.pictureName, r.picture.x = e.x, r.picture.y = e.y, r.picture.width = e.width, r.picture.height = e.height;
                    var t = projectUrl + "sweb/pictureRest/myProfilePictureUploadWithFileId/profile/" + Ue.profile.id;
                    a.uploadProfilePic(t, r.picture, function(e) {
                        var t = "",
                            i = "",
                            n = "";
                        e != -1 && (t = getPictureUrl(e, "profile", Ue.pictureName), i = getPictureUrlWithExtension(e, "profile", Ue.pictureName, "thumnail_70_70"), n = getPictureUrlWithExtension(e, "profile", Ue.pictureName, "thumnail_300_300"), o.globals.currentUser.profilePicture = t, o.globals.currentUser.profilePicture_70_70 = i, o.globals.currentUser.profilePicture_300_300 = n, document.cookie = "globals=" + JSON.stringify(o.globals) + "; expires=" + Ie + "; domain=localhost; path=/", Ue.profile.currentProfilePictureId = e, r.alert = !1, location.reload())
                    })
                }, r.getAllCompanies = function(e) {
                    return r.queryCompany = e, Ee = jQuery.ajax({
                        url: projectUrl + "sweb/companyAutosugestRest/getAllCompanies/0/20?q=" + r.queryCompany,
                        async: !1,
                        cache: !1,
                        dataType: "json",
                        success: function(e) {
                            return e
                        }
                    })
                }, r.companySelected = function(e, t, r, o) {
                    return Ue.profileExp.companyId = e.id, e
                }, r.getAllSchools = function(e) {
                    return Re = jQuery.ajax({
                        url: projectUrl + "sweb/schoolRest/getAllSchools/0/20?q=" + e,
                        async: !1,
                        cache: !1,
                        dataType: "json",
                        success: function(e) {
                            return e
                        }
                    })
                }, r.schoolSelected = function(e, t, r, o) {
                    return Ue.qualification.schoolId = e.id, e
                }, r.getAllUniversities = function(e) {
                    return r.queryUniversity = e, Ae = jQuery.ajax({
                        url: projectUrl + "sweb/universityRest/getAllUniversity/0/20?q=" + e,
                        async: !1,
                        cache: !1,
                        dataType: "json",
                        success: function(e) {
                            return e
                        }
                    })
                }, r.univSelected = function(e, t, r, o) {
                    return Ue.qualification.universityId = e.id, e
                }, r.getAllFields = function(e) {
                    return r.queryField = e, Ce = jQuery.ajax({
                        url: projectUrl + "sweb/fieldOfStudyRest/getAllFields/0/20?q=" + e,
                        async: !1,
                        cache: !1,
                        dataType: "json",
                        success: function(e) {
                            return e
                        }
                    })
                }, r.fieldSelected = function(e, t, r, o) {
                    return Ue.qualification.fieldId = e.id, e
                }, angular.element(document).ready(function() {}), r.getAllFollowers = function() {
                    s.getData(!1, "sweb/followRest/getFollowersVo/" + Ue.userId, {}).then(function(e) {
                        Ue.following = e, Ue.following.forEach(function(t) {
                            Ue.followers = e, Ue.followers.forEach(function(e) {
                                null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.currentProfilePictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                            })
                        }), $("#con-followerbox").modal("toggle")
                    })
                }, r.getAllFollowing = function() {
                    s.getData(!1, "sweb/followRest/getFollowVo/" + Ue.userId, {}).then(function(e) {
                        Ue.following = e, Ue.following.forEach(function(e) {
                            null != e.currentProfilePictureId ? e.picture = getPictureUrlWithExtension(e.currentProfilePictureId, "profile", e.currentProfilePictureName, "thumnail_300_300") : e.picture = "img/defaultprofile.png"
                        }), $("#con-followingbox").modal("toggle")
                    })
                }, r.removeAwardPicture = function() {
                    Ue.awardPictureId = null, $("#awardPic").attr("src", ""), r.showRemoveSign = !1
                }, r.deleteAward = function(e, t) {
                    var o = "Are you Sure you want to delete ?";
                    bootbox.confirm(o, function(o) {
                        1 == o && s.deleteData(!0, "sweb/awardsRest/secured/delete/" + e, {}).then(function(o) {
                            o && (0 == t ? r.achievments.forEach(function(t, o) {
                                t.id == e && r.achievments.splice(o, 1)
                            }) : 1 == t ? r.publication.forEach(function(t, o) {
                                t.id == e && r.publication.splice(o, 1)
                            }) : 3 == t ? r.others.forEach(function(t, o) {
                                t.id == e && r.others.splice(o, 1)
                            }) : 4 == t && r.professionalAffiliation.forEach(function(t, o) {
                                t.id == e && r.professionalAffiliation.splice(o, 1)
                            }))
                        })
                    })
                }, r.deleteExperience = function(e) {
                    var t = "Are you Sure you want to delete ?";
                    bootbox.confirm(t, function(t) {
                        1 == t && s.deleteData(!0, "sweb/profileExpRest/secured/delete/" + e, {}).then(function(t) {
                            t.success && Ue.profileExps.forEach(function(t, r) {
                                t.id == e && Ue.profileExps.splice(r, 1)
                            })
                        })
                    })
                }, r.deleteQualification = function(e) {
                    var t = "Are you Sure you want to delete ?";
                    bootbox.confirm(t, function(t) {
                        1 == t && s.deleteData(!0, "sweb/qualificationRest/secured/delete/" + e, {}).then(function(t) {
                            t.success && Ue.allQualifications.forEach(function(t, r) {
                                t.id == e && Ue.allQualifications.splice(r, 1)
                            })
                        })
                    })
                }, r.deleteCertification = function(e) {
                    var t = "Are you Sure you want to delete ?";
                    bootbox.confirm(t, function(t) {
                        1 == t && s.deleteData(!0, "sweb/certificationRest/secured/delete/" + e, {}).then(function(t) {
                            t.success && Ue.allCertificates.forEach(function(t, r) {
                                t.id == e && Ue.allCertificates.splice(r, 1)
                            })
                        })
                    })
                }
        }
        angular.module("app").controller("CommonProfileController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "$http", "CommonService", "fileUpload", "$cookieStore", "$interval", "$timeout", "$route", "NgMap", "Socialshare", "toastr", "ngMeta"]
    }(),
    function() {
        "use strict";

        function e(e, t, r, o, i, n, s) {
            var a = this;
            s.current.isBlog ? a.placeholder = "Search In Blogs" : a.placeholder = "Search Profiles", r.search = function() {
                s.current.isBlog ? e.url("/blog?q=" + (void 0 == a.q ? "" : a.q)) : e.url("/profileSearch?q=" + (void 0 == a.q ? "" : a.q))
            }, r.searchDoctor = function() {
                e.url("/profileSearch?type=0")
            }, r.searchCompany = function() {
                e.url("/profileSearch?type=1")
            }, r.searchGroup = function() {
                e.url("/groups-discover?q=")
            }
        }
        angular.module("app").controller("SearchController", e), e.$inject = ["$location", "FlashService", "$scope", "$rootScope", "$routeParams", "$cookieStore", "$route"]
    }();

