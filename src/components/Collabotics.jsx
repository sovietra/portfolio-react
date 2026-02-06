const Collabotics = () => {
  const handleClick = () => {
    // For now, just scroll or alert
    // Later we can add routing
    alert('Collabotics documents coming soon!')
  }

  return (
    <section className="collabotics" id="collabotics">
      <div className="collabotics-container">
        <div className="collabotics-image">
          <img src="/images/collabotics.png" alt="Collabotics Logo" />
        </div>
        <div className="collabotics-content">
          <div className="collabotics-header">
            <h2 className="collabotics-title">Collabotics</h2>
            <button onClick={handleClick} className="collabotics-btn">
              <span>📄</span>
              <span>View Documents</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collabotics