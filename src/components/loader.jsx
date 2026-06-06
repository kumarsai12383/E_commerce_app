function Loading() {
  return (
    <>
       <div className="grid grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse"
        >
          <div className="h-64 bg-gray-300 rounded"></div>
          <div className="h-6 bg-gray-300 rounded mt-4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2"></div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Loading;
