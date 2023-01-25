import React from 'react'

const Main = () => {
  return (
    <div className="mainContentContainer">
        <p>
          "Say goodbye to the hassle of assigning chores. With Chorebot, you can
          easily assign tasks to custom groups and keep your household running
          smoothly. Try it now and experience the convenience of having a
          virtual chore assistant."
        </p>
        <div style={{
            width: '80vw',
            height: '300px',
            backgroundColor: 'black',
            borderRadius: '30px',
            zIndex: '3',
            marginTop: '3rem',
        }}></div>
        <div className="colorBackDrop"></div>
    </div>
  );
}

export default Main