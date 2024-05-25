import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState('#fff');

  const handleClick = (e) => {
    if (e.target.className === 'container') {
      setShowInput(false);
      setBgColor('#fff');
    } else {
      setBgColor('#1a1a1a');
    }
  };
  return (
    <>
      <section
        className="container"
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
      >
        {showInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} />
        )}
      </section>
    </>
  );
};

export default HiddenSearchBar;
