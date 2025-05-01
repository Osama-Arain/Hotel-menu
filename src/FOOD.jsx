function Food({ name, price, pic }) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'justify-center',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        width: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <img
          src={pic}
          alt={name}
          style={{ width: '100px', height: '100px', borderRadius: '8px', objectFit: 'cover', marginRight: '10px' }}
        />
        <div>
          <h4 style={{ margin: '0 0 5px 0' }}>{name}</h4>
          <p style={{ margin: 0, fontWeight: 'bold' }}>Rs {price}</p>
        </div>
      </div>
    );
  }
  
  export default Food;
  