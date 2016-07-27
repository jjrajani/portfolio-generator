import angular from 'angular';
import 'angular-ui-router';

import { config } from './utilities/config';

import { LayoutController } from './controllers/layout.controller';
import { HomeController } from './controllers/home.controller';
import { RegisterController } from './controllers/register.controller'

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('RegisterController', RegisterController)
;

