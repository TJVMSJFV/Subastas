import Dashboard from '@/components/Dashboard';
import getCurrentUser from '@/lib/actions/get-current-user';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function DashboardPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect('/login');
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
}
