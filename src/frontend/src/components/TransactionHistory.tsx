import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetAllTransactions } from '@/hooks/useQueries';
import { DollarSign, Clock } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export function TransactionHistory() {
  const { data: transactions, isLoading } = useGetAllTransactions();

  if (isLoading) {
    return (
      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-full bg-white/5" />
          ))}
        </CardContent>
      </Card>
    );
  }

  const displayTransactions = transactions?.slice(0, 5) || [];

  return (
    <Card className="bg-[#1a1f3a]/80 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {displayTransactions.length === 0 ? (
          <p className="text-white/60 text-center py-4">No transactions yet</p>
        ) : (
          displayTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    {transaction.paymentMethod}
                  </p>
                  <p className="text-xs text-white/60 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date(Number(transaction.timestamp) / 1000000).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">₹{transaction.amount.toFixed(2)}</p>
                <p className={`text-xs ${transaction.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {transaction.status}
                </p>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
