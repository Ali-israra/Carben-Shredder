import React from 'react'
import PageHeader from "../assets/images/page-header.jpg";

export default function Calculator() {
  return (
    <>
         <section
        className="h-[50vh] "
        style={{ backgroundImage: `url(${PageHeader})` }}
      >
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="capitalize text-5xl my-auto text-white">Calculator</h1>
          </div>
        </div>
      </section>
    </>
  )
}
