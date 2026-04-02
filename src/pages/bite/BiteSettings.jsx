import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Moon, Sun, Download, Trash2, X, LogOut, Crown } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useBite } from '../../context/BiteContext'

export default function BiteSettings() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const { budget, updateBudget, clearAllData, exportData } = useBite()
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [budgetAmount, setBudgetAmount] = useState(budget.amount)
  const [budgetPeriod, setBudgetPeriod] = useState(budget.period)
  const [alertsEnabled, setAlertsEnabled] = useState(budget.alertsEnabled)
  const [alertThreshold, setAlertThreshold] = useState(budget.alertThreshold)

  const handleSaveBudget = () => {
    updateBudget({
      amount: parseFloat(budgetAmount),
      period: budgetPeriod,
      alertsEnabled,
      alertThreshold
    })
  }

  const handleLogout = () => {
    logout()
    navigate('/bite')
  }

  const handleClearData = () => {
    clearAllData()
    setShowClearConfirm(false)
  }

  const handleExport = () => {
    exportData()
  }

  const handlePremium = () => {
    navigate('/contact')
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

        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-medium mb-4">Account</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name</span>
                <span>{user?.name || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span>{user?.email || 'N/A'}</span>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="mt-4 w-full flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-border/50 text-muted-foreground"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-medium mb-4">Budget</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Monthly Budget</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budgetAmount}
                    onChange={(e) => setBudgetAmount(e.target.value)}
                    className="w-full pl-7 pr-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Period</label>
                <select
                  value={budgetPeriod}
                  onChange={(e) => setBudgetPeriod(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Budget Alerts</span>
                <button
                  onClick={() => setAlertsEnabled(!alertsEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    alertsEnabled ? 'bg-primary' : 'bg-border'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    alertsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {alertsEnabled && (
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Alert at {alertThreshold}%</label>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={alertThreshold}
                    onChange={(e) => setAlertThreshold(e.target.value)}
                    className="w-full"
                  />
                </div>
              )}

              <button 
                onClick={handleSaveBudget}
                className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Save Budget
              </button>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-medium mb-4">Premium</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Unlock unlimited categories, advanced charts, and data export.
            </p>
            <button 
              onClick={handlePremium}
              className="w-full flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-medium rounded-lg hover:opacity-90"
            >
              <Crown className="h-4 w-4" />
              Upgrade to Premium
            </button>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-medium mb-4">Data</h3>
            <div className="space-y-3">
              <button 
                onClick={handleExport}
                className="w-full flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-border/50"
              >
                <Download className="h-4 w-4" />
                Export All Data
              </button>
              <button 
                onClick={() => setShowClearConfirm(true)}
                className="w-full flex items-center justify-center gap-2 py-2 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10"
              >
                <Trash2 className="h-4 w-4" />
                Clear All Data
              </button>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border text-center">
            <p className="text-sm text-muted-foreground">Bite v1.0.0</p>
            <p className="text-xs text-muted-foreground mt-1">Built by Zorvyn</p>
          </div>
        </div>
      </div>

      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Clear All Data?</h2>
            <p className="text-muted-foreground mb-6">
              This will permanently delete all your expenses, categories, and settings.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-2 border border-border rounded-lg hover:bg-border/50"
              >
                Cancel
              </button>
              <button 
                onClick={handleClearData}
                className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Clear Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}