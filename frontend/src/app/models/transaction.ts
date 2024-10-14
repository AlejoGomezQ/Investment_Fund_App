export interface Transaction {
  transactionId: String;
  fundId: Number;
  name: String;
  type: TransactionType;
  date: Date;
  amount: number;
}

enum TransactionType {
  Subcription = 'Subscription',
  Cancellation = 'Cancellation',
}
