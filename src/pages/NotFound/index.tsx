import { useEffect } from 'react';

// Componente 404
const NotFound = () => {
  const lastPage = localStorage.getItem('lastPage') || '/';

  useEffect(() => {
    window.location.href = lastPage;
  }, [lastPage]);

  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <p>Redirecionando para a última página visitada...</p>
    </div>
  );
};

export default NotFound;
