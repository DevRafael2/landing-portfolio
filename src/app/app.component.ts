import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TechSectionComponent } from './components/views/technologies/tech-section.component';
import { ServiceContentComponet } from './components/views/services/service-content.component';
import { AboutMeComponent } from './components/views/about-me/about-me.component';
import { CardModule } from './components/card/card.module';
import { PortfolioComponent } from './components/views/portfolio/portfolio.component';
import { LandingComponent } from './components/views/landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavBarComponent, 
    CardModule, 
    LandingComponent,
    TechSectionComponent, 
    ServiceContentComponet,
    AboutMeComponent,
    PortfolioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-self';

  constructor(private viewportScroller: ViewportScroller) {

  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
