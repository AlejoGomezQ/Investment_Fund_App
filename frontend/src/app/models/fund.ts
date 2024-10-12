export interface Fund {
  fundId: Number;
  name: String;
  minAmount: Number;
  category: FundCategory;
}

enum FundCategory {
  FPV = 'FPV',
  FIC = 'FIC',
}
