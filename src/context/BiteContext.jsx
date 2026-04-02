import { createContext, useContext, useState, useEffect } from 'react'

const BiteContext = createContext()

const DEFAULT_CATEGORIES = [
  { id: 'groceries', name: 'Groceries', icon: '🛒', color: '#10b981' },
  { id: 'restaurants', name: 'Restaurants', icon: '🍔', color: '#f59e0b' },
  { id: 'coffee', name: 'Coffee', icon: '☕', color: '#8b5cf6' },
  { id: 'fastfood', name: 'Fast Food', icon: '🍟', color: '#ef4444' },
  { id: 'delivery', name: 'Delivery', icon: '🛵', color: '#3b82f6' },
  { id: 'snacks', name: 'Snacks', icon: '🍪', color: '#ec4899' },
  { id: 'drinks', name: 'Drinks', icon: '🥤', color: '#06b6d4' },
  { id: 'other', name: 'Other', icon: '🍽️', color: '#6b7280' }
]

const DEFAULT_BUDGET = {
  amount: 500,
  period: 'monthly',
  alertsEnabled: true,
  alertThreshold: 80
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export function BiteProvider({ children }) {
  const [expenses, setExpenses] = useState([])
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES)
  const [budget, setBudget] = useState(DEFAULT_BUDGET)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedExpenses = localStorage.getItem('bite_expenses')
    const storedCategories = localStorage.getItem('bite_categories')
    const storedBudget = localStorage.getItem('bite_budget')

    if (storedExpenses) setExpenses(JSON.parse(storedExpenses))
    if (storedCategories) setCategories(JSON.parse(storedCategories))
    if (storedBudget) setBudget(JSON.parse(storedBudget))

    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('bite_expenses', JSON.stringify(expenses))
    }
  }, [expenses, loading])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('bite_categories', JSON.stringify(categories))
    }
  }, [categories, loading])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('bite_budget', JSON.stringify(budget))
    }
  }, [budget, loading])

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: generateId(),
      createdAt: new Date().toISOString()
    }
    setExpenses([newExpense, ...expenses])
    return newExpense
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  const updateExpense = (id, updates) => {
    setExpenses(expenses.map(e => e.id === id ? { ...e, ...updates } : e))
  }

  const getExpensesByPeriod = (period) => {
    const now = new Date()
    let startDate

    switch (period) {
      case 'daily':
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        break
      case 'weekly':
        startDate = new Date(now)
        startDate.setDate(startDate.getDate() - 7)
        break
      case 'monthly':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1)
        break
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), 1)
    }

    return expenses.filter(e => new Date(e.date) >= startDate)
  }

  const getTotalSpent = (period) => {
    const filteredExpenses = getExpensesByPeriod(period)
    return filteredExpenses.reduce((sum, e) => sum + e.amount, 0)
  }

  const getCategoryBreakdown = (period) => {
    const filteredExpenses = getExpensesByPeriod(period)
    const breakdown = {}

    filteredExpenses.forEach(e => {
      if (!breakdown[e.categoryId]) {
        breakdown[e.categoryId] = 0
      }
      breakdown[e.categoryId] += e.amount
    })

    return Object.entries(breakdown).map(([categoryId, amount]) => {
      const category = categories.find(c => c.id === categoryId) || { name: 'Unknown', icon: '❓', color: '#6b7280' }
      return { ...category, amount }
    })
  }

  const getDailyBreakdown = (period) => {
    const filteredExpenses = getExpensesByPeriod(period)
    const breakdown = {}

    filteredExpenses.forEach(e => {
      const date = e.date
      if (!breakdown[date]) breakdown[date] = 0
      breakdown[date] += e.amount
    })

    return Object.entries(breakdown)
      .map(([date, amount]) => ({ date, amount }))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  }

  const checkBudgetAlert = () => {
    if (!budget.alertsEnabled || !budget.amount) {
      return { isOver: false, percentage: 0 }
    }

    const period = budget.period
    const spent = getTotalSpent(period)
    const percentage = (spent / budget.amount) * 100

    return {
      isOver: percentage >= budget.alertThreshold,
      percentage: Math.round(percentage),
      spent,
      budget: budget.amount
    }
  }

  const addCategory = (category) => {
    const newCategory = { ...category, id: generateId() }
    setCategories([...categories, newCategory])
    return newCategory
  }

  const updateCategory = (id, updates) => {
    setCategories(categories.map(c => c.id === id ? { ...c, ...updates } : c))
  }

  const deleteCategory = (id) => {
    const otherCategory = categories.find(c => c.id === 'other')
    if (otherCategory) {
      setExpenses(expenses.map(e => 
        e.categoryId === id ? { ...e, categoryId: 'other' } : e
      ))
    }
    setCategories(categories.filter(c => c.id !== id))
  }

  const updateBudget = (newBudget) => {
    setBudget({ ...budget, ...newBudget })
  }

  const clearAllData = () => {
    setExpenses([])
    setCategories(DEFAULT_CATEGORIES)
    setBudget(DEFAULT_BUDGET)
    localStorage.removeItem('bite_expenses')
    localStorage.removeItem('bite_categories')
    localStorage.removeItem('bite_budget')
  }

  const exportData = () => {
    const data = { expenses, categories, budget, exportedAt: new Date().toISOString() }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `bite-export-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <BiteContext.Provider value={{
      expenses,
      categories,
      budget,
      loading,
      addExpense,
      deleteExpense,
      updateExpense,
      getExpensesByPeriod,
      getTotalSpent,
      getCategoryBreakdown,
      getDailyBreakdown,
      checkBudgetAlert,
      addCategory,
      updateCategory,
      deleteCategory,
      updateBudget,
      clearAllData,
      exportData
    }}>
      {children}
    </BiteContext.Provider>
  )
}

export const useBite = () => useContext(BiteContext)