import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { config } from './utilities/config';
import { serverConstant } from './utilities/server.constant';
import { run } from './utilities/run';

import { LayoutController } from './controllers/layout.controller';
import { HomeController } from './controllers/home.controller';
import { RegisterController } from './controllers/register.controller';
import { LoginController } from './controllers/login.controller';
import { CreateProfileController } from './controllers/createprofile.controller';
import { ProfileController } from './controllers/profile.controller';
import { ShareProfileController } from './controllers/shareprofile.controller.js';

import { UserService } from './services/user.service';
import { ProfileService } from './services/profile.service';
import { GithubService } from './services/github.service';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(config)
  .run(run)
  .constant('SERVER', serverConstant)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .controller('CreateProfileController', CreateProfileController)
  .controller('ProfileController', ProfileController)
  .controller('ShareProfileController', ShareProfileController)
  .service('UserService', UserService)
  .service('ProfileService', ProfileService)
  .service('GithubService', GithubService)
;
