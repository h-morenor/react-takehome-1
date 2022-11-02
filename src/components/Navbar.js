import React from 'react'

export default function Navbar() {
  return (
  <div className="navbar p-1 bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">DEMO Streaming</a>
      </div>
      <div className="flex-none gap-2">
        
          <div className="grid grid-flow-col gap-4">
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Series</a>
              <a className="link link-hover">Movies</a>
            </div>
        
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
      </div>
  </div>
  )
}
