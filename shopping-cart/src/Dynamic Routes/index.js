import { lazy } from 'react'

export const DynamicAbout = lazy(() => 
    import('../components/Pages/About.jsx')
)

export const DynamicHome = lazy(() => 
    import('../components/Pages/Home.jsx')
)

export const DynamicContact = lazy(() => 
    import('../components/Pages/Contact.jsx')
)