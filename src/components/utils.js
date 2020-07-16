export const getPosX = (event) => {
      return event.pageX || event.clientX
    
  }
  
  const addHeadingZero = (num) => {
    return num > 9 ? num.toString() : `0${num}`
  }
  
  export const getDisplayTimeBySeconds = (seconds) => {
    if (!isFinite(seconds)) {
      return '00:00'
    }
  
    const min = addHeadingZero(Math.floor(seconds / 60))
    const sec = addHeadingZero(Math.floor(seconds % 60))
    return `${min}:${sec}`
  }
  
  export function throttle(func, limit) {
    let inThrottle = false
    return (arg) => {
      if (!inThrottle) {
        func(arg)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }