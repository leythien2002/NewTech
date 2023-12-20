import { DataGrid} from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom';

// const rows = [
//     { id: 1, username: 'Snow', role: 'Jon'},
// ];

// const rows = data.map((job) => ({
//     id: job._id,
//     title: job.title,
//     salary: job.salary,
//     address: `${job.postedBy.location.city}, ${job.postedBy.location.district}` || 'Unknown',
//     state: job.isAccepted,
//     action: 'Xoá',
// }));
const DataTable = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'User Name', width: 130 },
    { field: 'role', headerName: 'Role', width: 130 },
    {
        field: 'action',
        headerName: 'Action',
        type: 'number',
        width: 90,
        renderCell: (params) => {
          console.log(params)
          return (
            <Space size="small">
              <Button
                type="text"
                title="Update"
                onClick={() => navigate(`/user/update/${params.id}`)}
                icon={<EditOutlined />}
              />
            <Button
              type="text"
              title="Delete"
              icon={<DeleteOutlined />}
            />
          </Space>
        )}
    },
    
];

  const loadDataTable = () => {
    const access_token = 'Beare '+localStorage.getItem('access_token')
    axios.get('http://localhost:3001/admin/getAll', { headers: { token: access_token }  })
    .then((res) => {
      const mappedRows = res.data.data.map((user) => ({
      id: user._id,
      username: user.username,
      role: user.role,
      action: 'Xoá'
    }));
      setRows(mappedRows)
    }).catch((error) => console.log((error)))
  }

  console.log('data rows', rows)
  
    useEffect(() => {
      loadDataTable()
    }, [])

    return (
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    );
}

export default DataTable;
