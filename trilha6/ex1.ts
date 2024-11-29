class Order {
    items: string[] = [];
    totalPrice: number = 0;
    paymentStatus: string = "Não pago";
    shippingStatus: string = "Não enviado";

    addItem(item: string, price: number): void {
        this.items.push(item);
        this.totalPrice += price;
    }

    processPayment(): void {
        if (this.totalPrice > 0) {
            this.paymentStatus = "Pago";
            console.log("Pagamento processado com sucesso");
        } else {
            console.log("Não há itens no pedido para pagar");
        }
    }

    updateShippingStatus(status: string): void {
        this.shippingStatus = status;
        console.log(`Status de envio atualizado para: ${status}`);
    }
}

const order = new Order();
order.addItem("Camiseta", 50);
order.addItem("Calça", 100);
order.processPayment();
order.updateShippingStatus("Enviado");

console.log(order);
