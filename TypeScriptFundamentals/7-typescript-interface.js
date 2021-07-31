var SavingAccount = /** @class */ (function () {
    function SavingAccount() {
    }
    SavingAccount.prototype.deposit = function () {
        console.log("Deposit in Saving Account.");
    };
    SavingAccount.prototype.withdraw = function () {
        console.log("Withdraw from Saving Account.");
    };
    SavingAccount.prototype.balance = function () {
        console.log("Balance in Saving Account.");
    };
    return SavingAccount;
}());
var CurrentAccount = /** @class */ (function () {
    function CurrentAccount() {
    }
    CurrentAccount.prototype.deposit = function () {
        console.log("Deposit in Current Account.");
    };
    CurrentAccount.prototype.withdraw = function () {
        console.log("Withdraw from Current Account.");
    };
    CurrentAccount.prototype.balance = function () {
        console.log("Balance in Current Account.");
    };
    return CurrentAccount;
}());
var saving = new SavingAccount();
saving.deposit();
saving.withdraw();
saving.balance();
