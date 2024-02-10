import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

function Home() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value]

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Experience</h2>
          <div className="inline-block h-1 w-24 bg-blue-500"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`py-2 px-4 text-left w-full ${index === value ? 'text-blue-500 font-bold' : 'text-gray-600'} hover:text-blue-500 transition duration-300`}
                >
                  {item.company}
                </button>
              )
            })}
          </div>
          <article className="md:w-2/3 md:ml-10">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <h4 className="text-md text-blue-500">{company}</h4>
            <p className="text-gray-600 my-2">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="flex items-start mb-4">
                  <FaAngleDoubleRight className="text-blue-500 mt-1 mr-2"></FaAngleDoubleRight>
                  <p className="text-gray-700">{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
        <button type="button" onClick={() => {alert("Connect your wallet!")}}  className="mt-4 py-2 px-6 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
          More info
        </button>
      </div>
    </section>
  )
}

export default Home
