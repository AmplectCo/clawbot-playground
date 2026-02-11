import { useStore } from 'effector-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { $tokenHistory } from '@/entities/session/model';

export const TokenUsageChart = () => {
  const data = useStore($tokenHistory);

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 shadow-lg hover:border-accent-primary transition-all duration-200 col-span-full">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        📊 Token Usage Over Time
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
            <XAxis 
              dataKey="time" 
              stroke="#606070"
              tick={{ fill: '#606070', fontSize: 12 }}
            />
            <YAxis 
              stroke="#606070"
              tick={{ fill: '#606070', fontSize: 12 }}
              tickFormatter={(value) => `${Math.round(value / 1000)}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1a1a25', 
                border: '1px solid #2a2a3a',
                borderRadius: '8px'
              }}
              labelStyle={{ color: '#ffffff' }}
              itemStyle={{ color: '#00d4aa' }}
              formatter={(value) => [`${Number(value).toLocaleString()} tokens`, 'Usage']}
            />
            <Line 
              type="monotone" 
              dataKey="tokens" 
              stroke="#00d4aa" 
              strokeWidth={2}
              dot={{ fill: '#00d4aa', strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, stroke: '#00d4aa', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};