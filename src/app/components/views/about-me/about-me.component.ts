import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'about-me',
    templateUrl: 'about-me.component.html',
    styleUrl: 'about-me.component.css',
    standalone: true
})

export class AboutMeComponent {

    router : Router = inject(Router)

    goGitHub() {
        window.open('https://github.com/DevRafael2', '_blank');
    }
}