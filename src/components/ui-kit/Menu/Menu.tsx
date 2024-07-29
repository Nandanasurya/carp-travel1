import { Modal } from '@/components/base/Modal';
import { BtnMenu } from '../BtnMenu';
import { Navigation } from '../Navigation';

interface IMenuProps {
  onClose: () => void;
  showMenu: boolean;
}

const Menu = ({ onClose, showMenu }: IMenuProps) => {
  return (
    <Modal onClose={onClose} showMenu={showMenu}>
      <BtnMenu text="close" onClick={onClose} className="flex ml-auto" />
      <Navigation onClick={onClose} />
    </Modal>
  );
};

export default Menu;
