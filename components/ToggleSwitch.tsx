import React from 'react';

interface ToggleSwitchProps {
  isEngineering: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isEngineering, onToggle }) => {
  return (
    <div className="flex items-center gap-3 font-semibold text-sm">
      <span style={{ color: !isEngineering ? 'white' : '#666' }}>IT Solutions</span>
      
      <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
        <input 
          type="checkbox" 
          checked={isEngineering} 
          onChange={onToggle} 
          style={{ opacity: 0, width: 0, height: 0 }}
        />
        <span style={{
          position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: isEngineering ? '#1a237e' : '#ccc', transition: '.4s', borderRadius: '24px'
        }}>
          <span style={{
            position: 'absolute', height: '18px', width: '18px', left: '3px', bottom: '3px',
            backgroundColor: 'white', transition: '.4s', borderRadius: '50%',
            transform: isEngineering ? 'translateX(26px)' : 'translateX(0)'
          }}></span>
        </span>
      </label>

      <span style={{ color: isEngineering ? 'white' : '#666' }}>Engineering</span>
    </div>
  );
};

export default ToggleSwitch;