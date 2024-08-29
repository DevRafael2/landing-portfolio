import { Component, Input } from "@angular/core";

@Component({
    selector: 'card-service',
    templateUrl: './card-service.component.html',
    styleUrl: './card-service.component.css'
})

export class CardServiceComponent {
    @Input({required: true}) header? : string
    @Input() description? : string

    @Input() imageUrl? : string
}