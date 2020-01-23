import React, { useState } from 'react';

export function Minutes() {
  const [minutes, setMinutes] = useState(5);

  const handleAdd = () => {
    setMinutes(minutes + 1);
  };

  const handleSubtract = () => {
    setMinutes(minutes - 1);
  };

  return (
    <div>
      <div className="Minutes">
        <div>
          <button
            onClick={handleSubtract}
            type="button"
            className="icon_button Minutes_button"
          >
            -
          </button>
        </div>
        <div className="Minutes_label" htmlFor="minutes">
          {minutes} Minutes
        </div>
        <div>
          <button
            onClick={handleAdd}
            type="button"
            className="icon_button Minutes_button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
