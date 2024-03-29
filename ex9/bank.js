var Transaction = /** @class */ (function () {
    function Transaction(accno, name, bal) {
        this.AccountNo = accno;
        this.AccountHolderName = name;
        this.Balance = bal;
    }
    Transaction.prototype.BalanceCheck = function () {
        if (this.Balance < 0) {
            console.log('Insufficient Balance Please Deposit');
        }
        else {
            console.log('The Balance is :' + this.Balance);
        }
    };
    Transaction.prototype.Deposit = function (amount) {
        this.Balance += amount;
        console.log('Amount of ' + amount + ' Deposited Successfully');
        console.log('The Balance is :' + this.Balance);
    };
    Transaction.prototype.Withdraw = function (amount) {
        if (amount > this.Balance) {
            console.log('Not Enough Balance');
        }
        else {
            this.Balance -= amount;
            console.log('Amount of ' + amount + ' withdrawn Successfully');
            console.log('The Balance is :' + this.Balance);
        }
    };
    Transaction.prototype.transfer = function (amount, obj) {
        this.Withdraw(amount);
        obj.Deposit(amount);
    };
    return Transaction;
}());
var t1 = new Transaction(2345, 'Syed Suhail N', 0);
var t2 = new Transaction(2346, 'Ponkumaran T', 0);
t1.BalanceCheck();
t1.Deposit(5000);
t1.Withdraw(1000);
t1.Withdraw(1000);
t2.BalanceCheck();
t1.transfer(1000, t2);
t2.BalanceCheck();
