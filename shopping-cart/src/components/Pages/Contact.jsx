import React from 'react'
import Header from '../Sections/Header'
import BreadCrumb from '../Sections/BreadCrumb'
import Map from '../Sections/Map'
import Collection from '../Sections/Collection'
import Footer from '../Sections/Footer'
import Form from '../Sections/Form'
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../Sections/ErrorFallback";

const Contact = () => {

  return (

    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => null}>
        <Header />
      </ErrorBoundary>
      <BreadCrumb text={'Contact Us'}/>
      <Map />
      <Form />
      <Collection />
      <Footer />
    </div>
  )
}

export default Contact