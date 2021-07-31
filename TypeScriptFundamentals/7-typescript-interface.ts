interface BankAccount {
    initialAmount: number;
    printMessage: () => void;
    deposit(): void;
    withdraw(): void;
    balance(): void;
}

class SavingAccount implements BankAccount {

    printMessage: () => void;

    initialAmount = 20000;

    deposit(): void {
        console.log("Deposit in Saving Account.");
    }
    withdraw(): void {
        console.log("Withdraw from Saving Account.");
    }
    balance(): void {
        console.log("Balance in Saving Account.");
    }

}

class CurrentAccount implements BankAccount {

    initialAmount: number;

    printMessage: () => void;

    deposit(): void {
        console.log("Deposit in Current Account.");
    }

    withdraw(): void {
        console.log("Withdraw from Current Account.");
    }

    balance(): void {
        console.log("Balance in Current Account.");
    }

}

var saving = new SavingAccount();
saving.deposit();
saving.withdraw();
saving.balance();
