import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { CardServiceComponent } from "./card-service/card-service.component";

@NgModule({
    exports: [
        CardComponent, 
        CardServiceComponent
    ],
    declarations: [
        CardComponent, 
        CardServiceComponent
    ]
})
export class CardModule {

}