import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context';

const WithEditMode = (WrappedComponent, handleSave) => {
  const EnhancedComponent = (props) => {
    const [isEditMode, setIsEditMode] = useState(false);

     const { state } = useContext(AppContext);
     const { postId } = useParams();

     
  
    const handleEdit = () => {
      setIsEditMode(true);
    };


    const handleSave = props.handleSave;

    return (
      <div>
        <WrappedComponent {...props} isEditMode={isEditMode} />

        {isEditMode ? (
          <button onClick={handleSave}>Guardar</button>
        ) : (
          <button onClick={handleEdit}>Editar</button>
        )}
        
      </div>
    );
  };

  return EnhancedComponent;
};

export default WithEditMode;
