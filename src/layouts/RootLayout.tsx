import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
