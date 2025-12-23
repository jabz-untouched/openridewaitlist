import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, city, role, commuteRoute } = body;

    console.log('Received data:', { fullName, email, city, role, commuteRoute });

    // Validate required fields
    if (!fullName || !email || !city) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          full_name: fullName,
          email,
          city,
          role: role || 'rider',
          commute_route: commuteRoute || '',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    console.log('Supabase response:', { data, error });

    if (error) {
      console.error('Supabase error details:', error);
      return NextResponse.json(
        { error: `Failed to join waitlist: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Successfully joined the waitlist!',
        data: data[0]
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch waitlist' },
        { status: 500 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
