import Image from 'next/image'
import react from 'react'

function Square({ value }) {
  return <button className="square self-center p-2 m-2 h-32 w-64 border-2 rounded-xl justify-items-stretch">{value}</button>;
}

export default function Home() {
  return (
    <fragments>
      <grid className="grid h-full w-full">
        <div className="p-1 flex justify-around">
          <Square/>
          <Square/>
        </div>
        <div className="p-1 flex justify-around">
          <Square/>
          <Square/>
        </div>
        <div className="p-1 flex justify-around">
          <Square/>
          <Square/>
        </div>
        <div className="p-1 flex justify-around">
          <Square/>
          <Square/>
        </div>
        <div className="p-1 flex justify-around">
          <Square/>
          <Square/>
        </div>
      </grid>
    </fragments>
  )
}

