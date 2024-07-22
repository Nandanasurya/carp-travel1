import Modal from '@/components/base/Modal/Modal';
import BtnMenu from '../BtnMenu/BtnMenu';
import Navigation from '../Navigation/Navigation';

interface IMenuProps {
  onClose: () => void;
  showMenu: boolean;
}

const Menu: React.FC<IMenuProps> = ({ onClose, showMenu }) => {
  return (
    <Modal onClose={onClose} showMenu={showMenu}>
      <BtnMenu text="close" onClick={onClose} className="flex ml-auto" />
      <Navigation onClick={onClose} />
    </Modal>
  );
};

export default Menu;
