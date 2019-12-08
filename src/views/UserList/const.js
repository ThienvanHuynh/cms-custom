export const tableConfig = {
  columns: [
    { name: 'index', title: 'STT' },
    { name: 'name_id', title: 'Mã cám' },
    { name: 'type_food', title: 'Loại thức ăn' },
    { name: 'total', title: 'Số lượng' },
    { name: 'date_add', title: 'Ngày nhập hàng' },
    { name: 'price', title: 'Đơn giá' },
    { name: 'price_total', title: 'Tổng tiền' },
    { name: 'action', title: 'Chức năng' }
  ],
  PAGE_SIZES: [5, 10, 15],
  tableColumnExtensions: [{ columnName: 'action', align: 'center', width: 160 }]
};

export const GET_LIST_USER = 'GET_LIST_USER';
export const GET_LIST_USER_SUCCESS = 'GET_LIST_USER_SUCCESS';
