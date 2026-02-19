import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MobilePayment {
    provider: string;
    mobileNumber: string;
    transactionId: string;
}
export interface CryptoWallet {
    cryptoType: string;
    transactionHash: string;
    walletAddress: string;
}
export type Timestamp = bigint;
export interface Payment {
    id: string;
    status: string;
    driverId: string;
    paymentMethod: string;
    commissionFee: number;
    timestamp: Timestamp;
    amount: number;
}
export interface BankTransfer {
    bankAccountNumber: string;
    routingNumber: string;
    bankName: string;
    transactionId: string;
}
export interface backendInterface {
    addPayment(paymentId: string, payment: Payment): Promise<void>;
    addTransfer(transactionId: string, paymentId: string, driverId: string): Promise<void>;
    calculateCommission(paymentAmount: number, commissionPercentage: number): Promise<number>;
    getAllCompleteTransfers(): Promise<Array<Payment>>;
    /**
     * / Function to retrieve all payment transactions
     */
    getAllTransactions(): Promise<Array<Payment>>;
    /**
     * / Function to view application statistics
     */
    getAppStats(): Promise<{
        totalCommissions: number;
        totalPayments: bigint;
        totalAmount: number;
    }>;
    /**
     * / Function to get the total payout amount for a driver
     */
    getDriverPayoutAmount(driverId: string): Promise<number>;
    /**
     * / Function to get a driver's transaction history
     */
    getDriverTransactionHistory(driverId: string): Promise<Array<Payment>>;
    getPayment(paymentId: string): Promise<Payment>;
    getPaymentStatus(paymentId: string): Promise<string>;
    initiateBankTransfer(paymentId: string, bank: BankTransfer): Promise<BankTransfer>;
    initiateCryptoTransfer(paymentId: string, crypto: CryptoWallet): Promise<CryptoWallet>;
    initiateMobilePayment(paymentId: string, mobile: MobilePayment): Promise<MobilePayment>;
    processPayment(driverId: string, amount: number, paymentMethod: string, commissionPercentage: number): Promise<{
        paymentId: string;
        payment: Payment;
    }>;
    viewPayment(paymentId: string): Promise<Payment>;
}
