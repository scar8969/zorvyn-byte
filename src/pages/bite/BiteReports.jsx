import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useBite } from '../../context/BiteContext'

const COLORS = ['#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#3b82f6', '#ec4899', '#06b6d4', '#6b7280']

export default function BiteReports() {
  const navigate = useNavigate()
  const { expenses, getCategoryBreakdown, getDailyBreakdown, categories } = useBite()
  const [period, setPeriod] = useState('weekly')

  const categoryData = getCategoryBreakdown(period)
  const dailyData = getDailyBreakdown(period)

  const totalSpent = categoryData.reduce((sum, cat) => sum + cat.amount, 0)

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`

  const handleExport = () => {
    const csvContent = [
      ['Date', 'Category', 'Amount', 'Note'].join(','),
      ...expenses.map(e => {
        const cat = categories.find(c => c.id === e.categoryId)
        return [e.date, cat?.name || 'Unknown', e.amount, e.note || ''].join(',')
      })
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `bite-expenses-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <button 
          onClick={() => navigate('/bite/dashboard')} 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Reports</h1>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-card border border-border rounded-lg hover:bg-border/50"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          {['daily', 'weekly', 'monthly'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                period === p 
                  ? 'bg-primary text-white' 
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>

        <div className="mb-6 p-4 rounded-lg bg-card border border-border">
          <div className="text-muted-foreground text-sm mb-1">Total Spent</div>
          <div className="text-3xl font-bold">{formatCurrency(totalSpent)}</div>
        </div>

        {categoryData.length > 0 ? (
          <>
            <div className="mb-6 p-4 rounded-lg bg-card border border-border">
              <h3 className="font-medium mb-4">By Category</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="amount"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      innerRadius={40}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={entry.id} fill={entry.color || COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => formatCurrency(value)}
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {categoryData.map((cat) => (
                  <div key={cat.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color || COLORS[categoryData.indexOf(cat) % COLORS.length] }} />
                      <span className="text-sm">{cat.icon} {cat.name}</span>
                    </div>
                    <span className="text-sm font-medium">{formatCurrency(cat.amount)}</span>
                  </div>
                ))}
              </div>
            </div>

            {dailyData.length > 1 && (
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-medium mb-4">Trend</h3>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyData}>
                      <XAxis 
                        dataKey="date" 
                        tick={{ fill: '#94a3b8', fontSize: 10 }}
                        tickFormatter={(value) => value.slice(5)}
                      />
                      <YAxis 
                        tick={{ fill: '#94a3b8', fontSize: 10 }}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip 
                        formatter={(value) => formatCurrency(value)}
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                      />
                      <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="p-6 rounded-lg bg-card border border-border text-center">
            <p className="text-muted-foreground">No expenses in this period</p>
          </div>
        )}
      </div>
    </div>
  )
}