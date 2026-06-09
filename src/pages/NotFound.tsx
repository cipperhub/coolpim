import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => { setTimeout(() => navigate("/"), 3000); }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600">Página não encontrada. Redirecionando...</p>
    </div>
  );
};

export default NotFound;