import React from 'react'
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'Bootstrap', count: 25 },
  { value: 'Sass', count: 30 },
  { value: 'JavaScript', count: 33 },
  { value: 'React', count: 35 },
  { value: 'Nodejs', count: 28 },
  { value: 'WordPress', count: 27 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 27 },
  { value: 'TypeScript', count: 25 },
  { value: 'NPM', count: 29 },
  { value: 'REST', count: 28 },
  { value: 'SVG animations', count: 27 },
]

const customRenderer = (tag, size, color) => (
  <span
    className="tag-span"
    key={tag.value}
    style={{
      animation: 'blinker 5s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      margin: '5px',
      padding: '5px',
      display: 'inline-block',
      color: "white",
    }}
  >
    {tag.value}
  </span>
)

export default () => (
  <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
)