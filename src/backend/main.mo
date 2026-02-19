import Text "mo:core/Text";
import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Error "mo:core/Error";
import Iter "mo:core/Iter";
import Nat32 "mo:core/Nat32";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Option "mo:core/Option";

actor {
  type Timestamp = Time.Time;

  // Driver Type
  public type Driver = {
    id : Text;
    name : Text;
    vehicleType : Text;
    isAvailable : Bool;
    rating : Float;
    phoneNumber : Text;
    emaill : Text;
    licenseNumber : Text;
    experienceYears : Nat;
    location : Text;
  };

  // Trip Type
  public type Trip = {
    id : Text;
    driverId : Text;
    customerId : Text;
    pickupLocation : Text;
    dropoffLocation : Text;
    fare : Float;
  };

  // Payment Type
  public type Payment = {
    id : Text;
    amount : Float;
    status : Text;
    timestamp : Timestamp;
    driverId : Text;
    paymentMethod : Text;
    commissionFee : Float;
  };

  // Payout Type
  public type Payout = {
    id : Text;
    paymentId : Text;
    amount : Float;
    driverId : Text;
    timestamp : Timestamp;
    status : Text;
  };

  // Bank Transfer Details
  public type BankTransfer = {
    bankName : Text;
    bankAccountNumber : Text;
    routingNumber : Text;
    transactionId : Text;
  };

  // Mobile Payment Details
  public type MobilePayment = {
    mobileNumber : Text;
    provider : Text;
    transactionId : Text;
  };

  // Crypto Wallet Details
  public type CryptoWallet = {
    walletAddress : Text;
    cryptoType : Text;
    transactionHash : Text;
  };

  // Mapping storage
  var driverIdCounter = 1;
  var tripIdCounter = 1;
  var paymentIdCounter = 1;
  var payoutIdCounter = 1;

  var totalCommissionFee : Float = 0.0;

  let payments = Map.empty<Text, Payment>();
  let drivers = Map.empty<Text, Driver>();
  let trips = Map.empty<Text, Trip>();
  let payouts = Map.empty<Text, Payout>();

  // Payment module with comparison functions
  module Payment {
    public func compareByAmount(a : Payment, b : Payment) : Order.Order {
      Float.compare(a.amount, b.amount);
    };

    public func compareByTimestamp(a : Payment, b : Payment) : Order.Order {
      Float.compare(a.timestamp.toFloat(), b.timestamp.toFloat());
    };
  };

  // Commission Fee Management
  public shared ({ caller }) func calculateCommission(paymentAmount : Float, commissionPercentage : Float) : async Float {
    let commissionFee = paymentAmount * commissionPercentage / 100.0;
    totalCommissionFee += commissionFee;
    commissionFee;
  };

  // Payment Processing
  public shared ({ caller }) func processPayment(
    driverId : Text,
    amount : Float,
    paymentMethod : Text,
    commissionPercentage : Float,
  ) : async {
    paymentId : Text;
    payment : Payment;
  } {
    let paymentId = "P" # paymentIdCounter.toText();
    paymentIdCounter += 1;

    let commissionFee = await calculateCommission(amount, commissionPercentage);

    let payment : Payment = {
      id = paymentId;
      amount;
      status = "Incomplete";
      timestamp = Time.now();
      driverId;
      paymentMethod;
      commissionFee;
    };

    payments.add(paymentId, payment);

    {
      paymentId;
      payment;
    };
  };

  // Bank Transfer
  public shared ({ caller }) func initiateBankTransfer(
    paymentId : Text,
    bank : BankTransfer,
  ) : async BankTransfer {
    switch (payments.get(paymentId)) {
      case (null) {
        Runtime.trap("Missing payment details");
      };
      case (?payment) {
        payments.add(
          paymentId,
          {
            id = payment.id;
            amount = payment.amount;
            status = "Completed";
            timestamp = payment.timestamp;
            driverId = payment.driverId;
            paymentMethod = payment.paymentMethod;
            commissionFee = payment.commissionFee;
          },
        );
        bank;
      };
    };
  };

  // Mobile Payment
  public shared ({ caller }) func initiateMobilePayment(
    paymentId : Text,
    mobile : MobilePayment,
  ) : async MobilePayment {
    switch (payments.get(paymentId)) {
      case (null) {
        Runtime.trap("Missing payment details");
      };
      case (?payment) {
        payments.add(
          paymentId,
          {
            id = payment.id;
            amount = payment.amount;
            status = "Completed";
            timestamp = payment.timestamp;
            driverId = payment.driverId;
            paymentMethod = payment.paymentMethod;
            commissionFee = payment.commissionFee;
          },
        );
        mobile;
      };
    };
  };

  // Cryptocurrency Transfer
  public shared ({ caller }) func initiateCryptoTransfer(
    paymentId : Text,
    crypto : CryptoWallet,
  ) : async CryptoWallet {
    switch (payments.get(paymentId)) {
      case (null) {
        Runtime.trap("Missing payment details");
      };
      case (?payment) {
        payments.add(
          paymentId,
          {
            id = payment.id;
            amount = payment.amount;
            status = "Completed";
            timestamp = payment.timestamp;
            driverId = payment.driverId;
            paymentMethod = payment.paymentMethod;
            commissionFee = payment.commissionFee;
          },
        );
        crypto;
      };
    };
  };

  public query ({ caller }) func getPaymentStatus(paymentId : Text) : async Text {
    switch (payments.get(paymentId)) {
      case (null) { Runtime.trap("Did not find a payment with this id.") };
      case (?payment) { payment.status };
    };
  };

  public query ({ caller }) func getPayment(paymentId : Text) : async Payment {
    switch (payments.get(paymentId)) {
      case (null) { Runtime.trap("Missing payment details") };
      case (?payment) { payment };
    };
  };

  // Function to view a specific payment
  public query ({ caller }) func viewPayment(paymentId : Text) : async Payment {
    switch (payments.get(paymentId)) {
      case (null) { Runtime.trap("Missing payment details") };
      case (?payment) { payment };
    };
  };

  // Stable variables for totals
  var totalPayments : Int = 0;
  var totalAmount : Float = 0.0;
  var totalCommissions : Float = 0.0;

  /// Function to view application statistics
  public query ({ caller }) func getAppStats() : async {
    totalPayments : Int;
    totalAmount : Float;
    totalCommissions : Float;
  } {
    {
      totalPayments;
      totalAmount;
      totalCommissions;
    };
  };

  /// Function to get the total payout amount for a driver
  public query ({ caller }) func getDriverPayoutAmount(driverId : Text) : async Float {
    let payoutRecords = payouts.values().toArray();
    let driverPayouts = payoutRecords.filter(
      func(p) { p.driverId == driverId }
    );
    if (driverPayouts.isEmpty()) {
      0.0;
    } else {
      driverPayouts.foldLeft(
        0.0,
        func(acc, p) { acc + p.amount },
      );
    };
  };

  /// Function to retrieve all payment transactions
  public query ({ caller }) func getAllTransactions() : async [Payment] {
    let transactionList = payments.values().toArray();
    if (transactionList.isEmpty()) {
      Runtime.trap("No transactions found");
    } else {
      transactionList;
    };
  };

  /// Function to get a driver's transaction history
  public query ({ caller }) func getDriverTransactionHistory(driverId : Text) : async [Payment] {
    let transactions = payments.filter(
      func(_id, payment) { payment.driverId == driverId }
    );
    payments.values().toArray();
  };

  public type PaymentHistory = {
    amount : Float;
    date : Text;
    paymentMethod : Text;
    status : Text;
  };

  public type TransferRecord = {
    transferId : Text;
    paymentId : Text;
    amount : Float;
    driverId : Text;
    paymentMethod : Text;
    date : Text;
    transferStatus : Text;
  };

  let transfers = Map.empty<Text, TransferRecord>();

  public query ({ caller }) func getAllCompleteTransfers() : async [Payment] {
    payments.values().toArray().filter(
      func(p) { p.status == "Completed" }
    );
  };

  public func addPayment(paymentId : Text, payment : Payment) {
    payments.add(paymentId, payment);

    // Update totals
    totalPayments += 1; // Increment by 1 for each payment added
    totalAmount += payment.amount;
    totalCommissions += payment.commissionFee;
  };

  // Function to simulate a driver transferring money from business to savings account
  public shared ({ caller }) func addTransfer(transactionId : Text, paymentId : Text, driverId : Text) : async () {
    switch (payments.get(paymentId)) {
      case (null) {
        Runtime.trap("Missing payment record");
      };
      case (?payment) {
        if (payment.status != "Completed") {
          Runtime.trap("Payment must be completed before transferring to savings");
        };
        let transferRecord : TransferRecord = {
          transferId = transactionId;
          paymentId = payment.id;
          amount = payment.amount;
          driverId = driverId;
          paymentMethod = payment.paymentMethod;
          date = Time.now().toText();
          transferStatus = "Transferred";
        };
        transfers.add(transactionId, transferRecord);
      };
    };
  };
};
