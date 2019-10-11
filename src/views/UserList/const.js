export const tableConfig = {
  columns: [
    { name: 'index', title: 'STT' },
    { name: 'name', title: 'Tên' },
    { name: 'gender', title: 'Giới tính' },
    { name: 'city', title: 'Thành Phố' },
    { name: 'car', title: 'Loại xe' },
    { name: 'action', title: 'Chức năng' }
  ],
  PAGE_SIZES: [5, 10, 15],
  tableColumnExtensions: [{ columnName: 'action', align: 'center', width: 160 }]
};

export const GET_LIST_USER = 'GET_LIST_USER';
export const GET_LIST_USER_SUCCESS = 'GET_LIST_USER_SUCCESS';
