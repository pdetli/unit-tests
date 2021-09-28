export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject



  if (type === 'string') {
    if  (stringArrayOrObject === '' )
    return true
  } 
  else { 
    return false
  }

  if (type === 'object') {
    if  (stringArrayOrObject === {} ) // length = 0 
    return true
  } else { 
    return false
  }

  if (type === 'array') {
    if  (stringArrayOrObject === [] ) // [] or [0] undefined? 
    return true
  } else { 
    return false
  }


}
// || type === 'array' || type === 'object'

// || sao === [] || sao === {}