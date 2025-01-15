export function formatarDinheiro(valor) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0, 
    }).format(valor); 
  }
  