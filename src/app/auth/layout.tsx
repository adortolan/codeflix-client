const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ backgroundImage: 'url(/background.jpg)' }}
      className='flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat text-white'
    >
      {children}
    </div>
  );
};

export default Layout;
