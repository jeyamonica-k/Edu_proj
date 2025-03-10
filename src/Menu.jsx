import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 bg-blue-500 text-white rounded"
      >
        Menu
      </button>

      {/* New Menu Options */}
      {isOpen && (
        <div className="absolute top-0 right-full h-screen bg-gray-200 w-64 shadow-lg">
          <ul className="p-4">
            <li className="py-2 border-b">Option 1</li>
            <li className="py-2 border-b">Option 2</li>
            <li className="py-2">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;