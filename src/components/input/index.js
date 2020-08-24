import { Icon } from '../'

function Card(props) {
  return (
    <div className="relative">
      <input type="text" className="w-full h-12 p-4 pr-16 rounded-lg outline-none bg-background" {...props} />
      <button className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 rounded-lg outline-none bg-primary">
        <Icon name="arrow-right" color="#1A202D" />
      </button>
    </div>
  )
}

export default Card
