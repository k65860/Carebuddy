// 날짜 formatting 함수
interface DateProps {
  rowDate: string;
}

const formatDate = ({ rowDate }: DateProps): string => {
  const date = new Date(rowDate);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export default formatDate;
