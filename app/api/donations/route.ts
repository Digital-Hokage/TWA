import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { amount, type } = await request.json()
    
    // Simulate API call to backend
    const response = await fetch('http://localhost:5000/api/donations/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    })
    
    if (!response.ok) {
      throw new Error('Backend API error')
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create donation order' },
      { status: 500 }
    )
  }
}