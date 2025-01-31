import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className='bg-[#141414] text-white'
      >
        {children}
      </body>
    </html>
  );
}
