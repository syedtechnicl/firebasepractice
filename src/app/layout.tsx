"use client";
import { Provider } from "react-redux";
import Header from "./Components/Header";
import { store } from "./reduxx/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Provider store={store}>
            <Header />
            {children}
          </Provider>
        </>
      </body>
    </html>
  );
}
