import { Component, OnInit } from '@angular/core';
import { Order } from './domain/order';
import { OrderService } from './services/orderservice';

export class OrderBook implements Order {
    constructor(public buyQty?, public buyPrice?, public sellQty?, public sellPrice?) {}
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [OrderService]
})
export class AppComponent implements OnInit {

    displayDialog: boolean;

    displayDetailsDialog: boolean;

    order: Order = new OrderBook();

    selectedOrder: Order;

    newOrder: boolean;

    orders: Order[];

    cols: any[];

    orderType: string = 'buy';

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.orderService.getOrderBook().then(orders => this.orders = orders);

        this.cols = [
            { field: 'buyQty', header: 'Buy Qty' },
            { field: 'buyPrice', header: 'Buy Price' },
            { field: 'sellQty', header: 'Sell Qty' },
            { field: 'sellPrice', header: 'Sell Price' }
        ];

    }

    showDialogToAdd() {
        this.newOrder = true;
        this.order = new OrderBook();
        this.displayDialog = true;
    }

    save() {
        const orders = [...this.orders];
        if (this.newOrder) {
            orders.push(this.order);
        } else {
            orders[this.findSelectedOrderIndex()] = this.order;
        }
        this.orders = orders;
        this.order = null;
        this.displayDialog = false;
        this.displayDetailsDialog = false;
    }

    onRowSelect(event) {
        this.newOrder = false;
        this.order = {...event.data};
        this.displayDetailsDialog = true;
    }

    findSelectedOrderIndex(): number {
        return this.orders.indexOf(this.selectedOrder);
    }
}
