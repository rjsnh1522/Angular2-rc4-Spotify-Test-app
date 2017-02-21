import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'about',
    templateUrl: `about.component.html`,
    directives:[ROUTER_DIRECTIVES]
})
export class AboutComponent { }
