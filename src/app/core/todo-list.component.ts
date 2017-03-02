import { Component } from '@angular/core';

@Component({
    selector: 'todo',
    template: `
        <input type="text" [(ngModel)]="selectedItem.name">
        <button (click)="onDeleteItem()">Deletar</button>
        <input type="text">
        <button (click)="onAddItem(todoListItem)">Adicionar</button>
        <ul>
            <li 
                *ngFor="let todoListItem of todoListItens"
                (click)="onItemClicked(todoListItem)"
                >{{ todoListItem.name }}</li>
        </ul>
    `
})
export class TodoListComponent {
    public todoListItens = [ ];
    public selectedItem = {name: ""};

    onItemClicked(todoListItem) {
        this.selectedItem = todoListItem;
    }

    onAddItem(todoListItem) {
        this.todoListItens.push({name: todoListItem.value});
    }

    onDeleteItem() {
        this.todoListItens.splice(this.todoListItens.indexOf(this.selectedItem), 1);
    }
}