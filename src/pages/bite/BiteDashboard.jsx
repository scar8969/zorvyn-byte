import { Link, useNavigate } from 'react-router-dom'
import { Plus, TrendingUp, Calendar, AlertTriangle } from 'lucide-react'
import { useBite } from '../../context/BiteContext'
import { useAuth } from '../../context/AuthContext'

export default function BiteDashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { 
    expenses, 
    getTotalSpent, 
    getCategoryBreakdown, 
    checkBudgetAlert,
    categories 
  } = useBite()

  const today = new Date().toISOString().split('T')[0]
  const thisWeek = 'weekly'
  const thisMonth = 'monthly'

  const todaySpent = getTotalSpent('daily')
  const weekSpent = getTotalSpent('weekly')
  const monthSpent = getTotalSpent('monthly')

  const budgetAlert = checkBudgetAlert()
  const recentExpenses = expenses.slice(0, 5)
  const categoryBreakdown = getCategoryBreakdown('weekly')

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`

  const getCategoryName = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId)
    return cat ? cat.name : 'Unknown'
  }

  const getCategoryIcon = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId)
    return cat ? cat.icon : '❓'
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Bite</h1>
            <p className="text-muted-foreground">Hello, {user?.name || 'User'}</p>
          </div>
        </div>

        {budgetAlert.isOver && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm">You've used {budgetAlert.percentage}% of your {budgetAlert.spent > 0 ? 'budget' : ''}</span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Plus className="h-3 w-3" />
              <span className="text-xs">Today</span>
            </div>
            <div className="text-lg font-semibold">{formatCurrency(todaySpent)}</div>
          </div>
          <div className="p-3 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Calendar className="h-3 w-3" />
              <span className="text-xs">Week</span>
            </div>
            <div className="text-lg font-semibold">{formatCurrency(weekSpent)}</div>
          </div>
          <div className="p-3 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <TrendingUp className="h-3 w-3" />
              <span className="text-xs">Month</span>
            </div>
            <div className="text-lg font-semibold">{formatCurrency(monthSpent)}</div>
          </div>
        </div>

        {categoryBreakdown.length > 0 && (
          <div className="mb-6 p-4 rounded-lg bg-card border border-border">
            <h3 className="font-medium mb-3">This Week by Category</h3>
            <div className="space-y-2">
              {categoryBreakdown.slice(0, 4).map((cat) => (
                <div key={cat.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>{cat.icon}</span>
                    <span className="text-sm">{cat.name}</span>
                  </div>
                  <span className="text-sm font-medium">{formatCurrency(cat.amount)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-medium mb-3">Recent Expenses</h3>
          {recentExpenses.length === 0 ? (
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <p className="text-muted-foreground mb-4">No expenses yet</p>
              <button 
                onClick={() => navigate('/bite/add')}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Add First Expense
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              {recentExpenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{getCategoryIcon(expense.categoryId)}</span>
                    <div>
                      <p className="font-medium">{getCategoryName(expense.categoryId)}</p>
                      {expense.note && <p className="text-xs text-muted-foreground truncate max-w-[150px]">{expense.note}</p>}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(expense.amount)}</p>
                    <p className="text-xs text-muted-foreground">{expense.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link 
        to="/bite/add" 
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all"
      >
        <Plus className="h-6 w-6" />
      </Link>
    </div>
  )
}