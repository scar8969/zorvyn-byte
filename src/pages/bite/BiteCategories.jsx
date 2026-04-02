import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, Edit2, Trash2, X } from 'lucide-react'
import { useBite } from '../../context/BiteContext'

const ICONS = ['🛒', '🍔', '☕', '🍟', '🛵', '🍪', '🥤', '🍽️', '🥗', '🍕', '🌮', '🍜']
const COLORS = ['#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#3b82f6', '#ec4899', '#06b6d4', '#f97316']

export default function BiteCategories() {
  const navigate = useNavigate()
  const { categories, expenses, addCategory, updateCategory, deleteCategory } = useBite()
  const [showModal, setShowModal] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [name, setName] = useState('')
  const [icon, setIcon] = useState(ICONS[0])
  const [color, setColor] = useState(COLORS[0])
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)

  const getExpenseCount = (categoryId) => expenses.filter(e => e.categoryId === categoryId).length

  const handleSave = () => {
    if (!name.trim()) return

    if (editingCategory) {
      updateCategory(editingCategory.id, { name: name.trim(), icon, color })
    } else {
      addCategory({ name: name.trim(), icon, color })
    }

    setShowModal(false)
    setEditingCategory(null)
    setName('')
    setIcon(ICONS[0])
    setColor(COLORS[0])
  }

  const handleEdit = (cat) => {
    setEditingCategory(cat)
    setName(cat.name)
    setIcon(cat.icon)
    setColor(cat.color)
    setShowModal(true)
  }

  const handleDelete = (cat) => {
    if (cat.id === 'other') return
    deleteCategory(cat.id)
    setShowDeleteConfirm(null)
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
          <h1 className="text-2xl font-bold">Categories</h1>
          <button 
            onClick={() => {
              setEditingCategory(null)
              setName('')
              setIcon(ICONS[0])
              setColor(COLORS[0])
              setShowModal(true)
            }}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>

        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ backgroundColor: cat.color + '20' }}
                >
                  {cat.icon}
                </div>
                <div>
                  <p className="font-medium">{cat.name}</p>
                  <p className="text-xs text-muted-foreground">{getExpenseCount(cat.id)} expenses</p>
                </div>
              </div>
              {cat.id !== 'other' && (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleEdit(cat)}
                    className="p-2 text-muted-foreground hover:text-foreground"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setShowDeleteConfirm(cat)}
                    className="p-2 text-muted-foreground hover:text-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">{editingCategory ? 'Edit Category' : 'Add Category'}</h2>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                  placeholder="Category name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Icon</label>
                <div className="flex flex-wrap gap-2">
                  {ICONS.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIcon(i)}
                      className={`w-10 h-10 rounded-lg text-xl transition-all ${
                        icon === i ? 'bg-primary/20 border-2 border-primary' : 'bg-background border border-border'
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <div className="flex gap-2">
                  {COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={`w-8 h-8 rounded-full transition-all ${
                        color === c ? 'ring-2 ring-white ring-offset-2 ring-offset-card' : ''
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 border border-border rounded-lg hover:bg-border/50"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="flex-1 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Delete Category?</h2>
            <p className="text-muted-foreground mb-6">
              Expenses in "{showDeleteConfirm.name}" will be moved to "Other".
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 py-2 border border-border rounded-lg hover:bg-border/50"
              >
                Cancel
              </button>
              <button 
                onClick={() => handleDelete(showDeleteConfirm)}
                className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}