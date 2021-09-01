import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    title = 'sandbox';

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    )
    {
        this.matIconRegistry.addSvgIcon(
            `github`,
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github.svg")
        );

        this.matIconRegistry.addSvgIcon(
            `linkedin`,
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg")
        );
    }
}
