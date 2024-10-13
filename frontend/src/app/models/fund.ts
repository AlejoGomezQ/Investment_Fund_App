export interface Fund {
  fundId: Number;
  name: String;
  minAmount: Number;
  category: FundCategory;
  amount?: Number;
}

enum FundCategory {
  FPV = 'FPV',
  FIC = 'FIC',
}
