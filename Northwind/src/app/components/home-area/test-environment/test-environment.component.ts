import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

// options to run: 
// ng s -o 
// ng s -o -c production
// ng s -o -c mock
// https://stackoverflow.com/questions/50174584/how-to-set-environment-via-ng-serve-in-angular-6

@Component({
    selector: 'app-test-environment',
    templateUrl: './test-environment.component.html',
    styleUrls: ['./test-environment.component.css']
})
export class TestEnvironmentComponent {

    public testCurrentEnvironment(): void {
        alert("Products URL: " + environment.productsUrl);
    }

}
