import React, { useState } from "react";
import '../../assets/toggle.css';
const Toggle = ({ toggled , onClick }) => {
    const [isToggled , toggle] = useState(toggled);

    const callback = () => {
      toggle(!isToggled);
      onClick(!isToggled)
    }
    
    return (
        <div>
            <label className="toggle-label"> 
                 <input className="toggle-input" type="checkbox" defaultChecked={isToggled} onClick={callback} name="" id="" />
                 <span className="toggle-span" />
            </label>
        </div>
    );
}

export default Toggle;
