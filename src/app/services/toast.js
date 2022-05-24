import toast from 'react-hot-toast'

export const success = (text) => {
  toast.dismiss()
  let t = toast.success(text)
  clearToast(t)
}

export const error = (text) => {
  toast.dismiss()
  let t = toast.error(text)
  clearToast(t)
}

const clearToast = (t) => {
  let timeout = setTimeout(() => {
    toast.dismiss(t)
    clearTimeout(timeout)
  }, 3000)
}
