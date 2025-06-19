export default function TestDropdown() {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ff0000',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      zIndex: 99999,
      minWidth: '200px',
      textAlign: 'center',
      border: '3px solid white'
    }}>
      <h3 className="text-lg font-bold mb-2">정렬 방식</h3>
      <div className="flex flex-col gap-2">
        <button className="px-4 py-2 hover:bg-gray-100 rounded">거리순</button>
        <button className="px-4 py-2 hover:bg-gray-100 rounded">리뷰순</button>
        <button className="px-4 py-2 hover:bg-gray-100 rounded">가격순</button>
      </div>
    </div>
  );
} 