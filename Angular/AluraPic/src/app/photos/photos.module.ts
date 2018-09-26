import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [PhotoComponent], 
    exports: [PhotoComponent],
    imports: [HttpClientModule]
})

export class PhotoModule{}