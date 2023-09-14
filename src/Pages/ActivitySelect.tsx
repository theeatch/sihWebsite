import React from 'react'
import Card from '../components/Card'

const ActivitySelect : React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Card /></div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Card /></div>
</div>
  )
}

export default ActivitySelect