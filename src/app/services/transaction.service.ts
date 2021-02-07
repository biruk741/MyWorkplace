import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactions(): Transaction[] {
    return [
      {
        name:"Groceries",
        amount: 2324,
        type:'pay'
      },
      {
        name:"Gas",
        amount: 2671,
        type:'pay'
      },
      {
        name:"Bills",
        amount: 16892,
        type:'pay'
      },
    ]
  }
}
