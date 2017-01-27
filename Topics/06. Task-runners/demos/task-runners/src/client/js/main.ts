class Notifier {
    success(msg: string): void {
        alert(`Success: ${msg}`);
    }
    error(msg: string): void {
        alert(`Error: ${msg}`);
    }
}

new Notifier().success("It Wokrs!");
