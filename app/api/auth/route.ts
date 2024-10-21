// app/api/auth/route.ts (if using App Router)
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/app/libs/prismaClientManual';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: Request) {
  const res = new Response();

  const { action, name, email, userName, password } = await req.json();

  console.log("Received action:", action);

  // Registration
  if (action === 'register') {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          userName,
          password: hashedPassword,
        },
      });
      return new Response(JSON.stringify({ message: 'User created', user }), { status: 201 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Failed to create user' }), { status: 500 });
    }

  // Login
  }else if (action === 'login') {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
      // Return an error if the user does not exist
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }
  
    // Compare the password with the hashed password stored in the database
    const isValid = await bcrypt.compare(password, user.password);
  
    if (!isValid) {
      // Return an error if the password is invalid
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }
  
    // Generate a JWT token if authentication is successful
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });
  
    // Return the success message and the token
    return new Response(JSON.stringify({ message: 'Login successful', token }), { status: 200 });
  
  }  else {
    return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });
  }
}
