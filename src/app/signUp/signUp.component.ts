import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: './signUp.component.html',
    styleUrls: ['./signUp.component.css']
})

export class SignUpComponent {
    pageTitle: string = 'Sign Up';

    constructor(private _route: ActivatedRoute,
        private _router: Router) {

    }

}
