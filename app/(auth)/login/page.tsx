import LoginForm from '@/components/auth/LoginForm';
import getCurrentUser from '@/lib/actions/get-current-user';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function LoginPage() {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    return redirect('/dashboard');
  }

  return <LoginForm />;
}
