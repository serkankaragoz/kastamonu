import React from 'react'
import { useSearchParams } from 'react-router-dom';


export default function DynamicPage() {
    debugger

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id'); // Get the 'id' from the URL
  

  return (
    <div>
    <h1>Product Page</h1>
    {id ? (
      <p>Product ID: {id}</p>
    ) : (
      <p>No Product ID provided.</p>
    )}
  </div>
  )
}
