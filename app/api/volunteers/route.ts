import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const volunteerData = await request.json()
    
    // Simulate API call to backend
    const response = await fetch('http://localhost:5000/api/volunteers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(volunteerData)
    })
    
    if (!response.ok) {
      throw new Error('Backend API error')
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit volunteer application' },
      { status: 500 }
    )
  }
}