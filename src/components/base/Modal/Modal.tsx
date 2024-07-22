import { useEffect } from 'react';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
  showMenu: boolean;
}

const Modal: React.FC<IModalProps> = ({ children, onClose, showMenu }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = showMenu ? 'hidden' : 'auto';
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [showMenu, onClose]);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-10 bg-backdrop">
      <div className="flex flex-col w-full h-full bg-modalBg backdrop-blur-xl px-5 py-[43px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
