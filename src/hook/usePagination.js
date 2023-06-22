/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';

function usePagination(data, itemsPerPage) {
  // Inicia o estado "currentPage" com o valor inicial 1
  const [currentPage, setCurrentPage] = useState(1);
  // Inicia o estado "totalPages" com o valor inicial 1
  const [totalPages, setTotalPages] = useState(1);
  // Inicia o estado "currentData" com um array vazio
  const [currentData, setCurrentData] = useState([]);

  // Executa um efeito sempre que as dependências (data, itemsPerPage, currentPage) mudarem
  useEffect(() => {
    // Verifica se a propriedade "data" foi fornecida
    if (data) {
      // Calcula o número total de páginas com base no número de itens por página
      const totalPages = Math.ceil(data.length / itemsPerPage);
      // Atualiza o estado "totalPages" com o número total de páginas calculado
      setTotalPages(totalPages);
      // Calcula a fatia de dados que deve ser exibida na página atual
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = currentPage * itemsPerPage;
      // Atualiza o estado "currentData" com os dados da página atual
      setCurrentData(data.slice(startIndex, endIndex));
    }
  }, [data, itemsPerPage, currentPage]);

  // Função para ir para uma página específica
  function goToPage(page) {
    setCurrentPage(page);
  }

  // Função para ir para a próxima página
  function goToNextPage() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  }

  // Função para ir para a página anterior
  function goToPreviousPage() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  return {
    currentPage,
    totalPages,
    currentData,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  };
}

export default usePagination;
