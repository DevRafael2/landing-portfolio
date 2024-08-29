import { Component, ElementRef, inject, Renderer2, Signal, signal, ViewChild } from "@angular/core";

@Component({
    standalone: true,
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

    @ViewChild('navbar') navBar? : ElementRef
    isOpen = signal<boolean>(false);

    toggleMenu(): void {
        this.isOpen.set(!this.isOpen());
        if(this.isOpen())
            this.navBar!.nativeElement.style.height= '300px'
        else 
            this.navBar!.nativeElement.style.height= '60px'
    }

    scrollToSection(sectionId: string): void {
        document.getElementById(sectionId)!.scrollIntoView({ behavior: "smooth"});
    }

    showMenu() {

    }
}