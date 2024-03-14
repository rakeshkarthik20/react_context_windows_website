import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'EN',
  changeLanguage: () => {},
  /* activeLanguage is a key initiated with value 'EN' that is string ,
  and changeLanguage is also a key initiated with a function  */
})

export default LanguageContext
