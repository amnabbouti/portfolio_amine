import Header from '@/components/Header';

interface MainPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function MainPage({ darkMode, toggleDarkMode }: MainPageProps) {
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default MainPage;
