import { useLayoutEffect, useState } from "react";

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}

function Modal({ onClose }) {
  useBodyScrollLock();

  return (
    <div
      style={{
        zIndex: 100,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ padding: 20, background: "#fff", borderRadius: 8 }}>
        <h2>Modal Content</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ height: "200vh", textAlign: "center", paddingTop: 100 }}>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
}