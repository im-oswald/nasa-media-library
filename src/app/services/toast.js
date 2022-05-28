import toast from 'react-hot-toast'

// method to show success scenarios - accept a string
export const success = (text) => {
  toast.dismiss()
  let t = toast.success(text)
  clearToast(t)
}

// method to show error scenarios - accept a string
export const error = (text) => {
  toast.dismiss()
  let t = toast.error(text)
  clearToast(t)
}

// make every toast to hide after 3000 mili seconds - customizable
const clearToast = (t) => {
  let timeout = setTimeout(() => {
    toast.dismiss(t)
    clearTimeout(timeout)
  }, 3000)
}
