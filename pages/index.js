import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { sort, initialData } from '~/utils'

export default function Home() {
  const [sortBy, setSortBy] = useState('title')
  const [data, setData] = useState(initialData)

  const onSortChange = (event) => setSortBy(event.target.value)

  useEffect(() => {
    setData(sort(data, sortBy))
  }, [sortBy])

  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-screen">
        <div className="shadow-xl p-2 bg-secondary w-full">

          {/* Card */}
          <div className="flex items-center justify-center my-5">
            <p className="mb-0 mr-3">Sort by:</p>
            <input
              type="radio"
              id="title"
              value="title"
              checked={sortBy === 'title'}
              onChange={onSortChange}
            />
            <label htmlFor="title" className="mx-2">
              Title
            </label>
            <input
              type="radio"
              id="description"
              value="description"
              checked={sortBy === 'description'}
              onChange={onSortChange}
            />
            <label htmlFor="description" className="mx-2">
              Description
            </label>
          </div>

          {data.map((item) => (
            <motion.div
              layout
              className="text-center mb-2 bg-primary py-2 rounded-md shadow-sm"
              key={item.title}
            >
              <p className="mb-0">{item.title}</p>
              <p className="mb-0">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
