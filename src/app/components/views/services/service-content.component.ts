import { Component } from "@angular/core";
import { CardModule } from "../../card/card.module";

@Component({
    standalone: true,
    imports: [CardModule],
    selector: 'service-section',
    templateUrl: './service-content.component.html',
    styleUrl: './service-content.component.css'
})

export class ServiceContentComponet {

}