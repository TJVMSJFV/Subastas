import { registerUserDto } from '@/components/user/user.dto';
import { userService } from '@/components/user/user.service';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body: registerUserDto = await req.json();

    const user = await userService.registerUser(body);

    return NextResponse.json(user);
    
  } catch (err) {
    return NextResponse.error();
  }
}
