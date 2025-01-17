export interface RequerimentI {
  uid: string;
  name: string;
  description: string;
  categoryID: number;
  cityID: number;
  budget: number;
  currencyID: number;
  payment_methodID: number;
  completion_date: Date;
  submission_dateID: number;
  allowed_bidersID: number;
  used: boolean;
  userID: string;
  entityID: string;
  publish_date: Date;
  stateID: number;
  number_offers: number;
}
