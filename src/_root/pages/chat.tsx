
type chat ={
  chat:string;
}
const chat = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-4xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-4">
          The page you are looking for does not exist or has been removed.
        </p>
      </div>
    </div>
  );
}

export default chat