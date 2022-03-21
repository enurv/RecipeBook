import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;
    @Output() page = new EventEmitter<string>();

    onSelect(selected: string){
        this.page.emit(selected);
    }
}