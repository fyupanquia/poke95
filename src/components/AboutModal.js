import React, { useContext } from 'react';
import { Window, WindowContent, WindowHeader, Button, Anchor } from 'react95';
import { StoreContext } from '../store';

const AboutModal = () => {
  const [state, dispatch] = useContext(StoreContext);

  const handleClose = () => {
    dispatch({ type: 'SET_ABOUT_MODAL', payload: false });
    dispatch({ type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: true });
  };

  const handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
  };

  return (
    <Window
      onClick={handleClick}
      style={{
        width: 300,
        maxWidth: '94%',
        maxHeight: '100%',
        zIndex: state.activeModal === 'about' ? 2 : 1,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: state.aboutModal ? 'block' : 'none',
      }}
    >
      <WindowHeader className="flex items-center justify-between">
        <span>About.exe</span>
        <Button
          style={{ marginRight: '-6px', marginTop: '1px' }}
          size={'sm'}
          square
          onClick={handleClose}
        >
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
            x
          </span>
        </Button>
      </WindowHeader>
      <WindowContent>
        {'Built with '}{' '}
        <Anchor href="https://reactjs.org/" target="_blank">
          React
        </Anchor>
        {', '}
        <Anchor href="https://github.com/arturbien/React95" target="_blank">
          React95
        </Anchor>
        {`, and `}{' '}
        <Anchor href="https://pokeapi.co/" target="_blank">
          PokeAPI
        </Anchor>
        .
      </WindowContent>
    </Window>
  );
};

export default AboutModal;