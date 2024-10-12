export interface Fund {
  name: String;
  minAmount: Number;
  category: FundCategory;
  createAt?: Date;
  updateAt?: Date;
}

enum FundCategory {
  FPV = 'FPV',
  FIC = 'FIC',
}
