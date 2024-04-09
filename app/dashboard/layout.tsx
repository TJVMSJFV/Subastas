import Layout from '@/components/dashboard/DashboardLayout';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout
      user={{
        name: 'John Doe',
        email: 'johndoe@gmail.com',
      }}
    >
      {children}
    </Layout>
  );
}
